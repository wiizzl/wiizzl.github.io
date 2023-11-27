import './css/App.css'

import { createBrowserRouter, RouterProvider, Outlet, useRouteError, useLocation} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Accueil, Seconde, Premiere, Terminale, Outils } from './pages';

import { SNT_Sec } from './pages';
import { Internet, Web, Donnees, Photographie, Cartographie, ReseauxSociaux, ObjetsConnectes, Histoire}  from './pages';

import { SI_Prem } from './pages';
import { Electricite, Signaux, Numeration, Can, Communication, Energetique } from './pages';

import { SI_Term } from './pages';
import { Asservissement, Reseaux, Objets, Modulation, GraphesEtats } from './pages';

import { NSI_Term } from './pages';
import { Routage, Processus, Puce, Modularite, Graphes, Arbres, Cryptographie, Diviser } from './pages';

import { Micro } from './pages';
import { Raspberry, Microbit, Esp, Arduino } from './pages';

import { Capteurs } from './pages';
import { Hcsr, Bme, Dht, Paj, Dsb, Ligne } from './pages';

import { Actionneurs } from './pages';
import { Oled, Servomoteur, Relais } from './pages';

import { HtmlCss } from './pages';
import { Structure, Balises, Css } from './pages';

import { Python } from './pages';
import { Conditions, Dico, Fonctions } from './pages';

import { Footer, Navbar } from './tools';

const browserRouter = createBrowserRouter([
    {
        path: '',
        element: <Root/>,
        errorElement: <PageError/>,
        children: [
            {
                path: '',
                element: <Accueil/>,
            },
            {
                path: 'seconde',
                children: [
                    {
                        path: '',
                        element: <Seconde/>
                    },
                    {
                        path: 'snt_sec',
                        children: [
                            {path: '', element: <SNT_Sec/>},
                            {path: 'internet', element: <Internet/>},
                            {path: 'web', element: <Web/>},
                            {path: 'donnees', element: <Donnees/>},
                            {path: 'photographie', element: <Photographie/>},
                            {path: 'cartographie', element: <Cartographie/>},
                            {path: 'reseauxsociaux', element: <ReseauxSociaux/>},
                            {path: 'objetsconnectes', element: <ObjetsConnectes/>},
                            {path: 'histoire', element: <Histoire/>}
                        ],
                    },
                ]
            },
            {
                path: 'premiere',
                children: [
                    {
                        path: '',
                        element: <Premiere/>
                    },
                    {
                        path: 'si_prem',
                        children: [
                            {path: '', element: <SI_Prem/>},
                            {path: 'electricite', element: <Electricite/>},
                            {path: 'signaux', element: <Signaux/>},
                            {path: 'numeration', element: <Numeration/>},
                            {path: 'can', element: <Can/>},
                            {path: 'communication', element: <Communication/>},
                            {path: 'energetique', element: <Energetique/>},
                            {path: 'objets', element: <Objets/>}
                        ],
                    },
                ]
            },
            {
                path: 'terminale',
                children: [
                    {
                        path: '',
                        element: <Terminale/>
                    },
                    {
                        path: 'si_term',
                        children: [
                            {path: '', element: <SI_Term/>},
                            {path: 'asservissement', element: <Asservissement/>},
                            {path: 'reseaux', element: <Reseaux/>},
                            {path: 'modulation', element: <Modulation/>},
                            {path: 'graphesetats', element: <GraphesEtats/>}
                        ],
                    },
                    {
                        path: 'nsi_term',
                        children: [
                            {path: '', element: <NSI_Term/>},
                            {path: 'routage', element: <Routage/>},
                            {path: 'processus', element: <Processus/>},
                            {path: 'puce', element: <Puce/>},
                            {path: 'modularite', element: <Modularite/>},
                            {path: 'graphes', element: <Graphes/>},
                            {path: 'arbres', element: <Arbres/>},
                            {path: 'cryptographie', element: <Cryptographie/>},
                            {path: 'diviser', element: <Diviser/>}
                        ],
                    },
                ]
            },
            {
                path: 'outils',
                children: [
                    {
                        path: '',
                        element: <Outils/>
                    },
                    {
                        path: 'micro',
                        children: [
                            {path: '', element: <Micro/>},
                            {path: 'raspberry', element: <Raspberry/>},
                            {path: 'esp', element: <Esp/>},
                            {path: 'microbit', element: <Microbit/>},
                            {path: 'arduino', element: <Arduino/>}
                        ],
                    },
                    {
                        path: 'capteurs',
                        children: [
                            {path: '', element: <Capteurs/>},
                            {path: 'hcsr', element: <Hcsr/>},
                            {path: 'bme', element: <Bme/>},
                            {path: 'dht', element: <Dht/>},
                            {path: 'paj', element: <Paj/>},
                            {path: 'dsb', element: <Dsb/>},
                            {path: 'ligne', element: <Ligne/>}
                        ],
                    },
                    {
                        path: 'actionneurs',
                        children: [
                            {path: '', element: <Actionneurs/>},
                            {path: 'oled', element: <Oled/>},
                            {path: 'servomoteur', element: <Servomoteur/>},
                            {path: 'relais', element: <Relais/>}
                        ],
                    },
                    {
                        path: 'htmlcss',
                        children: [
                            {path: '', element: <HtmlCss/>},
                            {path: 'structure', element: <Structure/>},
                            {path: 'balises', element: <Balises/>},
                            {path: 'css', element: <Css/>}
                        ],
                    },
                    {
                        path: 'python',
                        children: [
                            {path: '', element: <Python/>},
                            {path: 'conditions', element: <Conditions/>},
                            {path: 'dico', element: <Dico/>},
                            {path: 'fonctions', element: <Fonctions/>}
                        ],
                    },
                ]
            }
        ]
    },
])

function PageError() {
    const error = useRouteError()
    console.log(error)
    return <>
        <main className="background">
            <div className="errorpage">
                <h1 className="">&#x26A0; Une erreur est survenue &#x26A0;</h1>
                <p>Merci de revenir en arrière</p>
            </div>
        </main>
    </>
}

function Root() {
    const location = useLocation();
    return <div className="transitionBackground">
        <Navbar/>
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // exit={{ opacity: 0, transition: { duration: 0.3 } }}
                
                // TODO : la transition marche mais, il faudrait rajouter du délai au changement de page pour que cela puisse rendre bien
                // peut-être https://github.com/imelgrat/react-delay-link
            >
                <Outlet/>
            </motion.div>
        </AnimatePresence>
        <Footer/>
    </div>
}

export default function App() {
    return <>
        <RouterProvider router={browserRouter}></RouterProvider>
    </>
}