import React from 'react';

function Menu({items}) {
  return (
    <div>
      {items.map(menuitem => {
        const { id, title, img, price, category, desc} = menuitem;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <p>{price}</p>
            <h3>{category}</h3>
            <img src={img} alt={title} width="200" />
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
