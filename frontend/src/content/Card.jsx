import { Link } from 'react-router-dom';
import './Card.css';

function Card() {
    return (
        <div className="card">
            <Link to='/product'>
                <img src="https://placehold.co/300x400" alt="" />
                <p>price</p>
                <p>product name</p>
            </Link>
            <Link to='/profile' className='to-profile'>
                <img src="#" alt="seller-img" />
            </Link>
        </div>
    );
}

export default Card;