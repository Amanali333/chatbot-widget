import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatWidgetPage from "./pages/ChatWidgetPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/widget" element={<ChatWidgetPage />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
