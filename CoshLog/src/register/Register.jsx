import './Register.css';
import { useNavigate } from 'react-router';
import { Form } from 'react-bootstrap';
function Register() {
    let navigate = useNavigate();
    return (
        <div className='register_box'>
            <form className='register_form'>
                <p id='title' style={{ marginBottom: '3%', marginTop: '3%' }}>회원가입</p>
                <div id='line'></div>
                <div className='register_inputBox'>
                    <div className='register_inputNameBox'>
                        <p>이름</p>
                        <p>닉네임</p>
                        <p>이메일</p>
                        <p>아이디</p>
                        <p>비밀번호</p>
                    </div>
                    <div className='register_inputTextBox'>
                        <input type='text' placeholder='이름을 입력하세요.'></input>
                        <input type='text' placeholder='닉네임을 입력하세요.'></input>
                        <input type='text' placeholder='이메일을 입력하세요.'></input>
                        <input type='text' placeholder='아이디를 입력하세요.'></input>
                        <input type='password' placeholder='비밀번호를 입력하세요.'></input>
                    </div>
                </div>
                <div id='line'></div>
                <div className='register_checkbox'>
                    <input type='checkbox'></input>
                    <span id='checklist'>서비스 이용약관 동의</span>
                    <input type='checkbox' style={{ marginLeft: '10%' }}></input>
                    <span id='checklist'>개인정보 처리방침 동의</span>
                </div>
                <div id='line'></div>
                <div className='register_btn_complete'>
                    <button id='button' onClick={() => { alert('가입이 완료되었습니다.'); }}>가 입 하 기</button>
                </div>
            </form >
        </div >
    );
}
export default Register;