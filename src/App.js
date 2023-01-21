import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';

const navUrls= [        
  {text:'飛翔部落格',href:'https://sianglife.github.io/blog/',icon:'bi bi-pencil',blanktab:true},
  {text:'小工具首頁',href:'/webpagetools',icon:'bi bi-house-door',blanktab:false}
]

const renderNavItem = (urls) => {
  let navItem = [];
  for(let item of urls){
    navItem.push(
      <Nav.Item key={item.text}>
        <Nav.Link as="a" href={item.href} target={item.blanktab ? '_blank' : '_self'}/>
      </Nav.Item>
    )
  }
  return navItem;
}

function App() {
  return (
  <Navbar bg="light" expand="lg" style={{background: 'rgb(89,154,143)', height: '5em'}}>
    <Navbar.Brand as="a" href="/">
      <span>飛翔小工具</span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Container>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {renderNavItem(navUrls)}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default App;
