export default function Header() {

    return <>
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24 md:flex md:flex-col md:gap-8 md:justify-between sm:items-start sm:justify-start flex flex-col gap-8 items-center">
            <div className="flex flex-col">
                <p className="text-2xl sm:text-4xl sm:text-left mb-4 font-extrabold dark:text-[#ae818c]">Lara Amadeo Tarantino</p>
                <p className="text-m sm:text-xl sm:text-left sm:pr-9 dark:text-[#ae818c]">{`Front-end developer focused on building design-centered interfaces`}</p>

                <div className="flex gap-3 mt-8">
                    <p className="text-lg leading-6 ">👉</p>
                    <a className="dark:text-[#98dfa2] underline font-medium">amadeotarantino@gmail.com</a>
                </div>
            </div>

            <div className="flex gap-2">
                <img src="/github-logo.svg"></img>
                <img src="/linkedin-logo.svg"></img>
            </div>
        </header>
    </>
}