import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from './screens/LoginScreen'
import ChatScreen from './screens/ChatScreen'

const AppNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Chat: ChatScreen

    },
    {
        headerMode: "none"
    }
)



export default createAppContainer(AppNavigator);


// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'

// const App = () => {
//     return (
//         <View>
//             <Text>Screen!!</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'darkslateblue',
//         alignItems: 'center',
//         justifyContent: 'center',
    
//     }
// })





// export default App

