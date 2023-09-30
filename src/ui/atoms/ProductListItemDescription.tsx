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
			<div className="text-lg font-semibold">{name}</div>
			<div className="text-gray-500">{category}</div>
			<div className="text-xl font-bold">{formatMoney(price)}</div>
		</div>
	);
};
