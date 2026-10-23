```javascript
// Get the HTML elements we need
const searchInput = document.querySelector("#searchInput");
const postsContainer = document.querySelector("#postsContainer");
const statusMessage = document.querySelector("#statusMessage");

// Store all posts fetched from the API
let allPosts = [];

// Display posts on the page
function displayPosts(posts) {
    postsContainer.replaceChildren();

    if (posts.length === 0) {
        statusMessage.textContent = "No posts found. Try another search.";
        return;
    }

    statusMessage.textContent = "";

    posts.forEach(function (post) {
        const article = document.createElement("article");
        article.classList.add("post-card");

        const number = document.createElement("span");
        number.classList.add("post-number");
        number.textContent = `Post #${post.id}`;

        const title = document.createElement("h2");
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        article.append(number, title, body);
        postsContainer.appendChild(article);
    });
}

// Fetch posts from the API
async function fetchPosts() {
    statusMessage.textContent = "Loading posts...";
    statusMessage.classList.remove("error-message");

    try {
       const controller = new AbortController();

const timeoutId = setTimeout(() => {
    controller.abort();
}, 15000);

const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { signal: controller.signal }
);

clearTimeout(timeoutId);
        );

        if (!response.ok) {
            throw new Error("Could not load posts.");
        }

        allPosts = await response.json();

        displayPosts(allPosts);
    } catch (error) {
        statusMessage.textContent =
            "Sorry, we couldn't load the posts. Please check your internet connection and try again.";

        statusMessage.classList.add("error-message");
        console.error("Error fetching posts:", error);
    }
}

// Search posts by title as the user types
searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredPosts = allPosts.filter(function (post) {
        return post.title.toLowerCase().includes(searchTerm);
    });

    displayPosts(filteredPosts);
});

// Load posts when the page is ready
fetchPosts();
```
