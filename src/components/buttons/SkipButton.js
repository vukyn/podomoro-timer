import { Button, styled } from '@nextui-org/react';

const SkipButton = styled(Button, {
    variants: {
        size: {
            primary: {
                minWidth: '40px'
            }
        },
        font: {
            primary: {
                fontSize: '15px',
                fontWeight: 'bold',
            }
        },
        color: {
            primary: {
                color: 'rgb(217, 85, 80)',
                backgroundColor: 'white'
            }
        }
    }
});

export default SkipButton;
