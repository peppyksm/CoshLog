import Register from '../register/Register';
import './Login.css';
import { useNavigate } from 'react-router';
function Login() {
    let navigate = useNavigate();
    return (
        <div className='login_container'>
            <form className='login_form' onClick={(event) => {
                event.preventDefault();
            }}>
                <div className='login_box'>
                    <p className='login_title'>로그인</p>
                    <div className='login_line'></div>
                    <input className='login_inputID' type='text' placeholder="아이디 입력"></input>
                    <input className='login_inputPW' type='password' placeholder="비밀번호 입력"></input>
                    <button className='login_btn' onClick={(event) => {
                        alert('로그인이 완료되었습니다.');
                    }}>로그인 버튼</button>
                    <p>OR</p>
                    <button className='login_btn_naver'>
                        <img className='login_img_social' src='https://i.namu.wiki/i/p_1IEyQ8rYenO9YgAFp_LHIAW46kn6DXT0VKmZ_jKNijvYth9DieYZuJX_E_H_4GkCER_sVKhMqSyQYoW94JKA.svg' />
                        네이버 로그인
                    </button>
                    <button className='login_btn_google'>
                        <img className='login_img_social' src='https://img.icons8.com/matisse/1200/google.jpg' />
                        구글 로그인
                    </button>
                    <button className='login_btn_findID' onClick={() => {
                        navigate('/findID')
                    }}>아이디 찾기</button>
                    <button className='login_btn_reg' onClick={() => {
                        navigate('/register')
                    }}>회원가입</button>
                </div>
            </form>
        </div>
    );
}
export default Login;