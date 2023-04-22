import React from 'react';
import '../App.css';
import Table from './Table.js';
  
const Home = () => {
  return (
    <div>
      <header className = "Filter">
      </header>
      <header className="Table">
          <Table/>
      </header>
    </div>
  );
};
  
export default Home;