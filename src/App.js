import '../src/css/App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
//swiper
import "swiper/css/pagination";
import "swiper/css/navigation";

//상품 컨텐츠
import data from './db/item1';
import Footer from './components/Footer'; //Footer 
import Woman from './components/Woman'; //Woman
import Men from './components/Men'; //Men
import Banner from './components/Banner'; //Banner
import Collection1 from './components/Collection1'; //Collection1
import Styling from './components/Styling'; //Collection1
import Header from './components/Header';
import Mainslider from './components/Mainslider';// 메인페이지 슬라이드 배너
import Login from './components/Login';// 로그인
import Cart from './components/Cart'



//상세페이지
import Detail from './components/Detail';

function App() {
  let [item1] = useState(data);
  window.scrollTo(0, 0);

  return (
    <div className="main_wrap">
      <a href="/App.js">
        <img
          src="/img/main_page/bn/top_bn.png"
          style={{ position: "fixed", zIndex: 300 }}
        />
      </a>
      {/* header */}
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ width: "100%" }}>
              <Mainslider />

              {/* ===== 상품 컨텐츠 시작 ===== */}
              <Woman />
              <Men />
              <Banner />
              <Collection1 />
              <Styling />
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail item1={item1} />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


