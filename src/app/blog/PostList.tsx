import Link from 'next/link';
import Date from '@/utilities/date';

import { getSortedPostsData } from '@/lib/posts';

type AllPostsData = {
	date: string;
	title: string;
	id: string;
	tags?: string[];
}[];

export default function PostList() {
	const allPostsData: AllPostsData = getSortedPostsData();
	return (
		<ul>
			{allPostsData.map(({ id, date, title, tags }) => {
				const tagsList = tags?.join(', ');

				return (
					<li key={id}>
						<Link href={`/blog/${id}`}>{title}</Link>
						<p>
							<Date dateString={date} />
						</p>
						<p>{tagsList}</p>
					</li>
				);
			})}
		</ul>
	);
}
