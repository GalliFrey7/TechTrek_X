import { Container, Row, Col } from "react-bootstrap";
import image_transparent from "../assets/img/image_transparent.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="justify-content-center align-items-center" style={{ height: '100%' }}>
          <Col xs={12} className="d-flex justify-content-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={image_transparent} alt="Header Img" className="horizontal-image"/>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
