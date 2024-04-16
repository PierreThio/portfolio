import React from 'react'
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';

export default function CertificationComponent() {

  return (
    <React.Fragment>
        <div className="relative h-full w-full flex items-center">
            <div className="text-center absolute left-1/4 -translate-x-1/2">
                <h1 className="text-3xl text-blue-500">ANSSI</h1>
                <h2>Agence nationale de la sécurité des systèmes d'information</h2>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
            <div className="absolute left-3/4 -translate-x-1/2 font-bold z-10">
                <a href="Certification_Anssi.pdf" target="_blank">Attestation de suivi</a>
            </div>
        </div>

        <div className="relative h-full w-full flex items-center">
            <div className="text-center absolute left-1/4 -translate-x-1/2">
                <h1 className="text-3xl text-blue-500">CNIL</h1>
                <h2>Commission nationale de l'informatique et des libertés</h2>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
            <div className="absolute left-3/4 flex flex-col -translate-x-1/2 font-bold z-10">
                <a href="Certification_Cnil_module1.pdf" className="my-2" target="_blank">Attestation de suivi module 1</a>
                <a href="Certification_Cnil_module2.pdf" className="my-2" target="_blank">Attestation de suivi module 2</a>
                <a href="Certification_Cnil_module3.pdf" className="my-2" target="_blank">Attestation de suivi module 3</a>
            </div>
        </div>

        <div className="relative h-full w-full flex items-center">
            <div className="text-center absolute left-1/4 -translate-x-1/2">
                <h1 className="text-3xl text-blue-500">Pix</h1>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 rounded-full border-8 border-blue-500 w-8 h-8 bg-neutral-50 z-10"></div>
            <div className="absolute left-3/4 -translate-x-1/2 font-bold z-10">
                <a href="Certification_Pix.pdf" target="_blank">Certification</a>
            </div>
        </div>

        <svg className="absolute bottom-0 w-full h-full">
            <line x1="50%" y1="0" x2="50%" y2="100%" className="stroke-blue-500 stroke-8" />
        </svg>
    </React.Fragment>
  );
}
