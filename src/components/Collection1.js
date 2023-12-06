import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../../src/styles.css';

// import required modules
import { Scrollbar } from 'swiper/modules';
import data from '../db/item1';
import Products from '../components/Products';
import 'swiper/css';
import 'swiper/css/scrollbar';
//컬렉션 슬라이드
import Collection from '../components/Collection';


const Collection1 = () => {
let [item1] = useState(data);
const [activeTab, setActiveTab] = useState(1);
const handleTabClick = (tab) => {
  setActiveTab(tab);
}
return (
    <div style={{ width: "100%" }}>
    <h1 className="title" style={{ width: "100%" }}>
        COLLECTION
    </h1>
    <div className="tabButtons">
        <button className="Wbtn" onClick={() => handleTabClick(1)}>
        WOMAN
        </button>
        <button className="Mbtn" onClick={() => handleTabClick(2)}>
        MEN
        </button>
    </div>
    <div className="collectionBox">
        <div className="colBN">
        <img src="/img/main_page/bn/p_collection_bn_6.jpg" />
        </div>
        <div className="colItem">
        {/* Use the Collection component here */}
        <Collection item1={item1} activeTab={activeTab} />
        </div>
    </div>
    </div>
);
};

export default Collection1;