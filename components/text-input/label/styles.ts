import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const ContentLabel = styled(Animated.View)`
    position: absolute;
    margin-top: 9px;
    background-color: #fff;
`;

export const TextLabel = styled(Animated.Text)`
    color: #000;
    font-size: 16px;
    padding: 0px 2.5px;
`;
