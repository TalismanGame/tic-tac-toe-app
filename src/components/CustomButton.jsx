import { Button, Spinner } from 'react-bootstrap'


const CustomButton = props => {
    const { text, buttonStyle, textStyle, loading, disabled, onClick } = props
    return (
        <Button style={{...buttonStyle}} onClick={onClick} disabled={disabled}>
            {loading 
                ?   <Spinner animation="border" size="sm"/>
                :   <span style={{...textStyle}}>{text}</span>
            }
        </Button>
    )
}

export default CustomButton