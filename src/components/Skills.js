
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Our passion</h2>
                        <p>We are here to provide enthusiasts of strength sports with support, and inspiration to reach their full potential.<br></br> Our passion lies in helping our customers push their limits and achieve spectacular results.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <h5>Powerlifting</h5> 
                                <h5>Weightlifting</h5>
                                <h5>Bodybuilding</h5>
                                <h5>Physiatrics</h5>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}