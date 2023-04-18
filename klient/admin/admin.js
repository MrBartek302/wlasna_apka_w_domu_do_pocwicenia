var tablica = []
var json = []

async function start(){
    await pobierz()
    tableCreate()
}
start()

async function pobierz(){
    const data = await fetch(baseurl+"/pobierz")
    json = await data.json()
    console.log(json)
}

function tableCreate() {
    var div = document.getElementById("body");
    var tbl = document.createElement('table');
    tbl.style.width = '55%';
    tbl.style.height = '85%';
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th1 = document.createElement('th');
    th1.setAttribute("id", "th1")
    var th2 = document.createElement('th');
    th2.setAttribute("id", "th2")
    th1.textContent = "Imie";
    th2.textContent = "Nazwisko";
    tr.appendChild(th1);
    tr.appendChild(th2);
    thead.appendChild(tr);
    tbl.appendChild(thead);
    
    var tbody = document.createElement('tbody');
    for (var i = 0; i < json.length; i++) {
      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      td1.setAttribute("id", "td1")
      var td2 = document.createElement('td');
      td2.setAttribute("id", "td2")
      td1.textContent = json[i].imie;
      td2.textContent = json[i].nazwisko;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tbody.appendChild(tr);
    }
    tbl.appendChild(tbody);
    div.appendChild(tbl);
  }
  
  
  