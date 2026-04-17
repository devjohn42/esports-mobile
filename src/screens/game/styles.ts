import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 32,
		marginTop: 28,
		justifyContent: 'space-between'
	},
	logo: {
		width: 125,
		height: 70
	},
	right: {
		width: 20,
		height: 20
	},
	cover: {
		width: 370,
		height: 190,
		borderRadius: 8,
		marginTop: 32
	},
	invitesContainerList: {
		width: '100%'
	},
	invitesList: {
		paddingLeft: 32,
		paddingRight: 64,
		alignContent: 'flex-start'
	},
	emptyList: {
		color: THEME.COLORS.CAPTION_300,
		fontSize: THEME.FONT_SIZE.SM,
		fontFamily: THEME.FONT_FAMILY.REGULAR
	}
})
