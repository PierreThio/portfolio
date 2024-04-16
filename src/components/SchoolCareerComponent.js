import React from 'react'
import Image from "next/image";
import { Inter } from "next/font/google";

export default function SchoolCareerComponent() {

  return (
    <React.Fragment>
        <div className="relative h-full w-full flex items-center">
            <div className="text-center absolute left-1/4 -translate-x-1/2">
                <h1 className="text-3xl text-blue-500">Baccaloréat STMG</h1>
                <h2>Lycée Saint-Joseph Bossuet</h2>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
            <p className="absolute left-1/2 translate-x-full font-bold">Septembre 2020</p>
        </div>

        <div className="relative h-full w-full flex items-center">
            <div className="text-center absolute left-1/4 -translate-x-1/2">
                <h1 className="text-3xl text-blue-500">Diplome de Comptabilité et de Gestion</h1>
                <h2>Lycée Jules Lesven</h2>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
            <p className="absolute left-1/2 translate-x-full font-bold">Septembre 2021</p>
        </div>

        <div className="relative h-full w-full flex items-center">
            <div className="text-center absolute left-1/4 -translate-x-1/2">
                <h1 className="text-3xl text-blue-500">BTS Service Informatique aux Organisation</h1>
                <h2>Lycée Félix Le Dantec</h2>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
            <p className="absolute left-1/2 translate-x-full font-bold">Septembre 2022</p>
        </div>

        <svg className="absolute bottom-0 w-full h-full">
            <line x1="50%" y1="0" x2="50%" y2="100%" className="stroke-blue-500 stroke-8" />
        </svg>
    </React.Fragment>
  );
}
