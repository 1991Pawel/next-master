import React from "react";
import { type ProductListItemFragment } from "../../gql/graphql";
import { formatMoney } from "../../utils";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, price, categories },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 block ">
			<h1 className="text-lg font-semibold">{name}</h1>
			<div className="text-xl font-bold">{formatMoney(price)}</div>
			{JSON.stringify(categories)}
			{/* <h2 className="text-gray-500">{categories[0].name}</h2> */}
			<div className="text-xl font-bold">{formatMoney(price)}</div>
		</div>
	);
};
