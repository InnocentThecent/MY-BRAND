// const form = document.getElementById("formBlogs")
// let blogs = []
// if (localStorage.getItem("blogs")) {
//     blogs = JSON.parse(localStorage.getItem("blogs"))
// } else {
//     localStorage.setItem("blogs", '[]')
// }

// form.addEventListener("submit", e => {
//     e.preventDefault()
//     const data = new FormData(e.target)
//     console.log(JSON.stringify(data.entries()))

//     const newBlog = {}

//     for (const [key, value] of data) {
//         if (value.trim() === "") return alert(`${key} is empty!`)
//         newBlog[key] = value
//         console.log({ key, value })
//     }
    
//     form.reset()
//     blogs.push(newBlog)
//     localStorage.setItem("blogs", JSON.stringify(blogs))
// })