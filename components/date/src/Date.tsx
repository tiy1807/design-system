import { FC, createElement as h } from "react";
import { StandardProps, classBuilder } from '@not-govuk/component-helpers';
import {
	monthNumbers,
	dayNumbers,
	monthFromNumber,
	formatDateFromISOString,
	formatTimeFromISOString,
} from "./utils";
import "../assets/Date.scss";

export type DateProps = StandardProps & {
	//** allow year, month, day, times values to be inputted seperately. This can be used if date time is already split into consituent parts i.e year, month, day */
	year?: number;
	month?: monthNumbers;
	day?: dayNumbers;
	//** alternatively, input a javascript ISO date string to transform into a date - "2022-03-03T19:39:33.233Z" */
	dateTime?: string; // regex for ISOString? - rename variable to ISODateString
	//** set whether time should shown with the date - 14:30pm 31 March 2021 */
	displayTime?: boolean;
	//** input from designer on how to write date with time - 14:30pm on 31 March 2022 or 31 March 2022 at 14:30pm. What should be the defacto setting? */
	precedence?: "time" | "date";
};

export const Date: FC<DateProps> = ({
	children,
	classBlock,
	classModifiers,
	className,
	year,
	month,
	day,
	dateTime,
	displayTime = false,
	precedence = "time",
	...attrs
}) => {
	const classes = classBuilder(
		"hods-date",
		classBlock,
		classModifiers,
		className
	);

	//** build date and time form an ISO String dateTime={} */
	if (dateTime) {
		const dateString = formatDateFromISOString(dateTime);
		//** convert time to string if displayTime is set to true */
		const timeString = displayTime ? formatTimeFromISOString(dateTime) : null;

		return (
			<div {...attrs} className={classes()}>
				{
					precedence === "time" ? 
					<time dateTime={dateTime}>{timeString ? `${timeString} on ` : ``}{dateString}</time> 
					: 
					<time dateTime={dateTime}>{dateString}{timeString ? ` at ${timeString}`: ``}</time>
				}
			</div>
		);
	}

	//** build date string from inputted values year={} month={} day={} */
	const dateString = `${day} ${monthFromNumber(month)} ${year}`;
	return (
		<div {...attrs} className={classes()}>
			<time>{dateString}</time>
		</div>
	);
};

Date.displayName = "Date";

export default Date;