import React from 'react';

function Categories({ filterItems }) {
  return (
    <div>
      <button
        onClick={() => {
          filterItems("all");
        }}
      >
        all
      </button>
      <button
        onClick={() => {
          filterItems("breakfast");
        }}
      >
        breakfast
      </button>
      <button
        onClick={() => {
          filterItems("shakes");
        }}
      >
        shakes
      </button>
      <button
        onClick={() => {
          filterItems("lunch");
        }}
      >
        lunch
      </button>
    </div>
  );
}

export default Categories;
