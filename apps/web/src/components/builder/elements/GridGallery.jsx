import React from 'react';

export default function GridGallery({
	id,
	images = [],
	columnCount = 3,
	columnGap = '8px',
	layout = 'grid',
}) {
	const resolvedColumnCount = Number(columnCount) || 3;

	return (
		<div
			className="grid-gallery"
			data-element-id={id}
			data-layout={layout}
			style={{
				display: 'grid',
				gap: columnGap,
				gridTemplateColumns: `repeat(${resolvedColumnCount}, 1fr)`,
				width: '100%',
				height: '100%',
				boxSizing: 'border-box',
			}}
		>
			{(Array.isArray(images) ? images : []).map((image, index) => {
				const src = image?.src || '';
				const alt = image?.alt || '';

				if (!src) {
					return null;
				}

				return (
					<div
						key={`${id}-${index}`}
						style={{
							position: 'relative',
							paddingTop: '100%',
							overflow: 'hidden',
						}}
					>
						<img
							src={src}
							alt={alt}
							loading="lazy"
							style={{
								position: 'absolute',
								inset: 0,
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								display: 'block',
							}}
						/>
					</div>
				);
			})}
		</div>
	);
}
