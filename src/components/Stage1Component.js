import React from 'react'
import Image from "next/image";
import { Inter } from "next/font/google";

import HtmlIcon from "../../public/html.svg";
import CssIcon from "../../public/css.svg";
import D3jsIcon from "../../public/d3js.svg"
import GitLabIcon from "../../public/gitlab.svg"
import JavascriptIcon from "../../public/javascript.svg"

export default function Stage1Component() {
  return (
    <React.Fragment>
        <h1 className="text-5xl h-16 text-blue-500">Stage Orange Innovation</h1>
        <div className="w-2/12 flex flex-col border-4 border-blue-500 p-4 rounded-xl">
            <h2 className="text-xl font-bold text-center">Technologies utilisées</h2>
            <div className="flex justify-between mt-4">
                <Image className="h-12 w-12" alt="HtmlIcon" src={HtmlIcon}/>
                <Image className="h-12 w-12" alt="CssIcon" src={CssIcon}/>
                <Image className="h-12 w-12" alt="JavascriptIcon" src={JavascriptIcon}/>
                <Image className="h-12 w-12" alt="D3jsIcon" src={D3jsIcon}/>
            </div>
        </div>

        <a href="https://gitlab.com/PierreThioliere/sylvactl-report" target="blank" className="z-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fillRule="evenodd"><path d="M32 61.477L43.784 25.2H20.216z" fill="#3b82f6"/><path d="M32 61.477L20.216 25.2H3.7z" fill="#3b82f6"/><path d="M3.7 25.2L.12 36.23a2.44 2.44 0 0 0 .886 2.728L32 61.477z" fill="#3b82f6"/><path d="M3.7 25.2h16.515L13.118 3.366c-.365-1.124-1.955-1.124-2.32 0z" fill="#3b82f6"/><path d="M32 61.477L43.784 25.2H60.3z" fill="#3b82f6"/><path d="M60.3 25.2l3.58 11.02a2.44 2.44 0 0 1-.886 2.728L32 61.477z" fill="#3b82f6"/><path d="M60.3 25.2H43.784l7.098-21.844c.365-1.124 1.955-1.124 2.32 0z" fill="#3b82f6"/></svg>
        </a>

        <p className="absolute left-1/2 top-1/10 -translate-x-1/2 translate-y-full font-bold">Juin 2023</p>
        <div className="absolute top-1/10 -translate-y-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
        <svg className="absolute top-0 left-0 w-full h-full">
            <line x1="50%" y1="0" x2="50%" y2="10%" className="stroke-blue-500 stroke-8" />
            <line x1="50%" y1="10%" x2="100%" y2="10%" className="stroke-blue-500 stroke-8" />
        </svg>
    </React.Fragment>
  );
}
