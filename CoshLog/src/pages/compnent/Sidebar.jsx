import { useNavigate } from 'react-router'
import profileImg from '../../image/캡처.PNG';
import "./Sidebar.css"

function Sidebar() {
    let navigate = useNavigate()

    return (
        <aside className="sidebar dark">

            <div className="sidebarTop">
                <h1 className="logo">CoshLog</h1>

                <div
                    className="login"
                    onClick={() => {
                        navigate("/login")
                    }}
                >
                    <h2>로그인</h2>
                </div>

                <div className="profileCard">
                    <div className="userInfo">
                        <img src={profileImg} id="photo" alt="profile" />

                        <div className="infoText">
                            <h3>하루카</h3>
                            <h4>Lv.300</h4>
                        </div>
                    </div>

                    <div className="target">
                        <div className="achievement"></div>
                    </div>

                    <p id="targetText">오늘의 목표치 3/10</p>
                </div>

                <input
                    id="searchAll"
                    type="text"
                    placeholder="Search all posts"
                />
            </div>

            <nav className="category">
                <div className="forum">
                    ▽ 포럼

                    <div className="forum ctg">
                        <div className="fe">
                            ▽ FE

                            <div className="fe ctg">
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>React</p>
                            </div>
                        </div>

                        <div className="be">
                            ▽ BE

                            <div className="be ctg">
                                <p>JAVA</p>
                                <p>Node.js</p>
                                <p>Python</p>
                                <p>Go</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="minigame">
                    ▽ 미니게임
                    <div className="game ctg">
                        <p>빈칸 맞추기</p>
                    </div>
                </div>

                <div className="teamP">
                    ▽ 팀 프로젝트
                    <div className="team ctg">
                        <p>구인 / 구직</p>
                        <p>팀 전용 작업실</p>
                    </div>
                </div>

                <div className="ranking">
                    ▽ 랭킹
                    <div className="rank ctg">
                        <p>레벨 랭킹</p>
                    </div>
                </div>
            </nav>

        </aside>
    )
}

export default Sidebar