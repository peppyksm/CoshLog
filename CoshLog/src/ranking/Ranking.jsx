import './Ranking.css';
import HeaderNav from '../pages/compnent/HeaderNav';
function Ranking() {
    return (
        <div className='ranking_container'>
            <form className='ranking_form'>
                <h1 style={{ margin: '30px' }}>레벨 랭킹</h1>
                {HeaderNav()}
                
            </form>
        </div>
    );
}
export default Ranking;