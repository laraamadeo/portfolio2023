
export default function Header() {
    return <>
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24 md:flex md:flex-col md:gap-8 md:justify-between sm:items-start sm:justify-start flex flex-col gap-8 items-center">
            <div className="flex flex-col">
                <p className="text-2xl sm:text-4xl sm:text-left mb-4 font-extrabold header-text-color">Lara Amadeo Tarantino</p>
                <p className="text-m sm:text-xl sm:text-left sm:pr-9 body-text-color">{`Product designer focus on UI design. Building user-centered interfaces`}</p>

                <div className="flex gap-3 mt-8 flex-col sm:flex-row sm:gap-3">
                    <p className="text-lg leading-6 hidden sm:block">👉</p>
                    <p className="text-lg leading-6 sm:hidden">👇</p>
                    <a className="link-color underline font-medium">amadeotarantino@gmail.com</a>
                </div>
            </div>

            <div className="flex gap-2">
                <a target="_blank" rel="noreferrer" href="https://github.com/laraamadeo"><img src="/github-logo.svg"></img>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/laraamadeotarantino/  ">
                    <img src="/linkedin-logo.svg"></img>
                </a>
            </div>
        </header>
    </>
}