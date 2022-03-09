var locations;
window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}

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
