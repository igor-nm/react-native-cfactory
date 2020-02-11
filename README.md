<!--
*** Thanks you to be here. If you have some suggestions that may improve still more
*** make a fork and do a pull request or open a issue with tag "Suggestion".
*** Let's go run this awesome project :D
-->

<!-- PROJECT SHIELDS -->

[![npm](https://img.shields.io/npm/v/react-native-cfactory.svg?label=npm%20package)](https://www.npmjs.com/package/react-native-cfactory)
[![NPM Downloads](https://img.shields.io/npm/dm/react-native-cfactory.svg)](https://www.npmjs.com/package/react-native-cfactory)
[![GitHub last commit](https://img.shields.io/github/last-commit/igor-nm/react-native-cfactory.svg)](https://github.com/igor-nm/react-native-cfactory/commits/master)
[![GitHub issues](https://img.shields.io/github/issues-raw/igor-nm/react-native-cfactory.svg)](https://github.com/igor-nm/react-native-cfactory/issues)
[![License](https://img.shields.io/github/license/igor-nm/react-native-cfactory.svg)](https://github.com/igor-nm/react-native-cfactory/blob/master/LICENSE)
[![GitHub tag](https://img.shields.io/github/tag/igor-nm/react-native-cfactory.svg?color=ff0052)](https://GitHub.com/igor-nm/react-native-cfactory/tags/)

<h1 align="center" style="margin: auto">cFactory</h1>

<!-- ABOUT PROJECT -->

### About

This project exists because it became necessary to have production's speed and agility on react native projects. However we knows that found updated component's libraries it's a little bit hard and anoying. So I made this opensource library to make the most of common components and will keep it updated. Obviously it'll get open for onebody that can contribuite with this. It is made in TypeScript, and has some libraries to keep code's default.

<!-- TABLE OF CONTENTS -->

### External content (libraries)

Libraries used to create components:

<!-- -   [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) - Customizable Icons for React Native with support for NavBar/TabBar/ToolbarAndroid, image source and full styling. -->

-   [Styled Components](https://www.styled-components.com/) - _Styled Components_ is a CSS-in-JS library that enables developers to write each component with their own styles and allows the code to be in a single location. By coupling your styles with the components, it results in optimizing developer experience and output.

<!-- GETTING STARTED -->

## Getting Started

#### Instalation

Install cfactory.

```sh
yarn add react-native-cfactory
# or npm install react-native-cfactory
```

Now you is able to use the components.
Follow a sample bellow:

```javascript
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Floating, Outline } from 'react-native-cfactory/text-input';

export default function YourComponent() {
    const [text, setText] = useState('');

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View>
                    <Outline value={text} label={'Outline Label'} onChangeText={x => setText(x)} />
                    <Floating value={text} label={'Floating Label'} onChangeText={x => setText(x)} />
                </View>
            </SafeAreaView>
        </>
    );
}
```

<!-- CONTRIBUITION -->

## Contribution

Contributions are what make the open source community an incredible place to learn, inspire and create. Any contributions you make will be greatly appreciated.

1. Make a Project Fork
2. Create a Branch for your Feature (`git checkout -b feature/NewFeature`)
3. Add your changes (`git add .`)
4. Commit your changes (`git commit -m 'Adding an incredible feature!'`)
5. Push Branch (`git push origin feature/NewFeature`)
6. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT license. See `LICENSE` for more information.

**"That's all folks!"**
