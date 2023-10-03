import ExperienceItem from "./ExperienceItem";

export default function Experience() {

    const exp = [
        {
            title: 'Web Designer - V3rtice Agency',
            description: 'Manage all graphic assets for web and social media display. Taking into account web specifications that in the future gave me media specifications and guidelines for managing web media files.',
            date: 'SEP 2020 - MAR 2021',
            tags: ['HTML', 'CSS', 'Wordpress']
        },
        {
            title: 'Freelance developer',
            description: 'Built two projects. A React SPA project and a React - Typescript PWA project. More information in Projects',
            date: 'FEB 2023 - TODAY',
            tags: ['React', 'Typescript', 'PWA']
        },
        {
            title: 'UI Developer - TOQIO',
            description: 'I am part of the product team where we’ve build a fully customizable design system. Also helped out frontend team with design system frontend tasks.',
            date: 'SEP 2021 - TODAY',
            tags: ['React', 'Typescript', 'React Native', 'Tailwind', 'Figma', 'Storybook']
        }
    ]

    return <>
        <section className="mb-16 md:mb-24 lg:mb-36" id="experience">
            <p className="text-start mb-8 tracking-widest font-bold header-text-color">EXPERIENCE</p>
            {exp.map((item, key) => <ExperienceItem key={key} title={item.title} description={item.description} date={item.date} tags={item.tags} />)}
        </section>
    </>
}