
import { useRef } from "react";
import { ArrowDownTrayIcon } from "../icons";

export default function About() {
    const myRef = useRef(null)

    return <>
        <section className="mb-16 md:mb-24 lg:mb-36 flex flex-col items-start" id='about' ref={myRef}>
            <p className="text-start mb-8 tracking-widest font-bold header-text-color ">BACKGROUND</p>

            <p className="text-start mb-2 body-text-color">{`I'm a product designer focused on UI design. Enthusiastic about interfaces and product functionality. I love building design systems and high-quality softwares.`}</p>


            <p className="text-start mb-2 body-text-color">
                Today, you can find me teaching design at
                <a className="cursor-pointer font-bold link-color" href="https://isdicoders.com/" target="_blank" rel="noreferrer"> ISDI Coders </a>
                to developers where I try to bring the design concepts to people that have a very programmatic way of thinking.
            </p>

            <p className="text-start mb-8 body-text-color">{`When I'm not in front of a computer screen, I'm probably doing ceramics or walking my dog.`}</p>

            <a className="flex gap-2 items-center cursor-pointer " rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1a8PMJieWXAonDvpHtD66KsZTnRWvgoKE/view?usp=sharing">
                <ArrowDownTrayIcon className="w-5 h-5 text-grey icons-width link-color " />
                <p className="font-bold link-color link-color">Download cv</p>
            </a>
        </section>
    </>
}