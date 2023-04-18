import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../../public/gsap";
import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const strokeRef = useRef(null);
    const titleParallaxRef = useRef(null);
    const marqRef = useRef(null);
    const wrappRef = useRef(null);
    const starRefs = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const tlHeader = gsap.timeline();
        tlHeader
            .from(titleRef.current, {
                duration: 1,
                opacity: 0,
                yPercent: 130,
                stagger: 0.06,
                ease: "back.out",
            })
            .from(
                imgRef.current,
                {
                    duration: 2,
                    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                    scale: 1,
                    ease: "expo.out",
                },
                "-=1"
            )
            .from(marqRef.current, {
                duration: 1,
                yPercent: 100,
                ease: "expo.out",
            }, "-=1.5");
    }, []);

    useEffect(() => {
        const scrollTriggerOptions = {
            trigger: containerRef.current,
            start: "top top",
            scrub: 1.9,
        };
        gsap.to(titleParallaxRef.current, {
            scrollTrigger: scrollTriggerOptions,
            yPercent: -150,
        });
        gsap.to(strokeRef.current, {
            scrollTrigger: scrollTriggerOptions,
            xPercent: 70,
        });
        gsap.to(imgRef.current, {
            scrollTrigger: scrollTriggerOptions,
            xPercent: -50,
        });
        gsap.to(wrappRef.current, {
            scrollTrigger: scrollTriggerOptions,
            xPercent: -50,
        });
        starRefs.forEach((starRef) => {
            gsap.to(starRef.current, {
                scrollTrigger: scrollTriggerOptions,
                rotate: -720,
            });
        });
    }, []);

    return (
        <header ref={containerRef} className={styles.header}>
            <h1 ref={titleRef} className={styles.title} data-splitting>
                <span ref={titleParallaxRef} className={styles.title_parallax}>
                    Parallax Effect
                </span>
                <span ref={strokeRef} className={styles.stroke}>
                    on GSAP
                </span>
            </h1>
            <div ref={imgRef} className={styles.header__img}>
                <img src="assets/img-01.webp" alt="1" />
            </div>
            <div ref={marqRef} className={styles.header__marq}>
                <div ref={wrappRef} className={styles.header__marq_wrapp}>
                    {["1", "2", "3"].map((id) => (
                        <span key={id} className={styles.header__marq_txt}>
                            discuss your ideas
                            <span ref={starRefs[Number(id) - 1]} className={styles.header__marq_star}>
                                <img src="assets/star.svg" alt="" />
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        </header>
    );
}
