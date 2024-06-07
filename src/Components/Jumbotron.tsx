import { Container} from 'react-bootstrap';


const Jumbotron = () => (
    <Container fluid className="jumbo" style={{'padding': '4rem 2rem','backgroundImage':'url(/src/background.jpg)','backgroundRepeat':'no-repeat','backgroundSize':'cover', 'marginBottom': '2rem', 'borderRadius': '.3rem'}}>
        <Container style={{'padding': '3rem 3rem', 'borderRadius': '.6rem', 'backgroundColor':'rgba(250, 250, 250, 0.5)', 'fontFamily': 'sans-serif', 'fontSize':'smaler', 'color':'#24123C'}}>
                <h3>«Мы занимаемся работой, которая направлена в будущее. Когда мы открываем много таких небесных тел, то становится понятно, как устроена наша Солнечная система. 
                    Тем самым мы можем обеспечить безопасность нашей Земли».
                </h3>
        </Container>
        </Container>
)

export default Jumbotron