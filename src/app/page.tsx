import BasicAge from "@/components/BasicAge";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "AgeTracker|Basic Age Calculator",
	description: "Age Calculator with Basic",
};
// Basic Page
const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-sm border border-white/20 bg-white/10 shadow-lg backdrop-blur-lg">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Basic Age Calculator
					</CardTitle>
				</CardHeader>
				<CardContent>
					{/*Basic age Component call */}
					<BasicAge />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
