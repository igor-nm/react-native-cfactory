import React, { useState, forwardRef } from 'react';
import { TextInput, TextInputProps, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

interface Props extends TextInputProps {
    value?: string;
    focusControl(focus: boolean): void;
    onChangeText(valueText: string): void;
}

const Common = forwardRef(({ value = '', focusControl, onChangeText, ...props }: any, ref: any) => {
    const [text, setText] = useState<string>(value);
    const [focus, setFocus] = useState<boolean>(false);

    function setData(data: string) {
        setText(data);
        onChangeText(data);
    }

    function handlerFocus(event: NativeSyntheticEvent<TextInputFocusEventData>) {
        const currentFocus = !focus;

        setFocus(currentFocus);
        focusControl(currentFocus || !!value);

        if (props?.onFocus) {
            props.onFocus(event);
        }

        if (props?.onBlur) {
            props.onBlur(event);
        }
    }

    return (
        <TextInput
            {...props}
            ref={ref}
            value={text}
            onBlur={handlerFocus}
            onFocus={handlerFocus}
            onChangeText={setData}
        />
    );
});

export default Common;
