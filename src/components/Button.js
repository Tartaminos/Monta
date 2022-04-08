import React from "react";
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
    Button, 
    View
} from 'react-native';


export default props => {
    const stylesButton = [styles.level_button_general]
    
    if (props.iniciante) stylesButton.push(styles.iniciante)
    if (props.intermediario) stylesButton.push(styles.intermediario)
    if (props.avancado) stylesButton.push(styles.avancado)
    
    return (
        <View>
            <Button title={props.label} bsStyle="primary">
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    level_button_general: {
        fontSize: 15,
        height: Dimensions.get('screen').width / 10,
        width: Dimensions.get('screen').width / 3,
        padding: 11,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        
        
        
    },

    iniciante: {
        backgroundColor: '#FF4500',
    },

    intermediario: {
        backgroundColor: '#FFD700',
    },

    avancado: {
        backgroundColor: '#00FF00',
    },

    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },

    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})