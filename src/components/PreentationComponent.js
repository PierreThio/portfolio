import {useEffect, useState, useRef, Fragment} from 'react'
import Image from "next/image";
import { Inter } from "next/font/google";

export default function PresentationComponent() {
  
    const circleRef = useRef(null);
    const [circleMiddleY, setCircleMiddleY] = useState(0);
    const [containerBottom, setContainerBottom] = useState(0);
    
    useEffect(() => {
        function defineLineProperties(){
            var element = document.getElementById('circle'); // Remplacez 'votre-element' par l'ID de votre élément HTML
        
            var parent = element.parentElement;
            var rect = element.getBoundingClientRect();
            var parentRect = parent.getBoundingClientRect();
    
            setCircleMiddleY(rect.top - parentRect.top + rect.height / 2);
            setContainerBottom(parentRect.bottom - parentRect.top); // Hauteur totale du conteneur
        }
    
        if(circleRef.current){
            defineLineProperties();
        }
    
        window.addEventListener("resize", defineLineProperties);
    }, [])

  return (
    <Fragment>
        <div className="text-center flex justify-between flex-col">
            <h1 className="text-5xl font-bold text-blue-500 my-4">Portfolio</h1>
            <h2 className="text-2xl">Pierre Thioliere</h2>
        </div>
        <div className="w-6/12 border-8 text-justify p-4 border-blue-500 rounded-xl">
            <p>Je m'appelle Pierre Thioliere, j'ai 20 ans et je suis en 2ème année du BTS SIO. J'habite à Lannion, en Côtes-d'Armor en Bretagne. Je suis passionné par l'informatique et le développement. J'ai vocation à devenir développeur web car c'est un domaine qui me fascine.</p>
        </div>
        <div ref={circleRef} id="circle" className="rounded-full border-8 border-blue-500 w-16 h-16 bg-neutral-50 z-10"></div>
        <svg className="absolute bottom-0 w-full h-full">
            <line x1="50%" y1={circleMiddleY} x2="50%" y2={containerBottom} className="stroke-blue-500 stroke-8" />
        </svg>
    </Fragment>
  );
}
