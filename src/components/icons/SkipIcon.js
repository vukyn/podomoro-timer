import { useState } from "react";
import PropTypes from 'prop-types';
import SkipModal from '../modals/SkipModal';

const SkipIcon = (props) => {

    const size = ' md-' + props.size;
    const color = ' ' + props.color;
    const iconStyle = 'material-icons skip-icon' + size + color;

    const [visible, setVisible] = useState(false);
    const openHandler = () => setVisible(true);
    const closeHandler = () => setVisible(false);

    return (
        <div>
            <i className={iconStyle} onClick={openHandler}>skip_next</i>
            <SkipModal visible={visible} closeHandler={closeHandler} skipHandler={props.skipHandler}/>
        </div>
    );
}

SkipIcon.propTypes = {
    size: PropTypes.number
}

SkipIcon.defaultProps = {
    size: 18,
    color: ''
}

export default SkipIcon;