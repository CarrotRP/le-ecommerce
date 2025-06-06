import './Footer.css';

function Footer() {
    return (
        <footer>
            <section className="top">
                <div className="follow">
                    <p>FOLLOW ME</p>
                    <a href="#">
                        <img src="#" alt="telegram" />
                        Telegram</a>
                    <a href="#">
                        <img src="#" alt="github" />
                        Github</a>
                </div>
                <div className='contact'>
                    <p>CONTACT ME</p>
                    <a href="#">
                        <img src="#" alt="mail" />
                        panharothlim@gmail.com
                    </a>
                </div>
            </section>
            <p className='copyr'>&copy; Le e-commerce {new Date().getFullYear()}.</p>
        </footer>
    );
}

export default Footer;