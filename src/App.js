import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import QuoteCard from './components/QuoteCard';

const sampleQuote = 
  {
  quote: "And this is the snack holder where I can put my beverage or, if you will, cupcake.",
  character: "Homer Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right"
  }
  
function App() {
  const [quote, setQuote] = useState(sampleQuote);

const getQuote = () => {
  fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((res) => res.json())
      .then((data) => setQuote(data[0]));
      }

  return (
    <div className="App">
      <QuoteCard quote={quote}/>
      <button className="btn" onClick={getQuote}>Get a quote</button>
    </div>
  );
}

export default App;
