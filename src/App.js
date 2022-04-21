import React from 'react';
import './App.css';
import Header from  './Header';
import Feed from './Feed';
function App() {

  return (
    <div className="app">
        <>
          {/* Header  */}
          <Header />
          
          <div className="feed_body">
            {/* Feed */}
            <Feed />
          </div>
          
          
        </>
    </div>
  );
}

export default App;
