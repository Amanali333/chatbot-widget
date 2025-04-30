  import React, { useState } from 'react';

  const ChatWidget = () => {
    const [open, setOpen] = useState(false);

    const toggleChat = () => setOpen(!open);

    return (
      <div>
        {/* Floating Icon */}
        <div
          onClick={toggleChat}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#007bff',
            color: '#fff',
            fontSize: '28px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 9999,
          }}
        >
          💬
        </div>

        {/* Chat container */}
        {open && (
          <div
            style={{
              position: 'fixed',
              bottom: '90px',
              right: '20px',
              width: '350px',
              height: '500px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              backgroundColor: 'white',
              zIndex: 9998,
              overflow: 'hidden',
            }}
          >
            {/* 👉 This must be your real chatbot, not the widget page */}
            <iframe
              src="https://chat-ui-six-lilac.vercel.app"
              title="Chatbot"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            />
          </div>
        )}
      </div>
    );
  };

  export default ChatWidget;
