import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [
  {
    "name": "HONK",
    "url": "https://honkforhelp.com",
    "description": "Ran tests and one of them got ehough results to get piloted in the dispatch algorithm",
    "used": [
      {"thing": "Looker"},
      {"thing": "Segment"},
      {"thing": "Heroku"},
      {"thing": "Stripe"},
    ]
  },
  {
    "name": "blank",
    "url": "https://www.example.com",
    "description": "blank",
    "used": [
      {"thing": "blank"},
      {"thing": "blank"},
      {"thing": "blank"},
      {"thing": "blank"},
      {"thing": "blank"},
      {"thing": "blank"},
      {"thing": "blank"},
      {"thing": "blank"},
      {"thing": "blank"},
    ]
  },
  {
    "name": "blank",
    "url": "https://example.com",
    "description": "blank",
    "used": [
      {"thing": "blank"},
      {"thing": "blank"},
      {"thing": "blank"},
      {"thing": "blank"},
    ]

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Other Projects</div>
    <div className="section__content">
      {
        otherProjectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default FeaturedProjects
