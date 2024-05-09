import "./components.css"
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="anav">
        <div className="alogo">
          <img src="https://www.tickertape.in/images/svg/logos/tt-vertical.svg" alt="" />
        </div>
        <div className="acontent">
          <a href="https://www.tickertape.in/portfolio/mutualfunds" className="apart">
            <img src="https://assets.tickertape.in/logo/portfolio.svg" alt="" />Portfolio
          </a>
          <a href="https://www.tickertape.in/digital-gold" className="apart">
            <img src="https://assets.tickertape.in/logo/gold.svg" alt="" />Gold
          </a>
          <a href="https://www.tickertape.in/screener/home/equity" className="apart">
            <img src="https://assets.tickertape.in/logo/screener.svg" alt="" />Screener
          </a>
          <div className="apart">
            <img src="https://assets.tickertape.in/logo/more.svg" alt="" />More
          </div>
          <button className="apart alogin">
            <img src="https://www.tickertape.in/images/svg/svg-icons/user-white-stroke.svg" alt="" />Login
          </button>
        </div>
      </nav>
      <div className="amain">
        <div className="aleft">
          <div className="asmallcase">
            <span>Introducting</span> smallcase
          </div>
          <div className="acurated">Curated Stocks based on popular ideas</div>
          <div className="aetf">smallcases are ready-made basket of stocks/ETFs that track a theme, strategy or objective</div>
          <button className="adiscover">Discover Now</button>
        </div>
        <div className="aright">
          <img className="aright" src="https://www.tickertape.in/images/svg/sc-home-page/hero-section-side-mobile.webp" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;