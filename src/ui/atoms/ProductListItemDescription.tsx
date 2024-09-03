import React from "react";
import { type ProductItemType } from "../types";
import { formatMoney } from "../../utils";

type ProductListItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductListItemDescription = ({
	product: { category, name, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-2 block ">
			<h1 className="text-lg font-semibold">{name}</h1>
			<h2 className="text-gray-500">{category}</h2>
			<div className="text-xl font-bold">{formatMoney(price)}</div>
		</div>
	);
};
