import React, { useState } from 'react';
import axios from 'axios';

const OpenAIRequest = () => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const generateResponse = async () => {
    if (!userInput.trim()) {
      return; // Prevent sending empty queries
    }

    const userMessage = userInput.trim();
    setConversation(conversation => [...conversation, { sender: 'You', text: userMessage }]);
    setUserInput(''); // Clear input after sending

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: userMessage,
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Ensure you have this variable in your .env file
          },
        }
      );

      const botResponse = response.data.choices[0].text.trim();
      setConversation(conversation => [...conversation, { sender: 'Bot', text: botResponse }]);
    } catch (error) {
      console.error('Error fetching response:', error);

      let errorMessage = "Sorry, there was a problem with the request.";
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.log("Data:", error.response.data);
        console.log("Status:", error.response.status);
        console.log("Headers:", error.response.headers);
        errorMessage = "There was a problem with the request. Please try again later.";
      } else if (error.request) {
        // The request was made but no response was received
        console.log("Request:", error.request);
        errorMessage = "No response was received from the server. Please check your internet connection.";
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error:', error.message);
        errorMessage = "There was an error with the setup of the request.";
      }

      setConversation(conversation => [...conversation, { sender: 'Bot', text: errorMessage }]);
    }
  };

  return (
    <div>
      <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '10px' }}>
        {conversation.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'You' ? 'right' : 'left' }}>
            <p style={{ fontWeight: 'bold' }}>{msg.sender}</p>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
        placeholder="Type your message here..."
        style={{ marginRight: '10px', width: 'calc(100% - 60px)' }}
        onKeyDown={e => e.key === 'Enter' && generateResponse()}
      />
      <button onClick={generateResponse}>Send</button>
    </div>
  );
};

export default OpenAIRequest;
