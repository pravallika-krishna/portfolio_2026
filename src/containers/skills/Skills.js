import React, { useContext } from "react";
import "./Skills.scss";
import { illustration, skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import {
  SiSnowflake,
  SiPython,
  SiTerraform,
  SiApacheairflow,
  SiApachekafka,
  SiDocker,
  SiLinux,
  SiGit,
  SiDatabricks,
  SiDbt
} from "react-icons/si";

import {
  FaAws
} from "react-icons/fa";

import {
  BsDatabaseFill
} from "react-icons/bs";

export default function Skills() {
  const { isDark } = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        

        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              Technology Stack
            </h1>

            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              Experienced Data Engineer specializing in Snowflake, AWS, SQL,
              Python, Data Platform Engineering and Cloud Governance.
            </p>

            <div className="skills-grid">
              <div className="skill-card">
                <h3>❄️ Data Engineering</h3>
                <ul>
                  <li><SiSnowflake /> Snowflake</li>
                  <li><SiPython /> Python</li>
                  <li><BsDatabaseFill /> SQL</li>
                  <li>🔄 Data Pipelines</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>☁️ Cloud & DevOps</h3>
                <ul>
                  <li><FaAws /> AWS</li>
                  <li><SiTerraform /> Terraform</li>
                  <li><SiGit /> Git</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>👩🏻‍💻 Platform Engineering</h3>
                <ul>
                  <li>🔐 RBAC</li>
                  <li>🏛 Access Governance</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>📶 Analytics</h3>
                <ul>
                  <li>📊 Power BI</li>
                  <li>📈 QuickSight</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>🔄 Orchestration</h3>
                <ul>
                  <li><SiApacheairflow />Apache Airflow</li>
                  <li><SiApachekafka />Kafka</li>
                </ul>
              </div>

              <div className="skill-card">
                <h3>🛠 Other Tools</h3>
                <ul>
                  <li><SiLinux /> Linux</li>
                  <li><SiDocker /> Docker</li>
                  <li><SiDbt /> dbt</li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}