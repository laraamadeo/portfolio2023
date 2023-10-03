import ProjectItem from "./ProjectItem"

export default function Projects() {
    const projects = [
        {
            thumb: 'projectThumb/yuperThumb.png',
            title: 'Yuper',
            description: `Yuper is a PWA built with React and Typescript. It allows users to sell tuppers of their best meals and buy tuppers of other's best meals. `,
            tags: ['React', 'Typescript', 'MongoDB', 'NodeJS'],
            href: "https://yuper.vercel.app/"
        },
        // {
        //     thumb: 'https://images.emojiterra.com/google/android-10/512px/1f6a7.png',
        //     title: 'Menufy',
        //     description: 'Menufy is an web-app that helps you with your weekly menu. You add some of your best meals and randomly distribute them in a week time. You can save a calendar so next time you open the site, the menu will be displayed in homescreen.',
        //     tags: ['React', 'CSS']
        // },
        {
            thumb: 'projectThumb/instaCloneThumb.png',
            title: 'InstaClone',
            description: 'InstaClone is a web-based application built using React, designed to mimic the core functionality of Instagram. It allows users to create accounts, share photos and interact with their posts through likes and saves. It is an educational project done to learn React.',
            tags: ['React', 'CSS', 'Tailwind'],
            href: "https://instacloneapp.vercel.app/"
        }
    ]

    return <>
        <section className="mb-16 md:mb-24 lg:mb-36" id="projects">
            <p className="text-start mb-8 font-bold header-text-color">RELEVANT PROJECTS</p>
            {projects.map((prj, key) => <ProjectItem key={key} thumb={prj.thumb} title={prj.title} description={prj.description} tags={prj.tags} href={prj.href} />)}
        </section>
    </>
}