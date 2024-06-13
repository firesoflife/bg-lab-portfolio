export const portfolioStructure = (S) =>
	S.list()
		.title('Base')
		.items([...S.documentTypeListItems().reverse()]);
