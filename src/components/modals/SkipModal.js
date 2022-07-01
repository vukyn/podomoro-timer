
import { Modal, Text } from "@nextui-org/react";
import PromptButton from "../buttons/PromptButton";

const SkipModal = (props) => {
    return (
        <Modal open={props.visible} onClose={props.closeHandler}>
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
                <Text h5 color="neutral">Are you sure to skip ?</Text>
            </Modal.Body>
            <Modal.Footer>
                <PromptButton size='primary' color="primary" onClick={props.closeHandler}>
                    Cancel
                </PromptButton>
                <PromptButton size='primary' color="primary" onClick={props.skipHandler}>
                    Skip
                </PromptButton>
            </Modal.Footer>
        </Modal>
    );
}

export default SkipModal;