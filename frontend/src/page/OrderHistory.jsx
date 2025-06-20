import HistorySection from "../component/HistorySection";

import './OrderHistory.css';

function OrderHistory(){
    return(
        <main className="order-history">
            <h2>Order History</h2>
            {[...Array(3)].map(v => <HistorySection/>)}
        </main>
    );
}

export default OrderHistory;