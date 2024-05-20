
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Iphone 14 PRO MAX</h2>
                        <p>Discover a new level of technology with the iPhone 14 Pro Max. This flagship smartphone from Apple combines cutting-edge innovation, elegant design and powerful performance to give you a unique user experience</p>
                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
