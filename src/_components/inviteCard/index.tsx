import { GameControllerIcon } from 'phosphor-react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { THEME } from '../../theme'
import { InviteInfo } from '../inviteInfo'
import { styles } from './styles'

export interface InviteCardProps {
	id: string
	name: string
	hourEnd: string
	hourStart: string
	useVoiceChannel: boolean
	weekDays: string[]
	yearsPlaying: number
}

interface Props {
	data: InviteCardProps
	onConnect: () => void
}

export function InviteCard({ data, onConnect }: Props) {
	return (
		<View style={styles.container}>
			<InviteInfo label="Nome" value={data.name} />
			<InviteInfo label="Tempo de Jogo" value={`${data.yearsPlaying} ano(s)`} />
			<InviteInfo
				label="Disponibilidade"
				value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
			/>
			<InviteInfo
				label="Chamada de Áudio?"
				value={data.useVoiceChannel ? 'Sim' : 'Não'}
				colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
			/>

			<TouchableOpacity style={styles.button} onPress={onConnect}>
				<GameControllerIcon color={THEME.COLORS.TEXT} size={20} />
				<Text style={styles.buttonTitle}>Conectar</Text>
			</TouchableOpacity>
		</View>
	)
}
