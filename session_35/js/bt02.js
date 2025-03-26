document.addEventListener("DOMContentLoaded", loadBookmarks);

function openForm() {
    document.getElementById("bookmarkForm").style.display = "block";
}

function closeForm() {
    document.getElementById("bookmarkForm").style.display = "none";
}

function saveBookmark() {
    let name = document.getElementById("siteName").value;
    let url = document.getElementById("siteURL").value;

    if (!name || !url) {
        alert("Please enter website name and URL!");
        return;
    }

    if (!isValidURL(url)) {
        alert("Please enter a valid URL!");
        return;
    }

    let bookmark = { name, url };
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    document.getElementById("siteName").value = "";
    document.getElementById("siteURL").value = "";
    closeForm();
    loadBookmarks();
}

function loadBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    let bookmarkList = document.getElementById("bookmarkList");

    bookmarkList.innerHTML = "";

    bookmarks.forEach((bookmark, index) => {
        let div = document.createElement("div");
        div.classList.add("bookmark-item");
        div.innerHTML = `
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
            <button class="delete-btn" onclick="deleteBookmark(${index})">X</button>
        `;
        bookmarkList.appendChild(div);
    });
}

function deleteBookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    loadBookmarks();
}

function isValidURL(url) {
    let pattern = new RegExp(
        "^(https?:\\/\\/)?" +
        "((([a-zA-Z0-9$_.+!*(),;?&=-]+)@)?)?" +
        "(([0-9]{1,3}\\.){3}[0-9]{1,3}" +
        "|([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6})" +
        "(\\:[0-9]{1,5})?" +
        "(\\/.*)?$", "i"
    );
    return !!pattern.test(url);
}
