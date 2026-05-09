import { Metadata } from "next";

export const metadata: Metadata = {
	title: "AgeTracker|Basic Age Calculator",
	description: "Age Calculator with Basic",
};

const page = () => {
	return <section className="grid h-[90dvh] place-items-center"></section>;
};

export default page;
