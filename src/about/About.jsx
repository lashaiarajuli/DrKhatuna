import './about.css';
import xatoAbout from '../photos/xato8.png';
import { useState, useEffect } from 'react';
import { Navigation } from './nav/Navigation.jsx';
import { MainInfo } from './nav/MainInfo.jsx';
import { Education } from './nav/Education.jsx';
import { Experience } from './nav/Experience.jsx';

export function About() {
  const [activeTab, setActiveTab] = useState("main");

  // Ensure default stays “main” even on refresh
  useEffect(() => {
    setActiveTab("main");
  }, []);

  return (
    <div className="about" id="about">
      <div className="about-div">
        <div className="about-img">
          <img src={xatoAbout} alt="" />
        </div>

        <div className="headings">
          <h1>ჩემს შესახებ</h1>

          {/* Pass state to Navigation */}
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="sentenses">
            {activeTab === "main" && <MainInfo />}
            {activeTab === "education" && <Education />}
            {activeTab === "experience" && <Experience />}
          </div>
        </div>
      </div>
    </div>
  );
};