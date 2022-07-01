import React from 'react';
import TimerHeader from './TimerHeader';
import TimerBody from './TimerBody';
import { Card, Text, Container, styled } from '@nextui-org/react';

const TimerText = styled(Text, {
    fontSize: '120px',
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    lineHeight: '$md'
});

const TimerDefaults = {
    podomoroTimer: '25:00',
    shortBreakTimer: '05:00',
    longBreakTimer: '15:00',
    podomoroSecond: 1500,
    shortBreakSecond: 300,
    longBreakSecond: 900,
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...TimerDefaults,
            isCountDown: false,
            tab: 'podomoro'
        }
        this.increaseTimeHandler = this.increaseTimeHandler.bind(this);
        this.decreaseTimeHandler = this.decreaseTimeHandler.bind(this);
        this.startStopHandler = this.startStopHandler.bind(this);
        this.changeTabHandler = this.changeTabHandler.bind(this);
        this.skipHandler = this.skipHandler.bind(this);
    }

    componentDidMount = () => {
        document.title = this.state.podomoroTimer + ' - Time to concentrate!';
    }

    startStopHandler = () => {
        this.setState((state) => ({
            isCountDown: !state.isCountDown
        }), () => { this.countdownTime() });
    }

    increaseTimeHandler = () => {
        var time = 0;
        switch (this.state.tab) {
            case 'podomoro':
                time = this.state.podomoroSecond + 60;
                if (this.state.podomoroSecond < 3600) {
                    this.setState({
                        podomoroSecond: time,
                        podomoroTimer: this.displayTimer(time)
                    });
                }
                break;
            case 'short break':
                time = this.state.shortBreakSecond + 60;
                if (this.state.shortBreakSecond < 3600) {
                    this.setState({
                        shortBreakSecond: time,
                        shortBreakTimer: this.displayTimer(time)
                    });
                }
                break;
            case 'long break':
                time = this.state.longBreakSecond + 60;
                if (this.state.longBreakSecond < 3600) {
                    this.setState({
                        longBreakSecond: time,
                        longBreakTimer: this.displayTimer(time)
                    });
                }
                break;
            default:
                break;
        }
    }

    decreaseTimeHandler = () => {
        var time = 0;
        switch (this.state.tab) {
            case 'podomoro':
                time = this.state.podomoroSecond - 60;
                if (this.state.podomoroSecond > 60) {
                    this.setState({
                        podomoroSecond: time,
                        podomoroTimer: this.displayTimer(time)
                    });
                }
                break;
            case 'short break':
                time = this.state.shortBreakSecond - 60;
                if (this.state.shortBreakSecond > 60) {
                    this.setState({
                        shortBreakSecond: time,
                        shortBreakTimer: this.displayTimer(time)
                    });
                }
                break;
            case 'long break':
                time = this.state.longBreakSecond - 60;
                if (this.state.longBreakSecond > 60) {
                    this.setState({
                        longBreakSecond: time,
                        longBreakTimer: this.displayTimer(time)
                    });
                }
                break;
            default:
                break;
        }
    }

    changeTabHandler = (name) => {
        this.setState({
            tab: name,
            isCountDown: false,
            ...TimerDefaults
        });
    }

    skipHandler = () => {
        this.setState({
            isCountDown: false,
            ...TimerDefaults
        })
    }

    countdownTime = () => {
        switch (this.state.tab) {
            case 'podomoro':
                setTimeout(() => {
                    if (this.state.podomoroSecond > 0 && this.state.isCountDown) {
                        const second = this.state.podomoroSecond - 1;
                        this.setState({
                            podomoroSecond: second,
                            podomoroTimer: this.displayTimer(second)
                        });
                        this.countdownTime();
                    }
                }, 1000);
                break;
            case 'short break':
                setTimeout(() => {
                    if (this.state.shortBreakSecond > 0 && this.state.isCountDown) {
                        const second = this.state.shortBreakSecond - 1;
                        this.setState({
                            shortBreakSecond: second,
                            shortBreakTimer: this.displayTimer(second)
                        });
                        this.countdownTime();
                    }
                }, 1000);
                break;
            case 'long break':
                setTimeout(() => {
                    if (this.state.longBreakSecond > 0 && this.state.isCountDown) {
                        const second = this.state.longBreakSecond - 1;
                        this.setState({
                            longBreakSecond: second,
                            longBreakTimer: this.displayTimer(second)
                        });
                        this.countdownTime();
                    }
                }, 1000);
                break;
            default:
                break;
        }
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
        var timerText = '';

        switch (this.state.tab) {
            case 'podomoro':
                timerText = <TimerText id='timer-text'>{this.state.podomoroTimer}</TimerText>
                break;
            case 'short break':
                timerText = <TimerText id='timer-text'>{this.state.shortBreakTimer}</TimerText>
                break;
            case 'long break':
                timerText = <TimerText id='timer-text'>{this.state.longBreakTimer}</TimerText>
                break;
            default:
                break;
        }

        return (
            <Container id='timer-box' css={{ maxWidth: '480px', margin: 'auto' }}>
                <Card css={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '20px 0px 30px', marginBottom: '20px' }}>
                    <Card.Header>
                        <TimerHeader tab={this.state.tab} changeTabHandler={this.changeTabHandler} />
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ textAlign: 'center' }}>
                        {timerText}
                        <TimerBody isCountDown={this.state.isCountDown} increaseTimeHandler={this.increaseTimeHandler}
                            decreaseTimeHandler={this.decreaseTimeHandler} startStopHandler={this.startStopHandler}
                            skipHandler={this.skipHandler} />
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default Timer