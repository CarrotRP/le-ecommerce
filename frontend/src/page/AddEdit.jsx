import './AddEdit.css'

function AddEdit() {
    //no idea for add product ui. it looks ahh, i know
    return (
        <main className="add-edit">
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
            <section className="form">
                <input type="text" placeholder="Enter product name" />
                <input type="text" placeholder="Enter product detail" />
                <input type="text" placeholder="Enter price" />
                <input type="text" placeholder="Enter size" /> {/*use + button with popup to add size */}
                <input type="text" placeholder="Enter quantity" />
                <button className="submit">Submit</button>
            </section>
        </main>
    );
}

export default AddEdit;