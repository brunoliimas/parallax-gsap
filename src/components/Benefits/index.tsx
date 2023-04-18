import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);


interface NumRef {
    current: HTMLElement | null;
  }

export default function Benefits() {
    const containerRef = useRef(null);
    const numRefs: NumRef[] = [
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null),
    ];

    useEffect(() => {
        const animation = (numRef : NumRef) => {
            gsap.to(numRef.current, {
                x: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    scrub: 1.9,
                },
            });
        };
        numRefs.forEach((numRef) => animation(numRef));
    }, []);

    return (
        <section ref={containerRef} className={styles.benefits}>
            <div className={styles.content}>
                <h2 className={styles.section_title}>
                    bene
                    <span className={styles.stroke}>fits</span>
                    <span className={styles.square}></span>
                </h2>

                <ul className={styles.benefits__list}>
                    {numRefs.map((numRef, index) => (
                        <li key={index} className={styles.benefits__item}>
                            <span
                                ref={numRef}
                                className={styles.benefits__num}
                                data-speed="-150"
                            >
                                {`/0${index + 1}`}
                            </span>
                            <p className={styles.benefits__p}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit dolores
                                maxime corporis mollitia!
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
