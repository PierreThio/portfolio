import React from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";

import GmailIcon from "../../public/gmail.svg";
import LinkedInIcon from "../../public/linkedin.svg";
import GitHubIcon from "../../public/github.svg";
import GitLabIcon from "../../public/gitlab.svg";

export default function ContactComponent() {
  return (
    <React.Fragment>
        <div></div>
        <div className="z-10 border-8 border-blue-500 rounded-xl p-4 w-2/12 text-center">
            <h2 className="font-bold mb-4 text-xl">Contact</h2>
            <div className="flex justify-around">
                <a target="_blank" href="mailto:pthioliere.ledantec@gmail.com">
                    <Image className="h-12 w-12" src={GmailIcon} alt="GmailIcon"/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/pierre-thioliere-01872426b/">
                    <Image className="h-12 w-12" src={LinkedInIcon} alt="LinkedInIcon"/>
                </a>
                <a target="_blank" href="https://github.com/PierreThio">
                    <Image className="h-12 w-12" src={GitHubIcon} alt="GitHubIcon"/>
                </a>
                <a target="_blank" href="https://gitlab.com/PierreThioliere">
                    <Image className="h-12 w-12" src={GitLabIcon} alt="GitLabIcon"/>
                </a>
            </div>
        </div>

        <div className="flex justify-around z-10 w-1/2">
            <a target="_blank" className="w-5/12 text-center text-xl border-8 p-4 rounded-xl border-blue-500 hover:bg-blue-500 hover:text-neutral-50" href="CV Pierre Thioliere.pdf">
                CV
            </a>
            <a target="_blank" className="w-5/12 text-center text-xl border-8 p-4 rounded-xl border-blue-500 hover:bg-blue-500 hover:text-neutral-50" href="Tableau de synthese - Epreuve E4 - BTS SIO 2024.pdf">
                Tableau de synthese
            </a>
        </div>

        <div className="rounded-full border-8 border-blue-500 w-16 h-16 top-1/4 absolute -translate-y-1/2 bg-neutral-50 z-10"></div>
        <svg className="absolute top-0 left-0 w-full h-full">
            <line x1="50%" y1="0" x2="50%" y2="25%" className="stroke-blue-500 stroke-8" />
        </svg>
    </React.Fragment>
  );
}
