import './community-side-two.css';
import { Container, Row, Col, Image } from "react-bootstrap";

const CommunitySideTwo = () => {
    return (
        <Container>
          <Col>
          <div className='CardAdvertising'>
            <Image src='/images/amazon.jpg' className='advAmazon'/>
          </div>
          </Col>
          <Col className='mt-2'>
          <div className='CardAdvertising'>
            <Image src='/images/ebay.jpg' className='advAmazon'/>
          </div>
          </Col>  
          <Col className='mt-2'>
            <ul className='NewsList'>
                <h3>NEWS</h3>
                <li>
                    <div className='d-flex gap-3'>
                    <i class="bi bi-music-note"></i>
                    Music
                    </div>
                    <div>
                        <span>
                            form more info click here <a href='#'>MusicWebSite</a>
                        </span>
                    </div>
                </li>
                <li>
                    <div className='d-flex gap-3'>
                    <i class="bi bi-music-note"></i>
                    Music
                    </div>
                    <div>
                        <span>
                            form more info click here <a href='#'>MusicWebSite</a>
                        </span>
                    </div>
                </li>
                <li>
                    <div className='d-flex gap-3'>
                    <i class="bi bi-music-note"></i>
                    Music
                    </div>
                    <div>
                        <span>
                            form more info click here <a href='#'>MusicWebSite</a>
                        </span>
                    </div>
                </li>
            </ul>
          </Col> 
        </Container>
    );
}

export default CommunitySideTwo;
