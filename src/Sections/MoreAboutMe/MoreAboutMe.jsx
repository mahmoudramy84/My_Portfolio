import { useEffect } from "react";
import {
  CustomTitle,
  MoreAboutMeTitle,
  MoreAboutMeDescription,
} from "../../components/index";
import AOS from "aos";

import "./moreAboutMe.scss";
import "aos/dist/aos.css";

const MoreAboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="more-about-me" id="">
      <div className="container">
        <CustomTitle title={"More about me"} description={"Know me better"} />
        <div className="row">
          <div className="col-lg-6">
            <MoreAboutMeTitle title={"About"} />
            <MoreAboutMeDescription
              descriptionOne={`
                    With over 7 years of experience spanning IT infrastructure,
                    network management, system operations, and service management, I
                    offer significant expertise to any project. As a Senior System
                    Administrator, I specialize in security and infrastructure
                    engineering or data centers, while also embracing software
                    engineering and DevOps roles in freelance projects, broadening my
                    technological proficiency.
                `}
              descriptionTwo={`
                    Drawing from this diverse background, I excel in engineering
                    software solutions, particularly in backend development, and
                    seamlessly integrating DevOps practices. My journey from system
                    administration to software engineering equips me with a holistic
                    perspective, enabling me to lead projects from inception to
                    execution with efficiency.
                `}
            />
          </div>
          <div className="col-lg-6">
            <MoreAboutMeTitle title={"Objective"} />
            <MoreAboutMeDescription
              descriptionOne={`
                    I thrive on collaboration, ensuring timely project completion
                    while adhering to budgetary constraints. My agility as a learner
                    enables me to craft innovative solutions to complex challenges.
                `}
              descriptionTwo={`
                    Thriving in team environments, I am dedicated to driving
                    collective efforts towards excellence, even under pressure. My
                    passion for dynamic challenges extends to freelance and remote
                    work environments, where I eagerly contribute my expertise and
                    collaborate across geographical boundaries. Seeking opportunities
                    with achievement-oriented teams, I am committed to delivering
                    impactful contributions rooted in my diverse skill set and
                    unwavering dedication to success.
                `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutMe;
