```javascript
const searchInput = document.querySelector("#searchInput");
const postsContainer = document.querySelector("#postsContainer");
const statusMessage = document.querySelector("#statusMessage");

let allPosts = [];

function displayPosts(posts) {
    postsContainer.replaceChildren();

    if (posts.length === 0) {
        statusMessage.textContent = "No posts found. Try another search.";
        statusMessage.classList.remove("error-message");
        return;
    }

    statusMessage.textContent = "";
    statusMessage.classList.remove("error-message");

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

async function fetchPosts() {
    statusMessage.textContent = "Loading posts...";
    statusMessage.classList.remove("error-message");

    const controller = new AbortController();
    const timeoutId = setTimeout(function () {
        controller.abort();
    }, 15000);

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            { signal: controller.signal }
        );

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const posts = await response.json();

        if (!Array.isArray(posts)) {
            throw new Error("The API returned unexpected data.");
        }

        allPosts = posts;
        displayPosts(allPosts);
    } catch (error) {
        if (error.name === "AbortError") {
            statusMessage.textContent =
                "The request took too long. Please refresh and try again.";
        } else {
            statusMessage.textContent =
                "Unable to load posts. Please check your connection and try again.";
        }

        statusMessage.classList.add("error-message");
        console.error("Posts loading error:", error);
    } finally {
        clearTimeout(timeoutId);
    }
}

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredPosts = allPosts.filter(function (post) {
        return post.title.toLowerCase().includes(searchTerm);
    });

    displayPosts(filteredPosts);
});

fetchPosts();
```
