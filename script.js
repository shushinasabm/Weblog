let up = document.querySelector('.fa-arrow-up')
up.addEventListener('click', function (event) {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

let searchHeader = document.querySelector('.fa-magnifying-glass')
searchHeader.addEventListener('click', function (event) {
    let searchBox = document.querySelector('.search-box')
    searchBox.classList.toggle('search-box-opened')
})