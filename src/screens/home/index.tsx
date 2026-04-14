import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Background } from '../../_components/background'
import { GameCard, type GameCardProps } from '../../_components/gamecard/gameCard'
import { Heading } from '../../_components/heading'
import logo from '../../assets/logo-nlw-esports.png'
import { styles } from './styles'

export function Home() {
	const [games, setGames] = useState<GameCardProps[]>([])
	const navigation = useNavigation()

	const handleOpenGame = ({ id, title, bannerUrl }: GameCardProps) => {
		navigation.navigate('game', { id, title, bannerUrl })
	}

	useEffect(() => {
		fetch('http://192.168.0.3:3333/games')
			.then((response) => response.json())
			.then((data) => setGames(data))
	}, [])

	return (
		<Background>
			<SafeAreaView style={styles.container}>
				<Image source={logo} style={styles.logo} />

				<Heading title="Find your duo!" subtitle="Find your game freedom" />
				<FlatList
					contentContainerStyle={styles.contentList}
					data={games}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<GameCard data={item} onPress={() => handleOpenGame(item)} />
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</SafeAreaView>
		</Background>
	)
}
