import styled from 'styled-components'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from 'react-bootstrap'
import { OffCanvasExample1 } from './Offcanvas.tsx'
import { OffCanvasExample2 } from './Offcanvas2.tsx'
import {Link} from 'react-router-dom'

const Styles =styled.div`
    a, , .navbar.nav, .nav.link {
      color: #498efc;
      font-family: sans-serif;
      font-size: larger;
      text-decoration: none;
      &:hover{
        color: grey
      }
    }
  `

  export function Navibar(){
    return(
      <>
      <Styles>
      <Navbar className="bg-body-tertiary">
        <Container>
            <Image src="cosmos.svg" style={{'width':'50px', 'height':'50px', 'marginRight':'1rem'}}></Image>
            <Navbar.Brand href="#home"><Link to="/">Cosmo News</Link></Navbar.Brand>
            <Nav.Link> <Link to="/news">Новости</Link></Nav.Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse className="justify-content-end">
          {['end'].map((placement, idx) => (
          <OffCanvasExample1 key={idx} placement={placement} name={'Вход'} />
        ))}
        {['end'].map((placement, idx) => (
          <OffCanvasExample2 key={idx} placement={placement} name={'Регистрация'} />
        ))}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Styles>
      </>
    )
    
  }