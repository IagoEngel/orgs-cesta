import { SafeAreaView, StatusBar, View } from 'react-native';
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta'

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
