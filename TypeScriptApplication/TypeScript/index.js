var userId = 1000;
var User = /** @class */ (function () {
    function User(emailId, password, conformPassword, phoneNumber) {
        this.Balance = 0;
        this.EmailID = emailId;
        this.Password = password;
        this.ConformPassword = conformPassword;
        this.PhoneNumber = phoneNumber;
    }
    return User;
}());
var MedicineIdAutoIncrement = 10;
var MedicineInfo = /** @class */ (function () {
    function MedicineInfo(paramMedicineName, paramMedicineCount, paramMedicinePrice, medicineExpary) {
        MedicineIdAutoIncrement++;
        this.MedicineId = "MD" + MedicineIdAutoIncrement.toString();
        this.MedicineName = paramMedicineName;
        this.MedicineCount = paramMedicineCount;
        this.MedicinePrice = paramMedicinePrice;
        this.MedicineExpary = medicineExpary;
    }
    return MedicineInfo;
}());
var MedicineList = new Array();
MedicineList.push(new MedicineInfo("Paracetomol", 5, 50, new Date(2024, 3, 13)));
MedicineList.push(new MedicineInfo("Colpal", 5, 60, new Date(2024, 3, 13)));
MedicineList.push(new MedicineInfo("Stepsil", 5, 70, new Date(2024, 3, 13)));
MedicineList.push(new MedicineInfo("Iodex", 5, 80, new Date(2024, 3, 13)));
MedicineList.push(new MedicineInfo("Acetherol", 5, 100, new Date(2024, 3, 13)));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["select"] = "select";
    OrderStatus["Ordered"] = "Ordered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
