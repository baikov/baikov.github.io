
if (window.location.pathname == "/cv/"){
    if (localStorage.getItem('company')) {
        document.getElementById('company').innerText = localStorage.getItem('company');
    }
    if (localStorage.getItem('vacancy')) {
        document.getElementById('vacancy').innerText = localStorage.getItem('vacancy');
    }
    const queryString = window.location.search;
    let searchParams = new URLSearchParams(queryString);
    // console.log(searchParams.get("company"));
    let company = searchParams.get("company");
    let vacancy = searchParams.get("vacancy");
    if (company) {
        document.getElementById('company').innerText = company;
        localStorage.setItem('company', company);
    }
    if (vacancy) {
        document.getElementById('vacancy').innerText = vacancy;
        localStorage.setItem('vacancy', vacancy);
    }
    // if (!company){
    //     document.getElementById('head').remove();
    // }
}
// window.onload = function() {
//     document.querySelectorAll('#TableOfContents > ul > li > a[href^="#"]').forEach(anchor => {
//         console.log(anchor);
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth',
//                 offsetTop: 150
//             });
//         });
//     });
// };
