import React from 'react';
import './Header.css';

const Header = (props) => {

    

    

    return (



        <div className="header-area">
          
           <div>
           <h2>Name : {props.name}</h2>
            <h2>Price : {props.price}</h2>
            <p>Author : {props.author}</p>
            <button className="enroll-now"
            onClick={() => props.handleAddCourse(props.courseadd)}
            >Enroll Now</button>
           </div>
           <div className="shop-cart">
               

           </div>
        </div>
    );
};

export default Header;