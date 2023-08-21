document.getElementById("loadButton").addEventListener("click", loadData);

function loadData() {
  // Make an XMLHttpRequest to load the JSON data
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "db.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const jsonData = JSON.parse(xhr.responseText);
      displayData(jsonData);
    }
  };
  xhr.send();
}

function displayData(data) {
  const dataContainer = document.getElementById("dataContainer");
  dataContainer.innerHTML = ""; // Clear previous data
  
  // Create a list to display the JSON data
  const dataList = document.createElement("ul");
  
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const listItem = document.createElement("li");
      listItem.textContent = `${key}: ${data[key]}`;
      dataList.appendChild(listItem);
    }
  }
  
  dataContainer.appendChild(dataList);
}