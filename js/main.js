document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var mymoney = document.getElementById('mymoney')

mymoney.addEventListener('mouseover', function () {
    mymoney.childNodes[1].style.display = 'none'
})
mymoney.addEventListener('mouseout', function () {
    mymoney.childNodes[1].style.display = 'block'
})

var bash = document.getElementById('bash')

bash.addEventListener('mouseover', function () {
    bash.childNodes[1].style.display = 'none'
})
bash.addEventListener('mouseout', function () {
    bash.childNodes[1].style.display = 'block'
})

var visualization = document.getElementById('visualization')

visualization.addEventListener('mouseover', function () {
    visualization.childNodes[1].style.display = 'none'
})
visualization.addEventListener('mouseout', function () {
    visualization.childNodes[1].style.display = 'block'
})

var asteroid = document.getElementById('asteroid')

asteroid.addEventListener('mouseover', function () {
    asteroid.childNodes[1].style.display = 'none'
})
asteroid.addEventListener('mouseout', function () {
    asteroid.childNodes[1].style.display = 'block'
})