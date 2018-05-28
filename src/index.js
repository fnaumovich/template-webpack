import axios from 'axios';
import lodashGet from 'lodash.get';
// import './css/index.scss';

// import createGroupedArray from './scripts/freeCodeCamp/createGroupedArray';
// import factorial from './scripts/grokkingAlgorithms/recursion/factorial';
import normalizePosts from './scripts/normalizePosts';

// Дан массив записей в блоге
const blogPosts = [
    {
        id: "post1",
        author: { username: "user1", name: "User 1" },
        body: "post 1 body",
        comments: [
            {
                id: "comment1",
                author: { username: "user2", name: "User 2" },
                comment: "comment 1 text"
            }
        ]
    },
    {
        id: "post2",
        author: { username: "user2", name: "User 2" },
        body: "post 2 body",
        comments: [
            {
                id: "comment2",
                author: { username: "user1", name: "User 1" },
                comment: "comment  text"
            }
        ]
    }
];
// Напишите функцию normalizeBlogPosts, которая преобразует массив записей к следующему виду:
const normalizedBlogPosts = {
    byId: {
        post1: {
            id: "post1",
            author: "user1",
            body: "post 1 body",
            comments: ["comment1"]
        },
        post2: {
            id: "post2",
            author: "user2",
            body: "post 2 body",
            comments: ["comment2"]
        }
    },
    allIds: ["post1", "post2"]
};

console.log(normalizePosts(blogPosts));
