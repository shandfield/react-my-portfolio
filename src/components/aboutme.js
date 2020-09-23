import React, { Component } from 'react';
import { Cell } from "react-mdl";

class About extends Component {
  render() {
    return(
      <div><h1 style={{textAlign: "center", fontWeight: "bold", fontSize: 60, width: "75%", margin: "auto"}}> Some Things About Me!</h1>
      <p style={{textAlign: "center",fontWeight: "bold", width: "75%", margin: "auto", paddingTop: "1em"}}> I was born and raised in Southern California. With my love for animals, I applied for and was accepted to Colorado State University, the #2 rated Veterinarian school in the country. My strong academics allowed me to attend all four years of college, at Colorado State University, on a Presidential Scholarship. I quickly decided that four years of Chemistry exceeded my brain power and decided on a new course of study. In 2013, I graduated from CSU with a Bachelor’s Degree in Natural Science and never looked back. I have made my home in Colorado and love the great outdoors.</p>
      <p style={{textAlign: "center", fontWeight: "bold", width: "75%", margin: "auto", paddingTop: "1em"}}> After college, I began working in private probation, moved to being a licensed Colorado Certified Social Worker, in Child Protective Services, and now have chosen a career in the Information Technology field.</p>
      <p style={{textAlign: "center", fontWeight: "bold", width: "75%", margin: "auto", paddingTop: "1em"}}> Some of my favorite hobbies and activities are snowboarding, hiking, wakeboarding, yoga, meditation, and spending time with friends and family. I played competitive soccer through high school and learned the importance of teamwork. Through competitive sports, I also learned how to be a leader and the value of hard work. I have carried those values with me and work each day to excel in my personal and professional life. </p>
      <p style={{textAlign: "center", fontWeight: "bold", width: "75%", margin: "auto", paddingTop: "1em"}}> Currently, I am a Full Stack Web Developer with many newly obtained skills from the University of Denver's Coding Boot Camp. I obtained my certification in September of 2020 and plan to better my knowledge and abilities every day.
      </p>
      <div className="aboutme-body">
        <Cell col={6}>
            <img
              src="https://user-images.githubusercontent.com/63683598/93795633-e58d7100-fbf6-11ea-98e9-ac818839308e.JPG"
              alt="quandary"
              style={{width: "175px", height: "300px", padding: 10,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 15,
              overflow: 'hidden'}}
               />
            <img
              src="https://user-images.githubusercontent.com/63683598/93647435-a6c4a480-f9c5-11ea-8160-273b60ec6035.jpg"
              alt="beach"
              style={{width: "175px", height: "350px", padding: 10,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 15,
              overflow: 'hidden'}}
               />
            <img
              src="https://user-images.githubusercontent.com/63683598/93795624-e1615380-fbf6-11ea-82fc-f2dc18b9b9a5.JPG"
              alt="blueeyes"
              style={{width: "250px", height: "250px", padding: 10,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 15,
              overflow: 'hidden'}}
               />
          </Cell>
        </div>
    </div>  
    )
  }
}

export default About;
