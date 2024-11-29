import Blog from '../admin/blog/_model/BlogModel';

function getBlogMocks() {
	return [
		new Blog('1', 'titulo1', 'body1', '/image1.jpg'),
		new Blog('2', 'titulo2', 'body2', '/image1.jpg'),
	];
}

export { getBlogMocks };
