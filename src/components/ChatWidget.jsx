import React, { useState } from "react";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen(!open);

  return (
    <div style={{ width: "100%", height: "100%" }}>
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

      {/* Chat Container */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '350px',
            height: '500px',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            zIndex: 9998,
            overflow: 'hidden',
          }}
        >
          <iframe
            src="https://chat-ui-six-lilac.vercel.app"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Chat UI"
          />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
