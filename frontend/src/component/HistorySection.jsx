import OrderCard from "./OrderCard";

function HistorySection() {
    //todo make the section a dropdown, similar to spotify, but for date instead
    //TODO: fix css for the section, make it look similar to spotify history, future me 🗿
    return (
        <section className="history-section">
            <div className="info">
                <h2 className="date">11/02/2026</h2>
                <h2>$100.99</h2>
                <button className="dropdown">V</button>
            </div>
            {[...Array(3)].map(v => <OrderCard />)}
        </section>
    );
}

export default HistorySection;