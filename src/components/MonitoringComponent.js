import React from 'react'
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';

import InstagramIcon from "../../public/instagram.svg";
import YoutubeIcon from "../../public/youtube.svg";
import XIcon from "../../public/x.svg";

export default function MonitoringComponent() {

  return (
    <React.Fragment>
        <div className="relative h-full w-full flex items-center">
            <div className="text-center absolute left-1/4 -translate-x-1/2">
                <h1 className="text-3xl text-blue-500">Réseau sociaux</h1>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
            <div className="absolute left-3/4 -translate-x-1/2 font-bold z-10">
                <div className="flex items-center my-2">
                    <Image className="h-6 w-6 mx-2" src={InstagramIcon} alt="InstagramIcon"/>
                    <a href="https://www.instagram.com/frontendjoe/" className="mx-2" target="_blank">@frontendjoe</a>
                    <a href="https://www.instagram.com/gowsami.dev/" className="mx-2" target="_blank">@gowsami.dev</a>
                </div>
                <div className="flex items-center my-2">
                    <Image className="h-6 w-6 mx-2" src={YoutubeIcon} alt="YoutubeIcon"/>
                    <a href="https://www.youtube.com/@grafikart" className="mx-2" target="_blank">Grafikart</a>
                    <a href="https://www.youtube.com/@Underscore_/videos" className="mx-2" target="_blank">Underscore_</a>
                    <a href="https://www.youtube.com/@NouvelleTechno/videos" className="mx-2" target="_blank">Nouvelle Techno</a>
                </div>
                <div className="flex items-center my-2">
                    <Image className="h-6 w-6 mx-2" src={XIcon} alt="XIcon"/>
                    <a href="https://www.youtube.com/@grafikart" className="mx-2" target="_blank">@official_php</a>
                </div>
            </div>
        </div>

        <div className="relative h-full w-full flex items-center">
            <div className="text-center absolute left-1/4 -translate-x-1/2">
                <h1 className="text-3xl text-blue-500">CNIL</h1>
                <h2>Commission nationale de l'informatique et des libertés</h2>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
            <div className="absolute left-3/4 flex flex-col -translate-x-1/2 font-bold z-10">
                <a href="https://www.cnil.fr/fr/actualite" className="my-2" target="_blank">Actualité</a>
            </div>
        </div>

        <div className="relative h-full w-full flex items-center">
            <div className="text-center absolute left-1/4 -translate-x-1/2">
                <h1 className="text-3xl text-blue-500">PHP</h1>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
            <div className="absolute left-3/4 -translate-x-1/2 font-bold z-10">
                <a href="https://www.php.net/" target="_blank">Nouveautés</a>
            </div>
        </div>

        <svg className="absolute bottom-0 w-full h-full">
            <line x1="50%" y1="0" x2="50%" y2="100%" className="stroke-blue-500 stroke-8" />
        </svg>
    </React.Fragment>
  );
}
