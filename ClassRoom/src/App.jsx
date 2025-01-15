import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import InnerPage from "./Pages/InnerPage";
import AssignmetntPage from "./Pages/AssignmetntPage";
import RecordingPage from "./Pages/RecordinigPage";
import { ToggleProvider } from "./Context/ToggleContext";


const App = () => {
  return (
    <ToggleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/innerpage/:id" element={<InnerPage />} />
          <Route path="/assignment" element={<AssignmetntPage />} />
          <Route path="/recording" element={<RecordingPage />} />
        </Routes>
      </BrowserRouter>
    </ToggleProvider>
  );
};

export default App;
