"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Route } from "next";

type ActiveLinkType = {
	href: Route;
	children: React.ReactNode;
};
export const ActiveLink = ({ href, children }: ActiveLinkType) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link className={isActive ? "font-semibold text-slate-900" : "text-slate-600"} href={href}>
			{children}
		</Link>
	);
};
