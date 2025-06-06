import Card from './Card';
import './Section.css';

function Section() {
    return (
        <section className='body-section'>
            <h1 className='title'>Special shit</h1>
            <div className="item-list">
                {[...Array(4)].map(() =>
                    <Card/>
                )}
            </div>
        </section>
    );
}

export default Section;