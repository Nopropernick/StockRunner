import React, { useEffect, useState } from 'react';
import './App.css';
import Middle from './components/Middle';
import Details from './components/Details';
import Left from './components/Left';

function App() {
  const [stock, setStock] = useState('META');
  const [stockData, setStockData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  useEffect(() => {
    const apiUrl = `https://api.polygon.io/v2/aggs/ticker/${stock}/range/1/day/2023-01-09/2023-01-09?apiKey=LZ2zLiG4hKXsn3OfYJQ_ql_oWhqxxcDO`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setStockData(data);
      })
      .catch((e) => {
        console.log(e);
      });
      
      const historicalUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=5min&outputsize=full&apikey=27E2EZ1OB5J01KO9`;

      fetch(historicalUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error");
          }
          return response.json();
        })
        .then((data) => {
          setHistoricalData(Object.entries(data["Time Series (5min)"]).map(([date, values]) => ({
            date: new Date(date),
            open: parseFloat(values["1. open"])
          })));
        })
        .catch((e) => {
          console.log(e);
        });
    }, [stock]);


  
  return (
    <>
      <div className='bg-gray-300 h-screen flex justify-center space-x-5 p-5'>
        {stockData && (
        <Left 
        setStock={setStock} 
        />
        )}
        <div className='mt-20 w-3/4 h-4/5'>
          {stockData && (
            <Middle
              stats={{
                ticket: stockData.ticker,
                c: stockData.results[0].c,
                h: stockData.results[0].h,
                l: stockData.results[0].l,
                o: stockData.results[0].o,
                v: stockData.results[0].v,
              }}
              historicalData={historicalData}
            />
          )}
        </div>
        <div className='mt-20 w-1/3 h-4/5'>
          {stockData && (
          <Details 
          stats={{
            c: stockData.results[0].c,
            h: stockData.results[0].h,
            l: stockData.results[0].l,
            o: stockData.results[0].o,
            v: stockData.results[0].v,
          }}
          />)}
        </div>
      </div>
    </>
  );
}

export default App;
