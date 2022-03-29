var locations;
window.addEventListener("DOMContentLoaded", async () =>
{
  fetch("https://api.npoint.io/eb65d929bf9c35412877").then((res) => res.json()).then((data) => (locations = data)).then(() => createTable(locations));

  function createTable(locations)
  {
    list = $("#locationList").get()[0];
    Object.values(locations).forEach((place) =>
    {
      locationBullet = document.createElement("li")
      div = document.createElement('div');
      div.innerHTML = `<a class="tooltip" href="/src/locations/${place.shortName}.html">${place.name}<span class="tooltiptext ">${place.name}</span></a>`
      place = document.createDocumentFragment()
      while (div.firstChild) place.appendChild(div.firstChild);;
      locationBullet.appendChild(place)
      list.appendChild(locationBullet)
    });
  }
})

function filterList()
{
  var input, filter, ul, li, a, i, txtValue;
  input = $(".locationSearch").get()[0];
  filter = input.value.toUpperCase();
  ul = $("#locationList").get()[0];
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++)
  {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1)
    {
      li[i].style.display = "";
    }
    else
    {
      li[i].style.display = "none";
    }
  }
}