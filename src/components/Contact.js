import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, Icon } from "antd";
import { Button } from "antd";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { Title } = Typography;

    return (
      <div>
        <div className="breadLink">
          <NavLink to="/" exact={true}>
            Home
          </NavLink>
          <div style={{ padding: "0 20px" }}>
            <Icon type="arrow-right" />{" "}
          </div>{" "}
          <div>Contact</div>
        </div>
        <div className="contentWrap">
          <div className="content">
            <Title>Contact</Title>
            <div key="1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1093652785908!2d3.3506886144585404!3d6.507838425151462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c3c12ca7979%3A0xa7f95cf48a909fb!2s63+Ogunlana+Dr%2C+Surulere%2C+Lagos!5e0!3m2!1sen!2sng!4v1559516767187!5m2!1sen!2sng"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
              ></iframe>
            </div>

            <div className="contactIconwrap" key="2">
              <div>
                <div className="iconCont">
                  <Icon type="phone" className="contactIcon" />
                </div>
                <h3>Call Us</h3>
                <p>+2348038592166</p>
                <p>+2349036605667</p>
              </div>
              <div>
                <div className="iconCont">
                  <Icon type="mail" className="contactIcon" />
                </div>
                <h3>Email Us</h3>
                <p>operations@oceanease.com.ng</p>
              </div>
              <div>
                <div className="iconCont">
                  <Icon type="home" className="contactIcon" />
                </div>
                <h3>Find Us</h3>
                <p>63, Ogunlana Drive Surulere, Lagos.</p>
              </div>
            </div>

            <div key="3">
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h2>Send Us A Message</h2>
              </div>
              <form action="/action_page.php">
                <div>
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name*"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email*"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={this.state.subject}
                      onChange={(e) =>
                        this.setState({ subject: e.target.value })
                      }
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      value={this.state.phone}
                      onChange={(e) => this.setState({ phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message*"
                      onChange={(e) =>
                        this.setState({ message: e.target.value })
                      }
                      value={this.state.message}
                    ></textarea>
                  </div>
                  <Button
                    type="primary"
                    className="subBtn"
                    size="large"
                    onClick={(e) => this.handleFormSubmit(e)}
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
