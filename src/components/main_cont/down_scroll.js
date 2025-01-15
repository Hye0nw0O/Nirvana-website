import react from "react";
import "./main_cont.css";

function Down_scroll({ onClick }) { /* 여기서 이미 down_arrow 사용*/ 
    return (
        <div className="down_arrow" onClick={onClick}></div>
    );
}

export default Down_scroll;