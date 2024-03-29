import { useEffect } from "react"
import { projectDetailsData } from "../data"
import ProjectDetailItem from "../components/ProjectDetailItem"
import { ArrowLeftIcon } from "../icons"
import { useNavigate } from "react-router-dom"



export default function ProjectsDetail() {
    const navigate = useNavigate()

    const data = projectDetailsData
    return <>
        <div className="w-full flex flex-col justify-center">
            <div className="flex gap-2 items-center cursor-pointer px-[25%] pt-5" onClick={() => navigate("/")}>
                <ArrowLeftIcon className="w-5 h-5 text-grey icons-width link-color " />
                <p className="font-bold link-color link-color">Back</p>
            </div>
            <p className="text-6xl font-bold  header-text-color text-left px-[25%] pt-4 mb-8">Projects</p>
            <div className="w-full flex flex-col justify-center gap-32 pb-10 ">
                {data.map(({ title, description, img, link, subtitle, linkLabel }) => {
                    return <ProjectDetailItem title={title} description={description} img={img} subtitle={subtitle} link={link} linkLabel={linkLabel} />
                })}
            </div>
        </div>
    </>
}
