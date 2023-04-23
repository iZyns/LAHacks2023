import React from 'react';
import '../App.css';
import Table from './Table.js';
import NavigationBar from '../components/navigationBar';
  
const Home = () => {
  return (
    <div>
      <NavigationBar />
      <header className = "Filter">
      </header>
      <header className="Table">
          <Table/>
      </header>
    </div>
  );
};
  
export default Home;