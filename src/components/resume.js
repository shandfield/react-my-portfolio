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
            <p style={{fontFamily: "Poppins"}}>Full Stack Web Developer with an emphasis on back-end development utilizing skills gained from a formal college graduate degree in psychology and criminal justice to break into the world on the web. In September 2020, I obtained a certificate in Full Stack Web Development from the University of Denver. In this program, I acquired advanced training and skills in MVC Framework, MEAN/MERN Stack Development, API, deployment, Browser-based technologies, and Server-Side Development, to name a few. As a self-motivated quick learner my goal is to push myself towards higher skill sets, increase my specific knowledge and to work optimally as an individual and within a team environment. I am proud to have completed this program and thankful to have gained so many valuable skills in my new chosen life-long career. I am eager to pursue more knowledge, refine and begin to grasp new skills, and to be part of a team that pushes themselves to be better every day.
            </p>
            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
            <h5 style={{fontFamily: "Poppins"}}>Location</h5>
            <p style={{fontFamily: "Poppins"}}>Centennial CO 80112</p>
            <h5 style={{fontFamily: "Poppins"}}>Phone</h5>
            <p style={{fontFamily: "Poppins"}}>(970) 744-9203</p>
            <h5 style={{fontFamily: "Poppins"}}>Email</h5>
            <p style={{fontFamily: "Poppins"}}>shelby_handfield@protonmail.com</p>
            <h5 style={{fontFamily: "Poppins"}}>Typed Resume</h5>
            <button type= "button" style={{fontFamily: "Poppins"}} onClick= {(e) =>{
              e.preventDefault();
              window.location.href= "hhttps://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:172c8d36-cb2b-446f-8e73-4a769fa1c6a3"
            }}
            >Resume Re-Direct</button>
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
              schoolDescription="Presidential Scholarship Recipient earning a Bachelor’s degree with a Major in Psychology and Minor in Criminology/Criminal Justice"
               />

               <Education
                 startYear={2020}
                 endYear={2020}
                 schoolName="University of Denver- Full Stack Web Development Certificate"
                 schoolDescription="An intensive 12- week “bootcamp” that focused on Full Stack Web Development. Skills learned consisted of HTML, CSS, JavaScript, jQuery, MongoDB, MEAN/MERN, Node JS and API’s."
                  />
                <hr style={{borderTop: "3px solid #29e2c4"}} />

              <h2 style={{fontFamily: "Poppins"}}>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Social Worker/Child Support Enforcement"
              jobDescription="As a licensed Social Worker, I carried a caseload of 20-40 initial reports of either child physical, emotional, and physical or sexual abuse. I consulted with family members and potential victims to investigate the allegations. Prior to transferring, my previous role was a Child Support Enforcer. I enforced collections of payments and maintained a 80-90% collection rate."
              />

              <Experience
                startYear={2014}
                endYear={2018}
                jobName="District Manager/Assistant District Manager/Case Worker "
                jobDescription="I supervised a diverse offender pool of about 1,500 and two offices that of about 25+ employees. I facilitated and monitored smooth and safe operations, and continued to train, mentor and foster a hard-working environment. During 2016-2018, I earned an Assistant District Manager (ADM) position and guided 7 Case Managers while regulating a case load of offenders as well. As an ADM, I trained and mentored case managers, and fostered a hard-working environment. From 2014 to 2016, I worked as a Case Manager that interacted with offenders to maximize compliance."
                />
              <hr style={{borderTop: "3px solid #29e2c4"}} />
            </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
