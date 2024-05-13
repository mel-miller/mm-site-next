import { TileGrid } from '@/components/TileGrid/TileGrid';

import { getSortedProjectsData } from '@/lib/projects';

type AllProjectsData = {
	id: string;
	date: string;
	title: string;
	tileImage?: string;
	tileSummary?: string;
}[];

export default function ProjectList() {
	const allProjectsData: AllProjectsData = getSortedProjectsData();
	return (
		<TileGrid
			tiles={allProjectsData.map(({ id, title, tileImage, tileSummary }) => ({
				heading: title,
				image: tileImage ?? '',
				link: `/portfolio/${id}`,
				body: tileSummary ?? '',
			}))}
		></TileGrid>
	);
}
