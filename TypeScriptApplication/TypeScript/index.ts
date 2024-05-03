    let userId=1000;

    class User{

        EmailID:string;

        Password:string;

        ConformPassword:string;

        PhoneNumber:string;

        Balance:number=0;

        constructor(emailId:string, password:string, conformPassword:string, phoneNumber : string){
            this.EmailID=emailId;
            this.Password=password;
            this.ConformPassword=conformPassword;
            this.PhoneNumber=phoneNumber;
        }
        

    }

    let MedicineIdAutoIncrement=10;

    class MedicineInfo {

        MedicineId: string;
        MedicineName: string;
        MedicineCount: number;
        MedicinePrice: number;
        MedicineExpary:Date;
        constructor(paramMedicineName: string, paramMedicineCount: number, paramMedicinePrice: number,medicineExpary:Date) {
            MedicineIdAutoIncrement++;
    
            this.MedicineId = "MD" + MedicineIdAutoIncrement.toString();
            this.MedicineName = paramMedicineName;
            this.MedicineCount = paramMedicineCount;
            this.MedicinePrice = paramMedicinePrice;
            this.MedicineExpary=medicineExpary;
        }
    
    }

        let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();

        MedicineList.push(new MedicineInfo("Paracetomol", 5, 50,new Date(2024,3,13)));
        MedicineList.push(new MedicineInfo("Colpal", 5, 60,new Date(2024,3,13)));
        MedicineList.push(new MedicineInfo("Stepsil", 5, 70,new Date(2024,3,13)));
        MedicineList.push(new MedicineInfo("Iodex", 5, 80,new Date(2024,3,13)));
        MedicineList.push(new MedicineInfo("Acetherol", 5, 100,new Date(2024,3,13)));
    

    

        enum OrderStatus{
            select="select",
            Ordered="Ordered",
            Cancelled="Cancelled"
        }
        let OrderIncrementId=1000;


        class Order{

            OrderID:string;
            Email:string;
            MedicineName:string;
            OrderCount:number;
            OrderStatus:OrderStatus;

            constructor(medicineName:string,email:string,orderCount:number,orderStatus:OrderStatus){

                OrderIncrementId++;

                this.OrderID="OID"+OrderIncrementId;
                this.Email=email;
                this.MedicineName=medicineName;
                this.OrderCount=orderCount;
                this.OrderStatus=orderStatus;

            }
        }


       let OrderList: Array<Order>=new Array<Order>();


    let emailIDstatus =false;
    let passwordStatus=false;
    let conformStatus=false;
    let phoneNumberStatus=false;
    let loginemailStatus=false;
    let loginpasswordStatus=false;


function validate() {
    let email=document.getElementById("email") as HTMLInputElement;
    let emaillabel=document.getElementById("label_email") as HTMLLabelElement;

    let regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;

    if(regx.test(email.value)){
        emaillabel.style.color="green";
        email.style.borderColor="green";
        emailIDstatus=true;
    }
    else{
        emailIDstatus=false;
        emaillabel.style.color="red";
        email.style.borderColor="red";
    }
}

