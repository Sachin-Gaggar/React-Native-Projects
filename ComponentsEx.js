import React ,{Component} from "react";
import {
   Button, Text,TouchableOpacity,View
} from "react-native";
import FunctionComponent from "./FunctionComponent"

class ComponentEx extends Component {
    render(){
        return (
        
        
        <View style={{flex : 1, justifyContent:"center",alignItems:"center"}}>
            <Button
  onPress={() => {
    alert('You tapped the button!');
  }}
  title="Press Me"
/>
            <FunctionComponent style={{color:"red"}} press={(data)=>alert(data)} name={"Sachin"}/>
            <FunctionComponent press={(data)=>{alert(data)}} name={"Mohmad"}/>
            <FunctionComponent press={(data)=>{alert(data)}} name={"Shubham"}/>
            </View>
        )
        }
}

export default ComponentEx;