import './Quiz.css';
import { useState, useEffect } from 'react';
import HeaderNav from '../pages/compnent/HeaderNav';
function Quiz() {
    let hoho = document.getElementsByClassName('quiz_hintContentBox')[0];
    let [hint, setHint] = useState('');
    let haha = useEffect(() => {
        setHint('잘 생각해보면 떠오를지도?');
    })
    return (
        <div className='quiz_container'>
            <h1 style={{ margin: '30px' }}>빈칸 맞추기</h1>
            <form className='quiz_form'>
                {/* <div id='line'></div> */}
                {HeaderNav()};
                <h3 id='quiz_name'>Q. 다음 코드의 출력 결과가 "Hello World"가 되도록 빈칸을 채우실 수 있을지 여쭤보는 것을 여쭤봐도되는지 물어볼게.</h3>
                <div className='quiz_main'>
                    <p>console.log( ' Hello <input id='blank' type='text'></input> ' );</p>
                </div>
                <div className='quiz_hintBox'>
                    <button id='button_hint' type='button' onClick={() => {
                        hoho.classList.toggle('quiz_hintContentBoxShow');
                    }}>힌트</button>
                    <div className='quiz_hintContentBox'>
                        <span>{hint}</span>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Quiz;