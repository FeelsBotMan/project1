import React from 'react';
import reactDOM from 'react-dom/client';
import './styles.css';

const App = () => {
    return (
        <div className="shop-container">
            {/* 네비게이션 바 */}
            <nav className="navbar">
                <div className="logo">SHOP</div>
                <ul className="nav-links">
                    <li>홈</li>
                    <li>카테고리</li>
                    <li>신상품</li>
                    <li>베스트</li>
                    <li>마이페이지</li>
                </ul>
            </nav>

            {/* 메인 배너 */}
            <div className="main-banner">
                <h1>겨울 시즌 신상품 할인</h1>
                <p>최대 50% 할인된 가격으로 만나보세요</p>
            </div>

            {/* 상품 목록 */}
            <div className="products-grid">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="product-card">
                        <div className="product-image"></div>
                        <h3>상품명 {item}</h3>
                        <p className="price">39,000원</p>
                        <button className="buy-button">구매하기</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const reactRoot = document.querySelector("div#reactRoot");

reactDOM
    .createRoot(reactRoot as HTMLElement)
    .render(<App />);