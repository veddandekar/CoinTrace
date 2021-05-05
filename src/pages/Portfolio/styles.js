import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		height: "80vh",
		userSelect: "none",
		textAlign: "center",
		width: "100%",
		flex: 1,
		flexDirection: "column",
		marginTop: "-15vh",
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
		fontSize: "1.1em",
		fontWeight: 900,
		height: "7vh",
		width: "17vw",
	},
	accordion: {
		width: "100%",
	},
	accordionDetails: {
		paddingBottom: "5vh",
		overflowY: "hidden",
	},
	icon: {
		width: "100%",
		height: "100%",
		color: theme.palette.secondary.main,
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
		tableLayout: "fixed",
		maxWidth: "80vw",
		textAlign: "center",
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
