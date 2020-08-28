import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './fakeData/Courses.js';
import Header from './components/Header/Header';
import Enroll from './components/Enroll/Enroll';




function App() {

  
  const [onlines, setCourse] = useState([0, 10]);
  

  const handleAddCourse = (courseadd) =>{
    console.log('Product added', courseadd);
  }

  useEffect(() =>{
    setCourse(data);
  }, []);

  

  return (

    <div>

      <Enroll></Enroll>

     {
       onlines.map(data => 
       <Header handleAddCourse = {handleAddCourse}
        name={data.name} 
       price={data.price} 
       author={data.author}>{data.name}</Header> )
     } 

    </div>


  )
}

export default App;
