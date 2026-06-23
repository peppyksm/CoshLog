import './Register.css';
function Register() {
    let str1 = '이름 입력';
    let str2 = "닉네임 입력";
    let str3 = '이메일 입력';
    let str4 = '아이디 입력 (소문자+숫자 6~12자 입력)';
    let str5 = '비밀번호 입력 (대소문자+숫자+특수기호 8자 이상 입력)';
    return (
        <div className='container'>
            <form>
                <div className='form'>
                    <div className='form'>
                        <p className='loginTitle'>회원가입</p>
                        <div className='line'></div>
                        <span className='textColor'>이름</span><input className='inputName' type='text' placeholder={str1}></input><br></br>
                        <span className='textColor'>닉네임</span><input className='inputNick' type='text' placeholder={str2}></input><br></br>
                        <span className='textColor'>이메일</span><input className='inputNick' type='text' placeholder={str3}></input><br></br>
                        <span className='textColor'>아이디</span><input className='inputID' type='text' placeholder={str4}></input><br></br>
                        <span className='textColor'>비밀번호</span><input className='inputPW' type='password' placeholder={str5}></input><br></br>
                        <input className='check_reg' type='checkbox'></input><span className='textColor'>서비스 이용약관 동의</span><br></br>
                        <input className='check_reg' type='checkbox'></input><span className='textColor'>개인정보 처리방침 동의</span><br></br>
                        <button className='btn_goLog'>로그인으로 돌아가기</button>
                        <button className='btn_regCom'>가입하기</button>
                    </div>
                </div>
            </form >
        </div >
    );
}
export default Register;