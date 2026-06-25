import './MyPage.css';
function MyPage() {
    return (
        <div className='myPage_container'>
            <form className='myPage_form' onClick={(event) => {
                event.preventDefault();
            }}>
                <div className='myPage_box'>
                    <p className='myPage_text_title'>마이 페이지</p>
                    <div className='myPage_line'></div>
                    <div className='myPage_profileArea'>
                        <img className='myPage_img_profile' src='https://i.namu.wiki/i/saCN7RitpGX_i9kdIAWLfwYg_XCXW8piTqn4Vw8YOF_d3Fh3EUzU81gOXPiVVJSf5y08cj_zHKfhoVJjuoAmqw.webp' />
                        <div className='myPage_profileArea1'>
                            <button className='myPage_btn_chnImg'>사진 변경</button>
                            <span>닉네임: <span>제로</span></span>
                            <span>현재 레벨: LV.264</span>
                        </div>
                        <button className='myPage_btn_chnNick'>닉네임 변경</button>
                    </div>
                    <div className='myPage_line1'></div>
                    <div className='myPage_badgeArea'>
                        <p className='myPage_text_main'>보유 뱃지</p>
                        <div className='myPage_badgeImgArea'>
                            <img className='myPage_img_badge' src='https://static.wikia.nocookie.net/maplestorym/images/4/45/%EB%AA%AC%EC%8A%A4%ED%84%B0_%EB%A7%88%EB%85%B8.png/revision/latest/thumbnail/width/360/height/450?cb=20180201154835&path-prefix=ko' />
                            <img className='myPage_img_badge' src='https://i.namu.wiki/i/C-9ZpgUm8WmFFs0i-h2SJKWjkErdXTWgEcJSI3NQGCx5LSOXwkxSvxImOwe4lkHnqHJUT0K_TuZyaMRTBJDZyQ.webp' />
                            <img className='myPage_img_badge' src='https://i.namu.wiki/i/Du5yyTqmPKcRumUKbwekunAsjxUCmSsc8WWnpbPV93O2ldnXDIIt2KFHrFF9k8DihDbixSusR8yvYKqBUfLHwQ.webp' />
                        </div>
                    </div>
                    <div className='myPage_line1'></div>
                    <div className='myPage_dailyArea'>
                        <div className='myPage_dailyArea1'>
                            <p className='myPage_text_mainDaily'>매일 목표 설정</p>
                            <span className='myPage_text_daily1'>일일 퀴즈 풀기</span>
                            <span className='myPage_text_daily2'>질문 글 작성</span>
                        </div>
                        <div className='myPage_dailyArea2'>
                            <span className='myPage_text_daily'><input className='myPage_inputText_daily1' type='text'></input>회</span>
                            <span className='myPage_text_daily'><input className='myPage_inputText_daily2' type='text'></input>회</span>
                        </div>
                        <div className='myPage_dailyArea3'>
                            <button className='myPage_btn_daily'>목표 저장</button>
                        </div>
                    </div>
                    <div className='myPage_line1'></div>
                    <div className='myPage_chnPWArea'>
                        <p className='myPage_text_chnPW'>비밀번호 변경</p>
                        <span className='myPage_text_chnPW1'>새 비밀번호</span>
                        <input className='myPage_inputText_chnPW' type='password'></input>
                        <button className='myPage_btn_chnPW'>비밀번호 수정</button>
                    </div>
                </div>
            </form >
        </div >
    );
}
export default MyPage;