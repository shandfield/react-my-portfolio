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
            <p>Extensive history of leadership skills in coaching, motivation, team building and mentoring, coupled with effective verbal and written communication skills.Demonstrated professionalism and judgment; excellent organization and prioritization skills, as well as time management skills to be able to multitask in a high volume, rapidly changing work environment • Currently seeking a full-time profession in web development.  Experienced in AJAX, HTML5, CSS3, Javascript, JQuery, Boostrap, Node JS, MongoDB/Mongoose, and React.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>7301 E Long Ave, Centennial CO 80112</p>
            <h5>Phone</h5>
            <p>(970) 740-1523</p>
            <h5>Email</h5>
            <p>shelby_handfield@prptonmail.com</p>
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
                 schoolName="University of Denver- Full Stack Coding Bootcamp"
                 schoolDescription="Started the Full Stack Coding Bootcamp in June of 2020 and graduated with a certificate in September 2020."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Social Worker/Prior Child Support Enforcement"
              jobDescription="Part of a team of social workers; Very detailed and ethical. Strong ability to problem solves, while communicating verbally or through writing. Develop rapport with children and families; identify their needs to provide resources and ensure that court ordered child support is paid by non-custodial parents. Respond to initial reports of child and adult physical, emotional and abuse cases; investigative allegations by interviewing all family members and all potential victims. Conduct investigative fact finding and partnering with families of different ethnic and economic  backgrounds, removing the child from a dangerous environment."
              />

              <Experience
                startYear={2014}
                endYear={2018}
                jobName="District Manager; final position"
                jobDescription="Supervised a diverse offender pool of 1500 with a staff of 25+ employees, ensuring smooth and safe operations always in the offices of Castle Rock and Centennial. Handled large caseload of offenders and reported back to court with their court ordered compliance. Selected and assigned staff, ensuring equal employment opportunity in hiring and promotion. Coordinated activities by scheduling work assignments, setting priorities, and directing work. • Identified staff development and training needs and ensured that training was delivered. Maintained records, prepares reports, and composes correspondence relative to the work.Interpreted and implemented departmental directives; kept staff informed of changes in policy. Liaised with circuit court judges, prosecutors, sheriffs, chiefs of police, friends of the court, county boards of supervisors, and others concerned with the parole and probation program. Investigated parole/probation violations, documents findings, and recommends disposition to the parole board, court officials, or other officials involved in the parole and probation revocation. Attended conferences and kept informed of developments in the corrections field."
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
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
