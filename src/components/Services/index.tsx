import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../../public/gsap";

import styles from "./styles.module.scss";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollTriggerOptions = {
            trigger: containerRef.current,
            start: "top bottom",
            scrub: 1.9,
        };
        const arrowRefs = document.querySelectorAll(
            `.${styles.services__item_arrow}`
        );
        arrowRefs.forEach((arrowRef) => {
            gsap.to(arrowRef, {
                x: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
                scrollTrigger: scrollTriggerOptions,
            });
        });
    }, []);

    const servicesData = [
        { speed: "150", text: "/Graphic Design" },
        { speed: "280", text: "/UX/UI Design" },
        { speed: "270", text: "/Web Design" },
        { speed: "250", text: "/Brand Design" },
    ];

    return (
        <section ref={containerRef} className={styles.services}>
            <div className={styles.content}>
                <h2 className={styles.section_title}>
                    servi
                    <span className={styles.stroke}>ces</span>
                    <span className={styles.square}></span>
                </h2>

                <div className={styles.services__list}>
                    {servicesData.map((service, index) => (
                        <div className={styles.services__item} key={index}>
                            <span
                                className={styles.services__item_arrow}
                                data-speed={service.speed}
                            >
                                <img src="assets/arrow.svg" alt="arrow" />
                            </span>
                            <div className={styles.services__item_txt}>
                                <span className={styles.services__item_text}>
                                    {service.text}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
