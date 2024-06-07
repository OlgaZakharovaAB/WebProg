import Jumbotron from './Components/Jumbotron.tsx'
import {Button, Card, Carousel, Col, Container, Row} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom'

function Home(){

    return(
        <>
        <Carousel>
          <Carousel.Item>
          <Image src="carousel1.jpg" style={{'width':'100vw','height':'80vh', 'objectFit': 'cover'}}/>
            <Carousel.Caption>
              <h3>Лучшие космические снимки февраля 2024 года</h3>
              <p>Японская свободно летающая роботизированная камера, плавающая внутри лаборатории Кибо на МКС</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
          <Image src="carousel2.jpg" style={{'width':'100vw','height':'80vh', 'objectFit': 'cover'}}/>
            <Carousel.Caption>
              <h3>Лучшие космические снимки февраля 2024 года</h3>
              <p>Динамичные шлейфы огня и дыма SpaceX Falcon 9</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
          <Image src="carousel3.jpg" style={{'width':'100vw','height':'80vh', 'objectFit': 'cover'}}/>
            <Carousel.Caption>
              <h3>Лучшие космические снимки февраля 2024 года</h3>
              <p>Посадочный модуль Odysseus компании Intuitive Machines , направлявшийся на Луну</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    
        <Container style={{'paddingTop':'5rem', 'paddingBottom':'5rem'}}>
          <Row>
            <Col>
              <Card style={{ width: '18rem', 'height': '575px'}}>
                <Card.Img variant="top" src="card1.jpg" style={{'width': '287px', 'height':'287px', 'objectFit':'cover'}}/>
                <Card.Body>
                  <Card.Title>Быть или не быть: какая судьба ждет МКС после 2024 года?</Card.Title>
                  <Card.Text>
                  Для представителей космических агентств большинства стран этот вопрос "очень сложен и деликатен", потому что альтернативы МКС ...
    
                  </Card.Text>
                  <Link to='/news'><Button variant="primary">Подробнее</Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', 'height': '575px'}}>
                <Card.Img variant="top" src="card2.jpg" style={{'width': '287px', 'height':'287px', 'objectFit':'cover'}}/>
                <Card.Body>
                  <Card.Title>С неба на воду: успешная посадка Starship приблизит полеты на Луну</Card.Title>
                  <Card.Text>
                  Как испытания ракетного комплекса Илона Маска повлияют на освоение дальнего космоса.
                  </Card.Text>
                  <Link to='/news'><Button variant="primary">Подробнее</Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem', 'height': '575px'}}>
                <Card.Img variant="top" src="card3.jpg" style={{'width': '287px', 'height':'287px', 'objectFit':'cover'}}/>
                <Card.Body>
                  <Card.Title>Почему 2024 год будет эпохальным для освоения космоса</Card.Title>
                  <Card.Text>
                  Наступающий 2024 год богат на космические миссии: здесь и выводы новых спутников, и полеты к ближайшим окрестностям Земли ...
                  </Card.Text>
                  <Link to='/news'><Button variant="primary">Подробнее</Button></Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Jumbotron></Jumbotron>
        </>
    )
}

export default Home