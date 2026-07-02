import "./HeaderNav.css";
import { useNavigate } from 'react-router';

function HeaderNav() {

    let navigate = useNavigate();
    
    return (
        <div className="HeaderNav">
            <div className="nav">
                <div className="navCtg navFe">FE
                    <div className="bgBlack navFeHo"><br />
                        <p onClick={() => { navigate("/forum/fe/html") }}>- HTML</p>
                        <p onClick={() => { navigate("/forum/fe/css") }}>- CSS</p>
                        <p onClick={() => { navigate("/forum/fe/javascript") }}>- JavaScript</p>
                        <p onClick={() => { navigate("/forum/fe/react") }}>- React</p>
                    </div>
                </div>
                <div className="navCtg navBe">BE
                    <div className="bgBlack navBeHo"><br />
                        <p onClick={() => { navigate("/forum/be/java") }}>- JAVA</p>
                        <p onClick={() => { navigate("/forum/be/node") }}>- Node.js</p>
                        <p onClick={() => { navigate("/forum/be/python") }}>- Python</p>
                        <p onClick={() => { navigate("/forum/be/go") }}>- Go</p>
                    </div>
                </div>
                <div className="navCtg navGame">미니게임
                    <div className="bgBlack navGameHo">
                        <p onClick={() => { navigate("/game/blankgame") }}>- 빈칸 맞추기</p>
                    </div>
                </div>
                <div className="navCtg navTeam">팀 프로젝트
                    <div className="bgBlack navTeamHo">
                        <p onClick={() => { navigate("/team/recruitment") }}>- 구인/구직</p>
                        <p onClick={() => { navigate("/team/private") }}>- 팀 전용 작업실</p>
                    </div>
                </div>
                <div className="navCtg navRank">랭킹
                    <div className="bgBlack navRankHo">
                        <p onClick={() => { navigate("/rank/level") }}>- 전체 랭킹</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderNav;