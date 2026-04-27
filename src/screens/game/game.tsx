import { Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../_components/background'
import { Heading } from '../../_components/heading'
import { InviteCard, type InviteCardProps } from '../../_components/inviteCard'
import logo from '../../assets/logo-nlw-esports.png'
import { THEME } from '../../theme'
import { styles } from './styles'
import { InviteMatch } from '../../_components/inviteMatch'

interface GameRouteParams {
	id: string
	title: string
	bannerUrl: string
}

export function Game() {
	const [invites, setInvites] = useState<InviteCardProps[]>([])
	const [inviteDiscordSelected, setInviteDiscordSelected] = useState<string>('')
	const navigation = useNavigation()
	const route = useRoute()
	const game = route.params as GameRouteParams

	const handleGoBack = () => {
		navigation.goBack()
	}

	async function getDiscordUser(adsId: string) {
		fetch(`http://192.168.0.30:3333/ads/${adsId}/discord`)
			.then((response) => response.json())
			.then((data) => { setInviteDiscordSelected(data.discord) })
	}

	useEffect(() => {
		fetch(`http://192.168.0.30:3333/games/${game.id}/ads`)
			.then((response) => response.json())
			.then((data) => setInvites(data))
	}, [])

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
				<FlatList
					data={invites}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <InviteCard data={item} onConnect={() => { getDiscordUser(item.id) }} />}
					horizontal
					style={[styles.invitesContainerList]}
					contentContainerStyle={[
						invites.length > 0
							? styles.invitesList
							: {
								flex: 1,
								alignItems: 'center',
								justifyContent: 'center'
							}
					]}

					ListEmptyComponent={() => (
						<Text style={styles.emptyList}>Não há convites criados para esse jogo</Text>
					)}
				/>

				<InviteMatch visible={inviteDiscordSelected.length > 0} discord={inviteDiscordSelected} onClose={() => setInviteDiscordSelected('')} />
			</SafeAreaView>
		</Background>
	)
}
