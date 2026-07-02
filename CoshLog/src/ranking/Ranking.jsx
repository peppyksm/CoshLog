import './Ranking.css';
import HeaderNav from '../pages/compnent/HeaderNav';
import { useEffect, useState, useMemo } from 'react';
function Ranking() {
    const userData = JSON.parse(localStorage.getItem('user')) || [];
    const userIndex = JSON.parse(localStorage.getItem('index'));
    const sortedLevelRanking = useMemo(() => {
        if (!Array.isArray(userData) || userData.length === 0) return [];
        return [...userData].sort((a, b) => b.level - a.level);
    }, [userData]);
    const sortedBadgeRanking = useMemo(() => {
        if (!Array.isArray(userData) || userData.length === 0) return [];
        return [...userData].sort((a, b) => b.badge - a.badge);
    }, [userData]);
    const [imageView, setImageView] = useState(() => {
        if (userData && userIndex != null && userData[userIndex]) {
            const savedImage = userData[userIndex].image;
            return savedImage ? savedImage : null;
        }
        return null;
    });
    return (
        <div className='ranking_container'>
            <form className='ranking_form'>
                <h1 style={{ margin: '30px' }}>전체 랭킹</h1>
                {HeaderNav()}
                <div className='ranking_main'>
                    <div className='ranking_list'>
                        <h2 style={{ marginBottom: '30%' }}>레벨 순위</h2>
                        <div>
                            {sortedLevelRanking.length > 0 ? (
                                sortedLevelRanking.map((user, index) => (
                                    <h2 key={user.id || index}>
                                        {index + 1}등. {user.nickName} (Lv.{user.level})
                                    </h2>
                                ))
                            ) : (
                                <p>등록된 유저 데이터가 없습니다.</p>
                            )}
                        </div>
                    </div>
                    <div className='ranking_list'>
                        <h2 style={{ marginBottom: '30%' }}>뱃지 수 순위</h2>
                        <div>
                            {sortedBadgeRanking.length > 0 ? (
                                sortedBadgeRanking.map((user, index) => (
                                    <h2 key={user.id || index}>
                                        {index + 1}등. {user.nickName} ({user.badge}개)
                                    </h2>
                                ))
                            ) : (
                                <p>등록된 유저 데이터가 없습니다.</p>
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Ranking;