import React, { useState, forwardRef } from 'react';
import { TextInputProps, TextInput, Platform } from 'react-native';

import Label from '../label';
import { Container, InputText } from './styles';

const max = Platform.OS === 'ios' ? 18 : 13;

interface Props extends TextInputProps {
    label: string;
    onChangeText(valueText: string): void;
}

const textInput = forwardRef<TextInput, Props>(({ label, ...props }: Props, ref: any) => {
    const [focus, setFocus] = useState<boolean>(false);

    return (
        <Container>
            <Label label={label} isFocus={focus} marginRage={{ min: 0, max }} />
            <InputText {...props} ref={ref} focusControl={setFocus} />
        </Container>
    );
});

export default textInput;
