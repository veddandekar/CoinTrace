import React from "react";
import Fb from "components/Fb";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Button from "@material-ui/core/Button";
import { FaCaretDown, FaTrashAlt, FaPlus } from "react-icons/fa";
import Divider from "@material-ui/core/Divider";
import Meta from "components/Meta";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import useStyles from "./styles";

function Portfolio() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const [data, setData] = React.useState({});
	const [viewData, setViewData] = React.useState({});
	const [loading, setLoading] = React.useState(true);
	const [portfolio, setPortfolio] = React.useState({});
	const [open, setOpen] = React.useState(false);
	const [newCoin, setNewCoin] = React.useState({
		name: "",
		value: Number(),
		quantity: Number(),
	});

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	React.useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				"https://api.allorigins.win/get?url=https://api.wazirx.com/api/v2/tickers?" + new Date().getTime()
			);
			setData(JSON.parse(result.data.contents));
			setPortfolio(JSON.parse(localStorage.getItem("portfolio")) || {});
			setLoading(false);
		};
		fetchData();
	}, []);

	const handleChange = (panel) => async (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const addNewTransaction = (e) => {
		let newPortfolio = {
			...portfolio,
			[newCoin.name]: [
				{
					value: Number(newCoin.value),
					quantity: Number(newCoin.quantity),
				},
				...(portfolio[newCoin.name] || []),
			],
		};
		setPortfolio(newPortfolio);
		localStorage.setItem("portfolio", JSON.stringify(newPortfolio));
		handleClose();
	};

	const deleteTransaction = (key, index) => {
		let newPortfolio = {};
		Object.keys(portfolio).forEach((key2) => {
			if (key2 != key) {
				newPortfolio[key2] = portfolio[key2];
			} else {
				if (portfolio[key].length == 1) return;
				newPortfolio[key] = portfolio[key];
				newPortfolio[key].splice(index, 1);
			}
		});
		localStorage.setItem("portfolio", JSON.stringify(newPortfolio));
		setPortfolio(newPortfolio);
	};

	let baseNames = Object.keys(data).sort();
	let InvestedAmount = 0,
		currentAmount = 0,
		overallPL = 0;
	Object.keys(portfolio).forEach((key) => {
		portfolio[key].forEach((transaction) => {
			InvestedAmount += transaction.value * transaction.quantity;
			currentAmount += data[key].last * transaction.quantity;
		});
	});
	overallPL = ((currentAmount - InvestedAmount) / InvestedAmount) * 100;
	return (
		<>
			<Meta title="My Portfolio" description="Track your portfolio" />
			<Container maxWidth="sm" className="full-height">
				<Fb alignCenter justifyCenter className={classes.card}>
					<Card>
						<CardContent className={classes.cardContent}>
							<div className={classes.banner}>
								INVESTED
								<br />
								<Typography className={classes.amount}>
									₹{InvestedAmount.toFixed(2)}
								</Typography>
							</div>
							<Divider
								orientation="vertical"
								flexItem={true}
								light={true}
								variant="middle"
							/>
							<div className={classes.banner}>
								CURRENT
								<br />
								<Typography className={classes.amount}>
									₹{currentAmount.toFixed(2)}
								</Typography>
								<Typography
									className={
										currentAmount - InvestedAmount > 0
											? `${classes.minuteText} ${classes.profit}`
											: `${classes.minuteText} ${classes.loss}`
									}
								>
									({currentAmount - InvestedAmount > 0 ? "+" : ""}
									{(currentAmount - InvestedAmount).toFixed(2)})
								</Typography>
							</div>
							<Divider
								orientation="vertical"
								flexItem={true}
								light={true}
								variant="middle"
							/>
							<div className={classes.banner}>
								ROI
								<br />
								<Typography
									className={
										overallPL > 0
											? `${classes.secondaryHeading} ${classes.profit}`
											: `${classes.secondaryHeading} ${classes.profit}`
									}
								>
									{overallPL.toFixed(2)}%
								</Typography>
							</div>
						</CardContent>
					</Card>
				</Fb>
				<Fb justifyCenter alignCenter className={classes.wrapper}>
					{!loading ? (
						Object.keys(portfolio).length ? (
							Object.keys(portfolio).map((key, index) => {
								let totalInvestment = 0,
									totalQuantity = 0;
								portfolio[key].forEach((transaction) => {
									totalInvestment += transaction.value * transaction.quantity;
									totalQuantity += transaction.quantity;
								});
								let pl = (
									((data[key]["last"] - totalInvestment / totalQuantity) /
										(totalInvestment / totalQuantity)) *
									100
								).toFixed(2);
								return (
									<Accordion
										key={key + index}
										expanded={expanded === key}
										onChange={handleChange(key)}
										TransitionProps={{ unmountOnExit: true }}
										className={classes.accordion}
									>
										<AccordionSummary
											expandIcon={<FaCaretDown color="primary" />}
											aria-controls={key + "bh-content"}
											id={key + "bh-header"}
										>
											<Typography className={classes.heading}>
												{data[key]["name"].split("/")[0]}
											</Typography>
											<Typography
												className={
													pl > 0
														? `${classes.secondaryHeading} ${classes.profit} ${classes.textRight}`
														: `${classes.secondaryHeading} ${classes.loss} ${classes.textRight}`
												}
											>
												{pl}%
											</Typography>
										</AccordionSummary>
										<AccordionDetails className={classes.accordionDetails}>
											<TableContainer>
												<Table
													className={classes.table}
													aria-label="simple table"
													size="small"
												>
													<TableHead>
														<TableRow>
															<TableCell></TableCell>
															<TableCell>Invested</TableCell>
															<TableCell>P/L</TableCell>
															<TableCell align="right">P/L %</TableCell>
														</TableRow>
													</TableHead>
													<TableBody>
														{portfolio[key].map((row, index) => {
															let rowPl = (
																data[key]["last"] * row.quantity -
																row.value * row.quantity
															).toFixed(2);
															let rowPlp = (
																((data[key]["last"] * row.quantity -
																	row.value * row.quantity) /
																	(row.value * row.quantity)) *
																100
															).toFixed(2);
															return (
																<TableRow key={key + index}>
																	<TableCell width={0}>
																		<FaTrashAlt
																			onClick={() =>
																				deleteTransaction(key, index)
																			}
																		/>
																	</TableCell>
																	<TableCell>
																		₹{(row.value * row.quantity).toFixed(2)}
																	</TableCell>
																	<TableCell
																		className={
																			rowPl > 0 ? classes.profit : classes.loss
																		}
																	>
																		₹{rowPl}
																	</TableCell>
																	<TableCell
																		className={
																			rowPl > 0 ? classes.profit : classes.loss
																		}
																		align="right"
																	>
																		{rowPlp}%
																	</TableCell>
																</TableRow>
															);
														})}
													</TableBody>
												</Table>
											</TableContainer>
										</AccordionDetails>
									</Accordion>
								);
							})
						) : (
							"Add transactions to track!"
						)
					) : (
						<CircularProgress color="primary" />
					)}
					<Dialog
						open={open}
						onClose={handleClose}
						aria-labelledby="form-dialog-title"
					>
						<DialogTitle id="form-dialog-title">
							Add new Transaction
						</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Enter transaction details to track
							</DialogContentText>
							<TextField
								select
								variant="outlined"
								className={classes.formControl}
								value={newCoin.name}
								onChange={(e) => {
									setNewCoin({ ...newCoin, name: e.target.value });
								}}
								fullWidth
							>
								{baseNames.map((key) => {
									return (
										<MenuItem key={key} value={key}>
											{key}
										</MenuItem>
									);
								})}
							</TextField>
							<TextField
								margin="dense"
								id="value"
								label="value"
								type="number"
								variant="outlined"
								value={newCoin.value}
								onChange={(e) =>
									setNewCoin({ ...newCoin, value: e.target.value })
								}
								fullWidth
							/>
							<TextField
								margin="dense"
								id="quantity"
								label="Quantity"
								type="number"
								variant="outlined"
								value={newCoin.quantity}
								onChange={(e) =>
									setNewCoin({ ...newCoin, quantity: e.target.value })
								}
								SelectProps={{
									native: true,
								}}
								fullWidth
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose}>Cancel</Button>
							<Button onClick={addNewTransaction}>Add</Button>
						</DialogActions>
					</Dialog>
					<Fab
						className={classes.fab}
						aria-label="add"
						color="primary"
						onClick={handleClickOpen}
					>
						<FaPlus color="primary" />
					</Fab>
				</Fb>
			</Container>
		</>
	);
}

export default Portfolio;
