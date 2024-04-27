import { useEffect, useState } from 'react';
import './App.css'
import Quote from './components/quote'

function App() {
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();
        setQuoteData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {loading? (
        <p>Loading...</p>
      ) : (
        quoteData && (
          <Quote quote={quoteData.quote} author={quoteData.author} />
        )
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;