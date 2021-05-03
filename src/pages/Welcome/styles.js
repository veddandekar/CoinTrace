import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		height: "80vh",
		userSelect: "none",
		textAlign: "center",
		width: "100%",
		flex: 1,
		flexDirection: "column",
		overflowY: "hidden",
	},
	accordion: {
		width: "100%",
	},
	accordionDetails: {
		width: "80vw",
		height: "50vh",
		overflowY: "hidden",
		margin: "auto",
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
	search: {
		marginTop: "10vh",
	},
	title: {
		"font-weight": 100,
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: "33.33%",
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
		textAlign: "right",
		flexGrow: 1,
	},
	table: {
		border: 0,
	},
	root: {
		padding: "2px 4px",
		display: "flex",
		alignItems: "center",
		width: "70vw",
		flexGrow: 1,
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
}));

export default useStyles;
