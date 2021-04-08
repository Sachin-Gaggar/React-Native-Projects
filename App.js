import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Navigation from './src/Navigation';

// export default class App extends React.Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Navigation />
//       </NavigationContainer>
//     );
//   }
// }
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    );
  }
}
