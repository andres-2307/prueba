

let el, i;
let data = [
  { nombre: "andres", tipo: "NIT", numero: "100357989", correo:"super@gmail.com",fecha:"23/01/1999",direccion:"cl 31 #10-11",edad:"22" },
  { nombre: "carlos", tipo: "cedula", numero: "100357989", correo:"super@gmail.com",fecha:"23/01/1999",direccion:"cl 31 #10-11",edad:"22" },
  { nombre: "juan", tipo: "pasaporte", numero: "100357989", correo:"super@gmail.com",fecha:"23/01/1999",direccion:"cl 31 #10-11",edad:"22"},
  { nombre: "Rafael", tipo: "NIT",numero: "100357989", correo:"super@gmail.com",fecha:"23/01/1999",direccion:"cl 31 #10-11",edad:"22" }
];

let panel = document.querySelector("#panel");




function clearForm() {

  document.querySelector("#nombre").value = "";
  document.querySelector("#tipo").value = "";
  document.querySelector("#N-identificacion").value = "";
  document.querySelector("#correo").value = "";
  document.querySelector("#fecha").value = "";
  document.querySelector("#direccion").value = "";
  document.querySelector("#edad").value = "";
}

function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.nombre} ${x.tipo} ${x.numero} ${x.correo} ${x.fecha} ${x.direccion} ${x.edad}`;
    panel.append(el);
  });
}

function create() {


  let nom = document.querySelector("#nombre").value;
  let tip = document.querySelector("#tipo").value;
  let num = document.querySelector("#N-identificacion").value;
  let corr= document.querySelector("#correo").value;
  let fech= document.querySelector("#fecha").value;
  let dir=document.querySelector("#direccion").value;
  let ed= document.querySelector("#edad").value;
  data = [...data, { nombre: nom, tipo: tip, numero:num, correo: corr, fecha: fech, direccion: dir, edad:ed }];
  clearForm();
  console.log(data)
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#nombre").value = data[i].nombre;
  document.querySelector("#tipo").value = data[i].tipo;
  document.querySelector("#N-identificacion").value = data[i].numero;
  document.querySelector("#correo").value = data[i].correo;
  document.querySelector("#fecha").value = data[i].fecha;
  document.querySelector("#direccion").value = data[i].direccion;
  document.querySelector("#edad").value = data[i].edad;
}

function update() {
  data[i].nombre = document.querySelector("#nombre").value;
  data[i].tipo= document.querySelector("#tipo").value;
  data[i].numero= document.querySelector("#N-identificacion").value = "";
  data[i].correo=document.querySelector("#correo").value;
  data[i].fecha=document.querySelector("#fecha").value;
  data[i].direccion=document.querySelector("#direccion").value;
  data[i].edad=document.querySelector("#edad").value;
  renderItem();
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}

 renderItem();