import {Fragment, useEffect} from 'react'
import Image from "next/image";
import { Inter } from "next/font/google";
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function AP1MainComponent() {

  useEffect(() => {
    register();
  });

  return (
    <Fragment>
        <h1 className="text-5xl h-16 text-blue-500">Atelier de profesionnalisation 1</h1>
        <div className="flex w-full h-5/6 justify-around items-center ">
            <div className="w-6/12 flex justify-center rounded-3xl">
              <swiper-container loop="true" pagination="true" navigation="true" autoplay-delay="5000" mousewheel="true" autoplay="true" keyboard="true">
                <swiper-slide><div className="h-full"><img className="object-cover h-full" src="AP1/1.png" alt="capture1"/></div></swiper-slide>
                <swiper-slide><div className="h-full"><img className="object-cover h-full" src="AP1/2.png" alt="capture2"/></div></swiper-slide>
                <swiper-slide><div className="h-full"><img className="object-cover h-full" src="AP1/3.png" alt="capture3"/></div></swiper-slide>
                <swiper-slide><div className="h-full"><img className="object-cover h-full" src="AP1/4.png" alt="capture4"/></div></swiper-slide>
                <swiper-slide><div className="h-full"><img className="object-cover h-full" src="AP1/5.png" alt="capture5"/></div></swiper-slide>
                <swiper-slide><div className="h-full"><img className="object-cover h-full" src="AP1/6.png" alt="capture6"/></div></swiper-slide>
              </swiper-container>
            </div>
            <div className="w-4/12 flex flex-col border-4 border-blue-500 p-4 rounded-xl">
                <h2 className="text-xl font-bold text-center mb-2">Compétences acquises</h2>
                <div className="flex justify-between">
                    <div className="mr-2">
                        <p className="align-justify text-center">Développer la présence en ligne de l'organisation</p>
                    </div>
                    <div className="ml-2">
                        <p className="align-justify text-center">Organiser son développement professionnel</p>
                    </div>
                </div>
            </div>
        </div>
        <p className="absolute left-1/10 top-1/10 -translate-x-1/2 translate-y-full font-bold">Septembre-Novembre 2022</p>
        <div className="absolute top-1/10 left-1/10 -translate-y-1/2 -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
        <div className="absolute top-9/10 left-1/2 -translate-y-full -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
        <svg className="absolute top-0 left-0 w-full h-full">
            <line x1="0" y1="10%" x2="10%" y2="10%" className="stroke-blue-500 stroke-8" />
            <line x1="50%" y1="90%" x2="50%" y2="100%" className="stroke-blue-500 stroke-8" />
        </svg>
    </Fragment>
  );
}
