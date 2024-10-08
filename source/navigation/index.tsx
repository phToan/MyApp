import {createStackNavigator} from '@react-navigation/stack';
import {AppRootParams} from './types';
import HomeScreen from '../screens/home';

const Stack = createStackNavigator<AppRootParams>();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
