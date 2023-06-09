import { Container, Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react'; 

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  
  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }

  return ( 
  <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={activeLink === '' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('')}>Home</Nav.Link>
            <Nav.Link href="/bmiCalculator"  className={activeLink === 'bmiCalculator' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('bmiCalculator')}> BMI Calculator</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      )
}