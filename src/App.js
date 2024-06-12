import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";    
import './App.css';
import Study from "./pages/Study";
import Bus from "./pages/Bus";
import Article from "./pages/Article";
import Articles from "./pages/Articles";

const App = () => {
  return (
<BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/study" element={<Study />} />
      <Route path="/bus" element={<Bus />} />
      <Route path="/profiles/:username" element={<Profile/>}/>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </BrowserRouter>
  );
};
export default App;
