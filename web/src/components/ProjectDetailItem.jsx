import { Carousel } from "flowbite-react";
import Slider from "react-slick";
import { ArrowRightIcon } from "../icons";

export default function ProjectDetailItem({ title, description, img, subtitle, link, linkLabel }) {
    const carrousel = img.length > 1
    return <>
        <div className="w-full flex flex-col justify-center items-center px-[25%] gap-5">
            <img className="w-full rounded-3xl shadow-md " src={img[0]}></img>
            {carrousel && <img className="w-full rounded-3xl shadow-md " src={img[1]}></img>}
            <div className="flex flex-col items-start gap-2">
                <div className="flex flex-col justify-start gap-2">
                    <p className="text-4xl font-bold title-text-colortext-left">{title}</p>
                    <p className="text-md font-bold text-gray-600  text-left">{subtitle}</p>
                </div>
                <p className="text-lg body-text-color text-left">{description}</p>
                {link === "" ?
                    <p className="font-bold link-color">{linkLabel}</p>
                    :
                    <a className="flex gap-2 items-center cursor-pointer" target="_blank" rel="noreferrer" href={link}>
                        <p className="font-bold link-color">{linkLabel}</p>
                        <ArrowRightIcon className="w-5 h-5 text-grey icons-width link-color" />
                    </a>}
            </div>
        </div>
    </>
}