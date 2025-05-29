import * as React from "react"
import "./experience.scss"


const experienceData = [
  {
    "company": "Magma",
    "time": "2023 - 2024",
    "position": "Head of Brand Growth + Director of Commercial Operations"
  },
  {
    "company": "Cometeer",
    "url": "https://www.cometeer.com/",
    "time": "2021 - 2022",
    "position": "Head of Digital Performance + Head of Revenue Operations",
  },
  {
    "company": "PlayVS",
    "url": "https://playvs.com/",
    "time": "2018 - 2021",
    "position": "Revenue Lead + Marketing Manager"
  },
  {
    "company": "HONK Technologies",
    "url": "https://www.honkforhelp.com/",
    "time": "2015 - 2018",
    "position": "VP of Market Dynamics + Head of Demand Generation"
  },
  {
    "company": "VSM (acquired)",
    "time": "2011 - 2014",
    "position": "Head of Direct Acquisition + Director of SEO & Analytics"
  },
  {
    "company": "Tidal Research (acquired)",
    "time": "2007 - 2011",
    "position": "Senior SEO Engineer + SEO Engineer"
  },
  {
    "company": "Razorfish (acquired)",
    "time": "2004 - 2007",
    "position": "Jr. SEO Analyst+ SEO Account Manager + Assistant SEO Account Manager"
  },
]

const Experience = () => (
  <section className="section experience">
    <div className="section__title">Experience</div>
    <div className="section__content">
      <div className="jobs">
        {
          experienceData.map((data) => (
            <div className="job">
              <div className="time-place">
                <div className="job__company">
                  <a href={data.url} target="_blank" rel="noreferrer">{data.company}</a>
                </div>
                <div className="job__time">{data.time}</div>
              </div>
              <div className="job__position">{data.position}</div>
            </div>
          ))
        }
      </div>

    </div>
  </section>
)

export default Experience
