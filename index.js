console.log("We are in Users Page");

let projectDetails = document.getElementById("projectDetails");
let personalDetails = document.getElementById("personalDetails");

projectDetails.addEventListener("click", getProjects);

function getProjects() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", 'project.txt', true);

  xhr.onload = function () {
    let json = JSON.parse(this.responseText);
    let art = json.project;
    // console.log(art);

    let main = document.querySelector("div#main");

    let heading = document.createElement('h1');
    let head = document.createTextNode("Project Details")
    
    heading.appendChild(head);
    main.appendChild(heading);
    let html = `<thead>
                    <tr>
                    <th scope="col">S No.</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    </tr>
                </thead>`;
    art.forEach(function (element, index) {
      html += `<tr>
                <td>${index + 1}</td>
                <td>${element.id}</td>
                <td>${element.location}</td>
              </tr>`;
    });
    let table = document.getElementById("table");
    table.innerHTML = html;
  };
  xhr.send();
  console.log("get request");
}
