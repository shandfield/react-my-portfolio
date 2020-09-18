import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: "center"}}>
             
            </div>

            <h2 style={{fontFamily: "Poppins"}}>Shelby Handfield</h2>
            <h4 style={{color: "grey",fontFamily: "Poppins"}}>Full Stack Web Developer</h4>
            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
            <p style={{fontFamily: "Poppins"}}>Full- stack web developer with an emphasis on back-end development utilizing skills gained from a psychology and criminal justice background to break into the world on the web. Recently acquired a certificate for Full Stack Web Development from the University of Denver. With flourishing skills in MVC Framework, MEAN/MERN Stack Development, API, deployment, Browser-based technologies, and Server-Side Development, to name a few. My purpose is to push myself to better my skills, knowledge, and to work with others to create experiences for users. The last project I completed, we were a team of five and we developed a React based application to help pet owners to enter in information regarding their pets, create calendar events, edit information stored, add photos and even delete data. I am ecstatic and grateful to have obtained my certificate, gained so many helpful skills thus far and to start my journey into my life-long career. I am eager to pursue more knowledge, refine and begin to grasp new skills, and to be part of a team that pushes themselves to be better every day.</p>
            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
            <h5 style={{fontFamily: "Poppins"}}>Location</h5>
            <p style={{fontFamily: "Poppins"}}>Centennial CO 80112</p>
            <h5 style={{fontFamily: "Poppins"}}>Phone</h5>
            <p style={{fontFamily: "Poppins"}}>(970) 744-9203</p>
            <h5 style={{fontFamily: "Poppins"}}>Email</h5>
            <p style={{fontFamily: "Poppins"}}>shelby_handfield@protonmail.com</p>
            <h5 style={{fontFamily: "Poppins"}}> GitHub</h5>
            <button type= "button" style={{fontFamily: "Poppins"}} onClick= {(e) =>{
              e.preventDefault();
              window.location.href= "https://github.com/shandfield"
            }}
            >GitHub Profile</button>
            <h5 style={{fontFamily: "Poppins"}}>LinkedIn</h5>
            <button type= "button" style={{fontFamily: "Poppins"}} onClick= {(e) =>{
              e.preventDefault();
              window.location.href= "https://www.linkedin.com/in/shelby-handfield-87ba6810b/"
            }}
            >LinkedIn Profile</button>
            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{fontFamily: "Poppins"}}>Education</h2>

            <Education
              startYear={2009}
              endYear={2013}
              schoolName="Colorado State University (CSU)"
              schoolDescription="In 2013 I obtained my diploma with a Major in Psychology and Minor in Criminology/Criminal Justice."
               />

               <Education
                 startYear={2020}
                 endYear={2020}
                 schoolName="University of Denver- Full Stack Web Development Coding Bootcamp"
                 schoolDescription="Recently obtained my certificate in September 2020."
                  />
                <hr style={{borderTop: "3px solid #29e2c4"}} />

              <h2 style={{fontFamily: "Poppins"}}>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Social Worker"
              jobDescription="As a Social Worker, I carried a caseload of 20-40 initial reports of either child physical, emotional and physical or sexual abuse. My role was to investigate the allegations through interviewing all family members and all potential victims. Prior to transferring, my previous role was a Child Support Enforcer. Handled a case load with families to enforce collections of payment, and maintained a 80-90% collection rate."
              />

              <Experience
                startYear={2014}
                endYear={2018}
                jobName="District Manager"
                jobDescription="Supervised a diverse offender pool of about 1,500 and two offices that of about 25+ employees. I ensured smooth and safe operations were being followed in both offices at Castle Rock and Centennial. From 2014 to 2016, worked as a Case Manager that worked with offenders to ensure compliance and payments were made. During 2016-2018, promoted to Assistant District Manager, and supervised 7 Case Managers while maintaining a case load of offenders as well. As a manager, ensured that case managers were trained properly, doing their daily jobs correctly and reviewing reports to ensure accuracy and integrity."
                />
              <hr style={{borderTop: "3px solid #29e2c4"}} />
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
