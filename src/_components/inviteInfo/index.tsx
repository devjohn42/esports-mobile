import { type ColorValue, Text, View } from 'react-native'
import { THEME } from '../../theme'
import { styles } from './styles'

interface InviteInfoProps {
	label: string
	value: string
	colorValue?: ColorValue
}

export function InviteInfo({
	label,
	value,
	colorValue = THEME.COLORS.TEXT
}: InviteInfoProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>

			<Text style={[styles.value, { color: colorValue }]} numberOfLines={1}>
				{value}
			</Text>
		</View>
	)
}