var OrderIncrementId = 1000;
var Order = /** @class */ (function () {
    function Order(medicineName, email, orderCount, orderStatus) {
        OrderIncrementId++;
        this.OrderID = "OID" + OrderIncrementId;
        this.Email = email;
        this.MedicineName = medicineName;
        this.OrderCount = orderCount;
        this.OrderStatus = orderStatus;
    }
    return Order;
}());
var OrderList = new Array();
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
var temparyUserSrote;
function signin() {
    var loginemail = document.getElementById("email1");
    var loginpassword = document.getElementById("password1");
    var flag = false;
    if (loginemailStatus == true && loginpasswordStatus == true) {
        for (var i = 0; i < userArrayList.length; i++) {
            if (userArrayList[i].EmailID == loginemail.value && userArrayList[i].Password == loginpassword.value) {
                flag = true;
                temparyUserSrote = userArrayList[i];
                break;
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
    var main = document.getElementsByClassName("main");
    document.getElementById("email1").value = "";
    document.getElementById("password1").value = "";
    validate1();
    passwordValidate1();
    page1.style.display = "block";
    body.style.display = "flex";
    login_page.style.display = "none";
    main[0].style.display = "none";
}
function showMedicineDetail() {
    document.getElementById("editData").style.display = "none";
    document.getElementById("purchaseCount").style.display = "none";
    var div = document.getElementById("rechargeDiv");
    div.style.display = "none";
    var but = document.getElementById("addButton");
    but.style.display = "block";
    var table1 = document.getElementById("purchaseTable");
    table1.style.display = "none";
    var table = document.getElementById("Medicinetable");
    table.style.display = "block";
    table.innerHTML = "";
    document.getElementById("OrderTable").style.display = "none";
    document.getElementById("addDiv").style.display = "none";
    table.innerHTML = " <tr>\n        <th>".concat("Medicine Name", "</th>\n        <th>").concat("Medicine Price", "</th>\n        <th>").concat("Medicine Count", "</th>\n        <th>").concat("Medicine Expary", "</th>\n        <th colspan=\"2\">").concat("Choice", "</th>\n    </tr>");
    MedicineList.forEach(function (medicine) {
        table.innerHTML += "<tr>\n                                <td>\n                                ".concat(medicine.MedicineName, "\n                            </td>\n                            <td>\n                            ").concat(medicine.MedicinePrice, "\n                            </td>\n                            <td>\n                            ").concat(medicine.MedicineCount, "\n                            </td>\n                            <td>\n                            ").concat(medicine.MedicineExpary.getFullYear(), "/").concat(medicine.MedicineExpary.getMonth(), "/").concat(medicine.MedicineExpary.getDate(), "\n                            </td>\n                            <td>\n                            <button onclick=\"editMedicineData('").concat(medicine.MedicineId, "')\">Edit</button>\n                        </td>\n                        <td>\n                            <button onclick=\"deleteMedicine('").concat(medicine.MedicineId, "')\">delete</button>\n                        </td>\n                            </tr>");
    });
}
function deleteMedicine(medicine_id) {
    var index = 0;
    for (var i = 0; i < MedicineList.length; i++) {
        if (medicine_id == MedicineList[i].MedicineId) {
            index = i;
            break;
        }
    }
    MedicineList.splice(index, 1);
    showMedicineDetail();
}
function purchase() {
    document.getElementById("editData").style.display = "none";
    var div = document.getElementById("rechargeDiv");
    div.style.display = "none";
    var add = document.getElementById("addDiv");
    add.style.display = "none";
    var but = document.getElementById("addButton");
    but.style.display = "none";
    var table1 = document.getElementById("Medicinetable");
    table1.style.display = "none";
    var table = document.getElementById("purchaseTable");
    table.style.display = "block";
    document.getElementById("OrderTable").style.display = "none";
    table.innerHTML = "";
    table.innerHTML = "<tr>\n        <th>".concat("Medicine Name", "</th>\n        <th>").concat("Medicine Price", "</th>\n        <th>").concat("Medicine Count", "</th>\n        <th>").concat("Medicine Expary", "</th>\n        <th>").concat("Choice", "</th>\n        </tr>");
    MedicineList.forEach(function (medicine) {
        table.innerHTML += "<tr>\n                                <td>\n                                ".concat(medicine.MedicineName, "\n                            </td>\n                            <td>\n                            ").concat(medicine.MedicinePrice, "\n                            </td>\n                            <td>\n                            ").concat(medicine.MedicineCount, "\n                            </td>\n                            <td>\n                            ").concat(medicine.MedicineExpary.getDate(), "/").concat(medicine.MedicineExpary.getMonth(), "/").concat(medicine.MedicineExpary.getFullYear(), "\n                            </td>\n                            <td>\n                            <button onclick=\"showCountMenu('").concat(medicine.MedicineId, "')\">buy</button>\n                        </td>\n                        \n                            </tr>");
    });
}
var currendMedicineID;
function showCountMenu(medicineID) {
    document.getElementById("purchaseCount").style.display = "block";
    currendMedicineID = medicineID;
}
var temparymedicineStore2;
function editMedicineData(medicine_id) {
    var div = document.getElementById("rechargeDiv");
    div.style.display = "none";
    var add = document.getElementById("addDiv");
    add.style.display = "none";
    var but = document.getElementById("addButton");
    but.style.display = "none";
    var table1 = document.getElementById("Medicinetable");
    table1.style.display = "none";
    var table = document.getElementById("editData");
    table.style.display = "block";
    document.getElementById("OrderTable").style.display = "none";
    var editname = document.getElementById("EditName");
    var editPrice = document.getElementById("EditPrice");
    var editCount = document.getElementById("editCount");
    var editDate = document.getElementById("editExpartDate");
    var flag = false;
    MedicineList.forEach(function (medecines) {
        if (medicine_id == medecines.MedicineId) {
            temparymedicineStore2 = medecines;
            flag = true;
            return;
        }
    });
    if (flag) {
        editname.value = temparymedicineStore2.MedicineName;
        editPrice.value = (temparymedicineStore2.MedicinePrice).toString();
        editCount.value = (temparymedicineStore2.MedicineCount).toString();
        var date = temparymedicineStore2.MedicineExpary.toISOString();
        editDate.value = date.substring(0, 10);
    }
    else {
        alert("id not found");
    }
}
function Conform_editData() {
    var editname = document.getElementById("EditName");
    var editPrice = document.getElementById("EditPrice");
    var editCount = document.getElementById("editCount");
    var editDate = document.getElementById("editExpartDate");
    temparymedicineStore2.MedicineName = editname.value;
    temparymedicineStore2.MedicinePrice = Number(editPrice.value);
    temparymedicineStore2.MedicineCount = Number(editCount.value);
    temparymedicineStore2.MedicineExpary = new Date(editDate.value);
    document.getElementById("editData").style.display = "none";
    showMedicineDetail();
}
var temparymedicineStore;
var count;
function Conform_purchase() {
    var UserEnter_count = document.getElementById("UserEntercount").value;
    var flag = true;
    count = Number(UserEnter_count);
    MedicineList.forEach(function (medicines) {
        if (medicines.MedicineId == currendMedicineID) {
            if (medicines.MedicineCount >= Number(UserEnter_count)) {
                temparymedicineStore = medicines;
                flag = true;
            }
            else {
                alert("Count not avilable!");
                flag = false;
            }
        }
    });
    if (flag) {
        if (temparymedicineStore.MedicinePrice <= temparyUserSrote.Balance) {
            temparyUserSrote.Balance = temparyUserSrote.Balance - count * temparymedicineStore.MedicinePrice;
            temparymedicineStore.MedicineCount = temparymedicineStore.MedicineCount - count;
            var order1 = new Order(temparymedicineStore.MedicineName, temparyUserSrote.EmailID, count, OrderStatus.Ordered);
            OrderList.push(order1);
            alert("Order success your OrderID is " + order1.OrderID);
            document.getElementById("UserEntercount").value = "";
            document.getElementById("purchaseCount").style.display = "none";
        }
        else {
            alert("Balance is not available!");
        }
    }
}
function orderHistory() {
    var table = document.getElementById("OrderTable");
    var add = document.getElementById("addDiv");
    add.style.display = "none";
    var div = document.getElementById("rechargeDiv");
    div.style.display = "none";
    var but = document.getElementById("addButton");
    but.style.display = "none";
    var table1 = document.getElementById("Medicinetable");
    table1.style.display = "none";
    var table2 = document.getElementById("purchaseTable");
    table2.style.display = "none";
    document.getElementById("purchaseCount").style.display = "none";
    table.style.display = "block";
    table.innerHTML = "";
    table.innerHTML = "<tr>\n        <th>".concat("OrderID", "</th>\n        <th>").concat("Email", "</th>\n        <th>").concat("Medicine name", "</th>\n        <th>").concat("order count", "</th>\n        <th>").concat("Order status", "</th>\n        </tr>");
    OrderList.forEach(function (orders) {
        if (orders.Email == temparyUserSrote.EmailID) {
            table.innerHTML += "<tr>\n                                        <td>\n                                        ".concat(orders.OrderID, "\n                                    </td>\n                                    <td>\n                                    ").concat(orders.Email, "\n                                    </td>\n                                    <td>\n                                    ").concat(orders.MedicineName, "\n                                    </td>\n                                    <td>\n                                    ").concat(orders.OrderCount, "\n                                    </td>\n                                    <td>\n                                    ").concat(orders.OrderStatus, "\n                                </td>\n                                \n                                    </tr>");
        }
    });
}
function addmedicine() {
    var add = document.getElementById("addDiv");
    add.style.display = "block";
    var div = document.getElementById("rechargeDiv");
    div.style.display = "none";
    var but = document.getElementById("addButton");
    but.style.display = "none";
    var table1 = document.getElementById("Medicinetable");
    table1.style.display = "none";
    var table = document.getElementById("purchaseTable");
    table.style.display = "none";
    document.getElementById("purchaseCount").style.display = "none";
}
function addtomedicine() {
    var div = document.getElementById("rechargeDiv");
    div.style.display = "none";
    document.getElementById("purchaseCount").style.display = "none";
    var a = document.getElementById("newMadineName");
    var b = document.getElementById("newMadinePrice");
    var c = document.getElementById("newMedicineCount");
    var e = document.getElementById("newMadicineExpary");
    if (a.value != "" && b.value != "" && c.value != "" && e.value != "") {
        var table_1 = document.getElementById("Medicinetable");
        MedicineList.push(new MedicineInfo(a.value, parseInt(c.value), parseInt(b.value), new Date(e.value.toString())));
        MedicineList.forEach(function (medicine) {
            table_1.innerHTML += "<tr>\n                                <td>\n                                ".concat(medicine.MedicineName, "\n                            </td>\n                            <td>\n                            ").concat(medicine.MedicinePrice, "\n                            </td>\n                            <td>\n                            ").concat(medicine.MedicineCount, "\n                            </td>\n                            <td>\n                            ").concat(medicine.MedicineExpary.getFullYear(), "/").concat(medicine.MedicineExpary.getMonth() + 1, "/").concat(medicine.MedicineExpary.getDate(), "\n                            </td>\n                            <td>\n                            <button onclick=\"editData(").concat(medicine.MedicineId, ")\">Edit</button>\n                        </td>\n                        <td>\n                            <button>delete</button>\n                        </td>\n                            </tr>");
        });
        alert("medicine addded succesfully!");
        a.value = "";
        b.value = "";
        c.value = "";
        e.value = "";
        showMedicineDetail();
        document.getElementById("addDiv").style.display = "none";
    }
    else {
        alert("please fill the all fields!");
    }
}
function showBalace() {
    alert("Your current balance " + temparyUserSrote.Balance);
}
function cancelOrder() {
    var div = document.getElementById("rechargeDiv");
    div.style.display = "none";
    var add = document.getElementById("addDiv");
    add.style.display = "none";
    var but = document.getElementById("addButton");
    but.style.display = "none";
    var table1 = document.getElementById("Medicinetable");
    table1.style.display = "none";
    var table2 = document.getElementById("purchaseTable");
    table2.style.display = "none";
    document.getElementById("purchaseCount").style.display = "none";
    var table = document.getElementById("OrderTable");
    table.style.display = "block";
    table.innerHTML = "";
    table.innerHTML = "<tr>\n        <th>".concat("OrderID", "</th>\n        <th>").concat("Email", "</th>\n        <th>").concat("Medicine name", "</th>\n        <th>").concat("order count", "</th>\n        <th>").concat("Order status", "</th>\n        <th>").concat("Action", "</th>\n        </tr>");
    OrderList.forEach(function (orders) {
        if (orders.Email == temparyUserSrote.EmailID) {
            if (orders.OrderStatus == OrderStatus.Ordered) {
                table.innerHTML += "<tr>\n                                                <td>\n                                                ".concat(orders.OrderID, "\n                                            </td>\n                                            <td>\n                                            ").concat(orders.Email, "\n                                            </td>\n                                            <td>\n                                            ").concat(orders.MedicineName, "\n                                            </td>\n                                            <td>\n                                            ").concat(orders.OrderCount, "\n                                            </td>\n                                            <td>\n                                            ").concat(orders.OrderStatus, "\n                                        </td>\n                                        <td>\n                                        <button onclick=\"editOrder('").concat(orders.OrderID, "')\">Cancel Order</button>\n                                        </td>\n                                        \n                                            </tr>");
            }
        }
    });
}
function editOrder(order_Id) {
    OrderList.forEach(function (orders) {
        if (order_Id == orders.OrderID) {
            temparymedicineStore.MedicineCount += orders.OrderCount;
            orders.OrderStatus = OrderStatus.Cancelled;
            alert("order cancelled successfully!");
            cancelOrder();
        }
    });
}
function RechargePage() {
    document.getElementById("OrderTable").style.display = "none";
    var div = document.getElementById("rechargeDiv");
    div.style.display = "block";
    var add = document.getElementById("addDiv");
    add.style.display = "none";
    var but = document.getElementById("addButton");
    but.style.display = "none";
    var table1 = document.getElementById("Medicinetable");
    table1.style.display = "none";
    var table = document.getElementById("purchaseTable");
    table.style.display = "none";
    document.getElementById("purchaseCount").style.display = "none";
}
function Recharge() {
    document.getElementById("editData").style.display = "none";
    document.getElementById("purchaseCount").style.display = "none";
    var amount = document.getElementById("recharge_amount");
    if (document.getElementById("recharge_amount").value != " ") {
        temparyUserSrote.Balance += parseInt(amount.value);
        alert("amount Add succesfully balabce " + temparyUserSrote.Balance);
    }
    else {
        alert("please fill all fields!");
    }
}
var userArrayList = new Array();
userArrayList.push(new User("yathav@gmail.com", "Abc@1234", "12345678", "8925317233"));
userArrayList.push(new User("krish@gmail.com", "Yath@v2002", "Yath@v2002", "8925317233"));
