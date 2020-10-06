import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Components/Chart'
import Navigation from './Components/Navigation'

const App= ()=> {

  const initialDataState = {
    labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    datasets:[{
        label:'Population',
        data:[
            617594,
            181045,
            153060,
            106519,
            105162,
            95072
          ],
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
        
    

    }]
}

  const [data, setData] = useState(initialDataState)

  return (
    <div className="App">
      <header >
        <Navigation />

       
      </header>
      <Chart data={data} />
    </div>
  );
}

export default App;
