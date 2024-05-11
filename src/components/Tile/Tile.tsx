import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import './tile.css';

export interface TileProps {
	/**
	 * Body text.
	 */
	body?: string;
	/**
	 * Heading text.
	 */
	heading: string;
	/**
	 * Image URL.
	 */
	image: string;
	/**
	 * Link URL.
	 */
	link: string;
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * Tile UI component
 */
export const Tile = ({
	body,
	heading,
	image,
	link,
	className,
	...props
}: TileProps) => {
	// Set up classes.
	const baseClass = 'mm-tile';

	// Render the output.
	return (
		<div
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			<Link href={link} className={`${baseClass}__link`}>
				<div className={`${baseClass}__image`}>
					<Image src={image} width={420} height={236} alt='' />
				</div>
				<div className={`${baseClass}__content`}>
					<h3 className={`${baseClass}__heading`}>{heading}</h3>
					<p className={`${baseClass}__body`}>{body}</p>
				</div>
			</Link>
		</div>
	);
};
