import react, {useRef} from "react";
import "./main_cont.css";
import "../../assets/fonts/Font.css";
import Down_scroll from "./down_scroll";

function Main_Cont() {
    const mainMSGRef = useRef(null);

    const handleScroll = () => {
        if (mainMSGRef.current) {
            mainMSGRef.current.scrollIntoView({ behavior: "smooth", block: "start"});
        }
    }

    return (
        <div className="main_cont">
            <div className="main_image"></div>

            <Down_scroll onClick={handleScroll} />

            <div className="main_msg" ref={mainMSGRef}>PLAY YOUR GAME WITH US</div>
            <div className="main_discription">메인 소개 문구</div>
        </div>
    )
}

export default Main_Cont;