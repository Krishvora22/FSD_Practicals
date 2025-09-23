import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  const element = (
    <div>
      <h1> Welcome to CHARUSAT!!!! </h1>
      <h2> It is {new Date().toLocaleDateString()} </h2>
      <h2> It is {new Date().toLocaleTimeString()} </h2>
    </div>
  );

  root.render(element);
}

setInterval(tick, 1000);


// import React, { useState, useEffect } from "react";

// function App() {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer); // cleanup on unmount
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Welcome to CHARUSAT!!!!</h1>
//       <h2>
//         It is{" "}
//         {currentTime.toLocaleDateString(undefined, {
//           month: "numeric",
//           day: "numeric",
//           year: "numeric",
//         })}
//       </h2>
//       <h2>
//         It is{" "}
//         {currentTime.toLocaleTimeString(undefined, {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         })}
//       </h2>
//     </div>
//   );
// }

// export default App;
