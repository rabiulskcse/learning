import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardClass from './components/CardClass';
import CardMapFuntion from './components/CardMapFuntion';
import ComponentUnderHood from './components/ComponentUnderHood';
import ReactBoostrap from './components/ReactBoostrap';
import ReactIcon from './components/ReactIcon';
import StateExample from './components/StateExample';
import HandlingEvents from './components/HandlingEvents';



// variable declearation
const cardHead = 'Card 1'
const cardDesc = 'Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text,'

//  create funtional components insede the app.js, here no need to import this funtion.
function Card1() {
  return <div >
    <div className='card'>
      <div className='cardHead'>{cardHead}</div>
      <div className='cardDesc'>{cardDesc}</div>
    </div>
  </div>
}

// console.log("data json",Data);


function App() {
  return (
    <div >
      <div className='heading'>First React Appp</div>
      {/* <Card1 /> */}
      {/* <CardClass name='Card Class 1' desc='card class desc' /> */}
      {/* <CardMapFuntion /> */}
      {/* <ComponentUnderHood /> */}
      {/* <ReactIcon /> */}
      {/* <ReactBoostrap /> */}
      {/* <StateExample /> */}

      <HandlingEvents />

    </div>
  );
}

export default App;
