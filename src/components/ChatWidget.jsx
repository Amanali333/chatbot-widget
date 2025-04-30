const [open, setOpen] = useState(false);
const toggleChat = () => setOpen(!open);

return (
  <>
    <div onClick={toggleChat} style={iconStyle}>
      💬
    </div>

    {open && (
      <div style={chatBoxStyle}>
        <iframe
          src="https://chat-ui-six-lilac.vercel.app"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
    )}
  </>
);
