import ExperienceItem from "./ExperienceItem";

export default function Experience() {

    const exp = [
        {
            title: 'Web Designer Intern- V3rtice Agency',
            description: 'Manage all graphic assets for web and social media display. Taking into account web specifications that in the future gave me media specifications and guidelines for managing web media files.',
            date: 'SEP 2020 - MAR 2021',
            tags: ['HTML', 'CSS', 'Wordpress', 'Sketch']
        },
        {
            title: 'Freelance designer & developer',
            description: `Built several projects based on client's requirements`,
            date: 'SEP 2020 - TODAY',
            tags: ['Figma', 'Sketch', 'React', 'React Native']
        },
        {
            title: 'UI Designer - TOQIO',
            description: 'Took part in the product team where we’ve build a fully customizable design system and carried out a full platform redesign.',
            date: 'SEP 2021 - FEB 2024',
            tags: ['Figma', 'Miro', 'Adobe', 'Agile']
        },
        {
            title: 'UX/UI Teacher - ISDI Coders',
            description: `I teach design concepts and Figma focused on developer's needs`,
            date: 'JAN 2023 - TODAY',
            tags: ['Figma', 'Miro', 'VSC', 'Methodology']
        }
    ]

    return <>
        <section className="mb-16 md:mb-24 lg:mb-36" id="experience">
            <p className="text-start mb-8 tracking-widest font-bold header-text-color">EXPERIENCE</p>
            {exp.toReversed().map((item, key) => <ExperienceItem key={key} title={item.title} description={item.description} date={item.date} tags={item.tags} />)}
        </section>
    </>
}