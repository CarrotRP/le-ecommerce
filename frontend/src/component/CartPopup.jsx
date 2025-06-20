import CartCard from "./CartCard";
import './CartPopup.css';

function CartPopup(props) {
    return (
        <aside className="cart-popup" ref={props.cartPopupRef}>
            <div className="cart-content" ref={props.cartContentRef}>
                <div className="cart-head">
                    <p className="close" onClick={props.handleCartPopupClose}>&#215;</p>
                </div>
                <section className="cart-items">
                    {/*for seller add */}
                    {/*cart template */}
                    <CartCard />
                </section>
                <section className="bottom-part">
                    <div className="price-before">
                        <span><p>Total</p><p>US $100.00</p></span>
                        <span><p>Delivery fee</p><p>US $100.00</p></span>
                    </div>
                    <span className="final-price"><p>Amount to pay</p><p>US $100.00</p></span>
                    <button className="checkout">Proceed to Checkout</button>
                </section>
            </div>
        </aside>
    );
}

export default CartPopup;