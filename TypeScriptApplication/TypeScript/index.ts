    let userId=1000;

    class User{

        EmailID:string;

        Password:string;

        ConformPassword:string;

        PhoneNumber:string;

        Balance:number=100;

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
        constructor(paramMedicineName: string, paramMedicineCount: number, paramMedicinePrice: number,MedicineExpary:Date) {
            MedicineIdAutoIncrement++;
    
            this.MedicineId = "MD" + MedicineIdAutoIncrement.toString();
            this.MedicineName = paramMedicineName;
            this.MedicineCount = paramMedicineCount;
            this.MedicinePrice = paramMedicinePrice;
            this.MedicineExpary=MedicineExpary;
        }
    
    }

    let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();

    MedicineList.push(new MedicineInfo("Paracetomol", 5, 50,new Date(2024,3,13)));
    MedicineList.push(new MedicineInfo("Colpal", 5, 60,new Date(2024,3,13)));
    MedicineList.push(new MedicineInfo("Stepsil", 5, 70,new Date(2024,3,13)));
    MedicineList.push(new MedicineInfo("Iodex", 5, 80,new Date(2024,3,13)));
    MedicineList.push(new MedicineInfo("Acetherol", 5, 100,new Date(2024,3,13)));
    

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

    
    function signin(){

        let loginemail=document.getElementById("email1") as HTMLInputElement;
        let loginpassword=document.getElementById("password1") as HTMLInputElement;
        let flag=false;

        if(loginemailStatus==true && loginpasswordStatus == true){
            for(let i=0;i<userArrayList.length;i++){
                if(userArrayList[i].EmailID == loginemail.value && userArrayList[i].Password == loginpassword.value){
                    flag=true;
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
                
                page1.style.display="block";
                body.style.display="block";
                login_page.style.display="none";     
    }

function showMedicineDetail(){

    let but=document.getElementById("addButton") as HTMLButtonElement;
    but.style.display="block";
    let table1=document.getElementById("purchaseTable") as HTMLTableElement;
    table1.style.display="none";
    let table=document.getElementById("Medicinetable") as HTMLTableElement;
    table.style.display="block";

    MedicineList.forEach(medicine => {
        
        table.innerHTML+=`<tr>
                            <td>
                             ${medicine.MedicineId}
                            </td>
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
                         ${medicine.MedicineExpary}
                        </td>
                        <td>
                        <button>Edit</button>
                       </td>
                       <td>
                        <button>delete</button>
                       </td>
                        </tr>`
    });
}

function purchase(){
    let add=document.getElementById("addDiv") as HTMLDivElement;
    add.style.display="none";
    let but=document.getElementById("addButton") as HTMLButtonElement;
    but.style.display="none";
    let table1=document.getElementById("Medicinetable") as HTMLTableElement;
    table1.style.display="none";
    let table=document.getElementById("purchaseTable") as HTMLTableElement;
    table.style.display="block";

    MedicineList.forEach(medicine => {
        
        
        table.innerHTML+=`<tr>
                            <td>
                             ${medicine.MedicineId}
                            </td>
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
                         ${medicine.MedicineExpary}
                        </td>
                        <td>
                        <button>buy</button>
                       </td>
                       
                        </tr>`
    });
}


function addmedicine(){
 let add=document.getElementById("addDiv") as HTMLDivElement;
 add.style.display="block";

}

function addtomedicine(){
    
}
    let userArrayList : Array<User> = new Array<User>();

    userArrayList.push(new User("yathav@gmail.com","Abc@1234","12345678","8925317233"));
    userArrayList.push(new User("krish@gmail.com","Yath@v2002","Yath@v2002","8925317233"));
