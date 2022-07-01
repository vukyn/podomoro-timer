
import PropTypes from 'prop-types';
import { Modal, Text } from "@nextui-org/react";
import PromptButton from "../buttons/PromptButton";

const PromptModal = (props) => {
    return (
        <Modal open={props.visible} onClose={props.closeHandler}>
            <Modal.Header>
                <Text h5 color="neutral">{props.headerText}</Text>
            </Modal.Header>
            <Modal.Body>
                <Text h5 color="neutral">{props.bodyText}</Text>
            </Modal.Body>
            <Modal.Footer>
                <PromptButton size='primary' color="primary" onClick={props.closeHandler}>
                    {props.cancelText}
                </PromptButton>
                <PromptButton size='primary' color="primary" onClick={props.skipHandler}>
                    {props.confirmText}
                </PromptButton>
            </Modal.Footer>
        </Modal>
    );
}

PromptModal.propTypes = {
    headerText: PropTypes.string,
    bodyText: PropTypes.string,
    cancelText: PropTypes.string,
    confirmText: PropTypes.string
}

PromptModal.defaultProps = {
    headerText: '',
    bodyText: '',
    cancelText: 'Cancel',
    confirmText: 'Confirm'
}

export default PromptModal;