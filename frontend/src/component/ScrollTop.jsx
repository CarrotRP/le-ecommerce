import './ScrollTop.css'

function ScrollTop(props) {
    return (
        <button className={props.showButton ? 'scrollTop scrollTop-active' : 'scrollTop'} onClick={props.handleToTopClick}>
            <div className="arrows">
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                </svg>
            </div>
            <div className="mouse-scroll"></div>
        </button>
    );
}

export default ScrollTop;