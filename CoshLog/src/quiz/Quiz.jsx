import './Quiz.css';
import { useState, useEffect } from 'react';
import HeaderNav from '../pages/compnent/HeaderNav';
import quizData from './quizData';
function Quiz() {
    // let hoho = document.getElementsByClassName('quiz_hintContentBox')[0];
    const [quiz, setQuiz] = useState(quizData);
    const [randomQuizIndex, setRandomQuizIndex] = useState(0);
    const [isHintVisible, setIsHintVisible] = useState(false);
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * Math.min(quizData.length, 10));
        setRandomQuizIndex(randomIndex);
    }, [])
    if (!quiz || quiz.length === 0) {
        return <div className='quiz_container'>퀴즈 데이터를 불러올 수 없습니다.</div>;
    }

    return (
        <div className='quiz_container'>
            <h1 style={{ margin: '30px' }}>빈칸 맞추기</h1>
            <form className='quiz_form' onSubmit={(event) => {
                event.preventDefault();
            }}>
                {/* <div id='line'></div> */}
                <HeaderNav />
                <h3 id='quiz_name'>{quiz[randomQuizIndex].name}</h3>
                <div className='quiz_main'>
                    <p>{quiz[randomQuizIndex].code}</p>
                </div>
                <div className='quiz_hintBox'>
                    <h3 id='quiz_answer' onClick={() => {
                        const inputAnswer = prompt();
                        if (inputAnswer == quiz[randomQuizIndex].answer) {
                            alert('정답입니다!');
                        } else if (inputAnswer != null && inputAnswer != quiz[randomQuizIndex].answer) {
                            alert('오답입니다ㅠㅠ')
                        }
                    }}>A. 정답 입력</h3>
                    <button id='button_hint' type='button' onClick={() => {
                        setIsHintVisible(!isHintVisible)
                    }}>힌트</button>
                    <div className={`quiz_hintContentBox ${isHintVisible ? 'quiz_hintContentBoxShow' : ''}`}>
                        <span>{quiz[randomQuizIndex].hint}</span>
                    </div>
                </div>
            </form >
        </div >
    );
}
export default Quiz;