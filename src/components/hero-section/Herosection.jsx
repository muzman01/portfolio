import React from "react";
import "./hero.css";
import { Container, Row, Col } from "reactstrap";
import Heroimg from "../../assets/bighead-10.svg"
const Herosection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <p>Welcome to my website</p>
              <h5>Hİ</h5>
              <h2>
                I'm <span>Berknat Soytaş</span>
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam, magnam. Repudiandae dolore, recusandae ipsam
                doloremque quas earum in provident vel!
              </p>
              <div className="hero__btns d-flex align-item-center gap-4">
                  <button className="btn hire__btn">
                      <a href="#">
                          Hire me
                      </a>
                  </button>
                  <button className="btn">Contact</button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
              <div className="hero__img">
                  <img src={Heroimg} alt="" className="w-100"/>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Herosection;
