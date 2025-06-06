import { Link } from 'react-router-dom';
import './Card.css';

function Card(){
    return(
        <Link to='/product' className="card" >
            <img src="https://placehold.co/300x400" alt="" />
            <p>price</p>
            <p>product name</p>
        </Link>
    );
}

export default Card;