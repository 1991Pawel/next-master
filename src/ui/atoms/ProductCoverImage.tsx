type ProductCoverImageProps = {
	src: string;
	alt: string;
};

export const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => {
	return (
		<div>
			<img width={320} height={320} src={src} alt={alt} />
		</div>
	);
};
