import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
             
            </div>

            <h2 style={{paddingTop: '2em'}}>Shelby Handfield</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Full- stack web developer with an emphasis on back-end development utilizing skills gained from a psychology and criminal justice background to break into the world on the web. Recently acquired a certificate for Full Stack Web Development from the University of Denver. With flourishing skills in MVC Framework, MEAN/MERN Stack Development, API, deployment, Browser-based technologies, and Server-Side Development, to name a few. My purpose is to push myself to better my skills, knowledge, and to work with others to create experiences for users. The last project I completed, we were a team of five and we developed a React based application to help pet owners to enter in information regarding their pets, create calendar events, edit information stored, add photos and even delete data. I am ecstatic and grateful to have obtained my certificate, gained so many helpful skills thus far and to start my journey into my life-long career. I am eager to pursue more knowledge, refine and begin to grasp new skills, and to be part of a team that pushes themselves to be better every day.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>7301 E Long Ave, Centennial CO 80112</p>
            <h5>Phone</h5>
            <p>(970) 740-1523</p>
            <h5>Email</h5>
            <p>shelby_handfield@protonmail.com</p>
            <h5>GitHub</h5>
            <p>https://github.com/shandfield</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2009}
              endYear={2013}
              schoolName="Colorado State University (CSU) "
              schoolDescription="I graduated from CSU in 2013 with a Major in Psychology and Minor in Criminology/Criminal Justice."
               />

               <Education
                 startYear={2020}
                 endYear={2020}
                 schoolName="University of Denver- Full Stack Web Development Coding Bootcamp"
                 schoolDescription="Recently obtained my certificate in September 2020 for successfully completing the course."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Social Worker/Prior Child Support Enforcement"
              jobDescription="Carried caseload of 20-40 initial reports of child physical, emotional and physical/sexual abuse cases: investigate allegations through interviewing all family members and all potential victims."
              />

              <Experience
                startYear={2014}
                endYear={2018}
                jobName="District Manager; final position"
                jobDescription="•	Supervised a diverse offender pool of 1500 with a staff of 25+ employees, ensuring smooth and safe operations were occurring in my offices at Castle Rock and Centennial."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <p> These are in progress, the current numbers are based on projects and assignments completed while in class.</p>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={90}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
