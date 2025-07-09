// Get all necessary DOM elements
const addBookmarkButton = document.getElementById('addBookmark');
const deleteAllButton = document.getElementById('deleteAll');
const urlInput = document.getElementById('urlInput');
const bookmarksList = document.getElementById('bookmarksList');

// Array to store the bookmarks
let bookmarks = [];

// Function to add a bookmark
function addBookmark(url) {
    if (url && !bookmarks.includes(url)) {
        bookmarks.push(url);  // Add bookmark to the array
        renderBookmarks();    // Re-render the bookmarks list
    }
}

// Function to render all bookmarks in the list
function renderBookmarks() {
    bookmarksList.innerHTML = '';  // Clear the existing bookmarks list

    // Loop through the bookmarks array and display each bookmark
    bookmarks.forEach((bookmark, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${bookmark}" target="_blank">${bookmark}</a> 
            <button onclick="deleteBookmark(${index})">Delete</button>
        `;
        bookmarksList.appendChild(li);  // Add each list item to the bookmarks list
    });
}

// Function to delete a single bookmark by index
function deleteBookmark(index) {
    bookmarks.splice(index, 1);  // Remove the bookmark from the array
    renderBookmarks();           // Re-render the updated bookmarks list
}

// Function to delete all bookmarks
function deleteAllBookmarks() {
    bookmarks = [];             // Clear the bookmarks array
    renderBookmarks();          // Re-render the empty bookmarks list
}

// Event listener to add a bookmark when the "Add Bookmark" button is clicked
addBookmarkButton.addEventListener('click', () => {
    const url = urlInput.value.trim();  // Get the URL input value and trim any extra spaces
    if (url) {
        addBookmark(url);             // Add the bookmark if the URL is valid
        urlInput.value = '';          // Clear the input field after adding
    }
});

// Event listener to delete all bookmarks when the "Delete All Bookmarks" button is clicked
deleteAllButton.addEventListener('click', deleteAllBookmarks);
