import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from 'react-native-webview';

export default class WebScreen extends React.Component{
    flor = this.props.navigation.getParam('flor');

    inventario = {
        //Los documentos html se encuentran en android/app/src/main/assets
        austrianrose:
            'file:///android_asset/austrian-rose.html',
        camelia:
            'file:///android_asset/camelia.html',
        carnation: 
            'file:///android_asset/carnation.html',
    };

    render(){
        console.log(this['inventario'][this.flor]);
        return(
            <WebView
                style={styles.webSize}
                originWhitelist={['*']}
                source={{uri: this['inventario'][this.flor]}}></WebView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    webSize: {
        flex: 1, 
        width: '100%',
        height: '100%'
    }
});