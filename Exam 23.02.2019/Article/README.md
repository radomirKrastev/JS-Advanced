## JS Advanced: Regular Exam – 23.02.2020

Exam problems for the [&quot;JavaScript Advanced&quot; course @ SoftUni](https://softuni.bg/courses/js-advanced).

## 1.Problem 2. Article

**class** Article {
    _//_ **TODO: implement this class...**
}

### Your Task

### Write an Article Class, which supports the described functionality below.

### Functionality

**constructor(title, creator)**

Should have these **4** properties:

- **title**  **-**** string**
- **creator**  **- string**
- **comments** **- private property (empty array by default)**
- **likes** **- private property (empty array by default)**

**Note: Choose the most helpful structure for the likes array for you.**

**Getter likes ()**

This **function** should print the likes in the following format:

- If there are no likes, the following message should be returned:

**&quot;{title} has 0 likes&quot;**

- If there is one like, the following message should be returned:

**&quot;{username} likes this article!&quot;**

- Otherwise, the following message should be **returned** :

**&quot;{username of the first person that liked the article} and {likes} others like this article!&quot;**

**like (username)**

This **function** should increase the likes of the article.

- If the username, has already liked the article, an error with the following message should be thrown:

**&quot;You can&#39;t like the same article twice!&quot;**

- If this user is the creator of the article, an error with the following message should be thrown:

**&quot;You can&#39;t like your own articles!&quot;**

- Otherwise, the following message should be **returned** :

**&quot;{username} liked {title}!&quot;**

**dislike (username)**

This **function** should **decrease** the likes of the article.

- If the username, didn&#39;t like the article in the first place, an error with the following message should be thrown:

**&quot;You can&#39;t dislike this article!&quot;**

- Otherwise, the following message should be **returned** :

**&quot;{username} disliked {title}&quot;**

**comment (username, content, id)**

This function should make a new comment or reply to a comment with a given id.

- If the given id is equal to undefined or there is not a comment with that id, you should make a new comment and add it to the comments array. Every comment should have an id (1, 2, 3 ...) which represents the order the comments are submitted. If the comment is made successfully, the following message should be returned:

**&quot;{username} commented on {title}&quot;**

- If there is a comment with the given id, you should add a reply to it. The reply should have an id (1.1, 1.2 ...) constructed from the id of the comment and the order in which the replies are submitted. If the reply is made successfully the following message should be returned:

**&quot;You replied s**** uccessfully&quot;**

- Comments should have the following structure:

**{Id, Username, Content, Replies}**

- Replies should have the following structure:

**{Id, Username, Content}**

**toString(sortingType)**

This function should print the article information in the following format:

- If the sorting type is **&#39;asc&#39;** - The comments and replies should be sorted by **id** in ascending order
- If the sorting type is **&#39;desc&#39;** - The comments and replies should be sorted by **id** in descending order
- If the sorting type is **&#39;username&#39;** - The comments and replies should be sorted by username in ascending order

**&quot;Title: {title}**

**Creator: {creator}**

**Likes: {likes}**

**Comments:**

**-- {id}. {username}: {content}**

**-- {id}. {username}: {content}**

**--- {replyId}. {username}: {content}**

**--- {replyId}. {username}: {content}**

**-- {id}. {username}: {content}**

**...&quot;**

Note: ** **** For more information see the examples below!**

### Submission

Submit only your **Article**  **class.**

### Examples

This is an example how the code is **intended to be used** :

| Sample code usage |
| --- |
| let art = new Article(&quot;My Article&quot;, &quot;Anny&quot;);art.like(&quot;John&quot;);console.log(art.likes);art.dislike(&quot;John&quot;);console.log(art.likes);art.comment(&quot;Sammy&quot;, &quot;Some Content&quot;);console.log(art.comment(&quot;Ammy&quot;, &quot;New Content&quot;));art.comment(&quot;Zane&quot;, &quot;Reply&quot;, 1);art.comment(&quot;Jessy&quot;, &quot;Nice :)&quot;);console.log(art.comment(&quot;SAmmy&quot;, &quot;Reply@&quot;, 1));console.log()console.log(art.toString(&#39;username&#39;));console.log()art.like(&quot;Zane&quot;);console.log(art.toString(&#39;desc&#39;)); |
| Corresponding output |
| John likes this article!My Article has 0 likesAmmy commented on My ArticleYou replied successfully Title: My ArticleCreator: AnnyLikes: 0Comments:-- 2. Ammy: New Content-- 3. Jessy: Nice :)-- 1. Sammy: Some Content--- 1.2. SAmmy: Reply@--- 1.1. Zane: Reply Title: My ArticleCreator: AnnyLikes: 1Comments:-- 3. Jessy: Nice :)-- 2. Ammy: New Content-- 1. Sammy: Some Content--- 1.2. SAmmy: Reply@--- 1.1. Zane: Reply |

# GOOD LUCK!

# 😊