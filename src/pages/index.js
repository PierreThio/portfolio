import { useRef, useEffect } from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";

import PresentationComponent from "../components/PreentationComponent";
import SchoolCareerComponent from "../components/SchoolCareerComponent";
import AP1Component from "../components/AP1Component";
import AP1MainComponent from "../components/AP1MainComponent";
import AP2Component from "../components/AP2Component";
import AP2MainComponent from "../components/AP2MainComponent";
import Stage1Component from "../components/Stage1Component";
import Stage1MainComponent from "../components/Stage1MainComponent";
import AP3Component from "../components/AP3Component";
import AP3MainComponent from "../components/AP3MainComponent";
import Stage2Component from "../components/Stage2Component";
import AP4Component from "../components/AP4Component";
import AP4MainComponent from "../components/AP4MainComponent";
import PortfolioComponent from "../components/PortfolioComponent";
import PortfolioMainComponent from '../components/PortfolioMainComponent';
import CertificationComponent from "../components/CertificationComponent";
import MonitoringComponent from "../components/MonitoringComponent";
import ContactComponent from "../components/ContactComponent";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const mainRef = useRef(null);
    const PresentationRef = useRef(null);
    const AP1Ref = useRef(null);
    const AP2Ref = useRef(null);
    const Stage1Ref = useRef(null);
    const AP3Ref = useRef(null);
    const Stage2Ref = useRef(null);
    const AP4Ref = useRef(null);
    const PortfolioRef = useRef(null);
    const CertificationRef = useRef(null);
    const MonitoringRef = useRef(null);
    const ContactRef = useRef(null);

    useEffect(() => {
        // gsap for A-D vertical scroll snap
        const PresentationContext = gsap.timeline({
            scrollTrigger: {
                trigger: ".first",
                start: "top top",
                endTrigger: ".divAP1",
                end: "bottom bottom",
                snap: {
                    snapTo: 1 / 2,
                    duration: { min: 0.25, max: 0.75 },
                    delay: 0.125,
                    ease: "power1.inOut"
                }
            }
        }, mainRef);

        // gsap for D1 - D4 horizontal scroll snap
        const AP1Context = gsap.context(() => {
            const AP1Data = gsap.utils.toArray(".AP1");
            gsap.to(AP1Data, {
                xPercent: -100 * (AP1Data.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: AP1Ref.current,
                    scrub: 1,
                    pin: true,
                    snap: {
                        snapTo: 1 / (AP1Data.length - 1),
                        duration: { min: 0.25, max: 0.75 },
                        delay: 0.125,
                        ease: "power1.inOut"
                    },
                    end: () => `+=${AP1Ref?.current?.offsetWidth}`
                }
            });
        }, mainRef);

        // gsap for AP1 to AP2 snap vertical
        const AP1ToAP2Context = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".divAP2",
                    start: "top bottom+=1",
                    end: "bottom bottom",
                    snap: [0, 1]
                }
            });
        }, mainRef);


        // gsap for AP2 to AP2Main snap horizontal
        const AP2Context = gsap.context(() => {
            const AP2Data = gsap.utils.toArray(".AP2");
            gsap.to(AP2Data, {
                xPercent: -100 * (AP2Data.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: AP2Ref.current,
                    scrub: 1,
                    pin: true,
                    snap: {
                        snapTo: 1 / (AP2Data.length - 1),
                        duration: { min: 0.25, max: 0.75 },
                        delay: 0.125,
                        ease: "power1.inOut"
                    },
                    end: () => `+=${AP2Ref?.current?.offsetWidth}`
                }
            })
        }, mainRef);

        // gsap for AP2 to Stage1 snap vertical
        const AP2ToStage1Context = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".divStage1",
                    start: "top bottom+=1",
                    end: "bottom bottom",
                    snap: [0, 1]
                }
            });
        }, mainRef);

        // gsap for Stage1 to Stage1Main snap horizontal
        const Stage1Context = gsap.context(() => {
            const Stage1Data = gsap.utils.toArray(".Stage1");
            gsap.to(Stage1Data, {
                xPercent: -100 * (Stage1Data.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: Stage1Ref.current,
                    scrub: 1,
                    pin: true,
                    snap: {
                        snapTo: 1 / (Stage1Data.length - 1),
                        duration: { min: 0.25, max: 0.75 },
                        delay: 0.125,
                        ease: "power1.inOut"
                    },
                    end: () => `+=${Stage1Ref?.current?.offsetWidth}`
                }
            })
        }, mainRef);

        // gsap for Stage1 to AP3 snap vertical
        const Stage1ToAP3Context = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".divAP3",
                    start: "top bottom+=1",
                    end: "bottom bottom",
                    snap: [0, 1]
                }
            });
        }, mainRef);

        // gsap for Stage1 to Stage1Main snap horizontal
        const AP3Context = gsap.context(() => {
            const AP3Data = gsap.utils.toArray(".AP3");
            gsap.to(AP3Data, {
                xPercent: -100 * (AP3Data.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: AP3Ref.current,
                    scrub: 1,
                    pin: true,
                    snap: {
                        snapTo: 1 / (AP3Data.length - 1),
                        duration: { min: 0.25, max: 0.75 },
                        delay: 0.125,
                        ease: "power1.inOut"
                    },
                    end: () => `+=${AP3Ref?.current?.offsetWidth}`
                }
            })
        }, mainRef);

        // gsap for AP3 to Stage2 snap vertical
        const AP3ToStage2Context = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".divStage2",
                    start: "top bottom+=1",
                    end: "bottom bottom",
                    snap: [0, 1]
                }
            });
        }, mainRef);

        // gsap for Stage2 to AP4 snap vertical
        const Stage2ToAP3Context = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".divAP4",
                    start: "top bottom+=1",
                    end: "bottom bottom",
                    snap: [0, 1]
                }
            });
        }, mainRef);

        // gsap for AP4 to AP4Main snap horizontal
        const AP4Context = gsap.context(() => {
            const AP4Data = gsap.utils.toArray(".AP4");
            gsap.to(AP4Data, {
                xPercent: -100 * (AP4Data.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: AP4Ref.current,
                    scrub: 1,
                    pin: true,
                    snap: {
                        snapTo: 1 / (AP4Data.length - 1),
                        duration: { min: 0.25, max: 0.75 },
                        delay: 0.125,
                        ease: "power1.inOut"
                    },
                    end: () => `+=${AP4Ref?.current?.offsetWidth}`
                }
            })
        }, mainRef);

        // gsap for AP4Main to Portfolio snap vertical
        const AP4MainToPortfolioContext = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".divPortfolio",
                    start: "top bottom+=1",
                    end: "bottom bottom",
                    snap: [0, 1]
                }
            });
        }, mainRef);

        // gsap for AP4 to AP4Main snap horizontal
        const PortfolioContext = gsap.context(() => {
            const PortfolioData = gsap.utils.toArray(".Portfolio");
            gsap.to(PortfolioData, {
                xPercent: -100 * (PortfolioData.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: PortfolioRef.current,
                    scrub: 1,
                    pin: true,
                    snap: {
                        snapTo: 1 / (PortfolioData.length - 1),
                        duration: { min: 0.25, max: 0.75 },
                        delay: 0.125,
                        ease: "power1.inOut"
                    },
                    end: () => `+=${PortfolioRef?.current?.offsetWidth}`
                }
            })
        }, mainRef);

        // gsap for Portfolio to Certification snap vertical
        const PortfolioToCertificationContext = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".divCertification",
                    start: "top bottom+=1",
                    end: "bottom bottom",
                    snap: [0, 1]
                }
            });
        }, mainRef);
        
        // gsap for Portfolio to Certification snap vertical
        const CertificationToMonitoringContext = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".divMonitoring",
                    start: "top bottom+=1",
                    end: "bottom bottom",
                    snap: [0, 1]
                }
            });
        }, mainRef);

        // gsap for Portfolio to Certification snap vertical
        const MonitoringToContactContext = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".divContact",
                    start: "top bottom+=1",
                    end: "bottom bottom",
                    snap: [0, 1]
                }
            });
        }, mainRef);

        return () => {
            PresentationContext.revert();
            AP1Context.revert();
            AP1ToAP2Context.revert();
            AP2Context.revert();
            AP2ToStage1Context.revert();
            Stage1Context.revert();
            Stage1ToAP3Context.revert();
            AP3Context.revert();
            AP3ToStage2Context.revert();
            Stage2ToAP3Context.revert();
            AP4Context.revert();
            AP4MainToPortfolioContext.revert();
            PortfolioContext.revert();
            PortfolioToCertificationContext.revert();
            CertificationToMonitoringContext.revert();
            MonitoringToContactContext.revert();
        };
    }, []);

  return (
    <main ref={mainRef} className="text-neutral-900 bg-neutral-50">
		<div className="vertical-scroll" ref={PresentationRef}>
			<section className="Presentation first py-12"><PresentationComponent/></section>
			<section className="Presentation py-12"><SchoolCareerComponent/></section>
		</div>
		<div className="divAP1" ref={AP1Ref}>
            <section className="AP1 py-24"><AP1Component/></section>
            <section className="AP1 p-24 pb-32"><AP1MainComponent/></section>
		</div>
		<div className="divAP2" ref={AP2Ref}>
            <section className="AP2 py-24"><AP2Component/></section>
            <section className="AP2 py-24"><AP2MainComponent/></section>
        </div>
        <div className="divStage1" ref={Stage1Ref}>
            <section className="Stage1 py-24"><Stage1Component/></section>
            <section className="Stage1 py-24"><Stage1MainComponent/></section>
        </div>
        <div className="divAP3" ref={AP3Ref}>
            <section className="AP3 py-24"><AP3Component/></section>
            <section className="AP3 py-24"><AP3MainComponent/></section>
        </div>
        <div className="divStage2" ref={Stage2Ref}>
            <section className="Stage2 py-32"><Stage2Component/></section>
        </div>
        <div className="divAP4" ref={AP4Ref}>
            <section className="AP4 py-24"><AP4Component/></section>
            <section className="AP4 py-24"><AP4MainComponent/></section>
        </div>
        <div className="divPortfolio" ref={PortfolioRef}>
            <section className="Portfolio py-24"><PortfolioComponent/></section>
            <section className="Portfolio py-24"><PortfolioMainComponent/></section>
        </div>
        <div className="divCertification" ref={CertificationRef}>
            <section className="Certification py-24"><CertificationComponent/></section>
        </div>
        <div className="divMonitoring" ref={MonitoringRef}>
            <section className="Monitoring py-24"><MonitoringComponent/></section>
        </div>
        <div className="divContact" ref={ContactRef}>
            <section className="Contact py-24"><ContactComponent/></section>
        </div>
	</main>
  );
}
