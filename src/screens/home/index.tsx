import { useEffect, useState } from 'react'
import { FlatList, Image, View } from 'react-native'
import { GameCard, type GameCardProps } from '../../_components/gamecard/gameCard'
import { Heading } from '../../_components/heading'
import logo from '../../assets/logo-nlw-esports.png'
import { styles } from './styles'

export function Home() {
	const [games, setGames] = useState<GameCardProps[]>([])

	useEffect(() => {
		fetch('http://192.168.0.3:3333/games')
			.then((response) => response.json())
			.then((data) => setGames(data))
	}, [])

	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />

			<Heading title="Find your duo!" subtitle="Find your game freedom" />
			<FlatList
				contentContainerStyle={styles.contentList}
				data={games}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <GameCard data={item} />}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}
