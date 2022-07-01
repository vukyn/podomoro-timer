import PropTypes from 'prop-types';
import { Button } from '@nextui-org/react';

const AddIcon = (props) => {

    const size = ' md-' + props.size;
    const color = ' ' + props.color;
    const css = {minWidth: props.size, height: props.size, padding: 0}
    const iconStyle = 'material-icons add-icon' + size + color;

    return (
        <Button light ripple={false} css={css} onPress={props.increaseTimeHandler}>
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
