import React from "react";
import person from '../../assets/person.JPG';
import fb from '../../assets/fb.JPG';
import gmail from '../../assets/gmail.JPG';
import linkedin from '../../assets/in.JPG';
import ProgressBar from "../../utils/Progressbar";
import Footer from "../Footer";



function About(){
  

return (
<section>
<div className="flexwrap aboutMyself">
<div className="col">
<img src={person} alt="myself" className="left"></img>
<div className="col left">
    <h1 className="mySkills">My Skills</h1>
    <div className="skillBar">
    <h5 className="item">HTML</h5> 
    <ProgressBar bgcolor='#fe938c' completed='76' className="bar" ></ProgressBar>
    </div>

    <div className="skillBar">
    <h5 className="item">CSS</h5>
    <ProgressBar bgcolor='#fe938c' completed='76'className="item bar" ></ProgressBar>
    </div>

    <div className="skillBar">
    <h5 className="item">Javascript</h5>
    <ProgressBar bgcolor='#fe938c' completed='76'className="item bar" ></ProgressBar>
    </div>

    <div className="skillBar">
    <h5 className="item">Node</h5>
    <ProgressBar bgcolor='#fe938c' completed='76'className="item bar" ></ProgressBar>
    </div>

    <div className="skillBar">
    <h5 className="item">MySQL</h5>
    <ProgressBar bgcolor='#fe938c' completed='76'className="item bar" ></ProgressBar>
    </div>

    <div className="skillBar">
    <h5 className="item">MongoDB</h5>
    <ProgressBar bgcolor='#fe938c' completed='76'className="item bar" ></ProgressBar>
    </div>

    <div className="skillBar">
    <h5 className="item">React</h5>
    <ProgressBar bgcolor='#fe938c' completed='76'className="item bar" ></ProgressBar>
    </div>

    <div className="skillBar">
    <h5 className="item">JQuery</h5>
    <ProgressBar bgcolor='#fe938c' completed='76'className="item bar" ></ProgressBar>
    </div>

    <div className="skillBar">
    <h5 className="item">Java</h5>
    <ProgressBar bgcolor='#fe938c' completed='76'className="item bar" ></ProgressBar>
    </div>
   
</div>
</div>

<div className="col">
<h1 className="aboutTitle">About Myslef</h1>
<p>Hi,I am Junya Qiao, Innovative optimized solution seeker. Excited to be at the development phase of my new career as a web developer.</p>

<a href='https://www.facebook.com/junya.qiao.9'><img src={fb} alt="facebook icon" className="icon"></img></a>
<a href='https://www.linkedin.com/in/junya-q-219798193/'><img src={linkedin} alt="linkedin icon" className="icon"></img></a> 
<a href="mailto:junyaqiao@gmail.com"><img src={gmail} alt="gamil icon" className="icon"></img></a>



</div>
</div>

<footer className="footer">
    <Footer></Footer>
</footer>




</section>
)
}

export default About;