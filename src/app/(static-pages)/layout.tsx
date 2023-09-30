export default function StaticLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className="mx-auto max-w-md bg-slate-700 text-center">{children}</body>
		</html>
	);
}
