export default async function ProductsPage({
	params,
}: {
	params: { page: string; category: string };
}) {
	const { page, category } = params;

	return (
		<>
			<h2>
				{category} {page}{" "}
			</h2>
		</>
	);
}
