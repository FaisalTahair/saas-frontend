// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';



// const AIChat = () => {
//   const [messages, setMessages] = useState([
//     { sender: 'ai', text: 'Hi! How can I assist you today?' }
//   ]);
//   const [input, setInput] = useState('');
//   const messagesEndRef = useRef(null);

//   const handleSend = async () => {
//     if (!input.trim()) return;
  
//     const newMessage = { sender: 'user', text: input };
//     setMessages(prev => [...prev, newMessage]);
//     setInput('');
  
//     // Show "AI is typing..."
//     setMessages(prev => [...prev, { sender: 'ai', text: 'Typing...' }]);
  
//     try {
//       const res = await axios.post(
//         'https://api.openai.com/v1/chat/completions',
//         {
//           model: 'gpt-3.5-turbo',
//           messages: [
//             { role: 'system', content: 'You are a helpful AI assistant.' },
//             { role: 'user', content: input }
//           ]
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer YOUR_OPENAI_API_KEY`
//           }
//         }
//       );
  
//       const aiText = res.data.choices[0].message.content;
//       setMessages(prev => [...prev.slice(0, -1), { sender: 'ai', text: aiText }]);
  
//     } catch (err) {
//       setMessages(prev => [...prev.slice(0, -1), { sender: 'ai', text: 'Sorry, something went wrong 😞' }]);
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);
  
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-primary mb-4">AI Chat Assistant</h2>

//       <div className="bg-white rounded-xl shadow p-4 h-[70vh] flex flex-col">
//       <div className="flex-1 overflow-y-auto space-y-2 mb-4">
//   {messages.map((msg, index) => (
//     <div
//       key={index}
//       className={`p-2 rounded-md max-w-[75%] ${
//         msg.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'
//       }`}
//     >
//       <div className="text-sm font-medium">
//         {msg.sender === 'user' ? 'You' : 'AI'}
//       </div>
//       <div>{msg.text}</div>
//       <div className="text-xs text-gray-400 mt-1">
//         {new Date().toLocaleTimeString()}
//       </div>
//     </div>
//   ))}
  
//   {/* 👇 Add this after the .map */}
//   <div ref={messagesEndRef} />
// </div>


//         <div className="flex items-center gap-2">
//           <input
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             onKeyDown={e => e.key === 'Enter' && handleSend()}
//             className="flex-1 border rounded-lg px-4 py-2"
//             placeholder="Type your message..."
//           />
//           <button
//             onClick={handleSend}
//             className="bg-primary text-white px-4 py-2 rounded-lg"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIChat;
import React, { useState, useRef, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
console.log("Loaded KEY:", import.meta.env.VITE_OPENAI_API_KEY);



const AIChat = () => {
  const [messages, setMessages] = useState([{ sender: 'ai', text: 'Hi! How can I assist you today?' }]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInput('');

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: userMessage },
          ],
        }),
      });

      const data = await response.json();
      const aiMessage = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";

      setMessages(prev => [...prev, { sender: 'ai', text: aiMessage }]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'ai', text: 'Error contacting AI 😓' }]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">AI Chat Assistant</h2>

      <div className="bg-white rounded-xl shadow p-4 h-[70vh] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-2 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-md max-w-[75%] ${
                msg.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="flex items-center gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            className="flex-1 border rounded-lg px-4 py-2"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
