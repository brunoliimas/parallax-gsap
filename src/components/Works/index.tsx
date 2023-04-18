import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
    const containerRef = useRef(null);

    useEffect(() => {
        const scrollTriggerOptions = {
            trigger: containerRef.current,
            start: "top bottom",
            scrub: 1.9,
        };

        const itemRefs = document.querySelectorAll(`.${styles.work__item}`);
        itemRefs.forEach((itemRef) => {
            gsap.to(itemRef, {
                y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
                scrollTrigger: scrollTriggerOptions,
            });
        });

        const numRefs = document.querySelectorAll(`.${styles.work__item_num}`);
        numRefs.forEach((numRef) => {
            gsap.to(numRef, {
                y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
                scrollTrigger: scrollTriggerOptions,
            });
        });

        const imgRefs = document.querySelectorAll(`.${styles.work__item_img} img`);
        imgRefs.forEach((imgRef) => {
            gsap.to(imgRef, {
                scale: 1.6,
                scrollTrigger: scrollTriggerOptions,
            });
        });
    }, []);

    return (
        <section className={styles.work} ref={containerRef}>
            <div className={styles.content}>
                <h2 className={styles.section_title}>
                    portfo<span className={styles.stroke}>lio</span>
                    <span className={styles.square}></span>
                </h2>

                <div className={styles.work__wrapp}>
                    <div className={styles.work__item} data-speed="-50">
                        <span className={styles.work__item_num} data-speed="-400">
                            /0001
                        </span>
                        <div className={styles.work__item_img}>
                            <img src="assets/img-03.webp" alt="3" />
                        </div>
                    </div>
                    <div className={styles.work__item} data-speed="-100">
                        <span className={styles.work__item_num} data-speed="-500">
                            /0002
                        </span>
                        <div className={styles.work__item_img}>
                            <img src="assets/img-04.webp" alt="4" />
                        </div>
                    </div>
                    <div className={styles.work__item} data-speed="-50">
                        <span className={styles.work__item_num} data-speed="-400">
                            /0003
                        </span>
                        <div className={styles.work__item_img}>
                            <img src="assets/img-05.webp" alt="5" />
                        </div>
                    </div>
                    <div className={styles.work__item} data-speed="-100">
                        <span className={styles.work__item_num} data-speed="-500">
                            /0004
                        </span>
                        <div className={styles.work__item_img}>
                            <img src="assets/img-06.webp" alt="6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


