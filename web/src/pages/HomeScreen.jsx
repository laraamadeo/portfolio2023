import Header from '../library/Header'
import Main from '../library/Main'

export default function HomeScreen() {

    return <>
        <div className='flex px-8 justify-between h-full'>
            <Header />
            <Main />
        </div>
    </>
}