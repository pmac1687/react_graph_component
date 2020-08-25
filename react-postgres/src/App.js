import React, {useState, useEffect} from 'react';
import Ticker from './components/tickers'


function App() {
  const [tickers, setTickers] = useState(false);
  useEffect(() => {
    getTickers();
  }, []);


  function getTickers() {
    fetch('http://localhost:4001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setTickers(data);
      });
  };

  var dday = [];
  var nums = [];
  const group = [];
  var item;
  var obj = JSON.parse(tickers);
  for(let x=0;x<obj.length;x++){
    group.push(obj[x])
  }
  console.log(group[2])
  
  
  

    return (
      <div>
        <Ticker tickers={group} />
      </div>
    )
  
}
export default App;