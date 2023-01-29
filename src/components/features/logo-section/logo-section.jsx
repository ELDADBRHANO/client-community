import { Container,Row,Col,Image } from 'react-bootstrap';
import './logo-section.css'

const LogoSection = () => {
    const logoArray = [1,2,3,4,5,6]
    return (
        <Container className="LogoSection">
            <Row>
                {logoArray.map((item)=>
                <Col sm={2}>
                <Image src='./images/teaccareer.png' className='logoSectionImg'/>
                </Col>
                )}
            </Row>
        </Container>
    );
}

export default LogoSection;
