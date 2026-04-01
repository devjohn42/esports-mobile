import {
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_900Black,
	useFonts
} from '@expo-google-fonts/inter'
import { StatusBar } from 'react-native'
import { Background } from './src/_components/background'
import { Loading } from './src/_components/loading/loading'
import { Home } from './src/screens/home'

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_900Black
	})

	return (
		<Background>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
			{fontsLoaded ? <Home /> : <Loading />}
		</Background>
	)
}
