import React from 'react';

    const Banner = () => {
    return (
        <div>
        <div className="BNbox" style={{ width: "100%" }}>
            <div className="mainBN">
            <img src="/img/main_page/banner/civic.jpg" />
            <span>🖤CITY PUFFER, CIVIC🖤</span>
            <span>도심 속 아우터, 커버낫 씨빅</span>
            </div>
            <div className="mainBN">
            <img src="/img/main_page/banner/membership.jpg" />
            <span>💜MEMBERSHIP💜</span>
            <span>커버낫 멤버식 혜택 받기</span>
            </div>
            <div className="mainBN">
            <img src="/img/main_page/banner/cloverWoman.jpg" />
            <span>🍀Where is Clover heart?🍀</span>
            <span>사랑과 행운이 가득한 커버낫 우먼 컬렉션</span>
            </div>
        </div>
        </div>
    );
    };

export default Banner;