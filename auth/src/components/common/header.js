// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
// View tag is used when we want to move elements or center it 

// Make a component
// Functional Component
const Header = (props) => {
    //Destructuring to reference style from styles. Rather that use styles.textStyle
    const { textStyle, viewStyle } = styles; 
    // style={textStyle} -> called prop syntax (properties)
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the components available to other parts of the app
export { Header };


// FlexBox is a system of positioning elements within a container
    // justifyContent is used to position elements in vertical position, flex-end push to bottom, center and flex-start (like default)
    // alignItems is used to position elements in horizontal position, start, center and end like justifyContent
