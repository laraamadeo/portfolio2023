
import { useRef } from "react";
import { ArrowDownTrayIcon } from "../icons";

export default function About() {
    const myRef = useRef(null)

    return <>
        <section className="mb-16 md:mb-24 lg:mb-36 flex flex-col items-start" id='about' ref={myRef}>
            <p className="text-start mb-8 tracking-widest font-bold header-text-color ">BACKGROUND</p>

            <p className="text-start mb-2 body-text-color">{`I'm a frontend developer with strong background in design. I started studying programming, frontend development specifically, and found out that in coding is where I found myself fullfilled.`}</p>

            <p className="text-start mb-2 body-text-color">{`I love building design systems and high-quality softwares.`}</p>

            <p className="text-start mb-2 body-text-color">
                Today, you can find me working at
                <a className="cursor-pointer font-bold link-color text-[#98dfa2]" href="https://toqio.co/es/" target="_blank" rel="noreferrer"> TOQIO </a>
                as a frontend developer, where we have built a fully customizable design system and web and app platforms for banking SaaS.
            </p>

            <p className="text-start mb-8 body-text-color">{`When I'm not in front of a computer screen, I'm probably doing ceramics or walking my dog.`}</p>

            <a className="flex gap-2 items-center cursor-pointer " rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1a8PMJieWXAonDvpHtD66KsZTnRWvgoKE/view?usp=sharing">
                <ArrowDownTrayIcon className="w-5 h-5 text-grey icons-width text-[#98dfa2] " />
                <p className="font-bold link-color text-[#98dfa2]">Download my resume</p>
            </a>
        </section>
    </>
}