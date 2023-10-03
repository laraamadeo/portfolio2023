
import { useRef } from "react";
import { ArrowDownTrayIcon } from "../icons";

export default function About() {
    const myRef = useRef(null)

    return <>
        <section className="mb-16 md:mb-24 lg:mb-36 flex flex-col items-start" id='about' ref={myRef}>
            <p className="text-start mb-8 tracking-widest font-bold header-text-color ">BACKGROUND</p>

            <p className="text-start mb-2 body-text-color">{`I started my journey as a digital product designer, field that I very much enjoy. I've worked as a designer for one and a half year in TOQIO. Quickly, I started to get very interested in programming. I loved the process of building software not only ideating it.`}</p>

            <p className="text-start mb-2 body-text-color">{`I started studying programming, frontend development specifically and found out that in coding is where I found myself fullfilled.`}</p>

            <p className="text-start mb-2 body-text-color">{`Today, you can find me working at TOQIO, migrating from design to frontend team. `}</p>

            <p className="text-start mb-8 body-text-color">{`When I'm not in front of a computer screen, I'm probably doing ceramics or walking my dog.`}</p>

            <a className="flex gap-2 items-center cursor-pointer " rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1a8PMJieWXAonDvpHtD66KsZTnRWvgoKE/view?usp=sharing">
                <ArrowDownTrayIcon className="w-5 h-5 text-grey icons-width text-[#98dfa2] " />
                <p className="font-bold link-color text-[#98dfa2]">Download my resume</p>
            </a>
        </section>
    </>
}