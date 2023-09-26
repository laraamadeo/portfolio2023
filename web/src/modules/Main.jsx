import About from './About'
import Credits from './Credits'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
export default function Main() {

    return <>
        <main className="pt-24 lg:w-[60%] lg:py-24 box-borders h-screen main-content lg:overflow-scroll">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Credits />
        </main>
    </>

}