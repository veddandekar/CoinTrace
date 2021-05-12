import React from "react";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { FaCaretDown, FaRegHeart, FaHeart } from "react-icons/fa";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Fb from "components/Fb";
import Meta from "components/Meta";
import axios from "axios";
import useStyles from "./styles";

function Welcome() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const [data, setData] = React.useState({});
	const [viewData, setViewData] = React.useState({});
	const [favs, setFavs] = React.useState({});
	const [searchData, setSearchData] = React.useState("");
	const [tableData, setTableData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [panelLoading, setPanelLoading] = React.useState(true);
	const [timer, setTimer] = React.useState(0);

	React.useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				"https://api.allorigins.win/get?url=https://api.wazirx.com/api/v2/tickers?" +
					new Date().getTime()
			);

			let favNames = JSON.parse(localStorage.getItem("favs")) || [];
			let parsedData = {};
			favNames.forEach((fav) => {
				parsedData[fav] = result.data.contents[fav];
			});
			setFavs(parsedData);
			setData(JSON.parse(result.data.contents));
			setLoading(false);
		};

		fetchData();
	}, []);

	React.useEffect(() => {
		setLoading(true);
		clearTimeout(timer);
		setTimer(
			setTimeout(() => {
				if (!searchData.length) setViewData(favs);
				else {
					let parsedData = {};
					Object.keys(data).forEach((key, index) => {
						if (data[key]["base_unit"].includes(searchData.toLowerCase())) {
							parsedData[key] = data[key];
						}
					});
					setViewData(parsedData);
				}
				setLoading(false);
			}, 600)
		);
	}, [searchData, data]);

	const handleChange = (panel) => async (event, isExpanded) => {
		setPanelLoading(true);
		if (!isExpanded) {
			setExpanded(false);
			return;
		}
		setExpanded(panel);
		const result = await axios(
			"https://api.allorigins.win/get?url=https://api.wazirx.com/api/v2/trades?market=" +
				panel,
		);
		let parsedData = [];
		JSON.parse(result.data.contents).forEach((item) => {
			parsedData.push({ price: item.price, time: item.created_at });
		});
		setTableData(parsedData);
		setPanelLoading(false);
	};

	const addToFav = (e, key) => {
		e.stopPropagation();
		setLoading(true);
		let curr = JSON.parse(localStorage.getItem("favs")) || [];
		localStorage.setItem("favs", JSON.stringify([key, ...curr]));
		setFavs({ [key]: data[key], ...favs });
		setLoading(false);
	};

	const removeFromFav = (e, key) => {
		e.stopPropagation();
		setLoading(true);
		let curr = JSON.parse(localStorage.getItem("favs")) || [];
		let newFavData = {};
		localStorage.setItem(
			"favs",
			JSON.stringify(
				curr.filter((item) => {
					if (item != key) {
						newFavData[key] = favs[key];
						return true;
					}
					return false;
				})
			)
		);
		setFavs(newFavData);
		setLoading(false);
	};
	let localFavs = JSON.parse(localStorage.getItem("favs")) || [];
	return (
		<>
			<Meta title="Welcome" description="Welcome to React PWA" />
			<Container maxWidth="sm" className="full-height">
				<Fb alignCenter className={classes.search}>
					<Paper component="form" className={classes.root}>
						<InputBase
							className={classes.input}
							placeholder="Search Cryptos"
							value={searchData}
							onChange={(e) => setSearchData(e.target.value)}
						/>
					</Paper>
				</Fb>
				<Fb justifyCenter alignCenter className={classes.wrapper}>
					{!loading ? (
						localFavs.length || searchData.length ? (
							Object.keys(viewData).map((key, index) => {
								return (
									<Accordion
										key={key + index}
										expanded={expanded === key}
										onChange={handleChange(key)}
										TransitionProps={{ unmountOnExit: true }}
										className={classes.accordion}
									>
										<AccordionSummary
											expandIcon={<FaCaretDown />}
											aria-controls={key + "bh-content"}
											id={key + "bh-header"}
										>
											{localFavs.includes(key) ? (
												<FaHeart onClick={(e) => removeFromFav(e, key)} />
											) : (
												<FaRegHeart onClick={(e) => addToFav(e, key)} />
											)}
											<Typography className={classes.heading}>
												{data[key]["name"].split("/")[0]}
											</Typography>
											<Typography className={classes.secondaryHeading}>
												{data[key]["last"] +
													" (" +
													data[key]["quote_unit"] +
													")"}
											</Typography>
										</AccordionSummary>
										<AccordionDetails className={classes.accordionDetails}>
											<TableContainer>
												{!panelLoading ? (
													<Table
														className={classes.table}
														aria-label="simple table"
														size="small"
													>
														<TableHead>
															<TableRow>
																<TableCell>Time</TableCell>
																<TableCell align="right">Price</TableCell>
															</TableRow>
														</TableHead>
														<TableBody>
															{tableData.map((row, index) => (
																<TableRow key={key + index}>
																	<TableCell component="th" scope="row">
																		{row.time.split("T")[1].split("Z")[0]}
																	</TableCell>
																	<TableCell align="right">
																		{row.price}
																	</TableCell>
																</TableRow>
															))}
														</TableBody>
													</Table>
												) : (
													<CircularProgress />
												)}
											</TableContainer>
										</AccordionDetails>
									</Accordion>
								);
							})
						) : (
							"Add coins to favourites!"
						)
					) : (
						<CircularProgress />
					)}
				</Fb>
			</Container>
		</>
	);
}

export default Welcome;
