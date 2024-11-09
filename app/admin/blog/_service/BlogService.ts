import BlogModel from '../_model/BlogModel'

async function getAllBlogs(){
    return [new BlogModel('h23h1h1', 'titulo', 'asdfasdfasdfadsfasdfa', '/sun.jpg'),
        new BlogModel('h23h1h12', 'titulo', 'asdfasdfasdfadsfasdfa', '/sun.jpg')
    ]
}

async function getBlogById(){
    return new BlogModel('h23h1h2', 'titulo', 'asdfasdfasdfadsfasdfa', '/sun.jpg')
}



export {getBlogById,getAllBlogs}