import { Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Image, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../_components/background'
import { Heading } from '../../_components/heading'
import logo from '../../assets/logo-nlw-esports.png'
import { THEME } from '../../theme'
import { styles } from './styles'

interface GameRouteParams {
	id: string
	title: string
	bannerUrl: string
}

export function Game() {
	const navigation = useNavigation()
	const route = useRoute()
	const game = route.params as GameRouteParams

	const handleGoBack = () => {
		navigation.goBack()
	}

	return (
		<Background>
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={handleGoBack}>
						<Entypo name="chevron-thin-left" color={THEME.COLORS.CAPTION_300} size={20} />
					</TouchableOpacity>

					<Image source={logo} style={styles.logo} />

					<View style={styles.right} />
				</View>

				<Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode="cover" />

				<Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />
			</SafeAreaView>
		</Background>
	)
}
