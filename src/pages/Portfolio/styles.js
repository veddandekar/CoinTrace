import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		height: "80vh",
		userSelect: "none",
		textAlign: "center",
		width: "100%",
		flex: 1,
		flexDirection: "column",
		marginTop: "-20vh",
		overflow: "hidden",
	},
	card: {
		marginTop: "10vh",
	},
	cardContent: {
		display: "flex",
		flexDirection: "row",
	},
	banner: {
		textAlign: "center",
		fontSize: "1.3em",
		fontWeight: 900,
	},
	accordion: {
		width: "100%",
	},
	accordionDetails: {
		width: "85vw",
		paddingBottom: "5vh",
		overflowY: "hidden",
		margin: "auto",
		"align-items": "center",
		"justify-content": "center",
	},
	icon: {
		width: "100%",
		height: "100%",
		color: theme.palette.secondary.main,
	},
	iconBox: {
		width: 50,
		marginRight: 10,
	},
	title: {
		"font-weight": 100,
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: "33.33%",
		flexShrink: 0,
	},
	minuteText: {
		fontSize: "0.5em",
		textAlign: "right",
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		flexGrow: 1,
	},
	table: {
		border: 0,
		maxWidth: "30vw",
	},
	fab: {
		position: "absolute",
		bottom: theme.spacing(5),
		right: theme.spacing(5),
	},
	textRight: {
		textAlign: "right",
	},
	profit: {
		color: "#2fa851",
	},
	loss: {
		color: "#cc2d2d",
	},
}));

export default useStyles;
