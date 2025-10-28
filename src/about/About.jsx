import './about.css';
import xatoAbout from '../photos/xato8.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './nav/Navigation.jsx';
import { MainInfo } from './nav/MainInfo.jsx';
import { Education } from './nav/Education.jsx';
import { Experience } from './nav/Experience.jsx';

export function About() {
    return (
        <div className="about" id="about">
            <div className="about-div">
                <BrowserRouter>

                    <div className="about-img">
                        <img src={xatoAbout} alt="" />
                    </div>

                    <div className="headings">
                        <h1>ჩემს შესახებ</h1>
                        <Navigation />


                        <div className="sentenses">
                            {/* <Routes>
                                <Route path="/main" element={<MainInfo />} />
                                <Route path="/education" element={<Education />} />
                                <Route path="/experience" element={<Experience />} />
                        
                            </Routes> */}

                            <Routes>
                                <Route index element={<MainInfo />} />  {/* default */}
                                <Route path="main" element={<MainInfo />} />
                                <Route path="education" element={<Education />} />
                                <Route path="experience" element={<Experience />} />
                            </Routes>
                        </div>
                    </div>



                </BrowserRouter>
            </div>
        </div>
    );
}
