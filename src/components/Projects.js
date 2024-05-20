import React from 'react';
import { Table, Container } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {

  const specs = [
    { key: "Manufacturer", value: "APPLE" },
    { key: "Series", value: "iPhone 14 Pro Max" },
    { key: "Product Type", value: "Cellular phone" },
    { key: "Display Size", value: '6.70"' },
    { key: "Screen Resolution", value: "2796x1290" },
    { key: "Brightness", value: "1000 cd/m²" },
    { key: "Contrast Ratio", value: "2 000 000:1" },
    { key: "Pixel Density", value: "460 ppi" },
    { key: "Display Technology", value: "OLED" },
    { key: "Touchscreen", value: "Capacitive, Haptic touch" },
];

  return (
    <section className="project" id="projects">
      <Container>
        <h1 className="text-center my-4">Features of the iPhone 14 ProMax</h1>
            <Table striped bordered hover variant="dark">
              <tbody>
                {specs.map((spec, index) => (
                  <tr key={index}>
                    <th>{spec.key}</th>
                      <td>{spec.value}</td>
                    </tr>
                ))}
                </tbody>
              </Table>
        </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  );
}
