import z from "zod";

export const dateSchema = z.object({
	date: z.date({ error: "Pick Date Properly" }),
});

export type dateSchemaType = z.infer<typeof dateSchema>;
