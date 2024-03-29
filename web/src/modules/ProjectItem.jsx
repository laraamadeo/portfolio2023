import { useNavigate } from "react-router-dom"
import Tag from "../components/Tag"
import { ArrowRightIcon } from "../icons"

export default function ProjectItem({ thumb, title, description, tags, href }) {
    const navigate = useNavigate()
    return <>
        <a className=" cursor-pointer flex flex-col gap-2 mb-8 sm:gap-6 sm:grid sm:justify-start sm:mb-8 sm:grid-cols-5" href={href} target="_blank" rel="noreferrer">
            <img src={thumb} className=" mb-4 sm:mb-0 whitespace-nowrap sm:pt-1 sm:col-span-2 rounded-xl"></img>
            <div className="col-span-3">

                <p className="text-start text-base font-medium pb-1 title-text-color">{title}</p>
                <p className="text-start text-sm mb-3 body-text-color">{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {tags?.map((tag, key) => <Tag key={key} label={tag} />)}
                </div>

            </div>
        </a>
        <div className="flex gap-2 items-center cursor-pointer" onClick={() => navigate("/projects")}>
            <p className="font-bold link-color">See more projects</p>
            <ArrowRightIcon className="w-5 h-5 text-grey icons-width text-[#11189f] " />
        </div>

    </>
}