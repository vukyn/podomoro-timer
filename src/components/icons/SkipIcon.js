import { useState } from "react";
import PropTypes from 'prop-types';
import { Button } from "@nextui-org/react";
import PromptModal from "../modals/PromptModal";

const SkipIcon = (props) => {

    const size = ' md-' + props.size;
    const color = ' ' + props.color;
    const css = {minWidth: props.size, height: props.size, padding: 0}
    const iconStyle = 'material-icons skip-icon' + size + color;

    const [visible, setVisible] = useState(false);
    const openHandler = () => setVisible(true);
    const closeHandler = () => setVisible(false);

    return (
        <div>
            <Button className="skip-btn" light ripple={false} css={css}>
                <i className={iconStyle} onClick={openHandler}>skip_next</i>
            </Button>
            <PromptModal visible={visible} bodyText='Are you sure to skip ?' confirmText='Skip'
             closeHandler={closeHandler} skipHandler={props.skipHandler} />
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