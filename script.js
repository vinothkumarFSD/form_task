function labelcreate(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
}
function linebreakers(tagname) {
    var ele = document.createElement(tagname);
    return ele;
}
function inputele(tagname, attrname, attrvalue, attrname1, attrvalue2) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue2);
    return ele;
}

function inputele2(tagname, attrname, attrvalue, attrname1, attrvalue1, attrname2, attrvalue2) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    ele.setAttribute(attrname2, attrvalue2);
    return ele;
}

function inputele3(tagname, attrname, attrvalue, attrname1, attrvalue1, attrname2, attrvalue2, attrname3, attrvalue3) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    ele.setAttribute(attrname2, attrvalue2);
    ele.setAttribute(attrname3, attrvalue3);
    return ele;
}

var box=document.createElement("div");
box.setAttribute("class","box");

var container=document.createElement("div");
container.setAttribute("class","container");

var row=document.createElement("div");
row.setAttribute("class","row");

var col1=document.createElement("div");
col1.setAttribute("class","col");

var col2=document.createElement("div");
col2.setAttribute("class","col-med-6");

var boxinside1=document.createElement("div");
boxinside1.setAttribute("class","boxinside");

var boxinside2=document.createElement("div");
boxinside2.setAttribute("class","boxinside textcenter");

var header1=document.createElement("h3");
header1.setAttribute("class","header");
header1.innerHTML="Form Submission:";

var header2=document.createElement("h3");
header2.setAttribute("class","header");
header2.innerHTML="Temporary Database";

var form = document.createElement("form");
form.setAttribute("class", "form");

var firstname = labelcreate("label", "for", "firstname", "Firstname:");
var br1 = linebreakers("br");
var firstnameinput = inputele2("input", "type", "text", "placeholder", "Firstname", "id", "firstname");
var br01 = linebreakers("br");


var middlename = labelcreate("label", "for", "middlename", "Middlename:");
var br2 = linebreakers("br");
var middlenameinput = inputele2("input", "type", "text", "placeholder", "Middlename", "id", "middlename");
var br22 = linebreakers("br");


var lastname = labelcreate("label", "for", "lastname", "Lastname:");
var br3 = linebreakers("br");
var lastnameinput = inputele2("input", "type", "text", "placeholder", "Lastname", "id", "lastname");
var br33 = linebreakers("br");


var addressline1 = labelcreate("label", "for", "Address Line1", "Address Line1:");
var br4 = linebreakers("br");
var addressline1input = inputele2("input", "type", "text", "placeholder", "Address Line1", "id", "Address Line1");
var br44 = linebreakers("br");

var addressline2 = labelcreate("label", "for", "Address Line2", "Address Line2:");
var br5 = linebreakers("br");
var addressline2input = inputele2("input", "type", "text", "placeholder", "Address Line2", "id", "Address Line2");
var br55 = linebreakers("br");

var pincode = labelcreate("label", "for", "Pincode", "Pincode:");
var br6 = linebreakers("br");
var pincodeinput=document.createElement("input");
pincodeinput.setAttribute("type","number");
pincodeinput.setAttribute("id","pincode");
var br66 = linebreakers("br");

var gender = document.createElement("p");
gender.innerHTML = "Gender:";
gender.setAttribute("class", "gender");

var maleinput = inputele3("input", "type", "radio", "id", "Male", "name", "gender","value","Male");
var male = labelcreate("label", "for", "Male", "&nbsp;&nbsp;Male&nbsp;&nbsp;");
var femaleinput = inputele3("input", "type", "radio", "id", "Female", "name", "gender","value","Female");
var female = labelcreate("label", "for", "Female", "&nbsp;&nbsp;Female");
var br7 = linebreakers("br");

var all=document.createElement("div");
all.setAttribute("id","itemform");
var choice = document.createElement("p");
choice.innerHTML = "Choice of Food:(must choose at least 2 out of 5 options)";
choice.setAttribute("class", "item");

var box1 = inputele("input", "type", "checkbox", "name", "North Indian");
var box1label = labelcreate("label", "for", "North Indian", "&nbsp;&nbsp;North Indian");
var br77 = linebreakers("br");
var box2 = inputele("input", "type", "checkbox", "name", "South Indian");
var box2label = labelcreate("label", "for", "South Indian", "&nbsp;&nbsp;South Indian");
var br8 = linebreakers("br");
var box3 = inputele("input", "type", "checkbox", "name", "Chinese");
var box3label = labelcreate("label", "for", "Chinese", "&nbsp;&nbsp;Chinese");
var br88 = linebreakers("br");
var box4 = inputele("input", "type", "checkbox", "name", "Japanese");
var box4label = labelcreate("label", "for", "Japanese", "&nbsp;&nbsp;Japanese");
var br9 = linebreakers("br");
var box5 = inputele("input", "type", "checkbox", "name", "Sea Food");
var box5label = labelcreate("label", "for", "Sea Food", "&nbsp;&nbsp;Sea Food");
var br99 = linebreakers("br");

