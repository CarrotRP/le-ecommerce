import './ProfilePopup.css';

function ProfilePopup(props) {
    return (
        <div className="profile-popup" ref={props.profilePopupRef}>
            <div className="popup-content" ref={props.profileContentRef}>
                <div className="popup-head">
                    <button className="edit">&#9998;</button>
                    <p>Me</p>
                    <button className="close" onClick={props.handleProfilePopupClose}>&#215;</button> {/*for some reason &time; doesnt work */}
                </div>
                <div className="popup-body">
                    <section className="user">
                        <span style={{ justifyContent: 'start', gap: '20px' }}>
                            <h2>CarrotS</h2>
                            <a href="/profile">more</a> {/*this is for sellers only */}
                        </span>
                        <a href='/order-history'>Order history</a>
                    </section>
                    <section className="lang">
                        <h2>ភាសា/Language</h2>
                        <span className="eng">
                            <label htmlFor="english">English</label>
                            <input type="radio" id="english" value='English' name="lang" />
                        </span>
                        <span className="khmer">
                            <label htmlFor="khmer">ខ្មែរ</label>
                            <input type="radio" id="khmer" value='khmer' name="lang" />
                        </span>
                    </section>
                    <section className="setting">
                        <h2>Settings</h2>
                        <span className="dark-mode">
                            <p>Dark Mode</p>
                            <button className="switch">
                                <div className="handle"></div>
                                <div className="switch-bg"></div>
                            </button> {/*iphone switch btn style */}
                        </span>
                    </section>
                </div>
                <button className="logout">Log out</button>
            </div>
        </div>
    );
}

export default ProfilePopup;