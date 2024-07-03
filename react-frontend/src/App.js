// src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   // Establish connection to the SSE endpoint
  //   const eventSource = new EventSource('http://localhost:8888/stream');

  //   eventSource.onmessage = function(event) {
  //     setMessages(prevMessages => [...prevMessages, event.data]);
  //   };

  //   eventSource.onerror = function() {
  //     console.error("EventSource failed.");
  //     eventSource.close();
  //   };

  //   // Clean up on unmount
  //   return () => {
  //     eventSource.close();
  //   };
  // }, []);

  const StartServerEvent = () => {
    // Establish connection to the SSE endpoint
    const eventSource = new EventSource('http://localhost:8888/stream');

    eventSource.onmessage = function(event) {
      setMessages(prevMessages => [...prevMessages, event.data]);
    };

    eventSource.onerror = function() {
      console.error("EventSource failed.");
      eventSource.close();
    };
  }

  

  return (
    <div className="App">
      <h1>Server-Sent Events from Node.js</h1>
      <button onClick={StartServerEvent}> Click Here to start Server Side Events</button>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
