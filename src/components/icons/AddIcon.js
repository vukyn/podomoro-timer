import PropTypes from 'prop-types';
import { Button } from '@nextui-org/react';

const AddIcon = (props) => {

    const size = ' md-' + props.size;
    const color = ' ' + props.color;
    const iconStyle = 'material-icons add-icon' + size + color;

    return (
        <Button auto light ripple={false} onPress={props.increaseTimeHandler}>
            <i className={iconStyle}>add</i>
        </Button>
    );
}

AddIcon.propTypes = {
    size: PropTypes.number
}

AddIcon.defaultProps = {
    size: 18,
    color: ''
}

export default AddIcon;
