/**
 * Generate mock data for a blogging application with the following entities:
 * - Users: Each user has a unique id, username, email.
 * - Posts: Each post has a unique id, belongs to a user, includes a title, content.
 * - Comments: Each comment has a unique id, belongs to a post, made by a user, and contains content.
 * Requirements:
 * - 10 users, each with 3-5 posts, and each post with 1-5 comments.
 * Output the data as an array of users, where each user includes their posts and each post includes its comments.
 */
const generateMockData = () => {
    const users = [];
    
    // Generate 10 users
    for (let i = 1; i <= 10; i++) {
        const user = {
            id: i,
            username: `user${i}`,
            email: `user${i}@example.com`,
            posts: []
        };
        
        // Generate 3-5 posts for each user
        const numPosts = Math.floor(Math.random() * 3) + 3;
        for (let j = 1; j <= numPosts; j++) {
            const post = {
                id: j,
                userId: i,
                title: `Post ${j}`,
                content: `Content for Post ${j}`,
                comments: []
            };
            
            // Generate 1-5 comments for each post
            const numComments = Math.floor(Math.random() * 5) + 1;
            for (let k = 1; k <= numComments; k++) {
                const comment = {
                    id: k,
                    postId: j,
                    userId: i,
                    content: `Comment ${k} for Post ${j}`
                };
                
                post.comments.push(comment);
            }
            
            user.posts.push(post);
        }
        
        users.push(user);
    }
    
    return users;
};

const mockData = generateMockData();
console.log(mockData);


