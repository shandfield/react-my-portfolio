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
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/63683598/91678082-cc1a6d00-eb01-11ea-9c98-7a2f25ddc47a.png) center / cover'}} >React Project #1</CardTitle>
            <CardText>
                   Employee Directory: A application that allows a user to see their full employee directory and search by first name.
            </CardText>
            <CardActions border>
            <Button href="https://still-citadel-37848.herokuapp.com/">Heroku</Button>
            <Button href ="https://github.com/shandfield/employee-directory">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/63683598/91678128-ece2c280-eb01-11ea-9d5e-efd0fa0beb32.png) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              Budget Tracker: A application that allows a user to enter in financial data to create a budget tracker whether they are online or offline.
            </CardText>
            <CardActions border>
            <Button href="https://dry-castle-35930.herokuapp.com/">Heroku</Button>
            <Button href ="https://github.com/shandfield/Budget-Tracker">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/63683598/91678004-9c6b6500-eb01-11ea-9eb1-32955e5a3a0a.png) center / cover'}} >React Project #3</CardTitle>
            <CardText>
            Fitness Tracker: This application utilizes allows a User to create a exercise within a workout database, add more to that single database or create a whole new workout database with new exercises. It also features a graph that shows what workouts were completed.
            </CardText>
            <CardActions border>
              <Button href="https://pure-beach-44477.herokuapp.com/">Heroku</Button>
              <Button href ="https://github.com/shandfield/fitness-tracker">Github Link</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>MEAN Projects</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>MEARN Projects</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Group Projects</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Portfolios</Tab>
          <Tab>MEAN</Tab>
          <Tab>MERN</Tab>
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
