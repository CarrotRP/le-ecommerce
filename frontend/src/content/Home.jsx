import Banner from "./Banner";
import Marquee from './Marquee';
import Section from './Section';
import './Home.css'

function Home(){
    return(
        <main className="home">
            <Banner/>
            <Marquee/>
            <Section/>
            <Section/>
        </main>
    );
}

export default Home;