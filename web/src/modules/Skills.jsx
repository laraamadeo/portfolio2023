export default function Skills() {
    const skillz = [
        {
            title: 'Languages',
            items: [
                "JavaScript (ES6)",
                "TypeScript",
                "HTML",
                "CSS/Sass"
            ]
        },
        {
            title: 'Frameworks',
            items: [
                "React",
                "React Native",
                "Next.js",
                "Node.js",
                "Tailwind CSS",
                "Bootstrap",
                "Wordpress"
            ]
        },
        {
            title: 'Libraries',
            items: [
                "Redux",
                "MobX",
                "React Router",
                "AXIOS",
                "React Testing",
                "Framer Motion"
            ]
        },
        {
            title: 'Tools',
            items: [
                "Bash",
                "Git & Github",
                "Chrome DevTools",
                "Postman",
                "MongoDB",
                "Figma"
            ]
        }
    ]
    return <>
        <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <p className="text-start mb-8 tracking-widest font-bold header-text-color">SKILLS</p>
            <div className="flex gap-8 justify-between flex-wrap">
                {skillz.map(list => {
                    return <>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <p className="text-base uppercase font-medium title-text-color">{list.title}</p>
                            <ul className="flex flex-col gap-1 items-start">
                                {list.items.map((item, key) => <li key={key} className="text-start text-sm body-text-color">{item}</li>
                                )}
                            </ul>
                        </div>
                    </>
                })}
            </div>
        </section>
    </>
}