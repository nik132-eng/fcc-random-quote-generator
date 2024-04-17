import { useEffect, useState } from 'react';
import './App.css'
import Quote from './components/quote'

function App() {

  const [quoteData , setQuoteData] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/quotes/random');
      const data = await response.json();
      setQuoteData(data);
    }

    fetchData();
  },[])
  
  return (
    <div className="App">
      {quoteData && <Quote quote={quoteData.quote} author={quoteData.author} />}
  </div>
  )
}

export default App
