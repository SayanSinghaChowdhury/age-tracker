"use client";

import { dateSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const AdvanceAge = () => {
	const {} = useForm({ resolver: zodResolver(dateSchema) });

	return <form></form>;
};

export default AdvanceAge;
