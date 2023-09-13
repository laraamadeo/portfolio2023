import Tag from "../components/Tag"

export default function ProjectItem({ thumb, title, description, tags }) {

    return <>
        <div className=" gap-6 grid justify-start mb-8 grid-cols-5">
            <img src={thumb} className="text-xs whitespace-nowrap pt-1 col-span-1"></img>
            <div className="col-span-4">

                <p className="text-start text-base font-bold pb-1">{title}</p>
                <p className="text-start text-sm mb-3">{description}</p>
                <div className="flex gap-2">
                    {tags?.map((tag, key) => <Tag key={key} label={tag} />)}
                </div>

            </div>
        </div>

    </>
}