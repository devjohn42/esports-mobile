import { FlatList, Image, View } from 'react-native'
import { GameCard } from '../../_components/gamecard/gameCard'
import { Heading } from '../../_components/heading'
import logo from '../../assets/logo-nlw-esports.png'
import { GAMES } from '../../utils/games'
import { styles } from './styles'

export function Home() {
	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />

			<Heading title="Find your duo!" subtitle="Find your game freedom" />
			<FlatList
				contentContainerStyle={styles.contentList}
				data={GAMES}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <GameCard data={item} />}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}
