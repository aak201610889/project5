import React, { useState } from 'react';
import data from './data';
function App() {
  const [MenuItem, setMenuItem] = useState(data);
  const [categories, setCategories] = useState([]);


  console.log(data);
  return (
    <div className="App">
      <h1>Our Menu</h1>


    </div>
  );
}

export default App;
