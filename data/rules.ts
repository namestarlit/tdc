export interface Rule {
	title: string;
	description: string;
	emoji?: string;
}

export const rules: Rule[] = [
	{
		emoji: "🤝",
		title: "Be Respectful",
		description:
			"Treat all members with respect. No harassment, hate speech, or personal attacks will be tolerated.",
	},
	{
		emoji: "🚫",
		title: "No Spam",
		description:
			"Avoid spamming the group with irrelevant messages, excessive self-promotion, or unsolicited advertisements.",
	},
	{
		emoji: "💻",
		title: "Stay On Topic",
		description:
			"Keep discussions focused on technology, development, and related professional topics.",
	},
	{
		emoji: "🔒",
		title: "Respect Privacy",
		description:
			"Don't share personal information of other members without their consent. What's shared in the group stays in the group.",
	},
	{
		emoji: "🎓",
		title: "Share Knowledge",
		description:
			"Help fellow developers by sharing knowledge, resources, and constructive feedback.",
	},
	{
		emoji: "📝",
		title: "Use Proper Language",
		description:
			"Communicate in English or Swahili. Use clear, professional language and avoid excessive use of slang.",
	},
	{
		emoji: "❓",
		title: "Ask Smart Questions",
		description:
			"Before asking a question, search if it has been answered before. Provide context and details when seeking help.",
	},
	{
		emoji: "🔗",
		title: "Share Responsibly",
		description:
			"When sharing links or resources, ensure they are safe, relevant, and add value to the community.",
	},
	{
		emoji: "🔔",
		title: "No @everyone Mentions",
		description: "Avoid using @everyone mentions.",
	},
	{
		emoji: "🎯",
		title: "Quality Over Quantity",
		description:
			"Focus on meaningful contributions rather than flooding the chat with messages.",
	},
	{
		emoji: "💬",
		title: "Give Constructive Feedback",
		description:
			"When providing feedback or code reviews, be constructive and helpful. Focus on the solution, not the person.",
	},
];

export const getAllRules = (): Rule[] => {
	return rules;
};
