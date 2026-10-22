import React from 'react';

export default function GridRunningText({
	id,
	content = '',
	fontColor = 'rgb(26, 26, 26)',
	fontSize = 32,
	mobileFontSize,
	fontFamily = 'inherit',
	fontWeight = 700,
	backgroundColor = 'transparent',
}) {
	const toSize = (value) => (typeof value === 'number' ? `${value}px` : value);
	const resolvedFontSize = toSize(fontSize);

	const style = {
		'--running-text-color': fontColor,
		'--running-text-size': resolvedFontSize,
		'--m-running-text-size': toSize(mobileFontSize) || resolvedFontSize,
		'--running-text-family': fontFamily,
		'--running-text-weight': fontWeight,
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		overflow: 'hidden',
		padding: '24px 0',
		backgroundColor,
		boxSizing: 'border-box',
	};

	const contentStyle = {
		display: 'inline-block',
		paddingRight: 48,
		color: 'var(--running-text-color)',
		fontSize: 'var(--running-text-size)',
		fontFamily: 'var(--running-text-family)',
		fontWeight: 'var(--running-text-weight)',
		lineHeight: 1.2,
		whiteSpace: 'nowrap',
	};

	return (
		<div className="grid-running-text running-text" data-element-id={id} style={style}>
			<style>
				{`
					@keyframes grid-running-text-scroll {
						from { transform: translateX(0); }
						to { transform: translateX(-50%); }
					}
					.grid-running-text__track {
						display: flex;
						width: max-content;
						animation: grid-running-text-scroll 40s linear infinite;
					}
					.grid-running-text:hover .grid-running-text__track {
						animation-play-state: paused;
					}
					@media (prefers-reduced-motion: reduce) {
						.grid-running-text__track { animation: none; }
					}
					@media screen and (max-width: 920px) {
						.grid-running-text__track span { font-size: var(--m-running-text-size); }
					}
				`}
			</style>
			<div className="grid-running-text__track" aria-hidden={!content}>
				<span style={contentStyle}>{content}</span>
				<span style={contentStyle} aria-hidden="true">{content}</span>
			</div>
		</div>
	);
}
