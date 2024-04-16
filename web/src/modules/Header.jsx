import About from "./About";

export default function Header() {
    return <>
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24 md:flex md:flex-col md:gap-8 md:justify-between sm:items-start sm:justify-start flex flex-col gap-8 items-center">
            <div className="flex flex-col">
                <p className="text-2xl sm:text-4xl sm:text-left mb-4 font-extrabold header-text-color">Lara Amadeo Tarantino</p>
                <p className="text-m sm:text-xl sm:text-left sm:pr-9 body-text-color">{`Product designer focus on UI design. Building user-centered interfaces`}</p>

                <div className="flex flex-col gap-2 mt-8">
                    <div className="flex gap-3  flex-col sm:flex-row sm:gap-3">
                        <p className="text-lg leading-6 hidden sm:block">👉</p>
                        <p className="text-lg leading-6 sm:hidden">👇</p>
                        <a className="link-color underline font-medium">amadeotarantino@gmail.com</a>
                    </div>

                    <div className="flex gap-3 flex-col sm:flex-row sm:gap-3">
                        <p className="text-lg leading-6 hidden sm:block">👉</p>
                        <p className="text-lg leading-6 sm:hidden">👇</p>
                        <a className="link-color underline font-medium" rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1a8PMJieWXAonDvpHtD66KsZTnRWvgoKE/view?usp=sharing">
                            Download cv
                        </a>
                    </div>
                </div>

            </div>
            <About />
        </header>
    </>
}