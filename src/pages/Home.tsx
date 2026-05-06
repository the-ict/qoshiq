import Services from '../components/Services';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Menu from '../components/Menu';

export default function Home() {

    return (
        <div className='background'>
            <div className='container'>
                <Navbar />
                <Hero />
                <Menu />
                <Services />
            </div>
        </div>
    );
}