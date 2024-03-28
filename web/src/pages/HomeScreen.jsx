import Header from '../modules/Header'
import Main from '../modules/Main'

export default function HomeScreen() {
    return <>
        <div className='w-screen h-screen flex justify-centera items-center '>
            <div className='flex flex-col gap-2 items-start'>
                <p className='text-white font-bold'>Portfolio under improvement</p>
                <p className='text-white'>Available on 01/04/2024</p>
                <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1a8PMJieWXAonDvpHtD66KsZTnRWvgoKE/view?usp=sharing" className="text-[#98dfa2] font-medium hover:text-[#79b481]">Download cv</a>
            </div>
        </div>
    </>
}
{/* <div style={{ boxSizing: 'border-box' }} className='mx-auto lg:h-screen max-w-screen-xl px-3 sm:px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
    <div className='lg:flex lg:justify-between lg:gap-16'>
        <Header />
        <Main />
    </div>
</div> */}