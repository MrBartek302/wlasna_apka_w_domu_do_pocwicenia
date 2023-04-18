var tablica = []
var json = []

async function start(){
    await pobierz()
    await uzytkownicy()
    tableCreate()
}
start()

async function pobierz(){
    const data = await fetch(baseurl+"/pobierz")
    json = await data.json()
    console.log(json)
}



async function uzytkownicy(){
    for(var i=0; i<=json.length-1; i++){
        var imiet = json[i].imie
        var nazwiskot = json[i].nazwisko
        tablica.push({imie1:imiet, nazwisko1:nazwiskot})
    }
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
    for (var i = 0; i < tablica.length; i++) {
      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      td1.setAttribute("id", "td1")
      var td2 = document.createElement('td');
      td2.setAttribute("id", "td2")
      td1.textContent = tablica[i].imie1;
      td2.textContent = tablica[i].nazwisko1;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tbody.appendChild(tr);
    }
    tbl.appendChild(tbody);
    div.appendChild(tbl);
  }
  
  
  