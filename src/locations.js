var locations;

var template;
window.onload = async () => {
  await loader();
  loadLocations();
};

function loadLocations() {
  console.log(locations.json());
}

async function loader() {
  fetch("/static/locations.json").then((data) => {
    locations = data;
  });
  fetch("/static/locationTemplate.html")
    .then((data) => {
      data.text();
    })
    .then((html) => {
      template = html;
    });
}
function searchLocation(value) {}
