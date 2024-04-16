import About from './About'
import Credits from './Credits'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
export default function Main({ onscroll }) {

    return <>
        <main className="pt-24 lg:w-[60%] lg:pt-28 lg:pb-20  box-borders  main-content lg:overflow-scroll lg:shadow-[-30px_0px_40px_-6px_rgba(59,59,63,0.02)] lg:pl-10" onScroll={onscroll}>
            <Projects />
            <Experience />
            {/* <Skills /> */}
            <Credits />
        </main>
    </>

}