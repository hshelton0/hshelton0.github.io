import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section className="section featured-projects">
    <div className="section__title">Neat things I helped bring to life</div>
    <div className="section__content">

	 <div className="project blistabloc">
        <figure className="project__pic">
          <a href="https://newsroom.farmers.com/2017-09-14-Farmers-Insurance-R-Continues-to-Assist-Texas-Communities-Recover-from-Harvey" rel="noreferrer" target="_blank">
            <img src="./images/featured/things/flood.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://newsroom.farmers.com/2017-09-14-Farmers-Insurance-R-Continues-to-Assist-Texas-Communities-Recover-from-Harvey " rel="noreferrer" target="_blank">HONK Crisis Response</a>
          </div>
          <p>Crowdsourcing flood information during Hurricane Harvey to rescue vehicles before they were totaled due to rising flood waters</p>
        </figcaption>
      </div>
	
      <div className="project blistabloc">
        <figure className="project__pic">
          <a href="https://www.tiktok.com/@nounish_/video/7346983531702226218" rel="noreferrer" target="_blank">
            <img src="./images/featured/things/frame.png" alt=""/>
          </a>
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">
            <a href="https://www.tiktok.com/@nounish_/video/7346983531702226218" rel="noreferrer" target="_blank">Magma Growth</a>
          </div>
          <p>Audiences enjoyed watching artists drawing together on the same canvas in unique settings; TikTok campaigns in collaboration with Nounish</p>
        </figcaption>
      </div>

        <div className="project blistabloc">
          <figure className="project__pic">
            <a href="https://time.com/collection/best-inventions-2022/6222186/cometeer/" rel="noreferrer" target="_blank">
              <img src="./images/featured/things/time2.jpeg" alt=""/>
            </a>
          </figure>
          <figcaption className="project__caption">
            <div className="project__name">
              <a href="https://time.com/collection/best-inventions-2022/6222186/cometeer/" rel="noreferrer" target="_blank">Cometeer GTM</a>
            </div>
            <p>After a striking debut in 2021, TIME magazine recognized Cometeer as one of the Best Inventions in 2022</p>
          </figcaption>
        </div>
			  
          <div className="project blistabloc">
            <figure className="project__pic">
              <a href="https://www.harpercollinsleadership.com/9781400224517/ahead-of-the-game/" rel="noreferrer" target="_blank">
                <img src="./images/featured/things/game.jpg" alt=""/>
              </a>
            </figure>
            <figcaption className="project__caption">
              <div className="project__name">
                <a href="https://www.harpercollinsleadership.com/9781400224517/ahead-of-the-game/" rel="noreferrer" target="_blank">PlayVS GTM</a>
              </div>
              <p>There is a book about PlayVS, the CEO, and our launch! You can spot me in the included photograph of the original launch team</p>
            </figcaption>
          </div>
        
      </div>
  </section>
)

export default FeaturedProjects
