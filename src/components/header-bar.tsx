import * as React from 'react';
import { Bar } from '../atoms';
import AnimatedBox, { AnimatedBoxProps } from '../atoms/animated-box';


const HeaderBar: React.FC<AnimatedBoxProps> = ({children, ...rest}) => {
    return (
        <AnimatedBox position="absolute" top={40} left={0} right={0} {...rest}>
            <Bar 
                variant='headerBar' 
                flexDirection='row'
                alignItems='center'
                mx="lg"
                my="md"
                px="sm"
                minHeight={44}
            >{children}</Bar>
        </AnimatedBox>
    )
}

export default HeaderBar