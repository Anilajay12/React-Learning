import { useEffect, useState } from "react";
import { Message } from "./Message";

function App() {

  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(true);


  useEffect(function() {
    getAdvice()
  }, [])

  async function getAdvice() {
    setLoading(true);
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
    setLoading(false);
  }

  return (
    <div>
      <h1> 
        {loading ? "loading the data please wait" : advice} </h1>
      <div>
        
      </div>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

export default App
