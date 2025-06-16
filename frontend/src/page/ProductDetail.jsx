import './ProductDetail.css';

function ProductDetail() {
    return (
        <main className="product-detail">
            {/* aside = image slide */}
            <aside>
                {[...Array(3)].map(v =>
                    <div className="thumbnail">
                        <img src="https://placehold.co/80x120" alt="" />
                    </div>
                )}
            </aside>
            {/* main = main image display */}
            <main>
                <div className="main-image">
                    <img src="https://placehold.co/500x700" alt="" />
                </div>
            </main>
            {/* product info, add to cart btn, etc... */}
            <div className="product-info">
                <a href="/profile" className='seller' style={{gap: '20px'}}>
                    <img src="#" alt="seller-profile" />
                    <h4>Seller name</h4>
                </a>
                <h2>US $20.99</h2>
                <p>Slim Fit Jeans</p>
                <section className="size">
                    <p>Size</p>
                    {[...Array(5)].map(v => <button>10</button>)}
                </section>
                <section className="quantity">
                    <p>Quantity</p>
                    <button>&minus;</button>
                    <span className="display">1</span>
                    <button>+</button>
                </section>
                <button className='add-to-cart'>Add to cart</button>
                <section className="product-desc">
                    <p>Product Details</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quibusdam?</p>
                </section>
            </div>
        </main>
    );
}

export default ProductDetail;