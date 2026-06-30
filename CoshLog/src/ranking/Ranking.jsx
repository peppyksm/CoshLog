import './Ranking.css';
import HeaderNav from '../pages/compnent/HeaderNav';
function Ranking() {
    return (
        <div className='ranking_container'>
            <form className='ranking_form'>
                <h1 style={{ margin: '30px' }}>레벨 랭킹</h1>
                {HeaderNav()}
                <div className='ranking_main'>
                    <h2>1등 김승민</h2>
                    <h2>2등 김명현</h2>
                </div>
            </form>
        </div>
    );
}
export default Ranking;