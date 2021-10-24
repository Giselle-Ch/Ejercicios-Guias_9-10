import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler"; 

export default class HomeScreen extends React.Component {
    render(){
        return(
          <View style={styles.container}>
            <Text style={styles.title}>El <Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>abc</Text> de las flores (extract)</Text>
            <Text style={{fontSize: 17, textAlign: 'center', marginBottom: 30, color:'#000'}}><Text style={{fontStyle: 'italic'}}>"Siempre habrán flores para aquellos que desean verlas"</Text> -H. Matisse</Text>

            <Text style={{fontSize: 16, marginLeft: 18, marginBottom: 10, color: '#000'}}>A</Text>
            <TouchableHighlight
              style={styles.boton}
                onPress={() =>
                        this.props.navigation.navigate('Web',{
                            flor: 'austrianrose',
                        })
                    }    
            >
              <View style={styles.botones}>
                <Image source={require('./img/icon/potted-plant-6.png')} style={styles.icon}/>
                <View style={styles.bar}></View>
                <Text style={styles.textoBoton}>Austrian Rose</Text>
              </View>
            </TouchableHighlight>
            
            <Text style={{fontSize: 16, marginLeft: 18, marginBottom: 10, color: '#000'}}>C</Text>
            <TouchableHighlight
              style={styles.boton}
                    onPress={() =>
                        this.props.navigation.navigate('Web',{
                            flor: 'camelia',
                        })
                    }
            >
              <View style={styles.botones}>
                <Image source={require('./img/icon/potted-plant-6.png')} style={styles.icon}/>
                <View style={styles.bar}></View>
                <Text style={styles.textoBoton}>Camelia</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight
              style={styles.boton}
                    onPress={() =>
                        this.props.navigation.navigate('Web',{
                            flor: 'carnation',
                        })
                    }
            >
              <View style={styles.botones}>
                <Image source={require('./img/icon/potted-plant-6.png')} style={styles.icon}/>
                <View style={styles.bar}></View>
                <Text style={styles.textoBoton}>Carnation</Text>
              </View>
            </TouchableHighlight>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faedcd',
    textAlign: 'center'
  },

  title: {
    color: '#26513B',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 70,
    marginBottom: 10,
    textAlign: 'center'
  },

  boton: {
    height: 78,
    backgroundColor: '#26513B',
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 10,
  },

  botones: {
    backgroundColor: '#faedcd',
    flexDirection: 'row',
    margin: 5,
    height: 67,
  },

  textoBoton: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 18,
    color: '#000',
    fontWeight: 'bold'
  },

  icon: {
    height: 40,
    width: 40,
    marginTop: 15,
    marginHorizontal: 7,
    tintColor: '#2b2d42'
  },

  bar: {
    backgroundColor: '#26513B',
    width: 3,
    marginVertical: 10,
    borderRadius: 5
  }
})