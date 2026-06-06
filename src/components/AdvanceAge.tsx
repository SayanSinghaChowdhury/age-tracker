"use client";

import { dateSchema, dateSchemaType } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarArrowDownIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import { Calendar } from "./shadcnui/calendar";
import { Field, FieldError } from "./shadcnui/field";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcnui/popover";

const AdvanceAge = () => {
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [autoClose, setAutoClose] = useState(false);

	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
	} = useForm({
		resolver: zodResolver(dateSchema),

		defaultValues: {
			date: undefined,
		},

		mode: "all",
	});

	const submitHandeler = async (dData: dateSchemaType) => {
		await new Promise((t) => setTimeout(t, 1000));

		console.log(dData);
	};

	return (
		<form
			className="grid place-items-center gap-4"
			onSubmit={handleSubmit(submitHandeler)}>
			<h1 className="font-sans text-2xl font-semibold">How older you ?</h1>
			<Controller
				name={"date"}
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<Popover
							open={autoClose}
							onOpenChange={setAutoClose}>
							<PopoverTrigger asChild>
								<Button
									className="flex justify-between gap-6 border border-white/20 bg-white/10 font-light shadow-lg backdrop-blur-lg"
									variant="outline">
									pick
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
									captionLayout="dropdown"
									className="h-80"
									onSelect={() => {
										setDate(date);
										setAutoClose(false);
									}}
								/>
							</PopoverContent>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Popover>
					</Field>
				)}
			/>

			<Button className="w-full bg-amber-50/45">Submit</Button>
		</form>
	);
};

export default AdvanceAge;
