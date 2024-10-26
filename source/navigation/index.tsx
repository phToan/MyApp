import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppRootParams} from './types';
import HomeScreen from '../screens/home';
import {useEffect} from 'react';
import {getLanguage} from '../utils/storage';
import {LanguageEnum} from '../model/language';
import i18n from '../utils/i18n';

const Stack = createStackNavigator<AppRootParams>();

function StackNavigator() {
  // useEffect(() => {
  //   const initLanguage = async () => {
  //     const language = await getLanguage();
  //     if (language === LanguageEnum.EN) {
  //       i18n.changeLanguage(LanguageEnum.EN);
  //     } else {
  //       i18n.changeLanguage(LanguageEnum.VN);
  //     }
  //   };
  //   initLanguage();
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
