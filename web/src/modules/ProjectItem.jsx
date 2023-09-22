import Tag from "../components/Tag"

export default function ProjectItem({ thumb, title, description, tags, href }) {

    return <>
        <a className=" text-neutral-800 cursor-pointer flex flex-col gap-2 mb-8 sm:gap-6 sm:grid sm:justify-start sm:mb-8 sm:grid-cols-5" href={href} target="_blank" rel="noreferrer">
            <img src={thumb} className=" mb-4 sm:mb-0 whitespace-nowrap sm:pt-1 sm:col-span-2 rounded-xl"></img>
            <div className="col-span-3">

                <p className="text-start text-base font-bold pb-1">{title}</p>
                <p className="text-start text-sm mb-3">{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {tags?.map((tag, key) => <Tag key={key} label={tag} />)}
                </div>

            </div>
        </a>
        <div className="w-full h-[1px] bg-gray-200 mb-8 sm:hidden"></div>

    </>
}