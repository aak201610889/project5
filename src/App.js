import React, { useState } from 'react';
import Categories from './Categories';
import data from './data';
import Menu from './Menu';
function App() {
  const [MenuItem, setMenuItem] = useState(data);
  
    const allcategory =['all',... new Set(data.map((item) => item.category))];
    console.log(allcategory);
    
  const [categories, setCategories] = useState(allcategory);
  const filterItems = (category) => { 
    if (category === 'all') {
      setMenuItem(data);
      return;
    }
    const newItems = data.filter(item => item.category === category);
    setMenuItem(newItems);
  }

  console.log(data);
  return (
    <div className="App">
      <h1>Our Menu</h1>
      <Categories filterItems={filterItems} categories={allcategory} />
      <Menu items={MenuItem} />
    </div>
  );
}

export default App;
