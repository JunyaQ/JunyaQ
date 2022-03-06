
import React, { useState } from 'react';

function ProjectList(){
    const [project] =useState([
      {
        project_name: 'Go Game Go',
        description: 
        'This is a game collection application. User can check the game and look at the reivew of the game, also can add own review of the game',
        Role: 'Group project -- front end development',
        Tools: 'HTML, CSS, Javascript, MySQL, Node.js, Handlebar.js',
        webpage: 'https://github.com/JunyaQ/GoGamesGo',
        deployed:'https://desolate-hollows-73074.herokuapp.com/'
      },
      {
        project_name:"Train to the Beat",
        description:"Train to the Beat is a music search tool that allows tracks to be filtered by tempo and then by genre to create playlists that are tailored to a user’s specific training. It also can show the weather and street based on the location",
        Role: 'Group project -- Javascript development',
        Tools: 'HTML, CSS, Javascript, API',
        webpage: "https://github.com/JunyaQ/activity-music",
        deployed:"https://ScalexanderB.github.io/activity-music/"
      },
      {
        project_name:"A simple shop",
        description:"This is a shopping app that allow user to shop online by adding item to the cart and complete a checkout process. User can log into the account to complete the payment and check their order history.",
        Role: 'Sole author',
        Tools: 'React.js, Redux, GraphQL, Node.js ',
        webpage: "https://github.com/JunyaQ/Ashop",
        deployed:"https://asimpleshop.herokuapp.com/"
      },
      {
        project_name:"Quiz",
        description:"This application is a oneline quiz application. It has a timer and user has a min to complete the test. If the answer is wrong, it will deduct 10 seconds from the timer. When the timer is 0 or finish all the test, you can see your score and enter your name to save the result.",
        Role: 'Sole author',
        Tools: 'HTML, CSS, Javascript',
        webpage:"https://github.com/JunyaQ/Quiz",
        deployed:"https://junyaq.github.io/Quiz/"
      },
      {
        project_name:"StarWars Coffee",
        description: "It is a webpage for both customer and owner. The customer can view the menu and the shop owner can login and add item to the menu",
        Role: 'Sole author',
        Tools: 'Javascript, React, GraphQL, Node.js, React-Bootscrapt, MongoDB',
        webpage:'https://github.com/JunyaQ/coffee',
        deployed:'https://starwarcoffee.herokuapp.com/'
      },
      {
        project_name: 'Offline Bank tracker',
        description: 
        'This application can store the deposit transaction and spend/withdraw transaction. This application can use for both with or without internet connect. When the internet is offline, the application will use IndexDB, Service workers, and Web Manifest for offline and will upload all information to the page when internet back to connection.This application is created with using MongoDB, therefore, no database setup needed.',
        Role: 'Sole author',
        Tools: 'HTML, CSS, Javascript, Node.js, MongoDB',
        webpage: 'https://github.com/JunyaQ/BankTracker',
        deployed:"https://budget-tracker-offline-use.herokuapp.com/"
      },
      {
        project_name: 'Weather Dashboard',
        description:
          'This is a website that can showing the current weather as well as 5 days prediction based on the name of the city you searched for. It also store the history of search on the left side.',
        Role: 'Sole author',
        Tools: 'HTML, CSS, Javascript, API',
        webpage: 'https://github.com/JunyaQ/bootcamp-challenge-weatherAPI',
        deployed: "https://junyaq.github.io/bootcamp-challenge-weatherAPI/"
      },
        
    ])
        //project.map((image,i)
        const [ProjectList, setList] = React.useState(project);
      return(
      <div>
<div class="row">
      {ProjectList.map((project,i) => (
        
<div class="column">
  <div class="content">
  <img src={require(`../../assets/projects/${i}.jpg`)}className='project_img'></img>
  <h4 className="project_name">{project.project_name}</h4>
    <p className="project_description">{project.description}</p>
    <p className='Role'>Role: {project.Role}</p>
    <p className='Tools'>Tools using: {project.Tools}</p>
    <p ><a href={project.webpage} className='link'>view on Github</a></p>
    <p><a href={project.deployed} className='link'>view deployed page</a></p>
  </div>
</div>

       
        
      ))
      }
      </div>

      </div>
  );
};
     
export default ProjectList;