function validate1(){
        var email=document.getElementById("email1") as HTMLInputElement;
        var emaillabel=document.getElementById("label_email1") as HTMLLabelElement;

        var regx=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;

        if(regx.test(email.value)){
            emaillabel.style.color="green";
            email.style.borderColor="green";
            loginemailStatus=true;
        }
        else{
            emaillabel.style.color="red";
            email.style.borderColor="red";
            loginemailStatus=false;
        }
    }


    function passwordValidate(){
        var password=document.getElementById("password") as HTMLInputElement;
        var label_password=document.getElementById("label_password") as HTMLLabelElement;

        var regx1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

        if(regx1.test(password.value)){
            label_password.style.color="green";
            password.style.borderColor="green";
            passwordStatus=true;
        }else{
            password.style.borderColor="red";
            label_password.style.color="red";
            passwordStatus=false;
        }

    }

    function passwordValidate1(){
        var password=document.getElementById("password1") as HTMLInputElement;
        var label_password=document.getElementById("label_password1") as HTMLLabelElement;

        var regx1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/

        if(regx1.test(password.value)){
            label_password.style.color="green";
            password.style.borderColor="green";
            loginpasswordStatus=true;
        }else{
            password.style.borderColor="red";
            label_password.style.color="red";
            loginpasswordStatus=false;
        }

    }

    function conformValidate(){
        var Conformpassword=document.getElementById("Conformpassword") as HTMLInputElement;
        var password1=document.getElementById("password") as HTMLInputElement;
        var label_conformpassword=document.getElementById("label_conformpassword") as HTMLLabelElement;

        if(Conformpassword.value != password1.value){
            Conformpassword.style.borderColor="red";
            label_conformpassword.style.color="red";
            conformStatus=false;
        }else{
            Conformpassword.style.borderColor="green";
            label_conformpassword.style.color="green";
            conformStatus=true;
        }
    }

    function phoneNum(){
       var regx=/[7-9]\d{9}/;
       var x=document.getElementById("phonenumber") as HTMLInputElement;
       var label_phone=document.getElementById("label_phone") as HTMLLabelElement;
        if(regx.test(x.value)){
            label_phone.style.color="green";
            x.style.borderColor="green";
            phoneNumberStatus=true;
        }else{
            x.style.borderColor="red";
            label_phone.style.color="red";
            phoneNumberStatus=false;
            
        }
       
    }

    function newuserSubmit(){
            let email=document.getElementById("email") as HTMLInputElement;
            let pass=document.getElementById("password") as HTMLInputElement;
            let conf=document.getElementById("Conformpassword") as HTMLInputElement;
            let phone=document.getElementById("phonenumber") as HTMLInputElement;

        if(emailIDstatus==true && passwordStatus==true &&  conformStatus==true &&  phoneNumberStatus==true){

            
           let user:User=new User(email.value, pass.value, conf.value, phone.value);
           alert("Registration success");
           userArrayList.push(user);
           


        }else{
            console.log(emailIDstatus);
            console.log(passwordStatus);
            console.log(conformStatus);
            console.log(phoneNumberStatus);
            alert("please enter correct values");
        }
    }


    function newUserEntry(){
        
       let page1= document.getElementById("page1") as HTMLInputElement;
       let element = document.getElementsByClassName("main") as HTMLCollectionOf<HTMLDivElement>;
       let element1 = document.getElementsByClassName("right") as HTMLCollectionOf<HTMLDivElement>;

       page1.style.display="none";

       element[0].style.display="block";

       element1[0].style.display="none";

    
    }

    function login(){
        let page1= document.getElementById("page1") as HTMLInputElement;
        let element = document.getElementsByClassName("main") as HTMLCollectionOf<HTMLDivElement>;
        let element1 = document.getElementsByClassName("left") as HTMLCollectionOf<HTMLDivElement>;

        page1.style.display="none";

        element[0].style.display="block";

        element1[0].style.display="none";
    }

