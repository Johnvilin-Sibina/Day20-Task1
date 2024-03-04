//Pincode is given by the user and using the pincode information about the post office is displayed


//This function is to create h1 tag and this function takes tagname, attrname, attrvalue and content as its parameters
function create_h1(tagname, attrname, attrvalue, content) {
  var res = document.createElement(tagname);
  res.setAttribute(attrname, attrvalue);
  res.innerHTML = content;
  return res;
}

//This function is to create section tag and this function takes not parameter
function create_section() {
  var res = document.createElement("section");
  return res;
}

//This function is to create label tag and this function takes tagname, attrname, attrvalue, attr2name,
//attr2value and content as its parameters
function create_label(tagname, attrname, attrvalue, attr2name, attr2value, content) {
  var res = document.createElement(tagname);
  res.setAttribute(attrname, attrvalue);
  res.setAttribute(attr2name, attr2value);
  res.innerHTML = content;
  return res;
}

//This function is to create input field and this function takes tagname, attr1name, attr1value,
//attr2name and attr2value as its parameters
function create_input(tagname, attr1name, attr1value, attr2name, attr2value) {
  var res = document.createElement(tagname);
  res.setAttribute(attr1name, attr1value);
  res.setAttribute(attr2name, attr2value);
  return res;
}

//This function is to create break and this function takes tagname as its parameter
function create_break(tagname) {
  var res = document.createElement(tagname);
  return res;
}

//This functionis to create button and this function takes tagname, attr1name, attr1value, attr2name, attr2value,
//attr3name, attr3value and content as its parameters
function create_button(tagname, attr1name, attr1value, attr2name, attr2value, attr3name, attr3value, content) {
  var res = document.createElement(tagname);
  res.setAttribute(attr1name, attr1value);
  res.setAttribute(attr2name, attr2value);
  res.setAttribute(attr3name, attr3value);
  res.innerHTML = content;
  return res;
}

//This function is to create div and this function takes tagname,attrname and attrvalue as its parameters
function create_div(tagname,attrname,attrvalue){
  var res = document.createElement(tagname);
  res.setAttribute(attrname,attrvalue);
  return res;
}

//This function is to reset the input field after submission
function reset() {
  var reset = document.getElementById("search").value = ""
  return reset;
}

//This function is called when the button is clicked and this function calls two functions data() and reset()
function foo() {
  data();
  reset();
}

//The function create_h1 is called here twice and two h1 tags are created and values for the parameters are passed
var heading1 = create_h1("h1", "class", "text", "Know the Pincode but Don't Know the Post Office!")
var heading2 = create_h1("h1", "class", "text", "My Website is Here to Help You")

//The function create_section is called here and a section tag is created and values for the parameters are passed
var section = create_section();

//The function create_label is called here and a label tag is created here and values for the parameters are passed
var label = create_label("label", "for", "search", "class", "main", "Enter the Pincode here:")

//The function create_break is called here and a break tag is created here
var br1 = create_break("br");

//THe function create_input is called here and a input field is created and values for the parameters are passed 
var input = create_input("input", "type", "text", "id", "search", "class", "field")

//The function create_break is called here twice and two break tags are created here
var br2 = create_break("br");
var br3 = create_break("br");

//The function create_button is called here and a button is created and values for the parameters are passed
//when the button is clicked the function foo is called - the function foo calls two functions - data() and reset()
//The function data fetches the data from the API and displays it and the function reset clears the input field once the 
//submit button is clicked

var button = create_button("button", "type", "button", "class", "submit", "onclick", "foo()", "Submit")

section.append(label, br1, input, br2, br3, button);
document.body.append(heading1, heading2, section);

var result = create_div("div", "class","info");

var container = create_div("div","class","container");

var row = create_div("div","class","row");
row.classname = "row";

//This function gets the pincode from the input field that is given by the user and uses the pincode provided by the user
//and  fetched data about the Post Offices with that pincode and displays the fetched data
async function data() {
  try{
    var pin = document.querySelector("input").value;
    var res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
    var final = await res.json();
    var offices = final[0].PostOffice;
    
    for (var i = 0; i < offices.length; i++) {
      var col = create_div("div","class","col-md-3")
      var post = create_div("div","class","post_office")
      post.innerHTML = `<div class="card border-dark mb-3 display" style="max-width: 18rem;">
      <div class="card-header">Pincode: ${pin}</div>
      <div class="card-body text-dark">
        <h5 class="card-title">Name: ${offices[i].Name}</h5>
        <h5 class="card-title">Branch Type: ${offices[i].BranchType}</h5>
        <h5 class="card-title">Delivery Status: ${offices[i].DeliveryStatus}</h5>
        <h5 class="card-title">District: ${offices[i].District}</h5>
        <h5 class="card-title">State: ${offices[i].State}</h5>        
      </div>
    </div>` 
      col.append(post) 
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
  
