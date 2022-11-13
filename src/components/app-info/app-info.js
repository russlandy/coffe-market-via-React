import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './app-info.css'

const AppInfo = () => {
    return (
        <div className="AppInfo">
            <Container className="mt-5">
                <Row>
                    <Col xs={12} md={8}>
                        <img className="imagine" src="https://kartinkin.net/uploads/posts/2022-03/1646971141_1-kartinkin-net-p-kartinki-devushka-s-kofe-1.jpg" alt="coffee" />
                    </Col>
                    <Col xs={6} md={4}>
                            <h2>About our beans</h2>
                            <span>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</span>
                            <span>Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. 
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AppInfo;