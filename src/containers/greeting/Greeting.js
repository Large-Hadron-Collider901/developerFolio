import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (

    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <section id="lotus-div">
            
    </section>
            <section id="border">
              <h1 id="mainGreeting">
              
                {" "}
                {greeting.title}{" "}
           
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              
              </div>
              </section>
            </div>
            
          </div>
          
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <div id="sun-shadow">

<img src="https://i.ibb.co/bBGhjmQ/lotus.png" alt="lotus" id="lotus-1"/>
<img src="https://i.ibb.co/bBGhjmQ/lotus.png" alt="lotus" id="lotus-2"/>
<img src="https://i.ibb.co/bBGhjmQ/lotus.png" alt="lotus" id="lotus-3"/>
<img src="https://i.ibb.co/bBGhjmQ/lotus.png" alt="lotus" id="lotus-4"/>
<img src="https://i.ibb.co/P5Dzys2/aaron-burden-6-DD9-FJYj0-Vo-unsplash.jpg" alt="aaron-burden-6-DD9-FJYj0-Vo-unsplash" className="marble"/>
<img src="https://i.ibb.co/RTsQkMQ/29.png" alt="29" id="sun"/>
<img src="https://i.ibb.co/nrm03pd/pexels-karolina-grabowska-4040593.jpg" alt="pexels-karolina-grabowska-4040593" className="crystal"/>
      </div>
              
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
