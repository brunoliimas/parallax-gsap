import { gsap, TweenTarget  } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger, CSSPlugin);

export { gsap, ScrollTrigger, TweenTarget };
