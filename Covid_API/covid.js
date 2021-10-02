const URL = "https://api.covid19api.com/summary";
let dataCovid;

// let btn = document.querySelector("#btn");
// btn.onclick = () => {
//   let targetCountry = document.querySelector("#pais").value;
//   getData(targetCountry);
// };

$("#btn").on("click", () => {
  let targetCountry = document.querySelector("#pais").value;
  getData(targetCountry);
});

function getData(country) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      renderData(data, country);
    });
}

function renderData(data, country) {
  for (pais in data.Countries) {
    if (data.Countries[pais].Country == country) {
      let dataNew = data.Countries[pais];
      $("#casos").val(dataNew.TotalConfirmed);
      $("#muertes").val(dataNew.TotalDeaths);
    }
  }
}
