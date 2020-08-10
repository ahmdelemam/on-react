import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DealerList from './DealersList'
import './bootstrap.min.css'

function App() {
  const [dealers, setDealers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/api/dealers')
      .then(response => {
        setDealers(response.data)
      })
  }, [])

  return (
    <DealerList dealers={dealers}/>
  );
}

export default App;