let temparyUserSrote : User;
    function signin(){

        let loginemail=document.getElementById("email1") as HTMLInputElement;
        let loginpassword=document.getElementById("password1") as HTMLInputElement;
        let flag=false;

        if(loginemailStatus==true && loginpasswordStatus == true){
            for(let i=0;i<userArrayList.length;i++){
                if(userArrayList[i].EmailID == loginemail.value && userArrayList[i].Password == loginpassword.value){
                    flag=true;
                    temparyUserSrote=userArrayList[i];
                    break;
                }
            }

            if(flag){
                
                let body=document.getElementById("body1") as HTMLDivElement;
                let login_page=document.getElementById("login_page") as HTMLDivElement;

                body.style.display="none";
                login_page.style.display="block";

            }else{
                alert("login faild")
            }
        }else{
            alert("Invaild mail or password!");
        }

    }

    function backToMainPage(){
       
                let body=document.getElementById("body1") as HTMLDivElement;
                let login_page=document.getElementById("login_page") as HTMLDivElement;
                let page1=document.getElementById("page1") as HTMLDivElement;
                let main=(document.getElementsByClassName("main") as HTMLCollectionOf<HTMLDivElement>);
                

                (document.getElementById("email1") as HTMLInputElement).value="";
                (document.getElementById("password1") as HTMLInputElement).value="";
                validate1();
                passwordValidate1();
                
                page1.style.display="block";
                body.style.display="flex";
                login_page.style.display="none";     
                main[0].style.display="none";
                

    }

    function showMedicineDetail(){
        (document.getElementById("editData") as HTMLDivElement).style.display="none";
        (document.getElementById("purchaseCount") as HTMLDivElement).style.display="none";
        let div=document.getElementById("rechargeDiv") as HTMLDivElement;
        div.style.display="none";
        let but=document.getElementById("addButton") as HTMLButtonElement;
        but.style.display="block";
        let table1=document.getElementById("purchaseTable") as HTMLTableElement;
        table1.style.display="none";
        let table=document.getElementById("Medicinetable") as HTMLTableElement;
        table.style.display="block";
        table.innerHTML="";

        (document.getElementById("OrderTable") as HTMLTableElement).style.display="none";

        (document.getElementById("addDiv") as HTMLDivElement).style.display="none";
        table.innerHTML=` <tr>
        <th>${"Medicine Name"}</th>
        <th>${"Medicine Price"}</th>
        <th>${"Medicine Count"}</th>
        <th>${"Medicine Expary"}</th>
        <th colspan="2">${"Choice"}</th>
    </tr>`
        MedicineList.forEach(medicine => {
            
            table.innerHTML+=`<tr>
                                <td>
                                ${medicine.MedicineName}
                            </td>
                            <td>
                            ${medicine.MedicinePrice}
                            </td>
                            <td>
                            ${medicine.MedicineCount}
                            </td>
                            <td>
                            ${medicine.MedicineExpary.getFullYear()}/${medicine.MedicineExpary.getMonth()}/${medicine.MedicineExpary.getDate()}
                            </td>
                            <td>
                            <button onclick="editMedicineData('${medicine.MedicineId}')">Edit</button>
                        </td>
                        <td>
                            <button onclick="deleteMedicine('${medicine.MedicineId}')">delete</button>
                        </td>
                            </tr>`
        });
    }


    function deleteMedicine(medicine_id :string){
        let index=0;
        for(let i=0;i<MedicineList.length;i++){
            if(medicine_id == MedicineList[i].MedicineId){
                index=i;
                break;
            }
        }

        MedicineList.splice(index,1);
        showMedicineDetail();

    }

    function purchase(){
        (document.getElementById("editData") as HTMLDivElement).style.display="none";
        let div=document.getElementById("rechargeDiv") as HTMLDivElement;
        div.style.display="none";
        let add=document.getElementById("addDiv") as HTMLDivElement;
        add.style.display="none";
        let but=document.getElementById("addButton") as HTMLButtonElement;
        but.style.display="none";
        let table1=document.getElementById("Medicinetable") as HTMLTableElement;
        table1.style.display="none";
        let table=document.getElementById("purchaseTable") as HTMLTableElement;
        table.style.display="block";
        (document.getElementById("OrderTable") as HTMLTableElement).style.display="none";


        table.innerHTML="";
        table.innerHTML=`<tr>
        <th>${"Medicine Name"}</th>
        <th>${"Medicine Price"}</th>
        <th>${"Medicine Count"}</th>
        <th>${"Medicine Expary"}</th>
        <th>${"Choice"}</th>
        </tr>`
        MedicineList.forEach(medicine => {
            
            
            table.innerHTML+=`<tr>
                                <td>
                                ${medicine.MedicineName}
                            </td>
                            <td>
                            ${medicine.MedicinePrice}
                            </td>
                            <td>
                            ${medicine.MedicineCount}
                            </td>
                            <td>
                            ${medicine.MedicineExpary.getDate()}/${medicine.MedicineExpary.getMonth()}/${medicine.MedicineExpary.getFullYear()}
                            </td>
                            <td>
                            <button onclick="showCountMenu('${medicine.MedicineId}')">buy</button>
                        </td>
                        
                            </tr>`
        });
    }
    let currendMedicineID:string;

    function showCountMenu(medicineID : string){
        (document.getElementById("purchaseCount") as HTMLDivElement).style.display="block";
        currendMedicineID=medicineID;
    

    }




    let temparymedicineStore2:MedicineInfo;


    function editMedicineData(medicine_id:string){

        let div=document.getElementById("rechargeDiv") as HTMLDivElement;
        div.style.display="none";
        let add=document.getElementById("addDiv") as HTMLDivElement;
        add.style.display="none";
        let but=document.getElementById("addButton") as HTMLButtonElement;
        but.style.display="none";
        let table1=document.getElementById("Medicinetable") as HTMLTableElement;
        table1.style.display="none";
        let table=document.getElementById("editData") as HTMLTableElement;
        table.style.display="block";
        (document.getElementById("OrderTable") as HTMLTableElement).style.display="none";


        let editname=document.getElementById("EditName") as HTMLInputElement;
        let editPrice=document.getElementById("EditPrice") as HTMLInputElement;
        let editCount=document.getElementById("editCount") as HTMLInputElement;
        let editDate=document.getElementById("editExpartDate") as HTMLInputElement;

        let flag=false;
        
        MedicineList.forEach(medecines => {
                if(medicine_id==medecines.MedicineId){
                    temparymedicineStore2=medecines;
                    flag=true;
                    return ;
                }
        });
        if(flag){
            editname.value=temparymedicineStore2.MedicineName;
            editPrice.value= (temparymedicineStore2.MedicinePrice).toString();
            editCount.value=(temparymedicineStore2.MedicineCount).toString();
            var date=temparymedicineStore2.MedicineExpary.toISOString();
            editDate.value=date.substring(0,10);
        }else{
            alert("id not found");
        }

    }

    function Conform_editData(){
        let editname=document.getElementById("EditName") as HTMLInputElement;
        let editPrice=document.getElementById("EditPrice") as HTMLInputElement;
        let editCount=document.getElementById("editCount") as HTMLInputElement;
        let editDate=document.getElementById("editExpartDate") as HTMLInputElement;

        temparymedicineStore2.MedicineName=editname.value;
        temparymedicineStore2.MedicinePrice=Number(editPrice.value);
        temparymedicineStore2.MedicineCount=Number(editCount .value);
        temparymedicineStore2.MedicineExpary=new Date(editDate.value);
        
        (document.getElementById("editData") as HTMLDivElement).style.display="none";
        showMedicineDetail();

    }




    let temparymedicineStore:MedicineInfo;
    let count:number;
    function Conform_purchase(){

        let UserEnter_count=(document.getElementById("UserEntercount") as HTMLInputElement).value;
        let flag=true;
        count=Number(UserEnter_count);
    

        MedicineList.forEach(medicines => {
            if(medicines.MedicineId == currendMedicineID){
                if(medicines.MedicineCount >= Number(UserEnter_count)){  
                    temparymedicineStore=medicines;
                    flag=true;
                }else{
                    alert("Count not avilable!");
                    flag=false;
                }
                
            }
        });

        if(flag){
            if(temparymedicineStore.MedicinePrice <=temparyUserSrote.Balance){
                temparyUserSrote.Balance=temparyUserSrote.Balance-count*temparymedicineStore.MedicinePrice;
                temparymedicineStore.MedicineCount=temparymedicineStore.MedicineCount-count;

                let order1:Order=new Order(temparymedicineStore.MedicineName,temparyUserSrote.EmailID,count,OrderStatus.Ordered);

                OrderList.push(order1);
                alert("Order success your OrderID is "+ order1.OrderID);
                (document.getElementById("UserEntercount") as HTMLInputElement).value="";
                (document.getElementById("purchaseCount") as HTMLDivElement).style.display="none";

            }else{
                alert("Balance is not available!");
            }
        }
    }



    function orderHistory(){
        let table=(document.getElementById("OrderTable") as HTMLTableElement);
        
        let add = document.getElementById("addDiv") as HTMLDivElement;
        add.style.display = "none";
        let div = document.getElementById("rechargeDiv") as HTMLDivElement;
        div.style.display = "none";
        let but = document.getElementById("addButton") as HTMLButtonElement;
        but.style.display = "none";
        let table1 = document.getElementById("Medicinetable") as HTMLTableElement;
        table1.style.display = "none";
        let table2 = document.getElementById("purchaseTable") as HTMLTableElement;
        table2.style.display = "none";
        (document.getElementById("purchaseCount") as HTMLDivElement).style.display="none";



        table.style.display="block";
        table.innerHTML="";
        table.innerHTML=`<tr>
        <th>${"OrderID"}</th>
        <th>${"Email"}</th>
        <th>${"Medicine name"}</th>
        <th>${"order count"}</th>
        <th>${"Order status"}</th>
        </tr>`
        OrderList.forEach(orders => {
            
            if(orders.Email==temparyUserSrote.EmailID){
            
                    
                    
                    table.innerHTML+=`<tr>
                                        <td>
                                        ${orders.OrderID}
                                    </td>
                                    <td>
                                    ${orders.Email}
                                    </td>
                                    <td>
                                    ${orders.MedicineName}
                                    </td>
                                    <td>
                                    ${orders.OrderCount}
                                    </td>
                                    <td>
                                    ${orders.OrderStatus}
                                </td>
                                
                                    </tr>`
        
    }});
    }




    function addmedicine(){
        let add = document.getElementById("addDiv") as HTMLDivElement;
        add.style.display = "block";
        let div = document.getElementById("rechargeDiv") as HTMLDivElement;
        div.style.display = "none";
        let but = document.getElementById("addButton") as HTMLButtonElement;
        but.style.display = "none";
        let table1 = document.getElementById("Medicinetable") as HTMLTableElement;
        table1.style.display = "none";
        let table = document.getElementById("purchaseTable") as HTMLTableElement;
        table.style.display = "none";
        (document.getElementById("purchaseCount") as HTMLDivElement).style.display="none";

    }

    function addtomedicine(){
        let div=document.getElementById("rechargeDiv") as HTMLDivElement;
        div.style.display="none";
        (document.getElementById("purchaseCount") as HTMLDivElement).style.display="none";
    let a= document.getElementById("newMadineName") as HTMLInputElement;
    let b= document.getElementById("newMadinePrice") as HTMLInputElement;
    let c= document.getElementById("newMedicineCount") as HTMLInputElement;
    let e= document.getElementById("newMadicineExpary") as HTMLInputElement;
    if(a.value!="" && b.value!="" && c.value!="" && e.value!=""){
        let table=document.getElementById("Medicinetable") as HTMLTableElement;
    
        MedicineList.push(new MedicineInfo(a.value,parseInt(c.value),parseInt(b.value),new Date(e.value.toString())));
            
        MedicineList.forEach(medicine => {
            
            table.innerHTML += `<tr>
                                <td>
                                ${medicine.MedicineName}
                            </td>
                            <td>
                            ${medicine.MedicinePrice}
                            </td>
                            <td>
                            ${medicine.MedicineCount}
                            </td>
                            <td>
                            ${medicine.MedicineExpary.getFullYear()}/${medicine.MedicineExpary.getMonth()+1}/${medicine.MedicineExpary.getDate()}
                            </td>
                            <td>
                            <button onclick="editData(${medicine.MedicineId})">Edit</button>
                        </td>
                        <td>
                            <button>delete</button>
                        </td>
                            </tr>`
        });
        alert("medicine addded succesfully!");
        a.value="";
        b.value="";
        c.value="";
        e.value="";
        showMedicineDetail();
        (document.getElementById("addDiv") as HTMLDivElement).style.display="none";
    }else{
        alert("please fill the all fields!");
    }

    }

    function showBalace(){
        alert("Your current balance "+temparyUserSrote.Balance)
    }


    function cancelOrder(){
        
        let div=document.getElementById("rechargeDiv") as HTMLDivElement;
        div.style.display="none";
        let add=document.getElementById("addDiv") as HTMLDivElement;
        add.style.display="none";
        let but=document.getElementById("addButton") as HTMLButtonElement;
        but.style.display="none";
        let table1=document.getElementById("Medicinetable") as HTMLTableElement;
        table1.style.display="none";
        let table2=document.getElementById("purchaseTable") as HTMLTableElement;
        table2.style.display="none";
        (document.getElementById("purchaseCount") as HTMLDivElement).style.display="none";
        let table=(document.getElementById("OrderTable") as HTMLTableElement);

        table.style.display="block";
        table.innerHTML="";
        table.innerHTML=`<tr>
        <th>${"OrderID"}</th>
        <th>${"Email"}</th>
        <th>${"Medicine name"}</th>
        <th>${"order count"}</th>
        <th>${"Order status"}</th>
        <th>${"Action"}</th>
        </tr>`
        OrderList.forEach(orders => {
            
            if(orders.Email==temparyUserSrote.EmailID){
            
                    if(orders.OrderStatus== OrderStatus.Ordered){
                    
                            table.innerHTML+=`<tr>
                                                <td>
                                                ${orders.OrderID}
                                            </td>
                                            <td>
                                            ${orders.Email}
                                            </td>
                                            <td>
                                            ${orders.MedicineName}
                                            </td>
                                            <td>
                                            ${orders.OrderCount}
                                            </td>
                                            <td>
                                            ${orders.OrderStatus}
                                        </td>
                                        <td>
                                        <button onclick="editOrder('${orders.OrderID}')">Cancel Order</button>
                                        </td>
                                        
                                            </tr>`
                    }
        
    }});
    }

    function editOrder(order_Id:string){

        OrderList.forEach(orders => {
            if(order_Id == orders.OrderID){
                temparymedicineStore.MedicineCount+=orders.OrderCount;
                orders.OrderStatus=OrderStatus.Cancelled;
                alert("order cancelled successfully!");
                cancelOrder();
            }
        });
    }

    function RechargePage(){
        (document.getElementById("OrderTable") as HTMLTableElement).style.display="none";
        let div=document.getElementById("rechargeDiv") as HTMLDivElement;
        div.style.display="block";
        let add=document.getElementById("addDiv") as HTMLDivElement;
        add.style.display="none";
        let but=document.getElementById("addButton") as HTMLButtonElement;
        but.style.display="none";
        let table1=document.getElementById("Medicinetable") as HTMLTableElement;
        table1.style.display="none";
        let table=document.getElementById("purchaseTable") as HTMLTableElement;
        table.style.display="none";
        (document.getElementById("purchaseCount") as HTMLDivElement).style.display="none";
    }
    function Recharge(){
        (document.getElementById("editData") as HTMLDivElement).style.display="none";
        (document.getElementById("purchaseCount") as HTMLDivElement).style.display="none";

        let amount=document.getElementById("recharge_amount") as HTMLInputElement;
        if((document.getElementById("recharge_amount") as HTMLInputElement).value!= " "){
            temparyUserSrote.Balance+=parseInt(amount.value);
            alert("amount Add succesfully balabce "+ temparyUserSrote.Balance);
        }else{
            alert("please fill all fields!");
        }

    }

    let userArrayList : Array<User> = new Array<User>();

    userArrayList.push(new User("yathav@gmail.com","Abc@1234","12345678","8925317233"));
    userArrayList.push(new User("krish@gmail.com","Yath@v2002","Yath@v2002","8925317233"));
