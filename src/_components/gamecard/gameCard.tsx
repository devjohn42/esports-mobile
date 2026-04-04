import { LinearGradient } from 'expo-linear-gradient'
import {
	ImageBackground,
	type ImageSourcePropType,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps
} from 'react-native'
import { THEME } from '../../theme'
import { styles } from './styles'

export interface GameCardProps {
	id: string
	name: string
	ads: number
	cover: ImageSourcePropType
}

interface Props extends TouchableOpacityProps {
	data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<ImageBackground style={styles.cover} source={data.cover}>
				<LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
					<Text style={styles.name}>{data.name}</Text>
					<Text style={styles.ads}>{data.ads} convites</Text>
				</LinearGradient>
			</ImageBackground>
		</TouchableOpacity>
	)
}
