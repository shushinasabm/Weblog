let up =document.querySelector('.fa-arrow-up')

up.addEventListener('click',function (event) {
    window.scrollTo({
        top:0,
behavior:"smooth"
    });
    console.log('click')

    })
