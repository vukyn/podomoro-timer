import useSound from 'use-sound';
import { useEffect, useState, useRef } from 'react';
import { Card, Text, Container, styled, Row, Col, Button } from '@nextui-org/react';

const TimerText = styled(Text, {
    fontSize: '120px',
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    lineHeight: '$md'
});

const displayTimer = (time) => {
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

const Timer2 = () => {
    const [play] = useSound(process.env.PUBLIC_URL + '/audios/alarm.mp3');

    const [sessionTime, setSessionTime] = useState(1500);
    const [breakTime, setBreakTime] = useState(300);
    const [timer, setTimer] = useState(1500);
    const [countSession, setCountSession] = useState(true);
    const isCountDown = useRef(false);
    const didTimerMount = useRef(false);

    useEffect(() => {
        if (didTimerMount)
            setTimer(sessionTime);
        else
            didTimerMount.current = true
    }, [sessionTime]);

    useEffect(() => {
        if (timer === 0) {
            if (countSession) {
                setCountSession(false);
                setTimer(breakTime);
                play();
            }
            else {
                setCountSession(true);
                setTimer(sessionTime);
                play();
            }
        }
        // eslint-disable-next-line
    }, [timer]);

    const playTimer = () => {
        if (!isCountDown.current) {
            isCountDown.current = true;
            countdownTime();
        }
    }

    const pauseTimer = () => {
        if (isCountDown.current) {
            isCountDown.current = false;
        }
    }

    const resetTimer = () => {
        isCountDown.current = false;
        setTimer(1500);
        setSessionTime(1500);
        setBreakTime(300);
    }

    const countdownTime = () => {
        setTimeout(() => {
            if (timer > 0 && isCountDown.current) {
                setTimer(t => t - 1);
                countdownTime();
            }
        }, 1000);
    }

    return (
        <Container id='timer-box' css={{ maxWidth: '480px', margin: 'auto' }}>
            <Card css={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '20px 0px 30px', marginBottom: '20px' }}>
                <Card.Body css={{ textAlign: 'center' }}>
                    <Row justify='center' align='center'>
                        <Text id='timer-label' h2>{countSession ? 'Session' : 'Break'}</Text>
                    </Row>
                    <Row justify='center' align='center'>
                        <TimerText id='timer-left'> {displayTimer(timer)}</TimerText>
                    </Row>
                    <Row justify='center' align='center'>
                        <Col>
                            <Row justify='center' align='center'>
                                <Text id='session-label'>Session Length</Text>
                            </Row>
                            <Row justify='center' align='center'>
                                <Button id='session-decrement' light ripple={false} css={{ minWidth: 18 }}
                                    onPress={() => { if (sessionTime > 60 && !isCountDown.current) { setSessionTime(sessionTime - 60); } }}>
                                    <i className='material-icons'>arrow_downward</i>
                                </Button>
                                <Text id='session-length'>{Math.floor(sessionTime / 60)}</Text>
                                <Button id='session-increment' light ripple={false} css={{ minWidth: 18 }}
                                    onPress={() => { if (sessionTime < 3600 && !isCountDown.current) { setSessionTime(sessionTime + 60); } }}>
                                    <i className='material-icons'>arrow_upward</i>
                                </Button>
                            </Row>
                        </Col>
                        <Col>
                            <Row justify='center' align='center'>
                                <Text id='break-label'>Break Length</Text>
                            </Row>
                            <Row justify='center' align='center'>
                                <Button id='break-decrement' light ripple={false} css={{ minWidth: 18 }}
                                    onPress={() => { if (breakTime > 60 && !isCountDown.current) { setBreakTime(breakTime - 60); } }}>
                                    <i className='material-icons'>arrow_downward</i>
                                </Button>
                                <Text id='break-length'>{breakTime / 60}</Text>
                                <Button id='break-increment' light ripple={false} css={{ minWidth: 18 }}
                                    onPress={() => { if (breakTime < 3600 && !isCountDown.current) { setBreakTime(breakTime + 60); } }}>
                                    <i className='material-icons'>arrow_upward</i>
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Row justify='center' align='center'>
                        <Button id='start_stop' light ripple={false} css={{ minWidth: 18 }} onPress={playTimer}>
                            <i className='material-icons'>play_arrow</i>
                        </Button>
                        <Button id='start_stop' light ripple={false} css={{ minWidth: 18 }} onPress={pauseTimer}>
                            <i className='material-icons'>pause</i>
                        </Button>
                        <Button id='reset' light ripple={false} css={{ minWidth: 18 }} onPress={resetTimer}>
                            <i className='material-icons'>autorenew</i>
                        </Button>
                    </Row>
                </Card.Footer>
            </Card>
            <audio id='beep' preload='auto' src={process.env.PUBLIC_URL + '/audios/alarm.mp3'}></audio>
        </Container>
    );
}

export default Timer2;
