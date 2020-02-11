import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

import { ContentLabel, TextLabel } from './styles';

interface LabelProps {
    label: string;
    isFocus: boolean;
    marginRage: {
        min: number;
        max: number;
    };
}

const Label: React.FC<LabelProps> = ({ label, isFocus, marginRage }) => {
    const fontSize = useRef(new Animated.Value(1)).current;
    const marginTop = useRef(new Animated.Value(1)).current;
    const marginLeft = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const animate = (element: any, min: any, max: any) =>
            Animated.timing(element, {
                toValue: isFocus ? min : max,
                duration: 50
            }).start();

        animate(fontSize, 12, 16);
        animate(marginLeft, 5, 10);
        animate(marginTop, marginRage.min, marginRage.max);
    }, [fontSize, isFocus, marginLeft, marginRage.max, marginRage.min, marginTop]);

    return (
        <ContentLabel style={{ marginTop, marginLeft }}>
            <TextLabel style={{ fontSize: fontSize }}>{label}</TextLabel>
        </ContentLabel>
    );
};

export default Label;
