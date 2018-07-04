export default function normalizePosts(arr) {
    const byId = {};
    const allIds = [];

    arr.forEach((item, index) => {

        let commentText = '';
        item.comments.forEach(item => {
            commentText = item.id;
        });

        byId[item.id] = {
            id: item.id,
            author: item.author.username,
            body: item.body,
            comments: [commentText]
        };

        allIds.push(item.id);
    });

    return {
        byId,
        allIds
    }
};

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
