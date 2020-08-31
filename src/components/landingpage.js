import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '240', height: '240'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://user-images.githubusercontent.com/63683598/91673607-27446380-eaf2-11ea-862a-f39516d77b7e.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

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
           <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:940085df-bc98-4bd9-9d8a-e76cbf566612" rel="noopener noreferrer" target="_blank">
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
