import React from 'react'

import './App.css';

function App() {
  return (
    <>
      {({theme}) => (
        <React.Fragment>
          <div className={theme ? 'h-fit bg-slate-800' : 'h-fit'}>
          <React exact path="/" component={ProductList}></React>
          </div>
         
        </React.Fragment>
      )}
    </>
  );
}

export default App;
