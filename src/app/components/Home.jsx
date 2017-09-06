import React from 'react';
import { Footer } from './Footer.jsx';

const Home = () => (
    <div className="container">
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <h1> {"This is my Home page"} </h1>
            </div>
            <div className="col-xs-10 col-xs-offset-1">
                <h4> Hobbeies </h4>
                <Footer />
            </div>            
        </div>
    </div>
);
export default Home


