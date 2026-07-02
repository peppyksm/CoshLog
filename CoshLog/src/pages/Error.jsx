import { useNavigate } from "react-router";
import "./Error.css";

function Error(){
    let navigation = useNavigate();

    return(
        <div className="container">
            <h1>404 Not Found (｡•́︿•̀｡)</h1>
            <h3>존재하지 않는 페이지입니다.</h3>
            <h3 onClick={()=>{navigation("/")}}><span className="movetoMain"></span></h3>
        </div>
    )
}

export default Error;navigation