import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAvoidingView,Text,ImageBackground,TouchableOpacity,Image, Button, View,StyleSheet,Header } from 'react-native'
import MenuButton from '../components/MenuButton';
import {ImagePicker, Permissions} from 'expo';
import firebase from "firebase";
import Spinner from './Spinner';

export default class ProfileScreen  extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:null,
       email:null,
       photoUrl:'http://bit.ly/gbr-pisang',
       hasCameraPermission: null,
       hasCameraRollPermission:null,
    }
  }
  
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });

    const { statusCameraRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraRollPermission: statusCameraRoll === 'granted' });
  }

  _renderButtonOrSpinner=()=>{
    if (this.state.loading) {
      return <Spinner />;
      
    }
  }

  _pickImage = async ()=>{
    let result = await ImagePicker.launchCameraAsync({
        allowsEditing:true,
        aspect:[1,1],
    });
    if(!result.cancelled){
        this.setState({photoUrl: result.uri});
    }
};
  
    static navigationOptions  ={
       
        title :'Home',
    };
    render() {
      return (
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} behavior="padding" enabled>
              <MenuButton navigation ={this.props.navigation}/>

              <TouchableOpacity onPress={this._pickImage}>
                  <Image source={{uri:this.state.photoUrl}} style={{width:200,height:200}} />
              </TouchableOpacity>
              
              {this._renderButtonOrSpinner()}
              <View style={styles.button}>
                  <Button
                      color="lightblue"
                      style={{width:'90%'}}
                      onPress={this._signOutAsync}
                      title="Log out">
                  </Button>
              </View>
              
          </KeyboardAvoidingView>          
      );
  }

  _signOutAsync= () => {
      firebase.auth().signOut().then(function () {
          this.props.navigation.navigate('Auth');
      }).catch(function (error) {
          console.log(error)
      });
  };
}
const styles=StyleSheet.create({

  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  button:{
    borderRadius:10,
    width: '90%',
    marginTop:20
  }
 

})
