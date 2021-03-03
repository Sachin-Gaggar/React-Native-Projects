import React ,{Component} from "react";
import {
    Text,TouchableOpacity,View
} from "react-native";

// class ComponentEx extends Component {
//     render(){
//         return (
//             <View style={{flex : 1, justifyContent:"center",alignItems:"center"}}>
//                 <Text>React Native</Text>
//             </View>
//         )
//         }
// }
const  FunctionComponent=(props)=>{
    return(
       
           <TouchableOpacity onPress={()=>{ alert(props.name)}}>
                    <Text style={props.style}>{props.name}{ console.log("Hi")}</Text>
                   
           </TouchableOpacity> 
  
    )
}

export default FunctionComponent;