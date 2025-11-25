import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Tanzania Developers Community",
		short_name: "TDC",
		description:
			"The official digital hub for developers in Tanzania. Connect, learn, and grow with the largest tech community in the region.",
		start_url: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
