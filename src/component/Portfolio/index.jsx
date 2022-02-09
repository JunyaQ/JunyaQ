//import react from "react";
import ProjectList from "../../utils/ProjectList"
import Footer from "../Footer";
//import projectimage from '../../assets/projects/projectimage.png'

function Portfolio(){
  
    return (
      <section>
       
        <ProjectList/>
        <footer className="footer">
        <Footer></Footer>
        </footer>
      </section>
    );
  }


export default Portfolio;