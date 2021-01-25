import React from "react";
import { Carousel, Button } from "antd";
import { NavLink } from "react-router-dom";
import ScrollAnim from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import "rc-texty/assets/index.css";
const ScrollOverPack = ScrollAnim.OverPack;

class Home extends React.Component {
  render() {
    return (
      <div style={{ margin: "0" }}>
        <Carousel autoplay effect="fade" easing="linear">
          <div>
            <img
              className="homeSlide"
              src={require("../images/3.jpg")}
              alt="one"
            />
          </div>

          <div>
            <img
              className="homeSlide"
              src={require("../images/24.jpg")}
              alt="one"
            />
          </div>
        </Carousel>

        <div className="icon-main">
          <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
            <div className="iconhead">
              <h1>Our Services</h1>
            </div>
          </TweenOne>

          <ul className="page1-box-wrapper">
            <li className="listIcon" key="a">
              <div className="page1-box">
                <div className="page1-image">
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg"
                    alt="one"
                  />
                </div>
                <h3>Asset Integrity Inspections </h3>
                <p>
                  General visual inspections (GVIs) and close visual inspections
                  (CVI) using high definition cameras
                </p>
              </div>
            </li>
            <li className="listIcon" key="b">
              <div className="page1-box">
                <div className="page1-image">
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg"
                    alt="img"
                  />
                </div>
                <h3>Non-Destructive Testing</h3>
                <p>
                  Ultrasonic wall thickness, <b />
                  Flooded member detection
                </p>
              </div>
            </li>
            <li className="listIcon" key="c">
              <div className="page1-box">
                <div className="page1-image">
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg"
                    alt="img1"
                  />
                </div>
                <h3>Inspection for class </h3>
                <p>
                  Underwater Inspections in Lieu of Dry-Docking <b />
                  Underwater portions of In-Service Inspection Plans
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="page2-box-wrapper">
          <div className="overlay-1">
            <div className="background-1">
              <ScrollOverPack always={false} playScale={0.3}>
                <div>
                  <QueueAnim
                    key="1"
                    delay={400}
                    ease={["easeOutQuart", "easeInOutQuart"]}
                  >
                    <h1 key="0">Welcome to Ocean Ease</h1>

                    <p key="1">
                      Ocean-Ease Ltd is a specialist ROV inspection company
                      providing systems and personnel for the offshore oil & gas
                      and marine industries. Our value driven, high quality and
                      cost effective service offering is achieved by
                      knowledgeable and experienced personnel utilising high
                      quality ROV system and tooling. They understand the
                      client’s requirements which in turn helps produce a very
                      informative final report.
                    </p>
                    <NavLink to="/about" key="2" exact={true}>
                      {" "}
                      <Button type="primary" size="large">
                        READ MORE{" "}
                      </Button>
                    </NavLink>
                  </QueueAnim>
                </div>
              </ScrollOverPack>
            </div>
          </div>
        </div>
        <div className="page3-box-wrapper">
          <div className="overlay-2">
            <div className="background-2">
              <ScrollOverPack always={false} playScale={0.3}>
                <div>
                  <QueueAnim
                    key="1"
                    delay={400}
                    ease={["easeOutQuart", "easeInOutQuart"]}
                  >
                    <h1 key="1">Why Ocean-Ease Ltd?</h1>

                    <ul key="2">
                      <li> Experienced & competent personnel</li>
                      <li>
                        {" "}
                        ROV owned by the company and readily available in
                        Nigeria
                      </li>
                      <li>
                        {" "}
                        Our ROV systems can be deployed extremely quickly to
                        enable effective turnaround on must-do jobs.
                      </li>
                      <li>
                        {" "}
                        Nigerian owned and operated company – Local content
                      </li>
                      <li>
                        {" "}
                        Our ROV is efficient to mobilise, can be manually
                        deployed from small vessels, platforms or large FPSOs
                        (cost effective)
                      </li>
                    </ul>
                    <NavLink to="/services" key="3" exact={true}>
                      {" "}
                      <Button type="primary" size="large">
                        READ MORE{" "}
                      </Button>
                    </NavLink>
                  </QueueAnim>
                </div>
              </ScrollOverPack>
            </div>
          </div>
        </div>
        <div className="page4-box-wrapper">
          <div className="overlay-3">
            <div className="background-3">
              <ScrollOverPack always={false} playScale={0.3}>
                <div>
                  <QueueAnim
                    key="1"
                    delay={400}
                    ease={["easeOutQuart", "easeInOutQuart"]}
                  >
                    <h1 key="0">Ready To Discuss Your Project?</h1>

                    <p key="1">
                      There are many ways to contact us. You may drop us a line,
                      give us a call or send an email, choose what suits you the
                      most.
                    </p>
                    <NavLink to="/contact" key="2" exact={true}>
                      {" "}
                      <Button type="primary" size="large">
                        WORK WITH US{" "}
                      </Button>
                    </NavLink>
                  </QueueAnim>
                </div>
              </ScrollOverPack>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
