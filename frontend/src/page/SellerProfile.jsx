import Section from "../content/Section";

function SellerProfile(){
    return(
        <main className="seller-profile">
            <section className="seller-detail">
                <img src="#" alt="" /> {/*their shop as backgrond img */}
                <h2>seller shop name or name</h2>
                <p>Description</p>
            </section>
            <section className="seller-products">
                <Section/>
            </section>
        </main>
    );
}

export default SellerProfile;