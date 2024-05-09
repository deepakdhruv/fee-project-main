import React, { useState, useEffect } from 'react';
import './App.css'
import Main from './components/main'
import Header from './components/header'
import QCombineComponent from './components/centre'
import FilterComponent from './components/filter'
import QuestionComponent from './components/questions'
import Footer from './components/Footer'


function App() {
  const [arr, setArr] = useState([]);

  function addData(profile) {

    setArr(prevArr => [profile, ...prevArr]);
  }

  useEffect(() => {
    fetchStockData();
  }, []);

  const fetchStockData = async () => {
    const url = 'https://real-time-finance-data.p.rapidapi.com/search?query=Apple&language=en';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1574b3de87msh24962f4f657d919p102eacjsnd41e61948661',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
      }
    };
    

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      if(result.status==='OK'){
        const exchanges=result.data.stock;
        exchanges.forEach(exchange => {
          let a = {
            name: exchange.name,
            price: exchange.price,
            currency: exchange.currency,
            change: exchange.change,
            change_percent: exchange.change_percent,
            country: exchange.country_code,
            timezone: exchange.timezone
          }
          addData(a); 
          console.log(a);
        });
      } else {
        console.error("Error in API");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Header />
      <Main />
      <QCombineComponent fun={addData} data={arr} />
      {/* <FilterComponent /> */}
      <QuestionComponent />
      <Footer />
      
    </>
  )
}

export default App;
