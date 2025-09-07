import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import NavBar from './components/NavBar'
import ClassComponent from "./components/ClassComponent"
import {Row, Col, Container} from 'react-bootstrap'

function App() {
  
  return (
    <>

     <NavBar />
     <Container>
 <Row className="justify-content-md-center mt-5">
  <Col xs={12} md={6} className="text-center">
     <ClassComponent sottotitolo="Contenuto del sottotitolo"
     value={100} />
    </Col>
     </Row>
     </Container>
    </>
  ) 
}

export default App
