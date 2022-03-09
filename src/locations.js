var locations;
window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}

var template;
window.onload = async () => {
  fetch('/static/locations.json')
  .then(res => res.json())
  .then(data => locations = data)
  .then(() => alert(JSON.stringify(locations)));
   fetch('/static/locationTemplate.html')
  .then(res => res.text())
  .then(data => template = data)
  .then(() => alert(template))
   table = document.getElementById("locationList")
   locations.forEach(place => {
    row = table.insertRow(-1);
    name = row.insertCell(0);
    pic = row.insertCell(1);
    desc = row.insertCell(2);
    links = row.insertCell(3);
    name = place.name;
    pic = `<img src="${place.img}"`
    desc = place.description;
   });
};
function searchLocation(value) {}
