import React,{ useState } from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState("")
  const [results, setResult] = useState([])
  //ul-pL8QTrIsDxozRNdqhYMyK-_qu-5dPdjVbDNa7UgQ
  const fetchImages = () => {
    fetch('https://api.unsplash.com/search/photos?client_id=YOUR_ul-pL8QTrIsDxozRNdqhYMyK-_qu-5dPdjVbDNa7UgQ&query=${value}&orientation=squarish')
  
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        setResult(data.results)
      })
    }
    return (
      <div className="App">
        <div className="mydiv">
          <div className="gallery">
            {
              results.map((items) => {
                return <img className="item" key={items.urls.regular} />
              
              })
            }
          </div>
          <span>Search</span>
          <input
            style={{ width: "60" }}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)} />
          <button onClick={() => fetchImages()}>Send</button>
        </div>
      </div>
    );
  }
    
export default App;
