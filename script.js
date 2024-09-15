let url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
let print = document.getElementById('print');
let inp = document.getElementById('inp');
let fetchedData;

fetch(url)
    .then((response) => {
        response.json()
            .then((data) => {
                fetchedData = data;
            });
    });


let search;
inp.addEventListener("input", () => {
    let search = inp.value.toLowerCase();
    let City = fetchedData.filter((ele) => ele.city.toLowerCase().includes(search));
    if (search === "") {
        print.innerHTML = "";
    } else if (City.length === 0) {
        print.innerHTML = "<div class='text-center'>City not found.</div>";
    } else {
        display(City);
    }
});


let display = (city) => {
    print.innerHTML = "";
    city.map((obj) => {
        // let any = obj.city.toLowerCase()
        let highlightedCity = obj.city.replace(inp.value, () => `<span style="color:yellow;font-weight:bold;text-transform: lowercase;">${inp.value}</span>`)
        console.log(highlightedCity);

        print.innerHTML += `
                <div class="pre col-lg-4 col-md-6 text-center">
                <div style="border-top: 1px solid #777;
                border-bottom: 1px solid #777;">
                    <h1 id="city">
                    City:  ${highlightedCity}
                    </h1> 
                    <h4 id="rank">Rank: ${obj.rank}</h4>
                    <h4 id="pop">Population: ${obj.population}</h4>
                </div> 
            </div>
                    `
    })
}


