import './CartCard.css';
import { Link } from "react-router-dom";

function CartCard() {
    return (
        <div className="cart-card" >
            <Link to='/product'>
                <img src="https://placehold.co/120x160" alt="" />
            </Link>
            <section className="in-cart-info">
                <p>product name</p>
                <p>color</p>
                <div className="options">
                    <span className="size">
                        <p>Size</p>
                        <div className="select-wrapper">
                            <select name="sizes" id="sizes">
                                <option value="X">X</option>
                            </select>
                        </div>
                    </span>
                    <span className="quantity">
                        <p>quantity</p>
                        <div className="select-wrapper">
                            <select name="quantity" id="quantity">
                                <option value="1">1</option>
                            </select>
                        </div>
                    </span>
                </div>
            </section>
            <button className="remove">delete</button>
            <p className='in-cart-price'>price</p>
        </div>
    );
}

export default CartCard;