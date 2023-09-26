import Tag from "../components/Tag";

export default function ExperienceItem({ date, title, description, tags }) {
    return <>
        <div className=" xl:gap-6 xl:grid xl:justify-start xl:mb-8 xl:grid-cols-8 flex flex-col gap-2 items-start mb-10">
            <p className="text-xs whitespace-nowrap pt-1 col-span-2">{date}</p>
            <div className="col-span-6">

                <p className="text-start text-base font-medium pb-1 title-text-color">{title}</p>
                <p className="text-start text-sm mb-3 body-text-color">{description}</p>
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag, key) => <Tag key={key} label={tag} />)}
                </div>

            </div>
        </div>
    </>
}