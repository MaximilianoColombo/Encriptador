import TextForm from './components/TextForm.jsx'
import './App.css'
import { Container, Row, Col, Stack } from 'react-bootstrap'
import ItemList from './components/ItemList.jsx'

function App() {
  

  return (
    <Container className="" fluid>
      <Row className="g-3">
        <Col xs={12}>
          <TextForm />
        </Col>
        <Col xs={12}>
          <ItemList />
        </Col>
      </Row>
    </Container>

  )
}

export default App
