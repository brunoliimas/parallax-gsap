import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../../public/gsap";
import s from "./styles.module.scss"

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef(null);
    const imgRef = useRef(null)
    const imageRef = useRef(null)
    const txtRef = useRef(null)

    useEffect(() => {
        const scrollTriggerOptions = {
            trigger: containerRef.current,
            start: "top bottom",
            scrub: 1.9,
        };
        gsap.to(imgRef.current, {
            scrollTrigger: scrollTriggerOptions,
            yPercent: -30
        });
        gsap.to(imageRef.current, {
            scrollTrigger: scrollTriggerOptions,
            scale: 1.6
        });
        gsap.to(txtRef.current, {
            scrollTrigger: scrollTriggerOptions,
            yPercent: 20
        });
    }), [];

    return (
        <section ref={containerRef} className={s.about}>
            <div className={s.about__wrapp}>
                <div ref={imgRef} className={s.about__img}>
                    <img ref={imageRef} src="assets/img-02.webp" alt="2" />
                </div>
                <div ref={txtRef} className={s.about__txt}>
                    <h2 className={s.section_title}>
                        Abo
                        <span className={s.stroke}>ut</span>
                        <span className={s.square}></span>
                    </h2>
                    <p className={s.about__p}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut. Tellus mauris a diam maecenas sed enim ut sem viverra. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Diam quis enim lobortis scelerisque fermentum. Magna fringilla urna porttitor rhoncus dolor. 
                    </p>
                </div>
            </div>
        </section>
    )
}