//import react from "react";
import Footer from "../Footer";
import resume from "../../assets/resume.pdf"

function Resume(){
    return(
        <section className="resume">
        
        <h1> Junya Qiao</h1>
        <h3>Web Full-stack developer</h3>
        <button><a className="downloadlink" href={resume} download="Junya_Qiao_resume.pdf">Download PDF</a></button>
        <hr/>

        <h3><em>Qualifications</em></h3>
        <ul>
            <li>Fluent and articulate in both Mandarin and English. </li>
            <li>Organized, efficient and a fast learner with multi-tasking strength</li>
            <li>Responsible, excellent teamwork and communication skills, adapt to a fast-paced working environment.</li>
            <li>Reception, customer service and cash handling experience</li>
            <li>Expert in MS Office and experience in POS and Shopify systems.</li>
        </ul>
        <hr/>

        <h3><em>Work Experience</em></h3>
        <p><b>Unionville Montessori school, Markham</b> --Teaching assistant</p>
        <p>Oct 2021- Present</p>
        <ul>
            <li>Assist teacher to organize educational materials, daily plan, take home and homework plan</li>
            <li>Independently supervised class of 20-30 students during arrival and dismissal, outdoor activities, as well as lunch and snack break.</li>
            <li>Help students when they have questions </li>
        </ul>
        <br/>
        <p><b>Goldensun property investment， Markham</b> --Administrative assistant</p>
        <p>Sept 2020- Oct 2021</p>
        <ul>
            <li>Month to month bookkeeping with respect to categories</li>
            <li>Reply to guest and house owner enquiries and questions about company houses or services, make agenda for cleaning system with respect to the enquiries and reservations</li>
            <li>Promote service and special offers</li>
            <li>Respond to emails, hand out mails, answer incoming calls</li>
            <li>File and update documents, communicate between the guests, house owners, banks and property developers.</li>   
        </ul>
        <hr/>
        <h3><em>Education</em></h3>
        <p><b>Brock University， St.Catharines</b>-- Hornor bachelor degree </p>
        <p>Sept 2015- Dec 2018</p>
        <p>Graduated from Brock University with an honour bachelor’s science degree in computer science and minor in economics. </p>
        <br/>
        <p><b>The University of Toronto,  coding Bootcamp</b>-- Full stack develop </p>
        <p>Aug 2021- Feb 2022</p>
        <p>6 Months of online coding study</p>


        

        
        
        <footer className="footer">
        <Footer></Footer>
        </footer>
        </section>

    )
}

export default Resume;