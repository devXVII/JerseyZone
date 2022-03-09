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
  alert(locations);
}

async function loader() {
  await fetch("/static/locations.json").then((data) => {
    locations = data.json();
  });
  await fetch("/static/locationTemplate.html")
    .then((data) => {
      data.text();
    })
    .then((html) => {
      template = html;
    });
}
function searchLocation(value) {}
