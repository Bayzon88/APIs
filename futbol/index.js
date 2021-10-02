$.ajax({
  headers: { "X-Auth-Token": "5dd1d4557b09427cba8b382eacd745c6" },
  url: "http://api.football-data.org/v2/competitions/",
  dataType: "json",
  type: "GET",
}).done(function (response) {
  // do something with the response, e.g. isolate the id of a linked resource
  console.log(response);
});
