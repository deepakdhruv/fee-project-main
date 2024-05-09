
import React, { useState } from 'react';
import "./components.css"
const FilterComponent = () => {
  const [filter, setFilter] = useState({
    investment: 'Any',
    volatility: '',
    index: '',
    manager: ''
  });

  const handleButtonClick = (category, value) => {
    setFilter({ ...filter, [category]: value });
  };

  return (
    <div className="s">
      <div className="s-left">
        <div>
          <button className="buttons" onClick={() => handleButtonClick('investment', 'All')}>All</button>
          <button className="buttons" onClick={() => handleButtonClick('investment', 'Free')}>Free</button>
          <button className="buttons" onClick={() => handleButtonClick('investment', 'Fee')}>Fee</button>
        </div>
        <div className="fil">
          <div className="invest">
            <h4 id="minInvestment" className="dropdown-symbol">Min investment</h4>
            <div className="hidden-div" onClick={() => handleButtonClick('investment', 'Any')}>Any</div>
            <div className="hidden-div" onClick={() => handleButtonClick('investment', 'under 5000')}>under 5000</div>
            <div className="hidden-div" onClick={() => handleButtonClick('investment', 'under 25000')}>under 25000</div>
            <div className="hidden-div" onClick={() => handleButtonClick('investment', 'under 50000')}>under 50000</div>
          </div>

          <h4 id="volatility" className="dropdown-symbol">Volatility</h4>
          <div className="volatility">
            <div className="boxdiv" onClick={() => handleButtonClick('volatility', 'Low')}>Low</div>
            <div className="boxdiv" onClick={() => handleButtonClick('volatility', 'Mid')}>Mid</div>
            <div className="boxdiv" onClick={() => handleButtonClick('volatility', 'High')}>High</div>
          </div>

          <h4 id="index" className="dropdown-symbol">Index</h4>
          <div>
            <div className="hidden-div" onClick={() => handleButtonClick('index', 'Equity large cap')}>Equity large cap</div>
            <div className="hidden-div" onClick={() => handleButtonClick('index', 'Equity mid cap')}>Equity mid cap</div>
            <div className="hidden-div" onClick={() => handleButtonClick('index', 'Equity small cap')}>Equity small cap</div>
            <div className="hidden-div" onClick={() => handleButtonClick('index', 'Equity large and mid cap')}>Equity large and mid cap</div>
            <div className="hidden-div" onClick={() => handleButtonClick('index', 'Equity mid and small cap')}>Equity mid and small cap</div>
            <div className="hidden-div" onClick={() => handleButtonClick('index', 'Equity multi cap')}>Equity multi cap</div>
          </div>

          <h4 id="manager" className="dropdown-symbol">Manager</h4>
          <div>
            <div className="hidden-div" onClick={() => handleButtonClick('manager', 'Green portfolio')}>Green portfolio</div>
            <div className="hidden-div" onClick={() => handleButtonClick('manager', 'Lotusdew wealth')}>Lotusdew wealth</div>
            <div className="hidden-div" onClick={() => handleButtonClick('manager', 'Niveshaay')}>Niveshaay</div>
            <div className="hidden-div" onClick={() => handleButtonClick('manager', 'Windmill capital')}>Windmill capital</div>
            <div className="hidden-div" onClick={() => handleButtonClick('manager', 'Weekend investing')}>Weekend investing</div>
          </div>
        </div>
      </div>
      <div className="s-right">
        <div id="exchanges-container" className="card-container">
          {/* Add QCombineComponent here */}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
