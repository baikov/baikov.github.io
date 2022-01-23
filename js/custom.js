// window.onload = function() {

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
// };
