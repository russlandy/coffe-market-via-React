import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CoffeeItem = (props) => {
  const {name, picture, price} = props;
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>AROMISTICO Coffee 1 kg</Card.Title>
            <Card.Text>
                {name}
            </Card.Text>
            <Button variant="primary">{price}</Button>
          </Card.Body>
        </Card>
      );
}

export default CoffeeItem;