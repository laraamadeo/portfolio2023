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
        },
        {
            thumb: '/design-principles.png',
            title: 'Toqio design principles',
            description: `The mission was building a set of design principles. We carried out different design processes fosting collaboration and team alignment.`,
            tags: ['Design systems', 'Design principles', 'UX Processes', 'Research'],
            href: "https://www.behance.net/gallery/175593353/Toqios-Design-Principlesm"
        }
    ]

    return <>
        <section className="mb-16 md:mb-24 lg:mb-36 flex flex-col items-start justify-start gap-1" id="projects">
            <p className="text-start font-bold header-text-color">RELEVANT PROJECTS</p>
            <div className="flex  mb-8 gap-2 items-center cursor-pointer" onClick={() => navigate("/projects")}>
                <p className="font-bold link-color">See more projects</p>
            </div>
            {projects.map((prj, key) => <ProjectItem key={key} thumb={prj.thumb} title={prj.title} description={prj.description} tags={prj.tags} href={prj.href} />)}
        </section>
    </>
}