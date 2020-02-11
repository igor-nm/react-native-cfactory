import React, { useState } from 'react';
import { TextInputProps, TextInput } from 'react-native';

import Label from '../label';
import { Container, InputText } from './styles';

interface Props extends TextInputProps {
    label: string;
    onChangeText(valueText: string): void;
}

const Outline = React.forwardRef<TextInput, Props>(({ label, ...props }: Props, ref: any) => {
    const [focus, setFocus] = useState<boolean>(false);

    return (
        <Container>
            <Label label={label} isFocus={focus} marginRage={{ min: -9, max: 13 }} />
            <InputText {...props} ref={ref} focusControl={setFocus} />
        </Container>
    );
});

export default Outline;
