import './Register.css';
import { useNavigate } from 'react-router';
function Register() {
    let str1 = '이름 입력';
    let str2 = "닉네임 입력";
    let str3 = '이메일 입력';
    let str4 = '아이디 입력 (소문자+숫자 6~12자 입력)';
    let str5 = '비밀번호 입력 (대소문자+숫자+특수기호 8자 이상 입력)';
    let navigate = useNavigate();
    return (
        <div className='reg_container'>
            <form className='reg_form' onClick={(event) => {
                event.preventDefault();
            }}>
                <div className='reg_box'>
                    <p className='reg_title'>회원가입</p>
                    <div className='reg_line'></div>
                    <span className='reg_textColor'>이름</span><input className='reg_inputName' type='text' placeholder={str1}></input><br></br>
                    <span className='reg_textColor'>닉네임</span><input className='reg_inputNick' type='text' placeholder={str2}></input><br></br>
                    <span className='reg_textColor'>이메일</span><input className='reg_inputEmail' type='text' placeholder={str3}></input><br></br>
                    <span className='reg_textColor'>아이디</span><input className='reg_inputID' type='text' placeholder={str4}></input><br></br>
                    <span className='reg_textColor'>비밀번호</span><input className='reg_inputPW' type='password' placeholder={str5}></input><br></br>
                    <input className='reg_check_reg1' type='checkbox'></input><span className='reg_textColor'>서비스 이용약관 동의</span><br></br>
                    <input className='reg_check_reg2' type='checkbox'></input><span className='reg_textColor'>개인정보 처리방침 동의</span><br></br>
                    <button className='reg_btn_goLog' onClick={() => {
                        navigate('/login');
                    }}>로그인으로 돌아가기</button>
                    <button className='reg_btn_regCom' onClick={() => {
                        alert('가입이 완료되었습니다.');
                    }}>가입하기</button>
                </div>
            </form >
        </div >
    );
}
export default Register;