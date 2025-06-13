import Banner from "../content/Banner";
import Marquee from '../content/Marquee';
import Section from '../content/Section';
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