import {Fragment, useEffect} from 'react'
import Image from "next/image";
import { Inter } from "next/font/google";
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CssIcon from "../../public/css.svg";
import D3jsIcon from "../../public/d3js.svg";
import ExpressjsIcon from "../../public/expressjs.svg";
import NodeJsIcon from "../../public/nodejs.svg";
import KubeHoundIcon from "../../public/kubehound.png";
import GremlinIcon from "../../public/gremlin.png";
import JavascriptIcon from "../../public/javascript.svg";

export default function Stage2Component() {

  useEffect(() => {
    register();
  });

  return (
    <Fragment>
        <h1 className="text-5xl h-16 text-blue-500">Stage Orange Innovation</h1>
        <div className="flex w-full h-5/6 justify-around items-center ">

            <div className="w-6/12 flex justify-center rounded-3xl">
              <swiper-container>
                <swiper-slide><div className="h-full"><img className="object-cover h-full" src="Stage2/1.png" alt="capture1"/></div></swiper-slide>
              </swiper-container>
            </div>
            
            <div className="flex h-full w-5/12 justify-around lg:justify-between items-center flex-col">

                <div className="w-7/12 flex flex-col border-4 border-blue-500 p-4 rounded-xl h-1/3">
                    <h2 className="text-xl font-bold text-center h-full">Technologies utilisées</h2>
                    <div className="flex justify-between mt-4 h-full">
                        <Image className="h-12 w-16" alt="CssIcon" src={CssIcon}/>
                        <Image className="h-12 w-16" alt="JavascriptIcon" src={JavascriptIcon}/>
                        <Image className="h-12 w-12" alt="D3jsIcon" src={D3jsIcon}/>
                        <Image className="h-12 w-16" alt="ExpressJsIcon" src={ExpressjsIcon}/>
                        <Image className="h-12 w-12" alt="NodeJsIcon" src={NodeJsIcon}/>
                        <Image className="h-12 w-12" alt="KubeHoundIcon" src={KubeHoundIcon}/>
                        <Image className="h-12 w-12" alt="GremlinIcon" src={GremlinIcon}/>
                    </div>
                </div>

                <div className="flex flex-col border-4 border-blue-500 p-4 rounded-xl">
                    <h2 className="text-xl font-bold text-center mb-2">Compétences acquises</h2>
                    <div>
                        <div className="flex justify-between">
                            <div className="p-2 w-1/2">
                                <p className="text-center">Gérer le patrimoine informatique</p>
                            </div>
                            <div className="p-2 w-1/2">
                                <p className="text-center">Répondre aux incidents et aux demandes d'assistance et d'évolution</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="p-2 w-1/2">
                                <p className="text-center">Travailler en mode projet</p>
                            </div>
                            <div className="p-2 w-1/2">
                                <p className="text-center">Mettre à disposition des utilisateurs un service informatique</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="p-2 w-1/2">
                                <p className="text-center">Organiser son développement professionnel</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <p className="absolute left-1/2 top-1/10 -translate-x-1/2 translate-y-full font-bold">Janvier-Février 2024</p>
        <div className="absolute top-1/10 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
        <div className="absolute top-9/10 left-1/2 -translate-y-full -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
        <svg className="absolute top-0 left-0 w-full h-full">
            <line x1="50%" y1="0" x2="50%" y2="10%" className="stroke-blue-500 stroke-8" />
            <line x1="50%" y1="90%" x2="50%" y2="100%" className="stroke-blue-500 stroke-8" />
        </svg>
    </Fragment>
  );
}
