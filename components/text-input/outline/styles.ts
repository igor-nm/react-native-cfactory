import { Platform } from 'react-native';
import styled from 'styled-components/native';

import TextInput from '../common';

const isAndroid = Platform.OS === 'android';

export const Container = styled.View`
    border: 1px;
    height: 45px;
    margin: 0px 10px;
    margin-top: 10px;
    border-radius: 4.5px;
`;

export const InputText = styled(TextInput)`
    padding-left: 10px;
    margin-top: ${isAndroid ? 7 : 15}px;
`;
