// // src/App.js
// import React, { useEffect, useState } from 'react';

// function App() {
//   const [messages, setMessages] = useState([]);

//   const StartServerEvent = () => {
//     // Establish connection to the SSE endpoint
//     const eventSource = new EventSource('http://localhost:8888/stream');

//     eventSource.onmessage = function(event) {
//       setMessages(prevMessages => [...prevMessages, event.data]);
//     };

//     eventSource.onerror = function() {
//       console.error("EventSource failed.");
//       eventSource.close();
//     };
//   }

//   return (
//     <div className="App">
//       <h1>Server-Sent Events from Node.js</h1>
//       <button onClick={StartServerEvent}> Click Here to start Server Side Events</button>
//       <ul>
//         {messages.map((message, index) => (
//           <li key={index}>{message}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Chat from './components/Chat';
import FetchData from './components/FetchData';
import RequestResponse from './components/RequestResponse';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Chat</Link></li>
          <li><Link to="/fetch-data">Fetch Data</Link></li>
          <li><Link to="/request-response">Request Response</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/fetch-data" element={<FetchData />} />
        <Route path="/request-response" element={<RequestResponse />} />
      </Routes>
    </div>
  );
};

export default App;
