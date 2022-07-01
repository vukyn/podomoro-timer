import React from 'react';
import CardHeader from './CardHeader';
import CountdownButton from './buttons/CountdownButton';
import SkipIcon from './icons/SkipIcon';
import AddIcon from './icons/AddIcon';
import RemoveIcon from './icons/RemoveIcon';
import { Card, Text, Container, Col, Row, styled } from '@nextui-org/react';

const TimerText = styled(Text, {
    fontSize: '120px',
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    lineHeight: '$md'
});

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: '25:00',
            isCountDown: false,
            second: 1500,
            tab: 'podomoro'
        }
        this.increaseTimeHandler = this.increaseTimeHandler.bind(this);
        this.decreaseTimeHandler = this.decreaseTimeHandler.bind(this);
        this.startStopHandler = this.startStopHandler.bind(this);
        this.changeTabHandler = this.changeTabHandler.bind(this);
        this.skipHandler = this.skipHandler.bind(this);
    }

    componentDidMount = () => {
        document.title = this.state.timer + ' - Time to concentrate!';
    }

    startStopHandler = () => {
        this.setState((state) => ({
            isCountDown: !state.isCountDown
        }), () => { this.countdownTime() });
    }

    increaseTimeHandler = () => {
        const time = this.state.second + 60;
        if (this.state.second < 3600) {
            this.setState({
                second: time,
                timer: this.displayTimer(time)
            });
        }
    }

    decreaseTimeHandler = () => {
        const time = this.state.second - 60;
        if (this.state.second > 60) {
            this.setState({
                second: time,
                timer: this.displayTimer(time)
            });
        }
    }

    changeTabHandler = (name) => {
        this.setState({
            tab: name
        });
    }

    skipHandler = () => {
        this.setState({
            timer: '25:00',
            isCountDown: false,
            second: 1500,
        })
    }

    countdownTime = () => {
        setTimeout(() => {
            if (this.state.second > 0 && this.state.isCountDown) {
                const second = this.state.second - 1;
                this.setState({
                    second: second,
                    timer: this.displayTimer(second)
                });
                this.countdownTime();
            }
        }, 1000);
    }

    displayTimer = (time) => {
        // Time(number)
        const _minutes = Math.floor(time / 60);
        const _seconds = time - _minutes * 60;

        //Time(string)
        var minutes = _minutes.toString();
        var seconds = _seconds.toString();

        if (_minutes < 10) minutes = '0' + minutes;
        if (_seconds < 10) seconds = '0' + seconds;

        document.title = minutes + ':' + seconds + ' - Time to concentrate!'

        return minutes + ':' + seconds;
    }

    render() {
        return (
            <Container id='timer-box' css={{ maxWidth: '480px', margin: 'auto' }}>
                <Card css={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '20px 0px 30px', marginBottom: '20px' }}>
                    <Card.Header>
                        <CardHeader tab={this.state.tab} changeTabHandler={this.changeTabHandler} />
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: 'center' }}>
                        <TimerText id='timer-text'>{this.state.timer}</TimerText>
                        <Row id='control-buttons' justify='center' align='center' gap={0}>
                            <Col>
                                <Row justify='center' align='center' css={{ paddingTop: '5px' }}>
                                    {!this.state.isCountDown &&
                                        <RemoveIcon size={36} decreaseTimeHandler={this.decreaseTimeHandler}/>
                                    }
                                </Row>
                            </Col>
                            <Col>
                                {
                                    this.state.isCountDown ?
                                        <CountdownButton ripple={false} color='primary' size='primary' border='stop'
                                            font='primary' onPress={this.startStopHandler}>STOP</CountdownButton> :
                                        <CountdownButton ripple={false} color='primary' size='primary' border='start'
                                            font='primary' onPress={this.startStopHandler}>START</CountdownButton>
                                }
                            </Col>
                            <Col>
                                <Row justify='center' align='center' css={{ paddingTop: '5px' }}>
                                    {
                                        this.state.isCountDown ?
                                            <SkipIcon size={36} skipHandler={this.skipHandler} /> :
                                            <AddIcon size={36} increaseTimeHandler={this.increaseTimeHandler}/>
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default Timer