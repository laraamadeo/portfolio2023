import { useNavigate } from "react-router-dom"
import ProjectItem from "./ProjectItem"
import { ArrowRightIcon } from "../icons"

export default function Projects() {
    const navigate = useNavigate()
    const projects = [
        {
            thumb: '/toqio-screens.png',
            title: 'Toqio',
            description: `Toqio's embedded finance platform empowers corporates to create and launch their financial solutions, connecting banking providers with a customizable web and app interface.`,
            tags: ['UI Design', 'Design systems', 'Design principles'],
            href: "https://toqio.co/es/"
        }
    ]

    return <>
        <section className="mb-16 md:mb-24 lg:mb-36 flex flex-col items-start justify-start gap-1" id="projects">
            <p className="text-start mb-8 font-bold header-text-color">RELEVANT PROJECT</p>
            {projects.map((prj, key) => <ProjectItem key={key} thumb={prj.thumb} title={prj.title} description={prj.description} tags={prj.tags} href={prj.href} />)}
            <div className="flex gap-2 items-center cursor-pointer" onClick={() => navigate("/projects")}>
                <p className="font-bold link-color">See more projects</p>
                <ArrowRightIcon className="w-5 h-5 text-grey icons-width text-[#11189f] " />
            </div>
        </section>
    </>
}