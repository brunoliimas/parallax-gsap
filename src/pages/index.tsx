

import About from "@/components/About"
import Benefits from "@/components/Benefits"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Services from "@/components/Services"
import Works from "@/components/Works"

export default function Home() {


    return (
        <div id="luxy" className='wrapp'>
            <Header />
            <main>
                <About/>
                <Benefits/>
                <Works />
                <Services />
            </main>
            <Footer />
        </div>
    )
}
