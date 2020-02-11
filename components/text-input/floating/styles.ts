import { Platform } from 'react-native';
import styled from 'styled-components/native';

import TextInput from '../common';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
    height: 45px;
    margin: 0px 10px;
    border-bottom-width: 1px;
`;

styled.TextInput;
export const InputText = styled(TextInput)`
    padding-left: 10px;
    margin-top: ${isAndroid ? 7 : 20}px;
`;
