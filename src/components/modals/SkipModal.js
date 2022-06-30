
import { Modal, Text } from "@nextui-org/react";
import SkipButton from "../buttons/SkipButton";

const SkipModal = (props) => {
    return (
        <Modal open={props.visible} onClose={props.closeHandler}>
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
                <Text h5 color="neutral">Are you sure to skip ?</Text>
            </Modal.Body>
            <Modal.Footer>
                <SkipButton size='primary' color="primary" onClick={props.closeHandler}>
                    Cancel
                </SkipButton>
                <SkipButton size='primary' color="primary" onClick={props.skipHandler}>
                    Skip
                </SkipButton>
            </Modal.Footer>
        </Modal>
    );
}

export default SkipModal;