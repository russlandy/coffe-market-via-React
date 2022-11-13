import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './search-filter.css'

const SearchApp = (props) => {

    const buttonsData = [
        {name: 'Brazil', id: 'Brazil', label: 'Brazil', value: '{1}'},
        {name: 'Kenya', id: 'Kenya', label: 'Kenya', value: '{2}'},
        {name: 'Columbia', id: 'Columbia', label: 'Columbia', value: '{3}'}
    ];

    const buttons = buttonsData.map(({name, id, label, value}) => {
        
        return (
            <ToggleButton 
            key={name}
            id={id} 
            value={value}
            onClick={() => props.onFilterSelect(name)}>
                {label}
            </ToggleButton>
        )
    })

    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <span>Looking for</span>
                    <input 
                        type="text"
                        className="input-form"
                        placeholder="start typing here"/>
                </Col>
                <Col>
                    <span>Or filter</span>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        {/* <ToggleButton id="Brazil" value={1}>
                        Brazil
                        </ToggleButton>
                        <ToggleButton id="Kenya" value={2}>
                        Kenya
                        </ToggleButton>
                        <ToggleButton id="Columbia" value={3}>
                        Columbia
                        </ToggleButton> */}
                        {buttons}
                    </ToggleButtonGroup>
                </Col>
            </Row>
        </Container>
    )
    
}

export default SearchApp;