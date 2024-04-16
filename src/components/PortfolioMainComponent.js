import {Fragment, useEffect} from 'react'
import Image from "next/image";
import { Inter } from "next/font/google";
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function PortfolioMainComponent() {

  useEffect(() => {
    register();
  });

  return (
    <Fragment>
        <h1 className="text-5xl h-16 text-blue-500">Portfolio</h1>
        <div className="flex w-full h-5/6 justify-around items-center ">
            <div className="w-4/12 flex flex-col border-4 border-blue-500 p-4 rounded-xl">
                <h2 className="text-xl font-bold text-center mb-2">Compétences acquises</h2>
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="p-2 w-1/2">
                      <p className="text-center">Gérer le patrimoine informatique</p>
                    </div>
                    <div className="p-2 w-1/2">
                      <p className="text-center">Travailler en mode projet</p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="p-2 w-1/2">
                      <p className="text-center">Mettre à disposition des utilisateurs un service informatique</p>
                    </div>
                    <div className="p-2 w-1/2">
                      <p className="text-center">Organiser son développement professionnel</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <p className="absolute left-1/10 top-1/10 -translate-x-1/2 translate-y-full font-bold">Avril-Mai 2024</p>
        <div className="absolute top-1/10 left-1/10 -translate-y-1/2 -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
        <div className="absolute top-9/10 left-1/2 -translate-y-full -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
        <svg className="absolute top-0 left-0 w-full h-full">
            <line x1="0" y1="10%" x2="10%" y2="10%" className="stroke-blue-500 stroke-8" />
            <line x1="50%" y1="90%" x2="50%" y2="100%" className="stroke-blue-500 stroke-8" />
        </svg>
    </Fragment>
  );
}
