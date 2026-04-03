import { Image, View } from 'react-native'
import { Heading } from '../../_components/heading'
import logo from '../../assets/logo-nlw-esports.png'
import { styles } from './styles'

export function Home() {
	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />

			<Heading title="Find your duo!" subtitle="Find your game freedom" />
		</View>
	)
}
