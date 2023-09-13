import ProjectItem from "./ProjectItem"

export default function Projects() {
    const projects = [
        {
            thumb: 'https://images.emojiterra.com/google/android-10/512px/1f6a7.png',
            title: 'Social media app',
            description: 'InstaClone is a web-based social media application built using React, designed to mimic the core functionality of Instagram. It allows users to create accounts, share photos and videos, follow other users, and interact with their posts through likes, comments, and direct messages.',
            tags: ['React', 'CSS']
        },
        {
            thumb: 'https://images.emojiterra.com/google/android-10/512px/1f6a7.png',
            title: 'Yuper',
            description: 'TODO:InstaClone is a web-based social media application built using React, designed to mimic the core functionality of Instagram. It allows users to create accounts, share photos and videos, follow other users, and interact with their posts through likes, comments, and direct messages.',
            tags: ['React', 'Typescript', 'MongoDB', 'NodeJS']
        }
    ]

    return <>
        <section className="mb-16 md:mb-24 lg:mb-36">
            <p className="text-start mb-8">Relevant projects</p>
            {projects.map(prj => <ProjectItem thumb={prj.thumb} title={prj.title} description={prj.description} tags={prj.tags} />)}
        </section>
    </>
}