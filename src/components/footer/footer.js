import react from "react";
import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer_msg">
                <div className="footer_msg_1">Since_2019</div>
                <div className="footer_msg_2">© 2025 Nirvana. All Rights Reserved.</div>
            </div>

            <div className="footer_icon">
                <div className="footer_icon_discord"></div>
                <div className="footer_icon_instargram"></div>
                <div className="footer_icon_youtube"></div>
            </div>
        </div>
    )
}

export default Footer;