all.append(choice,box1,box1label,br77,box2,box2label,br8,box3,box3label,br88,box4,box4label,br9,box5,box5label,br99);

var state = labelcreate("label", "for", "State", "State:");
var br10 = linebreakers("br");
var stateinput = inputele2("input", "type", "text", "placeholder", "State", "id", "State");
var br11 = linebreakers("br");

var country = labelcreate("label", "for", "Country", "Country:");
var br12 = linebreakers("br");
var countryinput = inputele2("input", "type", "text", "placeholder", "Country", "id", "Country");
var br13 = linebreakers("br");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("id","btnsubmit");
button.classList.add("btn","btn-primary");
button.innerHTML="Submit";
button.style.margin="10px";

button.addEventListener("click", getData);

let selecteditems = [];

function getData() { 
    // checkBoxes.forEach(item => { 
    //     if (item.checked) {  
    //         selecteditems.push(item);
    //     }
    // });
    // if (selecteditems.length<2) {
    //     alert("Minimum Two foods you have to pick..");
    // }
    // else {
    //     alert("Successfully submitted..");
    // }
    var firstna = document.getElementById("firstname").value;
    var lastna = document.getElementById("lastname").value;
    var add = document.getElementById("Address Line1").value;
    var add1 = document.getElementById("Address Line2").value;
    var add2 = add+"<br>"+add1;
    var pin = document.getElementById("pincode").value;
   
    var sta = document.getElementById("State").value;
    var coun = document.getElementById("Country").value;
    
    var emptbl = document.getElementById("employeetbl");
    var trhead = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = firstna;
    var td2 = document.createElement("td");
    td2.innerHTML = lastna;
    var td3 = document.createElement("td");
    td3.innerHTML = add2;
    var td4 = document.createElement("td");
    td4.innerHTML = pin;
    var td5 = document.createElement("td");
    var ele1 = document.getElementsByName('gender');
            for (i = 0; i < ele1.length; i++) {
                if (ele1[i].checked){
                    var gen1=ele1[i].value;
                    td5.innerHTML = gen1;    
                }
            }

    var ele2 = document.getElementsByName("food");
    // var td6 = document.createElement("td");
    // td6.innerHTML = foo;
    var td7 = document.createElement("td");
    td7.innerHTML = sta;
    var td8 = document.createElement("td");
    td8.innerHTML = coun;
    trhead.append(td1,td2,td3,td4,td5,td6,td7,td8);
    emptbl.append(trhead);
}

var table = document.createElement("table");
table.setAttribute("class", "table");
table.setAttribute("id", "employeetbl");
var thead = document.createElement("thead");
var trhead = document.createElement("tr");
function createtrth(tagname, content) {
    let ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
}

function createtrtd(tagname, content) {
    let ele1 = document.createElement(tagname);
    ele1.innerHTML = content;
    return ele1;
}
var th1 = createtrth("th", "Firstname");
var th2 = createtrth("th", "Lastname");
var th3 = createtrth("th", "Address");
var th4 = createtrth("th", "Pincode");
var th5 = createtrth("th", "Gender");
var th6 = createtrth("th", "Food");
var th7 = createtrth("th", "State");
var th8 = createtrth("th", "Country");

trhead.append(th1, th2, th3,th4,th5,th6,th7,th8);
thead.append(trhead);

var tBody = document.createElement("tbody");

var trbody = document.createElement("tr");

var td1 = createtrtd("td", "");
var td2 = createtrtd("td", "");
var td3 = createtrtd("td", "");
var td4 = createtrtd("td", "");
var td5 = createtrtd("td", "");
var td6 = createtrtd("td", "");
var td7 = createtrtd("td", "");
var td8 = createtrtd("td", "");

trbody.append(td1, td2, td3, td4, td5, td6, td7, td8);
tBody.append(trbody);
table.append(thead, tBody);


form.append(firstname, br1, firstnameinput, br01, middlename, br2, middlenameinput, br22, lastname, br3, lastnameinput, br33, addressline1, br4, addressline1input, br44, addressline2, br5, addressline2input, br55, pincode, br6, pincodeinput, br66, gender, maleinput, male, femaleinput, female, br7,all, state, br10, stateinput, br11, country, br12, countryinput, br13, button);

boxinside1.append(header1,form);
col1.append(boxinside1);
boxinside2.append(header2,table)
col2.append(boxinside2);
row.append(col1,col2);
container.append(row);
box.append(container);

document.body.append(box);
