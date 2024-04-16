import React from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";

import CSharpIcon from "../../public/csharp.svg";
import NETIcon from "../../public/NET.png";
import XamlIcon from "../../public/xaml.png";
import XamarinIcon from "../../public/xamarin.svg";
import MauiIcon from "../../public/maui.png"

export default function AP4Component() {
  return (
    <React.Fragment>
        <h1 className="text-5xl h-16 text-blue-500">Atelier de profesionnalisation 4</h1>
        <div className="w-3/12 flex flex-col border-4 border-blue-500 p-4 rounded-xl">
            <h2 className="text-xl font-bold text-center">Technologies utilisées</h2>
            <div className="flex justify-between mt-4">
                <Image className="h-12 w-12" src={CSharpIcon} alt="CSharpIcon"/>
                <Image className="h-12 w-12" src={NETIcon} alt="NETIcon"/>
                <Image className="h-12 w-12" src={XamlIcon} alt="XamlIcon"/>
                <Image className="h-12 w-12" src={XamarinIcon} alt="XamarinIcon"/>
                <Image className="h-12 w-12" src={MauiIcon} alt="MauiIcon"/>
            </div>
        </div>

        <a href="https://github.com/PierreThio/smart-delivery" target="blank" className="z-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24">
                <path className="fill-blue-500" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
        </a>

        <p className="absolute left-1/2 top-1/10 -translate-x-1/2 translate-y-full font-bold">Mars-Avril 2024</p>
        <div className="absolute top-1/10 -translate-y-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
        <svg className="absolute top-0 left-0 w-full h-full">
            <line x1="50%" y1="0" x2="50%" y2="10%" className="stroke-blue-500 stroke-8" />
            <line x1="50%" y1="10%" x2="100%" y2="10%" className="stroke-blue-500 stroke-8" />
        </svg>
    </React.Fragment>
  );
}
