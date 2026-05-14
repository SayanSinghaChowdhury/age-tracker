"use client";

import { format, formatDistanceToNow, isBefore, startOfToday } from "date-fns";
import { CalendarArrowDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Calendar } from "./shadcnui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcnui/popover";

const BasicAge = () => {
	const [date, setDate] = useState<Date | undefined>(undefined);

	const [autoClose, setAutoClose] = useState(false);

	const clear = () => {
		setDate(undefined);
	};

	return (
		<div className="grid place-items-center gap-5">
			<h1 className="font-sans text-2xl font-semibold">
				{date
					? isBefore(date, startOfToday())
						? `You are ${formatDistanceToNow(date)} old `
						: `you will be ${formatDistanceToNow(date)} old`
					: "How old you ?"}
			</h1>
			<Popover
				open={autoClose}
				onOpenChange={setAutoClose}>
				<PopoverTrigger asChild>
					<Button
						className="flex justify-between gap-6 border border-white/20 bg-white/10 shadow-lg backdrop-blur-lg"
						variant="outline">
						{date ? format(date, "pppp") : "Pick your birth date"}
						{/* Icon Calender */}
						<CalendarArrowDownIcon />
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="border border-white/20 bg-white/10 shadow-lg backdrop-blur-lg"
					align="center">
					{/* Calender component form Schadcn  */}
					<Calendar
						mode="single"
						selected={date}
						onSelect={(date) => {
							setDate(date);
							setAutoClose(false);
						}}
						captionLayout="dropdown"
						className="h-80"
					/>
				</PopoverContent>
			</Popover>

			<Button
				className="flex justify-between gap-6 border border-white/20 bg-white/10 shadow-lg backdrop-blur-lg"
				onClick={clear}
				variant="outline">
				Clear
			</Button>
		</div>
	);
};

export default BasicAge;
