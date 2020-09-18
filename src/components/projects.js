import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Portfolio 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/63683598/87609679-6cd2db80-c6c0-11ea-9dca-663b5df73b68.png) center / cover'}}></CardTitle>
            <CardText>
                   HTML Portfolio: Allows users to learn about my projects, how to contact me, and a short bio. This was created during the first few weeks of the program. Tools / languages used were HTML, CSS, and Bootstrap
            </CardText>
            <CardActions border>
            <Button href="https://shandfield.github.io/shelby-handfield-portfolio/ ">Depoly Link</Button>
            <Button href ="https://github.com/shandfield/shelby-handfield-portfolio">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Portfolio 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/wiuCJqi.gif) center / cover'}}></CardTitle>
            <CardText>
              React Portfolio: This is my living portfolio, based on my first portfolio that was more heavily JavaScript coded. I changed my portfolio into a React based application. It allows a user to see my bio, projects, education/resume information, and contact information.  Lead and only developer. Tools / languages used were the Create React app and React based coding, along with HTML, CSS/Bootstrap React for the styling. 
            </CardText>
            <CardActions border>
            <Button href="https://react-shandfield-portfolio.herokuapp.com/">Heroku</Button>
            <Button href ="https://github.com/shandfield/react-my-portfolio">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        {/* MEAN/MERN 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/Ii9AqvH.gif) center / cover'}} ></CardTitle>
            <CardText>
            Employee Directory:This project was created with Random User Generator API to create a list of employees that would allow the user to search for certain employees based on name. It also allows a user to sort the list from the toggle buttons in the column. Lead and only developer. Tools / languages used were the Create React app, React based coding, use of integrating API’s with routes, HTML and CSS. 
            </CardText>
            <CardActions border>
            <Button href="https://still-citadel-37848.herokuapp.com/">Heroku</Button>
            <Button href ="https://github.com/shandfield/employee-directory">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* MEAN/MERN 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/KZEm4Mu.gif) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Budget Tracker: This program gives the User an input field to give a name to the transaction and to enter in the amount. Then there are two buttons that allow the User to select add or subtract from budget. Lead and only developer. Tools / languages used were node.js, MongoDB, mongoose, express, service worker for online/offline capability, logger, compression, Heroku for deployment, HTML, CSS, and JavaScript. 
            </CardText>
            <CardActions border>
            <Button href="https://dry-castle-35930.herokuapp.com/">Heroku</Button>
            <Button href ="https://github.com/shandfield/Budget-Tracker">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* MEAN/MERN 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/h7KxEdu.gif) center / cover'}} >React Project #3</CardTitle>
            <CardText>
            Fitness Tracker: This project allows a user to enter in workout data that is either cardio or weights, pending the exercise type it will collect certain information from the user. The user can then save this information to the current workout DB or pick to create a new workout DB with new data. This data is stored and shown in a graph for the user to see their workout progress. Lead and only developer. Tools / languages used were Heroku for deployment, mongoose, MongoDB, express, logger, and JavaScript. 
            </CardText>
            <CardActions border>
              <Button href="https://pure-beach-44477.herokuapp.com/">Heroku</Button>
              <Button href ="https://github.com/shandfield/fitness-tracker">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
           {/* MEAN/MERN 4 */}
         {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url() center / cover'}}></CardTitle>
            <CardText>
                   New project info here
            </CardText>
            <CardActions border>
            <Button href="">Heroku</Button>
            <Button href ="">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> */}
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
         {/* Express, JSON, MySQL, and Node 1 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/emjXOHF.gif) center / cover'}} ></CardTitle>
            <CardText>
            Note Taker:This application allows a user to create notes with a title and text, then it will let the user delete any of the entries and edit them. Lead and only developer.Tools / languages used were HTML, CSS, Express, MySQL, and JSON. 
            </CardText>
            <CardActions border>
            <Button href="https://mighty-atoll-09944.herokuapp.com/ ">Heroku</Button>
            <Button href ="https://github.com/shandfield/note-taker">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Express, JSON, MySQL, and Node 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/D06pZ5e.gif) center / cover'}}></CardTitle>
            <CardText>
              Burger Logger: This project allows a user to create a burger, then decide if they want to devour the burger at that time or if they want to eat it later. It is broken down into devoured and not eaten burgers yet, and the user can also delete entries. Lead and only developer. Tools / languages used Heroku for deployment, handlebars, express and MySQL. 
            </CardText>
            <CardActions border>
            <Button href="https://fierce-mesa-26542.herokuapp.com/">Heroku</Button>
            <Button href ="https://github.com/shandfield/Burger--Logging">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Express, JSON, MySQL, and Node 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/QwXbhIj.gif) center / cover'}}></CardTitle>
            <CardText>
            Employee Tracker: This project is initiated through the terminal, to create a directory for employees. It runs via npm start and prompts a userMenu asking if they want to Create, View, Update and Exit. Lead and only developer. Tools / languages used were HTML, MySQL, and Node modules. 
            </CardText>
            <CardActions border>
              <Button href="https://drive.google.com/file/d/1vVHGysR2Q78DLTxZKJHF1WGmFW55If5j/view ">Demo Video</Button>
              <Button href ="https://github.com/shandfield/Employee-Tracker/">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
         {/* Group 1 */}
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/AHQ4ZNv.gif) center / cover'}}></CardTitle>
            <CardText>
                   Pet Array: Created an application that allows pet owners to log in/log out to save their data, to enter in their pet’s name, date of birth, and notes about their pet. There is also a calendar to add important events regarding their pet(s). Worked in a team of five, and I was part of a team of two that worked mostly on the back-end development. I also focused on the API, the routes, and setting up the calendar functionality. Tools / languages used were React, mongoose, MongoDB, Express, ReactStrap, CSS, JavaScript, HTML, and Authentication.
            </CardText>
            <CardActions border>
            <Button href="https://shielded-dusk-71269.herokuapp.com/ ">Heroku</Button>
            <Button href ="https://github.com/shandfield/pet-app">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Group 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.imgur.com/asfD7ta.gif) center / cover'}}></CardTitle>
            <CardText>
              Donut Seeker: The project allows a user to search for any donut stores near them by entering in a zip code or by clicking the find donut button. Group of four, and I was part of the back-end development team of two. I helped develop the code to connect the functionality for the routes to Google Maps and Google Places API’s. Tools / languages used were HTML, CSS- Bulma, JavaScript, JQueryUI, Google Maps and Places API.
            </CardText>
            <CardActions border>
            <Button href="https://britt1216.github.io/donut-seeker/">Heroku</Button>
            <Button href ="https://github.com/shandfield/donut-seeker">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
         </div>
      )
    }

  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Portfolios</Tab>
          <Tab>MEAN/MERN</Tab>
          <Tab>Express, JSON, MySQL, and Node</Tab>
          <Tab>Group Collaborations</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
