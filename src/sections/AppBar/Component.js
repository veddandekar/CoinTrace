import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import { FaSun, FaRedo as RedoIcon, FaBars as MenuIcon } from "react-icons/fa";

import Link from "components/Link";
import Fb from "components/Fb";
import Divider from "components/Divider";

import useTheme from "store/theme";
import useSW from "store/sw";

import { title, repository } from "config";

import useStyles from "./styles";

function AppBar_({ onMenuOpen }) {
	const classes = useStyles();
	const [, themeActions] = useTheme();
	const [swState, swActions] = useSW();

	function handleToggleTheme() {
		themeActions.toggle();
	}

	function handleAppUpdate() {
		swActions.update();
	}

	return (
		<AppBar
			position="absolute"
			className={classes.appBar}
			color="primary"
			elevation={1}
		>
			<Toolbar className={classes.toolbar}>
				<Fb className={classes.main}>
					<IconButton edge="start" aria-label="open menu" onClick={onMenuOpen}>
						<MenuIcon />
					</IconButton>
					<Link to="/CoinTrace">
						<Button aria-label="go to home" className={classes.title}>
							{title}
						</Button>
					</Link>
				</Fb>
				<Fb>
					{swState.isUpdated && (
						<>
							<Tooltip
								title="The application has newer version; press to update"
								arrow
							>
								<IconButton
									aria-label="update the application"
									color="primary"
									onClick={handleAppUpdate}
								>
									<RedoIcon />
								</IconButton>
							</Tooltip>
							<Divider orientation="vertical" flexItem />
						</>
					)}
					<Divider orientation="vertical" flexItem />
					<Tooltip title="Change theme" arrow>
						<IconButton
							aria-label="toggle theme"
							edge="end"
							onClick={handleToggleTheme}
						>
							<FaSun />
						</IconButton>
					</Tooltip>
				</Fb>
			</Toolbar>
		</AppBar>
	);
}

export default AppBar_;
