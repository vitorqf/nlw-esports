import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
