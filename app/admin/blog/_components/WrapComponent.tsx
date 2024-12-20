'use client';

import { useEffect, useState } from 'react';
import CreateBlogComponent from './CreateBlogComponent';
import { getAllBlogs } from '../_service/BlogService';
import BlogModal from './BlogModal';

export default function WrapComponent() {
	const [data, setData] = useState([]);
	const [canGetAll, getAll] = useState(false);
	useEffect(() => {
		getAllBlogs(setData);
	}, [canGetAll]);

	return (
		<div>
			<CreateBlogComponent
				getAll={getAll}
				canGetAll={canGetAll}
			/>
			<div className="grid grid-rows-4 grid-cols-4 gap-16">
				{data.length ? (
					data.map((b, _i) => (
						<BlogModal
							key={_i}
							b={b}
							setAct={getAll}
							act={canGetAll}
						/>
					))
				) : (
					<div></div>
				)}
			</div>
		</div>
	);
}
