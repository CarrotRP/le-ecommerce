import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//this function is used when navigating, cuz react keep the scroll position when navigate
function ScrollToTop(){
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0})
    }, [location.pathname]);

    return null;
}

export default ScrollToTop;