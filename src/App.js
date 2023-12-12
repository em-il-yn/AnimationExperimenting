// App.js
import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './main';
// import SecondPage from './secondPage';
import './styles.css';


const App = () => {
  return (
    <Main />
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<Main />} />
    //       <Route path="/second-page" component={SecondPage} />
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
