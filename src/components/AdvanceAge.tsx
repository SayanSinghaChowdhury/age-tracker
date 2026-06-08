"use client";

import { dateSchema, DateSchemaType } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, formatDistanceToNow } from "date-fns";
import { CalendarArrowDownIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import { Calendar } from "./shadcnui/calendar";
import { Field, FieldError } from "./shadcnui/field";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcnui/popover";

const AdvanceAge = () => {
	const [date, setDate] = useState<string | null>(null);
	const [autoClose, setAutoClose] = useState(false);

	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
		reset,
	} = useForm({
		resolver: zodResolver(dateSchema),

		defaultValues: {
			date: undefined,
		},

		mode: "all",
	});

	const submitHandeler = async ({ date }: DateSchemaType) => {
		await new Promise<void>((t) => setTimeout(t, 1000));

		setDate(`You are ${formatDistanceToNow(date)} old `);

		setAutoClose(false);

		reset();
	};

	return (
		<form
			className="grid place-items-center gap-4"
			onSubmit={handleSubmit(submitHandeler)}>
			<h1 className="font-sans text-2xl font-semibold">
				{date ?? "How Older You ?"}
			</h1>
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
									{field.value
										? format(field.value, "PPPP")
										: "Pick your birth date"}
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
									selected={field.value}
									captionLayout="dropdown"
									className="h-80"
									onSelect={(date) => {
										field.onChange(date);
										setAutoClose(false);
									}}
								/>
							</PopoverContent>
						</Popover>

						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Button
				type="submit"
				className="w-full bg-amber-50/45"
				disabled={isSubmitting}>
				{isSubmitting ? `Tracking Age ....` : `Track Age`}
			</Button>
		</form>
	);
};

export default AdvanceAge;
