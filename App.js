import { SafeAreaView, StatusBar, View } from 'react-native';
import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })
  console.log(fonteCarregada)
  
  if (!fonteCarregada) {
    return <View />
  }
  
  console.log(fonteCarregada)

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
