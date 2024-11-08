"use client"
import { useState } from "react";

export default function Home() {

    const [visible, VisibleDiv] = useState(1);

    const div1 = () => VisibleDiv(1);
    const div2 = () => VisibleDiv(2);
    const div3 = () => VisibleDiv(3);
    const div4 = () => VisibleDiv(4);
    const div5 = () => VisibleDiv(5);
  
  return (
    <div className="resume">
      <div id="buttons">
        <ul>
          <li>
            <button onClick={div1} id="home">Home</button>
          </li>
          <li>
            <button onClick={div2} id="edu">Education</button>
          </li>
          <li>
            <button onClick={div3} id="skills">Skills</button>
          </li>
          <li>
            <button onClick={div4} id="exp">Experience</button>
          </li>
          <li>
            <button onClick={div5} id="contact">Contact</button>
          </li>
        </ul>
      </div>
      <div id="static" className="info">
        <img src="/me.jpg" alt="" /> <br />
        <h1>Hi, I&apos;m Abdul Hadi Faisal</h1>
        <h2>Frontend Developer</h2>
        <br />
        <p>
          I am a passionate and dedicated frontend developer with foundations in
          HTML, CSS, and TypeScript. I have a keen eye for design and a strong
          understanding of user experience.
        </p>
      </div>
      { visible === 1 && <div id="dynamic" className="info">
          <h1 className="my-44">MY RESUME</h1>
        </div>}
      { visible === 2 && <div id="dynamic" className="info"> 
          <h1>EDUCATION</h1>
          <br />
          <br />
          <h3>Matriculation</h3>
          <p>Prince Aly Boys School, Malir    2020-22</p>
          <br />
          <h3>Intermediate</h3>
          <p>New Fazaia Intermediate College, Karsaz    2023-24</p>
          <br />
          <h3>GIAIC</h3>
          <p>HTML, CSS and TypeScript and Nextjs</p>
          <br />
          <h3>Finance</h3>
          <p>Student of Finance at Tabani&apos;s School of Accountancy</p>
        </div>}
      { visible === 3 && <div id="dynamic" className="info"> 
          <h1>SKILLS</h1>
          <br />
          <br />
          <h3>Frontend Developer</h3>
          <p>HTML5, CSS, Tailwind CSS and TypeScript</p>
          <p>Reactjs and Nextjs </p>
          <br />
          <h3>Content Writer</h3>
          <ul className="text-center">
            <li>Business letters</li>
            <li>Essays</li>
            <li>Articles</li>
            <li>Blog posts</li>
            <li>Copywriting</li>
          </ul>
        </div>}
      { visible === 4 && <div id="dynamic" className="info">
          <h1>EXPERIENCE</h1>
          <br /><br />
        </div>}
      { visible === 5 && <div id="dynamic" className="info">
          <h1>CONTACT</h1>
          <br /><br />
          <span><img className="h-8 m-auto" src="/email.png" alt="" /> <h3>Email</h3> </span>
          <p>abdulhadifaisal44@gmail.com</p>
          <br />
          <span><img className="h-8 m-auto" src="/ws.png" alt="" /> <h3>Phone</h3> </span>
          <p>0324 2665924</p>
          <br />
          <span><img className="h-8 m-auto" src="/social.png" alt="" /> <h3>Socail Media</h3> </span>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/abdul-hadi-faisal-91b64a2b4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BS%2BctyNW8RKWobF010ZNEtg%3D%3D">abdulhadifaisal</a></p>
          <p>Discord ID: alphaokorema</p>
          <p>Instagram ID: alphaokorem</p>
        </div>}
    </div>
  );
}
