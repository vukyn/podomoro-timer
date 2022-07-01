import { Row, Col } from "@nextui-org/react";
import PropTypes from 'prop-types';
import CountdownButton from './buttons/CountdownButton';
import SkipIcon from './icons/SkipIcon';
import AddIcon from './icons/AddIcon';
import RemoveIcon from './icons/RemoveIcon';

const TimerBody = (props) => {
    return (
        <Row id='control-buttons' justify='center' align='center' gap={0}>
            <Col>
                <Row justify='center' align='center' css={{ paddingTop: '5px' }}>
                    {!props.isCountDown &&
                        <RemoveIcon size={36} decreaseTimeHandler={props.decreaseTimeHandler} />
                    }
                </Row>
            </Col>
            <Col>
                {
                    props.isCountDown ?
                        <CountdownButton ripple={false} color='primary' size='primary' border='stop'
                            font='primary' onPress={props.startStopHandler}>STOP</CountdownButton> :
                        <CountdownButton ripple={false} color='primary' size='primary' border='start'
                            font='primary' onPress={props.startStopHandler}>START</CountdownButton>
                }
            </Col>
            <Col>
                <Row justify='center' align='center' css={{ paddingTop: '5px' }}>
                    {
                        props.isCountDown ?
                            <SkipIcon size={36} skipHandler={props.skipHandler} /> :
                            <AddIcon size={36} increaseTimeHandler={props.increaseTimeHandler} />
                    }
                </Row>
            </Col>
        </Row>
    )
}

TimerBody.propTypes = {
    isCountDown: PropTypes.bool
}

export default TimerBody;
