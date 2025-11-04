import './about.css';
import xatoAbout from '../photos/xato8.png';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './nav/Navigation.jsx';
import { MainInfo } from './nav/MainInfo.jsx';
import { Education } from './nav/Education.jsx';
import { Experience } from './nav/Experience.jsx';

export function About() {
  return (
    <div className="about" id="about">
      <div className="about-div">
        <div className="about-img">
          <img src={xatoAbout} alt="" />
        </div>

        <div className="headings">
          <h1>ჩემს შესახებ</h1>

          <Navigation />

          <div className="sentenses">
            {/* <Routes>
              <Route index element={<MainInfo />} />
              <Route path="education" element={<Education />} />
              <Route path="experience" element={<Experience />} />
            </Routes> */}

            <Routes>
  <Route path="/" element={<MainInfo />} />
  <Route path="/DrKhatuna" element={<MainInfo />} />
  <Route path="education" element={<Education />} />
  <Route path="experience" element={<Experience />} />
</Routes>

            
          </div>
        </div>
      </div>
    </div>
  );
}