import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
import MenuButton from '../components/MenuButton';

export default class ProfileScreen extends React.Component {
  render() {
    return (
          <View style={styles.container}>

              <MenuButton navigation ={this.props.navigation}/>

              <Image source={require('../assets/group.png')} style={{width:'80%', height:'30%'}}/>
              <Text style={styles.text}>Hamim Nizar Yudistira</Text>
              <Text style={styles.text}>M. Yusuf Efendy</Text>
              <Text style={styles.text}>Hendro Dwi Prasetyo</Text>


          </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:26,
    marginTop:10,
    backgroundColor:'#f0f0f0',
    borderRadius: 10,
  }
});
