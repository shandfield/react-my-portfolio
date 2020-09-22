import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


class Landing extends Component {
  render() {
    return(
      <div style={{width: "auto", height: "auto"}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://user-images.githubusercontent.com/63683598/93795629-e3c3ad80-fbf6-11ea-898f-1e1dd01ca1c9.JPG"
              alt="avatar"
              className="avatar-img"
              style={{width: "300px", height: "auto", padding: 0,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 15,
              overflow: 'hidden'}}
              />

            <div className="banner-text">
              <h1> Shelby Handfield</h1>
              <h1>Full Stack Web Developer</h1>
            <hr/>
          <p>HTML/CSS | JavaScript | React | NodeJS | MEAN | MERN| </p>
        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/shelby-handfield-87ba6810b/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/shandfield" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

           {/* Resume */}
           <a href="https://1drv.ms/w/s!Aryy98TVcR5tp0UVPMD0MjPOo9P0?e=MP2qSB" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-file-text" aria-hidden="true" />
          </a>

        </div>
            </div>
           </Cell>
          </Grid>
       </div>
    )
  }
}

export default Landing;
