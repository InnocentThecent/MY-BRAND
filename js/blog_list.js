
// /**@type {Array} */
// let blogs = JSON.parse(localStorage.getItem("blogs")) || []

// const blogListEl = document.getElementById("blog-list")

// /**@type {HTMLTemplateElement} */
// const blogTemplate  = document.getElementById("blog-template")

// blogListEl.innerHTML = ""

// if (blogs.length === 0) {
//     blogListEl.innerHTML = `<h4>No Blogs</h4>`;
// }

// blogs.forEach((blog, index) => {
//     const newBlogEl = blogTemplate.content.firstElementChild.cloneNode(true)
    
//     newBlogEl.querySelector("#blog-title").innerHTML = blog.title
//     newBlogEl.querySelector("#blog-author").innerHTML = blog.author
//     newBlogEl.querySelector("#blog-content").innerHTML = blog.content

//     const deleteButton = newBlogEl.querySelector("#blog-delete")
//     deleteButton.addEventListener("click", e => {
//         blogs.splice(index, 1)
//         localStorage.setItem("blogs", JSON.stringify(blogs))
//         window.location.reload()
//     })

//     blogListEl.appendChild(newBlogEl)
// })



