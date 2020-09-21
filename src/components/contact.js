import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { Link } from "react-router-dom";



class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Shelby Handfield</h2>
            <img
              src="https://user-images.githubusercontent.com/63683598/87608932-680d2800-c6be-11ea-8cc1-b07f0937e549.jpg"
              alt="headshot"
              style={{height: "250px",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 15,
              overflow: 'hidden'}}
               />
             <p style={{ width: "75%", margin: "auto", paddingTop: "1em"}}>Please feel free to contact me via telephone, email, LinkedIn, or Github.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: "30px", fontFamily: "Poppins", textAlign: "center"}}>
                    <i className="fa fa-phone-square" aria-hidden="true" style={{color:"#29e2c4"}}/>
                    (970) 744-9203
                  </ListItemContent>
                </ListItem>

               <ListItem>
                  <ListItemContent style={{fontSize: "30px", fontFamily: "Poppins", textAlign: "center", color: "black"}}>
                  <Link to="/contactus" onClick= {this.handleClick}>
                    <i className="fa fa-envelope" aria-hidden="true" style={{color:"#29e2c4"}}/>
                  </Link>
                    Click to Send Me an Email
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: "30px", fontFamily: "Poppins", textAlign: "center", color:"#551A8B"}}>
                  <a href= "https://github.com/shandfield">
                    <i className="fa fa-github" aria-hidden="true" style={{color:"#29e2c4"}}/>
                      Github
                  </a>
                  
                 </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: "30px", fontFamily: "Poppins", textAlign: "center", color:"#551A8B"}}>
                  <a href= "https://www.linkedin.com/in/shelby-handfield-87ba6810b/">
                    <i className="fa fa-linkedin-square" aria-hidden="true" style={{color:"#29e2c4"}}></i>
                      LinkedIn
                  </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
