import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import HowItWorks from '../components/Process';
import Projects from '../components/Projects';

export default function Home() {

    return (
        <div className='background'>
            <div className='container'>
                <Navbar />
                <Hero />
                <Menu />
                <Services />
                <HowItWorks />
                <Projects />
            </div>
        </div>
    );
}