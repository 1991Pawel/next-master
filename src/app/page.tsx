import { ProductList } from "../ui/organisms/ProductList";
const products = [
	{
		id: "1",
		name: "Stolik kawowy",
		price: 199.99,
		category: "Meble",
		coverImage: {
			src: "https://www.ikea.com/pl/pl/images/products/dinera-kubek-ciemnoszary__0642538_pe701238_s5.jpg?f=sm",
			alt: "Stolik kawowy",
		},
	},
	{
		id: "2",
		name: "Lampa sufitowa",
		price: 49.99,
		category: "Oświetlenie",
		coverImage: {
			src: "https://www.ikea.com/pl/pl/images/products/dinera-kubek-ciemnoszary__0642538_pe701238_s5.jpg?f=sm",
			alt: "Lampa sufitowa",
		},
	},
	{
		id: "3",
		name: "Sofa",
		price: 599.99,
		category: "Meble",
		coverImage: {
			src: "https://www.ikea.com/pl/pl/images/products/dinera-kubek-ciemnoszary__0642538_pe701238_s5.jpg?f=sm",
			alt: "Sofa",
		},
	},
	{
		id: "4",
		name: "Naczynia kuchenne",
		price: 29.99,
		category: "Kuchnia",
		coverImage: {
			src: "https://www.ikea.com/pl/pl/images/products/dinera-kubek-ciemnoszary__0642538_pe701238_s5.jpg?f=sm",
			alt: "Naczynia kuchenne",
		},
	},
];
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section>
				<ProductList products={products} />
			</section>
		</main>
	);
}
