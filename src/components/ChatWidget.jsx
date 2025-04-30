import React, { useState } from 'react';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen(!open);

  return (
    <div
      style={{
        pointerEvents: open ? "auto" : "none", // ✅ lets clicks through when closed
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
      }}
    >
      {/* Floating Icon */}
      <div
        onClick={toggleChat}
        style={{
          pointerEvents: "auto", // ✅ icon must stay clickable
          position: 'absolute',
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

      {/* Chat container (only if open) */}
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: '90px',
            right: '20px',
            width: '350px',
            height: '500px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: 'white',
            zIndex: 9998,
            overflow: 'hidden',
          }}
        >
          <iframe
            src="https://chat-ui-six-lilac.vercel.app"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Chat"
          />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
