import Hero from '../components/Hero'
import MovingText from '../components/MovingText'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <div className='container'>
            <Navbar />
            <Hero />
            <MovingText />
        </div>
    )
}
