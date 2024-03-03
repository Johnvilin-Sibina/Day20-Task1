// Post Office
function create_h1(tagname, attrname, attrvalue, content) {
  var res = document.createElement(tagname);
  res.setAttribute(attrname, attrvalue);
  res.innerHTML = content;
  return res;
}

function create_section() {
  var res = document.createElement("section");
  return res;
}

function create_label(tagname, attrname, attrvalue, attr2name, attr2value, content) {
  var res = document.createElement(tagname);
  res.setAttribute(attrname, attrvalue);
  res.setAttribute(attr2name, attr2value);
  res.innerHTML = content;
  return res;
}

function create_input(tagname, attr1name, attr1value, attr2name, attr2value) {
  var res = document.createElement(tagname);
  res.setAttribute(attr1name, attr1value);
  res.setAttribute(attr2name, attr2value);
  return res;
}

function create_break(tagname) {
  var res = document.createElement(tagname);
  return res;
}
function create_button(tagname, attr1name, attr1value, attr2name, attr2value, attr3name, attr3value, content) {
  var res = document.createElement(tagname);
  res.setAttribute(attr1name, attr1value);
  res.setAttribute(attr2name, attr2value);
  res.setAttribute(attr3name, attr3value);
  res.innerHTML = content;
  return res;
}

function create_div(tagname,attrname,attrvalue){
  var res = document.createElement(tagname);
  res.setAttribute(attrname,attrvalue);
  return res;
}

function reset() {
  var reset = document.getElementById("search").value = ""
  return reset;
}

function foo() {
  data();
  reset();
}

var heading1 = create_h1("h1", "class", "text", "Know the Pincode but Don't Know the Post Office!")
var heading2 = create_h1("h1", "class", "text", "My Website is Here to Help You")

var section = create_section();

var label = create_label("label", "for", "search", "class", "main", "Enter the Pincode here:")

var br1 = create_break("br");


var input = create_input("input", "type", "text", "id", "search", "class", "field")

var br2 = create_break("br");

var br3 = create_break("br");

var button = create_button("button", "type", "button", "class", "submit", "onclick", "foo()", "Submit")

section.append(label, br1, input, br2, br3, button);
document.body.append(heading1, heading2, section);

var result = create_div("div", "class","info");

var container = create_div("div","class","container");

var row = create_div("div","class","row");
row.classname = "row";

async function data() {
  try{
    var pin = document.querySelector("input").value;
    var res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
    var final = await res.json();
    var offices = final[0].PostOffice;
    for (var i = 0; i < offices.length; i++) {
      var col = document.createElement("div");
      col.className = "col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"
      col.innerHTML = `<div class="card border-dark mb-3 display" style="max-width: 18rem;">
      <div class="card-header">Pincode: ${pin}</div>
      <div class="card-body text-dark">
        <h5 class="card-title">Name: ${offices[i].Name}</h5>
        <h5 class="card-title">Branch Type: ${offices[i].BranchType}</h5>
        <h5 class="card-title">Delivery Status: ${offices[i].DeliveryStatus}</h5>
        <h5 class="card-title">District: ${offices[i].District}</h5>
        <h5 class="card-title">State: ${offices[i].State}</h5>        
      </div>
    </div>`  
      row.append(col);
      container.append(row);
      result.append(container)
      document.body.append(result);
    }
  }
  catch(error){
    var no_data = document.createElement("div")
    no_data.setAttribute("class","error");
    no_data.innerHTML = "Sorry! Data Not Found. Please Make Sure You Provide the Correct Pincode"
    document.body.append(no_data)
  }
  }
  
