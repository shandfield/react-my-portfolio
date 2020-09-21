import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div><h1 style={{textAlign: "center", fontWeight: "bold", fontSize: 60, width: "75%", margin: "auto"}}>Some Things About Me!</h1>
      <p style={{textAlign: "center",fontWeight: "bold", width: "75%", margin: "auto", paddingTop: "1em"}}> I am originally from Orange, California and moved to Colorado in 2009. From 2009 to 2013, I attended Colorado State University. I obtained a Bachelors in Psychology and a Minor in Criminology/ Criminal Justice. From 2014 to 2018, my profession as a private Case-Manager began in Loveland, CO and ended in Centennial/Castle Rock, CO. My accomplishments during that time include starting as entry level Case Manager, and working hard to becoming a District Manager in 2017. By the end of my career in Private Probation, I was in charge of two offices and multiple staff. In August of 2018, I made the transition to Child Support. I remained there from August of 2018 to July 2019. In July 2019, I became a Colorado Certified Social Worker, that focused on Child Protection in the Intake unit. </p>
      <p style={{textAlign: "center", fontWeight: "bold", width: "75%", margin: "auto", paddingTop: "1em"}}> Some of my favorite hobbies and activities are snowboarding, hiking, waterboarding, yoga, meditation, and spending time with friends and family. I also love to learn new things in many different fields and look to better myself each day.</p>
      <p style={{textAlign: "center", fontWeight: "bold", width: "75%", margin: "auto", paddingTop: "1em"}}> Currently, I am a Full Stack Web Developer with many newly obtained skills from the University of Denver's Coding Boot Camp. I obtained my certification in September of 2020.</p>
      <div className="aboutme-body">
        <Grid className="aboutme-grid">
          <Cell col={6}>
            <img
              src="https://user-images.githubusercontent.com/63683598/93795633-e58d7100-fbf6-11ea-98e9-ac818839308e.JPG"
              alt="quandary"
              style={{height: "250px"}}
               />
            <img
              src="https://user-images.githubusercontent.com/63683598/93647435-a6c4a480-f9c5-11ea-8160-273b60ec6035.jpg"
              alt="beach"
              style={{height: "250px"}}
               />
            <img
              src="https://user-images.githubusercontent.com/63683598/93795624-e1615380-fbf6-11ea-82fc-f2dc18b9b9a5.JPG"
              alt="blueeyes"
              style={{height: "250px"}}
               />
          </Cell>
        </Grid>
      </div>
    </div>    
    )
  }
}

export default About;
