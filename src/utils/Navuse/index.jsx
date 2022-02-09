import React, { useState } from 'react';
import About from '../../component/About';
import Contact from '../../component/Contact';
import Main from '../../component/Main';
import Nav from '../../component/Nav';
import Portfolio from '../../component/Portfolio';
import Resume from '../../component/Resume';
import Footer from '../../component/Footer';

function Navuse() {
  const [currentPage, handlePageChange] = useState('Main');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    // YOUR CODE HERE
    switch(currentPage){
      case 'About':
        return<About/>
      case 'Contact':
        return<Contact/>
      case 'Nav':
        return<Nav/>
     case 'Portfolio':
         return <Portfolio/>
     case 'Resume':
        return <Resume/>
      default:
        return<Main/>
      
    }
  };

  return (
    <section>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          // YOUR CODE HERE
          renderPage()
          //
        }
      </div>
     
    </section>
    
  );
}

export default Navuse;
