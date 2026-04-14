import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../_components/background'
import { styles } from './styles'

export function Game() {
	return (
		<Background>
			<SafeAreaView style={styles.container}></SafeAreaView>
		</Background>
	)
}
