var userId = 1000;
var User = /** @class */ (function () {
    function User(emailId, password, conformPassword, phoneNumber) {
        this.Balance = 100;
        this.EmailID = emailId;
        this.Password = password;
        this.ConformPassword = conformPassword;
        this.PhoneNumber = phoneNumber;
    }
    return User;
}());
var MedicineIdAutoIncrement = 10;
var MedicineInfo = /** @class */ (function () {
    function MedicineInfo(paramMedicineName, paramMedicineCount, paramMedicinePrice, MedicineExpary) {
        MedicineIdAutoIncrement++;
        this.MedicineId = "MD" + MedicineIdAutoIncrement.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
        this.MedicineExpary = MedicineExpary;
    }
    return MedicineInfo;
}());
var MedicineList = new Array();
MedicineList.push(new MedicineInfo("Paracetomol", 5, 50, new Date(2024, 3, 13)));
MedicineList.push(new MedicineInfo("Colpal", 5, 60, new Date(2024, 3, 13)));
MedicineList.push(new MedicineInfo("Stepsil", 5, 70, new Date(2024, 3, 13)));
MedicineList.push(new MedicineInfo("Iodex", 5, 80, new Date(2024, 3, 13)));
MedicineList.push(new MedicineInfo("Acetherol", 5, 100, new Date(2024, 3, 13)));
var emailIDstatus = false;
var passwordStatus = false;
var conformStatus = false;
var phoneNumberStatus = false;
var loginemailStatus = false;
var loginpasswordStatus = false;
function validate() {
    var email = document.getElementById("email");
    var emaillabel = document.getElementById("label_email");
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    if (regx.test(email.value)) {
        emaillabel.style.color = "green";
        email.style.borderColor = "green";
        emailIDstatus = true;
    }
    else {
        emailIDstatus = false;
        emaillabel.style.color = "red";
        email.style.borderColor = "red";
    }
}
function validate1() {
    var email = document.getElementById("email1");
    var emaillabel = document.getElementById("label_email1");
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;
    if (regx.test(email.value)) {
        emaillabel.style.color = "green";
        email.style.borderColor = "green";
        loginemailStatus = true;
    }
    else {
        emaillabel.style.color = "red";
        email.style.borderColor = "red";
        loginemailStatus = false;
    }
}
function passwordValidate() {
    var password = document.getElementById("password");
    var label_password = document.getElementById("label_password");
    var regx1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (regx1.test(password.value)) {
        label_password.style.color = "green";
        password.style.borderColor = "green";
        passwordStatus = true;
    }
    else {
        password.style.borderColor = "red";
        label_password.style.color = "red";
        passwordStatus = false;
    }
}
function passwordValidate1() {
    var password = document.getElementById("password1");
    var label_password = document.getElementById("label_password1");
    var regx1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (regx1.test(password.value)) {
        label_password.style.color = "green";
        password.style.borderColor = "green";
        loginpasswordStatus = true;
    }
    else {
        password.style.borderColor = "red";
        label_password.style.color = "red";
        loginpasswordStatus = false;
    }
}
function conformValidate() {
    var Conformpassword = document.getElementById("Conformpassword");
    var password1 = document.getElementById("password");
    var label_conformpassword = document.getElementById("label_conformpassword");
    if (Conformpassword.value != password1.value) {
        Conformpassword.style.borderColor = "red";
        label_conformpassword.style.color = "red";
        conformStatus = false;
    }
    else {
        Conformpassword.style.borderColor = "green";
        label_conformpassword.style.color = "green";
        conformStatus = true;
    }
}
function phoneNum() {
    var regx = /[7-9]\d{9}/;
    var x = document.getElementById("phonenumber");
    var label_phone = document.getElementById("label_phone");
    if (regx.test(x.value)) {
        label_phone.style.color = "green";
        x.style.borderColor = "green";
        phoneNumberStatus = true;
    }
    else {
        x.style.borderColor = "red";
        label_phone.style.color = "red";
        phoneNumberStatus = false;
    }
}
function newuserSubmit() {
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    var conf = document.getElementById("Conformpassword");
    var phone = document.getElementById("phonenumber");
    if (emailIDstatus == true && passwordStatus == true && conformStatus == true && phoneNumberStatus == true) {
        var user = new User(email.value, pass.value, conf.value, phone.value);
        alert("Registration success");
        userArrayList.push(user);
    }
    else {
        console.log(emailIDstatus);
        console.log(passwordStatus);
        console.log(conformStatus);
        console.log(phoneNumberStatus);
        alert("please enter correct values");
    }
}
function newUserEntry() {
    var page1 = document.getElementById("page1");
    var element = document.getElementsByClassName("main");
    var element1 = document.getElementsByClassName("right");
    page1.style.display = "none";
    element[0].style.display = "block";
    element1[0].style.display = "none";
}
function login() {
    var page1 = document.getElementById("page1");
    var element = document.getElementsByClassName("main");
    var element1 = document.getElementsByClassName("left");
    page1.style.display = "none";
    element[0].style.display = "block";
    element1[0].style.display = "none";
}
function signin() {
    var loginemail = document.getElementById("email1");
    var loginpassword = document.getElementById("password1");
    var flag = false;
    if (loginemailStatus == true && loginpasswordStatus == true) {
        for (var i = 0; i < userArrayList.length; i++) {
            if (userArrayList[i].EmailID == loginemail.value && userArrayList[i].Password == loginpassword.value) {
                flag = true;
            }
        }
        if (flag) {
            var body = document.getElementById("body1");
            var login_page = document.getElementById("login_page");
            body.style.display = "none";
            login_page.style.display = "block";
        }
        else {
            alert("login faild");
        }
    }
    else {
        alert("Invaild mail or password!");
    }
}
function backToMainPage() {
    var body = document.getElementById("body1");
    var login_page = document.getElementById("login_page");
    var page1 = document.getElementById("page1");
    page1.style.display = "block";
    body.style.display = "block";
    login_page.style.display = "none";
}
function showMedicineDetail() {
    var but = document.getElementById("addButton");
    but.style.display = "block";
    var table1 = document.getElementById("purchaseTable");
    table1.style.display = "none";
    var table = document.getElementById("Medicinetable");
    table.style.display = "block";
    MedicineList.forEach(function (medicine) {
        table.innerHTML += "<tr>\n                            <td>\n                             ".concat(medicine.MedicineId, "\n                            </td>\n                            <td>\n                            ").concat(medicine.MedicineName, "\n                           </td>\n                           <td>\n                           ").concat(medicine.MedicinePrice, "\n                          </td>\n                          <td>\n                          ").concat(medicine.MedicineCount, "\n                         </td>\n                         <td>\n                         ").concat(medicine.MedicineExpary, "\n                        </td>\n                        <td>\n                        <button>Edit</button>\n                       </td>\n                       <td>\n                        <button>delete</button>\n                       </td>\n                        </tr>");
    });
}
function purchase() {
    var add = document.getElementById("addDiv");
    add.style.display = "none";
    var but = document.getElementById("addButton");
    but.style.display = "none";
    var table1 = document.getElementById("Medicinetable");
    table1.style.display = "none";
    var table = document.getElementById("purchaseTable");
    table.style.display = "block";
    MedicineList.forEach(function (medicine) {
        table.innerHTML += "<tr>\n                            <td>\n                             ".concat(medicine.MedicineId, "\n                            </td>\n                            <td>\n                            ").concat(medicine.MedicineName, "\n                           </td>\n                           <td>\n                           ").concat(medicine.MedicinePrice, "\n                          </td>\n                          <td>\n                          ").concat(medicine.MedicineCount, "\n                         </td>\n                         <td>\n                         ").concat(medicine.MedicineExpary, "\n                        </td>\n                        <td>\n                        <button>buy</button>\n                       </td>\n                       \n                        </tr>");
    });
}
function addmedicine() {
    var add = document.getElementById("addDiv");
    add.style.display = "block";
}
var userArrayList = new Array();
userArrayList.push(new User("yathav@gmail.com", "Abc@1234", "12345678", "8925317233"));
userArrayList.push(new User("krish@gmail.com", "Yath@v2002", "Yath@v2002", "8925317233"));
