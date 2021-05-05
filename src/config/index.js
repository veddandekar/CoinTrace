import isMobile from "utils/isMobile";

/* set your data here */
const email = "veddandekar6@gmail.com";
const domain = "https://www.github.com/veddandekar";
/* ***************** */

const repository = "https://github.com/suren-atoyan/react-pwa";

const messages = {
	app: {
		crash: {
			title: "Oooops... Sorry, I guess, something went wrong. You can:",
			options: {
				email: `contact with author by this email - ${email}`,
				reset: "Press here to reset the application",
			},
		},
	},
	loader: {
		fail:
			"Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea",
	},
	images: {
		failed: "something went wrong during image loading :(",
	},
	404: "Hey bro? What are you looking for?",
};

const copyright = {
	title: "copyright © ",
	link: domain,
};

const themes = {
	light: {
		palette: {
			type: "light",
			background: {
				default: "#dfdfdf",
				paper: "#f4f3f3",
			},
			primary: {
				light: "#7986cb",
				main: "#b1bed5",
				dark: "#303f9f",
				contrastText: "#fff",
			},
		},
	},

	dark: {
		palette: {
			type: "dark",
			background: {
				default: "#313131",
				paper: "#414141",
			},
			primary: {
				light: "#00adb5",
				main: "#525252",
				dark: "#393e46",
				contrastText: "#fff",
			},
		},
	},
};

const cancelationMessage = "operation is manually canceled";

const dateFormat = "MMMM DD, YYYY";

const title = "CoinTrace";

const themePair = ["dark", "light"];

const notifications = {
	options: {
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "left",
		},
		autoHideDuration: 3000,
	},
	maxSnack: isMobile ? 3 : 4,
};

const loader = {
	// no more blinking in your app
	delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
	minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const giphy404 = "https://giphy.com/embed/8L0Pky6C83SzkzU55a";

export {
	messages,
	cancelationMessage,
	dateFormat,
	copyright,
	email,
	domain,
	repository,
	loader,
	title,
	themePair,
	giphy404,
	notifications,
	themes,
};
