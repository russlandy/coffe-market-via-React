import CoffeeItem from "../coffe-item/coffe-item"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const AllCoffeeItems = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <Col key={id} xs={6} md={4} className='mt-3'>
                <CoffeeItem {...itemProps}/>
            </Col>
        )
    })
    return (
        <Container className="">
            <Row>
            {elements}
            </Row>
        </Container>
    )
}
export default AllCoffeeItems;