import { Row, Col } from "@nextui-org/react";
import TabButton from './buttons/TabButton';

const TimerHeader = (props) => {
    return (
        <Row id='CardHeader' align="center" justify="center" gap={1}>
            <Col>
                {props.tab === ('podomoro') ?
                    <TabButton auto color='primary' size='primary' border='primary' font='primary' ripple={false}> Pomodoro </TabButton> :
                    <TabButton auto color='secondary' size='primary' border='primary' font='primary' ripple={false}
                        onPress={() => props.changeTabHandler('podomoro')}> Pomodoro </TabButton>}
            </Col>
            <Col>
                {props.tab === ('short break') ?
                    <TabButton auto color='primary' size='primary' border='primary' font='primary' ripple={false}> Short Break </TabButton> :
                    <TabButton auto color='secondary' size='primary' border='primary' font='primary' ripple={false}
                        onPress={() => props.changeTabHandler('short break')}> Short Break </TabButton>}
            </Col>
            <Col>
                {props.tab === ('long break') ?
                    <TabButton auto color='primary' size='primary' border='primary' font='primary' ripple={false}> Long Break </TabButton> :
                    <TabButton auto color='secondary' size='primary' border='primary' font='primary' ripple={false}
                        onPress={() => props.changeTabHandler('long break')}> Long Break </TabButton>}
            </Col>
        </Row>
    );
}

export default TimerHeader;
