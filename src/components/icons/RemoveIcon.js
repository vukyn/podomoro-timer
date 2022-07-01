import PropTypes from 'prop-types';
import { Button } from '@nextui-org/react';

const RemoveIcon = (props) => {

    const size = ' md-' + props.size;
    const color = ' ' + props.color;
    const iconStyle = 'material-icons remove-icon' + size + color;

    return (
        <Button auto light ripple={false} onPress={props.decreaseTimeHandler}>
            <i className={iconStyle}>remove</i>
        </Button>
    );
}

RemoveIcon.propTypes = {
    size: PropTypes.number
}

RemoveIcon.defaultProps = {
    size: 18,
    color: ''
}

export default RemoveIcon;
