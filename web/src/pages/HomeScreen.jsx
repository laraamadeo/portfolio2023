import Header from '../modules/Header'
import Main from '../modules/Main'

export default function HomeScreen() {
    return <>
        <div style={{ boxSizing: 'border-box' }} className='mx-auto lg:h-screen max-w-screen-xl px-3 sm:px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
            <div className='lg:flex lg:justify-between lg:gap-16'>
                <Header />
                <Main />
            </div>
        </div>
    </>
}