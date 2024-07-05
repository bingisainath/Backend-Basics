import React, { useState } from 'react';
import axios from 'axios';

const RequestResponse = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);

  const handleRequest = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: input,
      body: 'This is a test',
      userId: 1
    })
    .then(response => setResponse(response.data))
    .catch(error => console.error('Error with request:', error));
  };

  return (
    <div>
      <h1>Request Response</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleRequest}>Send Request</button>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RequestResponse;
