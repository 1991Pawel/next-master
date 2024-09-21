"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Route } from "next";

type ActiveLinkType<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
};

export const ActiveLink = <T extends string>({ href, children }: ActiveLinkType<T>) => {
	const pathname = usePathname();

	const active = href === "/" ? pathname === href : pathname.startsWith(href);

	return (
		<Link className={active ? "font-semibold text-slate-900" : "text-slate-600"} href={href}>
			{children}
		</Link>
	);
};
