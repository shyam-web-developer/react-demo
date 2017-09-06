import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx'

const Root = () => (
    <div className="container">
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <Header />
                <Main />
            </div>
        </div>
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">                
            </div>
        </div>
    </div>
)

export default Root 