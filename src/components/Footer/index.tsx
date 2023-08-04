import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../../public/gsap";
import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const containerRef = useRef(null);
    const letterRef = useRef(null);

    useEffect(() => {
        const scrollTriggerOptions = {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1.9,
        };
        const arrowRefs = document.querySelectorAll(`.${styles.footer__div} span`);
        console.log(arrowRefs);


        arrowRefs.forEach((arrowRef) => {
            gsap.from(arrowRef, {
                y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
                scrollTrigger: scrollTriggerOptions,
            });
        });
    }, []);

    return (
        <footer ref={containerRef}>
            <a className={styles.footer} href="http://" target="_blank" rel="noopener noreferrer">
                <div className={styles.footer__div}>
                    <span data-speed="-100">@</span>
                    <span data-speed="200">b</span>
                    <span data-speed="-400">r</span>
                    <span data-speed="250">u</span>
                    <span data-speed="-300">n</span>
                    <span data-speed="170">o</span>
                </div>
                <div className={styles.footer__div}>
                    <span data-speed="-100">l</span>
                    <span data-speed="150">i</span>
                    <span data-speed="-200">i</span>
                    <span data-speed="300">m</span>
                    <span data-speed="-400">a</span>
                    <span data-speed="400">s</span>
                </div>
            </a>
        </footer>
    );
}
