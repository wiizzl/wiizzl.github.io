import 'katex/dist/katex.min.css'

import { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadString, getMetadata, getDownloadURL } from 'firebase/storage';
import { Prism } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';

export function MarkdownViewer({ folder, fileName }) {
    const firebaseConfig = {
        apiKey: "AIzaSyA-VBtHJsaUbNGuJcsB-19BDJVQ3yQBiyA",
        authDomain: "info-galilee-62e91.firebaseapp.com",
        projectId: "info-galilee-62e91",
        storageBucket: "info-galilee-62e91.appspot.com",
        messagingSenderId: "991174717659",
        appId: "1:991174717659:web:04c984d229bef73b9e9cfe",
        measurementId: "G-HTSKVFFFZN"
    }
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const [fileExists, setFileExists] = useState(false);
    const [fileContent, setFileContent] = useState('');
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click()
    }
    useEffect(() => {
        const checkFileExistence = async () => {
            try {
                const storageRef = ref(storage, folder + '/' + fileName + '.md')
                await getMetadata(storageRef);
                await getDownloadURL(storageRef);
                setFileExists(true);
                if (fileExists) {
                    const url = await getDownloadURL(storageRef);
                    const response = await fetch(url);
                    const content = await response.text();
                    setFileContent(content);
                }
            } catch (error) {
                console.error("Le fichier n'existe pas donc j'affiche le formulaire d'envoi", error)
            }
        }
        checkFileExistence();
    }, [folder, fileName, storage, fileExists])
    const handleFileChange = async (event) => {
        const file = event.target.files[0]
        if (file) {
            if (file.name.toLowerCase().endsWith('.md')) {
                const reader = new FileReader()
                reader.onload = async (e) => {
                    const fileContent = e.target.result;
                    const storageRef = ref(storage, folder + '/' + fileName + '.md')
                    await uploadString(storageRef, fileContent, 'data_url')
                    window.location.reload()
                }
                reader.readAsDataURL(file)
            } else {
                alert("Merci d'uniquement envoyer des fichiers markdown (.md)")
            }
        }
    }
    const handleDownload = async () => {
        const storageRef = ref(storage, folder + '/' + fileName + '.md')
        const url = await getDownloadURL(storageRef)
        window.open(url, '_blank')
    }
    return <>
        <div>
            {fileExists ? (
                <>
                    <div className="title">
                        <h1><u>{fileName}</u></h1>
                        <div className="md-button">
                            <button style={{ marginRight: '0.5rem' }} onClick={handleDownload}>Télécharger</button>
                            <button onClick={handleButtonClick}>Modifier</button>
                            <input style={{ display: "none" }} type="file" accept=".md" ref={fileInputRef} onChange={handleFileChange}/>
                        </div>
                    </div>
                    <div className="md-style">
                        <Markdown 
                            remarkPlugins={[remarkGfm, remarkMath, remarkToc]} 
                            rehypePlugins={[rehypeKatex, rehypeRaw]} 
                            components={{
                                code(props) {
                                    const {children, className, ...rest} = props
                                    const match = /language-(\w+)/.exec(className || '')
                                    return match ? (
                                        <Prism
                                            {...rest}
                                            PreTag="div"
                                            // eslint-disable-next-line react/no-children-prop
                                            children={String(children).replace(/\n$/, '')}
                                            language={match[1]}
                                            style={dracula}
                                        />
                                    ) : (
                                        <code {...rest} className={className}>
                                            {children}
                                        </code>
                                    )
                                }
                            }}
                        >
                            {fileContent}
                        </Markdown>
                    </div>
                </>
            ) : (
                <>
                    <div className="title">
                        <h1><u>{fileName}</u></h1>
                        <div className="md-button">
                            <button onClick={handleButtonClick}>Envoyer votre cours</button>
                            <input style={{ display: "none" }} type="file" accept=".md" ref={fileInputRef} onChange={handleFileChange}/>
                        </div>
                        <p className="desc">Nous vous conseillons fortement d&apos;utiliser un éditeur markdown pour rédiger des cours : <a href="https://www.marktext.cc/" rel="noreferrer" target="_blank"><u>MarkText</u></a></p>
                    </div>
                </>
            )}
        </div>
    </>
}