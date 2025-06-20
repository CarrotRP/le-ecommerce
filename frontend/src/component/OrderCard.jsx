import { Link } from "react-router-dom";

function OrderCard() {
    return (
        <Link to='/product' className="order-card">
            <img src="https://placehold.co/300x400" alt="" />
            <div className="mid">
                <p>price</p>
                <p>product name</p>
            </div>
            <p>quantity</p>
        </Link>
    );
}

export default OrderCard;