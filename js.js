const preloaderpanel=document.getElementById("preloader");

const loaderpanel=document.getElementById("loaderpanel");

const connectionerrorpanel=document.getElementById("connecerrorpanel");
const reloadbut=document.getElementById("reloadbut");

const enterpasswordpanel=document.getElementById("passwordpanel");
const pbs=document.querySelectorAll(".pb");
const psemiactive=document.querySelector(".psemiactive");
const passsub=document.getElementById("passsub");
const changepassbut=document.getElementById("changepassbut");

const changepasswordpanel=document.getElementById("changepasswordpanel");
const cpbs=document.querySelectorAll(".cpb");
const opbs=document.querySelectorAll(".opb");
const npbs=document.querySelectorAll(".npb");
const csemiactive=document.querySelector(".csemiactive");
const cngpanelbackbut=document.getElementById("cngpanelbackbut");
const cngpassbut=document.getElementById("cngpassconfirmbut");

const homescreenpanel=document.getElementById("homescreenpanel");
const humansearch=document.getElementById("humansearch");
const addpersoncon=document.getElementById("addpersoncon");
const nocustomercon=document.getElementById("nocustomercon");
const nopersonfound=document.getElementById("nopersonfound");
const personlistcon=document.getElementById("personlistcon");

const addpersonpanel=document.getElementById("addpersonpanel");
const personnameinput=document.getElementById("personnameinput");
const canceladdpersonbut=document.getElementById("canceladdpersonbut");
const addpersonbut=document.getElementById("addpersonbut");

const addtransactionpanel=document.getElementById("addtransactionpanel");
const infoitemname=document.getElementById("infoitemname");
const iids1=document.getElementById("iids1");
const itemdatesup=document.getElementById("itemdatesup");
const iids2=document.getElementById("iids2");
const namepencil=document.querySelector("#pencilcon>img");
const balanceinfoitem=document.getElementById("balanceinfoitem");
const addtransactionbut=document.getElementById("addtransactionbut");
const notransactionbox=document.getElementById("notransactionbox");
const notransactionfound=document.getElementById("notransactionfound");
const actualtransactionlist=document.getElementById("actualtransactionlist");
const transsearch=document.getElementById("searchbarintrans");
const translist=document.getElementById("translist");
const gohomebutfrominfo=document.getElementById("gohomebutfrominfo");
const deletebutfrominfo=document.getElementById("deletebutfrominfo");

const deletepersonpanel=document.getElementById("deletepersonpanel");
const nameindelpopup=document.getElementById("nameindelpopup");
const cancelperdelbut=document.getElementById("cancelperdelbut");
const confirmperdelbut=document.getElementById("confirmperdelbut");

const itip=document.getElementById("individualtransinfopanel");
const itipname=document.querySelector("#nameintransinfopanel>span");
const itipvenue=document.querySelector("#venueintransinfopanel");
const itipshift=document.querySelector("#shiftintransinfopanel");
const itipdate=document.querySelector("#dateintransinfopanel"); 
const itiptotal=document.querySelector("#totalintransinfopanel");
const itipgave= document.querySelector("#gaveintransinfopanel");
const itipedit=document.querySelector("#editbuttonforindtrans");
const itipback= document.querySelector("#backfromindtranspanel");
const itipdelete= document.querySelector("#deleteindtranspanel");

const itip2=document.getElementById("individualtransinfopanel2");
const itipname2=document.querySelector("#nameintransinfopanel2>span");
const itipdate2=document.querySelector("#dateintransinfopanel2"); 
const itipgave2= document.querySelector("#gaveintransinfopanel2");
const itipedit2=document.querySelector("#editbuttonforindtrans2");
const itipback2= document.querySelector("#backfromindtranspanel2");
const itipdelete2= document.querySelector("#deleteindtranspanel2");

const deletetranspanel=document.getElementById("deletetranspanel");
const canceltransdelbut=document.getElementById("canceltransdelbut");
const confirmtransdelbut=document.getElementById("confirmtransdelbut");

const transeditpanel=document.getElementById("transeditpanel");
const transeditop1=document.getElementById("transeditop1");
const transeditop2=document.getElementById("transeditop2");
const transeditpanel1=document.getElementById("transeditpanel1");
const venueeditinput=document.getElementById("venueeditinput");
const dateeditinput=document.getElementById("dateeditinput"); 
const lunchedit=document.getElementById("lunchedit");
const dinneredit=document.getElementById("dinneredit");
const totaleditinput=document.getElementById("totaleditinput");
const gaveeditinput=document.getElementById("gaveeditinput");
const cancelfortransedit=document.getElementById("cancelfortransedit");
const savefortransedit=document.getElementById("savefortransedit");
const transeditpanel2=document.getElementById("transeditpanel2");
const dateeditinput2=document.getElementById("dateeditinput2"); 
const gaveeditinput2=document.getElementById("gaveeditinput2");
const cancelfortransedit2=document.getElementById("cancelfortransedit2");
const savefortransedit2=document.getElementById("savefortransedit2");

const apiurl="https://script.google.com/macros/s/AKfycbyT6zbiC4judQVRwrpJwovt2t4ZuqGW7VoY8BqmJlQJReq4aNIgoqSSWUaJYTWt9hb4rg/exec";
let reloadoption=0;
let mydata={};
let ogpassword="";
const monthsup=["th","st","nd","rd","th","th","th","th","th","th"];
const monthname=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const filledkey0=[1,1,1,1];
const filledkey1=[1,1,1,1];
const filledkey2=[1,1,1,1];
const validNoInputs=['0','1','2','3','4','5','6','7','8','9',0,1,2,3,4,5,6,7,8,9,'-','.'];

function validateInput(event,field) 
{
    if (!((validNoInputs.indexOf(event.key)!==-1)||(event.key=='Backspace'))) {
        event.preventDefault();
    }
    if(event.key=='-')
    {
        if(field.value!=='')
        {
            event.preventDefault();
        }
    }
    if(event.key=='.')
    {
        if(field.value=='' || field.value=='-' ||field.value.includes('.'))
        {
            event.preventDefault();
        }
        
    } 
}

function moveCaretToEnd(inputField) {
    inputField.selectionStart = inputField.selectionEnd = inputField.value.length;
}

document.querySelectorAll("input").forEach((inputField)=>{
    if(inputField.getAttribute("type")!="date" && inputField.getAttribute("type")!="number")
    {
        inputField.addEventListener('click', function(){
            moveCaretToEnd(inputField);
        });
    }
});

reloadbut.addEventListener("click",function(){
    if(!reloadoption)
    {
        location.reload();
    }
    else
    {
        connectionerrorpanel.classList.remove("shownpanel");
        loadData(reloadoption);
    }
});

for(let i=0;i<4;i++)
{
    pbs[i].addEventListener("click",function()
    {
        if(pbs[i].classList.contains("semiactive"))
        {
            pbs[i].classList.add("active");
            setTimeout(() => {
                pbs[i].focus();
            }, 0);
        }
    });
    pbs[i].addEventListener("blur",function()
    {
        pbs[i].classList.remove("active");
    });
    pbs[i].addEventListener("keyup",function(e)
    {
        if(i==3 && pbs[i].value.length==1)
        {
            passsub.classList.add("active");
        }
        else
        {
            passsub.classList.remove("active");
        }
        if(i && filledkey0[i] && e.key=='Backspace')
        {
            this.classList.remove("semiactive");
            this.classList.remove("active");
            pbs[i-1].focus();
            pbs[i-1].classList.add("semiactive");
            pbs[i-1].classList.add("active");
            pbs[i-1].value="";
            filledkey0[i-1]=1;
            return;
        }
        if(this.value.length===1)
        {
            filledkey0[i]=0;
            if(i!=3)
            {
                this.classList.remove("semiactive");
                this.classList.remove("active");
                pbs[i+1].focus();
                pbs[i+1].classList.add("semiactive");
                pbs[i+1].classList.add("active");
            }
        }
        else 
        {
            filledkey0[i]=1;
        }
    });  

    opbs[i].addEventListener("click",function()
    {
        if(opbs[i].classList.contains("semiactive"))
        {
            opbs[i].classList.add("active");
            setTimeout(() => {
                
                opbs[i].focus();
            }, 0);
        }
    });
    npbs[i].addEventListener("click",function()
    {
        if(npbs[i].classList.contains("semiactive"))
        {
            npbs[i].classList.add("active");
            setTimeout(() => {
                
                npbs[i].focus();
            }, 0);
        }
    });
    opbs[i].addEventListener("blur",function()
    {
        opbs[i].classList.remove("active");
    });
    npbs[i].addEventListener("blur",function()
    {
        npbs[i].classList.remove("active");
    });
    opbs[i].addEventListener("keyup",function(e)
    {
        if(opbs[3].value.length && npbs[3].value.length)
        {
            cngpassbut.classList.add("active");
        }
        else
        {
            cngpassbut.classList.remove("active");
        }
        if(i && filledkey1[i] && e.key=='Backspace')
        {
            this.classList.remove("semiactive");
            this.classList.remove("active");
            opbs[i-1].focus();
            opbs[i-1].classList.add("semiactive");
            opbs[i-1].classList.add("active");
            opbs[i-1].value="";
            filledkey1[i-1]=1;
            return;
        }
        if(this.value.length===1)
        {
            filledkey1[i]=0;
            if(i!=3)
            {
                this.classList.remove("semiactive");
                this.classList.remove("active");
                opbs[i+1].focus();
                opbs[i+1].classList.add("semiactive");
                opbs[i+1].classList.add("active");
            }
        }
        else 
        {
            filledkey1[i]=1;
        }
    });
    npbs[i].addEventListener("keyup",function(e)
    {
        if(opbs[3].value.length && npbs[3].value.length)
        {
            cngpassbut.classList.add("active");
        }
        else
        {
            cngpassbut.classList.remove("active");
        }
        if(i && filledkey2[i] && e.key=='Backspace')
        {
            this.classList.remove("semiactive");
            this.classList.remove("active");
            npbs[i-1].focus();
            npbs[i-1].classList.add("semiactive");
            npbs[i-1].classList.add("active");
            npbs[i-1].value="";
            filledkey2[i-1]=1;
            return;
        }
        if(this.value.length===1)
        {
            filledkey2[i]=0;
            if(i!=3)
            {
                this.classList.remove("semiactive");
                this.classList.remove("active");
                npbs[i+1].focus();
                npbs[i+1].classList.add("semiactive");
                npbs[i+1].classList.add("active");
            }
        }
        else 
        {
            filledkey2[i]=1;
        }
    });
}

passsub.addEventListener("click",function()
{
    let enteredpass=pbs[0].value+pbs[1].value+pbs[2].value+pbs[3].value;
    if(enteredpass===ogpassword)
    {
        enterpasswordpanel.classList.remove("shownpanel");
        homescreenpanel.classList.add("shownpanel");
    }
    else
    {
        this.classList.remove("active");
        this.classList.add("wrong");
        this.querySelector("span").innerText="Wrong";
        setTimeout(() => {
        this.classList.remove("wrong");
        this.querySelector("span").innerText="Verify";
        for(let i=0;i<4;i++)
        {
            if(i==0)
       {
        pbs[i].classList.add("semiactive");
        pbs[i].classList.add("active");
       }
       else
       {
        pbs[i].classList.remove("semiactive");
        pbs[i].classList.remove("active");
       } 
            pbs[i].value="";
            filledkey0[i]=1;
        }
        pbs[0].focus();
        }, 3000);
    }
});

cngpassbut.addEventListener("click",function(){
    let oldpass=opbs[0].value+opbs[1].value+opbs[2].value+opbs[3].value;
    let newpass=npbs[0].value+npbs[1].value+npbs[2].value+npbs[3].value;
    this.classList.remove("active");
    if(ogpassword==oldpass)
    {
        this.classList.add("load");
        changepasswordpanel.style.pointerEvents="none";
        this.querySelector("span").innerText="Changing";
        fetch(apiurl+`?passcng=true&data=${newpass}`)
        .then(res=>res.text())
        .then((data)=>{
            ogpassword=data;
            setTimeout(() => {
                changepasswordpanel.style.pointerEvents="auto";
                cngpanelbackbut.click();
            }, 0);
        }).catch(()=>{
            this.classList.remove("load");
            this.classList.add("error");
            this.querySelector("span").innerText="Error";
            setTimeout(() => {
                this.classList.remove("error");
                this.classList.add("active");
            this.querySelector("span").innerText="Change";
            changepasswordpanel.style.pointerEvents="auto";
            }, 3000);
        }
        );
    }
    else
    {
        this.classList.add("wrong");
        cngpassbut.querySelector("span").innerText="Wrong";
        changepasswordpanel.style.pointerEvents="none";
        setTimeout(() => {
            changepasswordpanel.style.pointerEvents="auto";
            for(let i=0;i<4;i++)
        {
       if(i==0)
       {
        opbs[i].classList.add("semiactive");
        opbs[i].classList.add("active");
        npbs[i].classList.remove("active");
       }
       else
       {
        opbs[i].classList.remove("semiactive");
        opbs[i].classList.remove("active");
        npbs[i].classList.remove("active");
       } 
       opbs[i].value="";
       filledkey1[i]=1;
    }
    opbs[0].focus();
    cngpassbut.classList.remove("active");
    cngpassbut.classList.remove("wrong");
    cngpassbut.classList.remove("error");
    cngpassbut.classList.remove("load");
    cngpassbut.querySelector("span").innerText="Change";
        }, 3000);
    }
});

cngpanelbackbut.addEventListener("click",function()
{
    changepasswordpanel.classList.remove("shownpanel");
    enterpasswordpanel.classList.add("shownpanel");
    for(let i=0;i<4;i++)
    {
       if(i==0)
       {
        pbs[i].classList.add("semiactive");
        pbs[i].classList.add("active");
       }
       else
       {
        pbs[i].classList.remove("semiactive");
        pbs[i].classList.remove("active");
       } 
       pbs[i].value="";
       filledkey0[i]=1;
    }
    pbs[0].focus();
    passsub.classList.remove("active");
    passsub.classList.remove("wrong");
    passsub.querySelector("span").innerText="Verify";
});

changepassbut.addEventListener("click",function()
{
    enterpasswordpanel.classList.remove("shownpanel");
    changepasswordpanel.classList.add("shownpanel");
    for(let i=0;i<4;i++)
    {
       if(i==0)
       {
        opbs[i].classList.add("semiactive");
        opbs[i].classList.add("active");
        npbs[i].classList.add("semiactive");
       }
       else
       {
        opbs[i].classList.remove("semiactive");
        opbs[i].classList.remove("active");
        npbs[i].classList.remove("semiactive");
        npbs[i].classList.remove("active");
       } 
       opbs[i].value="";
       npbs[i].value="";
       filledkey1[i]=1;
       filledkey2[i]=1;
    }
    opbs[0].focus();
    cngpassbut.classList.remove("active");
    cngpassbut.classList.remove("wrong");
    cngpassbut.classList.remove("error");
    cngpassbut.classList.remove("load");
    cngpassbut.querySelector("span").innerText="Change";
});

humansearch.addEventListener("keyup", function(){
    
    const val = this.value.trim().toLowerCase();
    if(Object.keys(mydata).length)
    {
    const personitems = document.getElementsByClassName('personitem');
    let flag = 1;
    
    for (let i = 0; i < personitems.length; i++) {
        const pname = personitems[i].querySelector(".personitemname").innerText.toLowerCase();

        if (!val || pname.includes(val)) {
            personitems[i].classList.remove("personnotinsearch");
            flag = 0;
        }
        else {
            personitems[i].classList.add("personnotinsearch");
        }
    }
    if (flag) {
        personlistcon.classList.remove("shownpersonsubpanel");
        nopersonfound.classList.add("shownpersonsubpanel");
    }
    else {
        personlistcon.classList.add("shownpersonsubpanel");
        nopersonfound.classList.remove("shownpersonsubpanel");
    }
    }
    else
    {
        if(val)
        {
            nocustomercon.classList.remove("shownpersonsubpanel");
        nopersonfound.classList.add("shownpersonsubpanel");
        }
        else
        {
            nocustomercon.classList.add("shownpersonsubpanel");
        nopersonfound.classList.remove("shownpersonsubpanel");
        }
    }
});

humansearch.addEventListener("keydown", function () {

    setTimeout(() => {
        const keyUpEvent = new Event('keyup');
        humansearch.dispatchEvent(keyUpEvent);
    }, 1);
});

addpersoncon.addEventListener("click",function(){
    homescreenpanel.classList.remove("shownpanel");
    addpersonpanel.classList.add("shownpanel");
    personnameinput.value="";
    addpersonbut.querySelector("span").innerText="Save";
    addpersonbut.classList.remove("error");
    addpersonbut.classList.remove("load");
    addpersonbut.classList.add("inactive");
    setTimeout(() => {
        personnameinput.focus();
    }, 0);
});

canceladdpersonbut.addEventListener("click",function(){
    addpersonpanel.classList.remove("shownpanel");
    if(namepencil.classList.contains("clicked"))
    {
        addtransactionpanel.classList.add("shownpanel");
        namepencil.classList.remove("clicked");
    }
    else
    {
        homescreenpanel.classList.add("shownpanel");
    }
});

addpersonbut.addEventListener("click",function()
{
    if(!namepencil.classList.contains("clicked"))
    {
    this.querySelector("span").innerText="Saving";
    this.classList.add("load");
    canceladdpersonbut.style.pointerEvents="none";
    personnameinput.style.pointerEvents="none";
    const nameval=String(personnameinput.value.trim());
    const day=new Date();
    const date=day.getDate().toString().padStart(2, '0');
    const month=(day.getMonth()+1).toString().padStart(2, '0');
    const year=day.getFullYear().toString().padStart(4, '0');
    const datestr=`${date}.${month}.${year}`;
    const hr=day.getHours().toString().padStart(2, '0');
    const min=day.getMinutes().toString().padStart(2, '0');
    const sec=day.getSeconds().toString().padStart(2, '0');
    const timestr=`${hr}.${min}:${sec}`;
    const datetimestr=`${datestr} / ${timestr}`;
    const dataarr=[nameval,datetimestr];
    fetch(apiurl+`?addper=true&data=${JSON.stringify(dataarr)}`)
    .then(res=>res.text())
    .then((Id)=>{
        canceladdpersonbut.style.pointerEvents="auto";
        personnameinput.style.pointerEvents="auto";
        addpersonpanel.classList.remove("shownpanel");
        loadData(Id);
        }).catch(()=>{
        this.querySelector("span").innerText="Error";
        this.classList.remove("load");
        this.classList.add("error");
        setTimeout(() => {
            this.classList.remove("error");
            this.querySelector("span").innerText="Save";
            canceladdpersonbut.style.pointerEvents="auto";
            personnameinput.style.pointerEvents="auto";
        }, 3000);
    });
    }
    else
    {
    this.querySelector("span").innerText="Saving";
    this.classList.add("load");
    canceladdpersonbut.style.pointerEvents="none";
    personnameinput.style.pointerEvents="none";
    const nameval=String(personnameinput.value.trim());
    const Id=Number(document.querySelector(".personitem.clicked").id.substring(10));
    fetch(apiurl+`?pernamecng=true&data=${JSON.stringify([Id,nameval])}`)
    .then(res=>res.text())
    .then(()=>{
        namepencil.classList.remove("clicked");
        canceladdpersonbut.style.pointerEvents="auto";
        personnameinput.style.pointerEvents="auto";
        addpersonpanel.classList.remove("shownpanel");
        loadData(Id);
        }).catch(()=>{
        this.querySelector("span").innerText="Error";
        this.classList.remove("load");
        this.classList.add("error");
        setTimeout(() => {
            this.classList.remove("error");
            this.querySelector("span").innerText="Save";
            canceladdpersonbut.style.pointerEvents="auto";
            personnameinput.style.pointerEvents="auto";
        }, 3000);
    });
    }
});

personnameinput.addEventListener("keyup",function()
{
    const nameval=this.value.trim();
    if(nameval)
    {
        addpersonbut.classList.remove("inactive");
    }
    else
    {
        addpersonbut.classList.add("inactive");
    }
});

namepencil.addEventListener("click",function(){
    this.classList.add("clicked");
    addtransactionpanel.classList.remove("shownpanel");
    addpersonpanel.classList.add("shownpanel");
    personnameinput.value=infoitemname.innerText;
    addpersonbut.classList.remove("inactive");
    addpersonbut.classList.remove("load");
    addpersonbut.classList.remove("error");
    addpersonbut.querySelector("span").innerText="Save";
    setTimeout(() => {
        personnameinput.focus();
    }, 0);
});

addtransactionbut.addEventListener("click",function(){
    cancelfortransedit.click();
    cancelfortransedit2.click();
    setTimeout(() => {
    addtransactionpanel.classList.remove("shownpanel");
    transeditpanel.classList.add("shownpanel");
    transeditop1.classList.add("selectedoption");
    transeditop2.classList.remove("selectedoption");
    transeditpanel1.classList.add("showntranseditpanel");
    transeditpanel2.classList.remove("showntranseditpanel");
    }, 1);
});

transsearch.addEventListener("keyup", function(){
    
    const val = this.value.trim().toLowerCase();
    const transitems = document.querySelectorAll('#translist>.transitem');
    let f=1;
    for(let i=0;i<transitems.length;i++)
    {
        const transitem=transitems[i];

        if(!val)
        {
            f=0;
            transitem.classList.remove('transnotinsearch');
        }

        else
        {
        if(transitem.classList.contains("zerobelowitcon"))
        {
            transitem.classList.add("transnotinsearch");
        }

        else if(transitem.classList.contains("transactionitem"))
        {
            const venue=transitem.querySelector(".venueintransitem").textContent.toLowerCase();
            const shift=transitem.querySelector(".sftintransitem").textContent.toLowerCase();
            const date=transitem.querySelector(".dateintransitem").textContent.toLowerCase();
            if(venue.includes(val))
            {
                f=0;
                transitem.classList.remove('transnotinsearch');
            }
            else if(shift.includes(val))
            {
                f=0;
                transitem.classList.remove('transnotinsearch');
            }
            else if(date.includes(val))
            {
                f=0;
                transitem.classList.remove('transnotinsearch');
            }
            else
            {
                transitem.classList.add('transnotinsearch');
            }
        }

        else 
        {
            const date=transitem.querySelector(".dateintransitem2").textContent;
            
            if(date.includes(val))
            {
                f=0;
                transitem.classList.remove('transnotinsearch');
            }
            else
            {
                transitem.classList.add('transnotinsearch');
            }
        }
        }
    }
    if(f)
    {
        actualtransactionlist.classList.remove("showntransinfopanel");
        notransactionfound.classList.add("showntransinfopanel");
    }
    else
    {
        actualtransactionlist.classList.add("showntransinfopanel");
        notransactionfound.classList.remove("showntransinfopanel");
    }
    
});

transsearch.addEventListener("keydown", function () {

    setTimeout(() => {
        const keyUpEvent = new Event('keyup');
        transsearch.dispatchEvent(keyUpEvent);
    }, 1);
});

gohomebutfrominfo.addEventListener("click",function(){
    document.querySelector(".personitem.clicked").classList.remove("clicked");
    addtransactionpanel.classList.remove("shownpanel");
    homescreenpanel.classList.add("shownpanel");
});

deletebutfrominfo.addEventListener("click",function(){
    if(document.querySelector(".extrashownpanel"))
    {
        document.querySelector(".extrashownpanel").classList.remove("extrashownpanel");
    }
    nameindelpopup.innerText=infoitemname.innerText;
    deletepersonpanel.classList.add("extrashownpanel");
    document.querySelector("#deletepersonpanel>div").classList.add("up");

});

cancelperdelbut.addEventListener("click",function(){
    document.querySelector("#deletepersonpanel>div").classList.remove("up");
    setTimeout(() => {
        deletepersonpanel.classList.remove("extrashownpanel");
    }, 300);
});

confirmperdelbut.addEventListener("click",function(){
    this.classList.add("load");
    this.querySelector("span").innerText="Deleting";
    cancelperdelbut.style.pointerEvents="none";
    let delId=document.querySelector(".personitem.clicked").id;
    delId=Number(delId.substring(10));
    fetch(apiurl+`?delperson=true&delId=${delId}`)
    .then(res=>res.text())
    .then(()=>{
    deletepersonpanel.classList.remove("extrashownpanel");
    addtransactionpanel.classList.remove("shownpanel");
    this.classList.remove("load");
    this.querySelector("span").innerText="Confirm";
    cancelperdelbut.style.pointerEvents="auto";
    loadData(1);
    })
    .catch(()=>{
        this.classList.remove("load");
        this.classList.add("error");
        this.querySelector("span").innerText="Error";
        setTimeout(() => {
        cancelperdelbut.style.pointerEvents="auto";
        this.classList.remove("error");
        this.querySelector("span").innerText="Confirm";
        }, 3000);
    });
});

itipback.addEventListener("click",function(){
    if(document.querySelector(".transitem.clicked"))
    document.querySelector(".transitem.clicked").classList.remove("clicked");
    itip.classList.remove("shownpanel");
    addtransactionpanel.classList.add("shownpanel");
});

itipdelete.addEventListener("click",function(){
    if(document.querySelector(".extrashownpanel"))
    {
        document.querySelector(".extrashownpanel").classList.remove("extrashownpanel");
    }
    deletetranspanel.classList.add("extrashownpanel");
    document.querySelector("#deletetranspanel>div").classList.add("up");

});

itipedit.addEventListener("click",function()
{
    let rowid=document.querySelector(".personitem.clicked").id;
    let colid=document.querySelector(".transitem.clicked").id;
    const ind=colid.indexOf('t');
    colid=Number(colid.substring(ind+1))+3;
    let celldata=mydata[rowid][colid];
    celldata=celldata.split('(|)');
    venueeditinput.value=celldata[0];
    dateeditinput.value=celldata[1];
    document.getElementById(celldata[2]).click();
    totaleditinput.value=celldata[3];
    gaveeditinput.value=(celldata[4]==='~')?'':celldata[4];
    itip.classList.remove("shownpanel");
    savefortransedit.classList.add("active");
    transeditpanel.classList.add("shownpanel");
    transeditop1.click();
});

itipback2.addEventListener("click",function(){
    if(document.querySelector(".transitem.clicked"))
    document.querySelector(".transitem.clicked").classList.remove("clicked");
    itip2.classList.remove("shownpanel");
    addtransactionpanel.classList.add("shownpanel");
});

itipdelete2.addEventListener("click",function(){
    if(document.querySelector(".extrashownpanel"))
    {
        document.querySelector(".extrashownpanel").classList.remove("extrashownpanel");
    }
    deletetranspanel.classList.add("extrashownpanel");
    document.querySelector("#deletetranspanel>div").classList.add("up");

});

itipedit2.addEventListener("click",function()
{
    let rowid=document.querySelector(".personitem.clicked").id;
    let colid=document.querySelector(".transitem.clicked").id;
    const ind=colid.indexOf('t');
    colid=Number(colid.substring(ind+1))+3;
    let celldata=mydata[rowid][colid];
    celldata=celldata.split('(|)');
    dateeditinput2.value=celldata[0];
    gaveeditinput2.value=celldata[1];
    itip2.classList.remove("shownpanel");
    savefortransedit2.classList.add("active");
    transeditpanel.classList.add("shownpanel");
    transeditop2.click();
});

canceltransdelbut.addEventListener("click",function(){
    document.querySelector("#deletetranspanel>div").classList.remove("up");
    setTimeout(() => {
        deletetranspanel.classList.remove("extrashownpanel");
    }, 300);
});

confirmtransdelbut.addEventListener("click",function(){
    let rowid=document.querySelector(".personitem.clicked").id;
    rowid=Number(rowid.substring(10));
    let colid=document.querySelector(".transitem.clicked").id;
    const ind=colid.indexOf('t');
    colid=Number(colid.substring(ind+1));
    let bal;
    if(document.querySelector(".transitem.clicked").classList.contains("transactionitem"))
        {
            bal=document.querySelector(".transitem.clicked .balanceintransitem").innerText;
        }
        else
        {
            bal=document.querySelector(".transitem.clicked .balanceintransitem2").innerText;
        }
    this.classList.add("load");
    this.querySelector("span").innerText="Deleting";
    canceltransdelbut.style.pointerEvents="none";
    fetch(apiurl+`?deltrans=true&data=${JSON.stringify([rowid,colid,Number(bal)])}`)
    .then(res=>res.text())
    .then(()=>{
        document.querySelector("#deletetranspanel>div").classList.remove("up");
        deletetranspanel.classList.remove("extrashownpanel");
        if(document.querySelector(".transitem.clicked").classList.contains("transactionitem"))
        {
            itip.classList.remove("shownpanel");
        }
        else
        {
            itip2.classList.remove("shownpanel");
        }
        this.classList.remove("load");
        this.querySelector("span").innerText="Confirm";
        canceltransdelbut.style.pointerEvents="auto";
        loadData(rowid);
    
    })
    .catch(()=>{
        this.classList.remove("load");
        this.classList.add("error");
        this.querySelector("span").innerText="Error";
        setTimeout(() => {
        canceltransdelbut.style.pointerEvents="auto";
        this.classList.remove("error");
        this.querySelector("span").innerText="Confirm";
        }, 3000);
    });

});

transeditop1.addEventListener("click",function(){
    transeditop1.classList.add("selectedoption");
    transeditop2.classList.remove("selectedoption");
    transeditpanel1.classList.add("showntranseditpanel");
    transeditpanel2.classList.remove("showntranseditpanel");

});

transeditop2.addEventListener("click",function(){
    transeditop2.classList.add("selectedoption");
    transeditop1.classList.remove("selectedoption");
    transeditpanel2.classList.add("showntranseditpanel");
    transeditpanel1.classList.remove("showntranseditpanel");

});

lunchedit.addEventListener("click",function(){
    dinneredit.classList.remove("selectedshift");
    lunchedit.classList.add("selectedshift");
});

dinneredit.addEventListener("click",function(){
    dinneredit.classList.add("selectedshift");
    lunchedit.classList.remove("selectedshift");
});

function activateformforpanel1()
{
    if(venueeditinput.value.trim()==='')
    {
        savefortransedit.classList.remove("active");
        return;
    }
    if(dateeditinput.value.trim()==='')
    {
        savefortransedit.classList.remove("active");
        return;
    }
    if(totaleditinput.value.trim()==='' || totaleditinput.value.trim()==='-' || (totaleditinput.value.trim()[totaleditinput.value.trim().length-1])==='.' || (isNaN(totaleditinput.value.trim())))
    {
        savefortransedit.classList.remove("active");
        return;
    }

    if(gaveeditinput.value.trim()==='-' || (gaveeditinput.value.trim()[gaveeditinput.value.trim().length-1])==='.' || (isNaN(gaveeditinput.value.trim())))
    {
        savefortransedit.classList.remove("active");
        return;
    }
    savefortransedit.classList.add("active");
}
venueeditinput.addEventListener("input",activateformforpanel1);
dateeditinput.addEventListener("input",activateformforpanel1);
totaleditinput.addEventListener("input",activateformforpanel1);
gaveeditinput.addEventListener("input",activateformforpanel1);

cancelfortransedit.addEventListener("click",function(){
    
    venueeditinput.value="";
    dateeditinput.value="";
    lunchedit.classList.add("selectedshift");
    dinneredit.classList.remove("selectedshift");
    totaleditinput.value="";
    gaveeditinput.value="";
    savefortransedit.querySelector("span").innerText="Save";
    savefortransedit.classList.remove("active");
    savefortransedit.classList.remove("load");
    savefortransedit.classList.remove("error");
    transeditpanel.classList.remove("shownpanel");
    addtransactionpanel.classList.add("shownpanel");
    if(document.querySelector(".transitem.clicked"))
    document.querySelector(".transitem.clicked").classList.remove("clicked");
});

savefortransedit.addEventListener("click",function(){
    this.classList.add("load");
    this.querySelector("span").innerText="Saving";
    const Id=Number(document.querySelector(".personitem.clicked").id.substring(10));
    const venueval=venueeditinput.value.trim();
    const dateval=dateeditinput.value;
    const shiftval=document.querySelector("#shiftedit>div.selectedshift").id;
    const totalval=totaleditinput.value.trim();
    let gaveval;
    let persontotalval;
    if(gaveeditinput.value.trim())
    {
    gaveval=gaveeditinput.value.trim();
    persontotalval=totalval-gaveval;
    }
    else
    {
    gaveval='~';
    persontotalval=totalval;
    }
    const day=new Date();
    const date=day.getDate().toString().padStart(2, '0');
    const month=(day.getMonth()+1).toString().padStart(2, '0');
    const year=day.getFullYear().toString().padStart(4, '0');
    const datestr=`${date}.${month}.${year}`;
    const hr=day.getHours().toString().padStart(2, '0');
    const min=day.getMinutes().toString().padStart(2, '0');
    const sec=day.getSeconds().toString().padStart(2, '0');
    const timestr=`${hr}.${min}:${sec}`;
    const datetimestr=`${datestr} / ${timestr}`;
    const transstr=`${venueval}(|)${dateval}(|)${shiftval}(|)${totalval}(|)${gaveval}(|)${datetimestr}`;
    transeditpanel.style.pointerEvents="none";
    if(document.querySelector(".transitem.clicked"))
    {
    if(document.querySelector(".transitem.clicked .balanceintransitem"))
    {
        persontotalval=persontotalval-Number(document.querySelector(".transitem.clicked .balanceintransitem").textContent);
    }
    else
    {
        persontotalval=persontotalval-Number(document.querySelector(".transitem.clicked .balanceintransitem2").textContent);
    }
    let colid=document.querySelector(".transitem.clicked").id;
    const ind=colid.indexOf('t');
    colid=Number(colid.substring(ind+1));
    fetch(apiurl+`?transcng=true&data=${JSON.stringify([Id,colid,persontotalval,transstr])}`)
    .then(res=>res.text())
    .then(()=>{
        document.querySelector(".transitem.clicked").classList.remove("clicked");
        transeditpanel.style.pointerEvents="auto";
        cancelfortransedit2.click();
        loadData(Id);
    })
    .catch(()=>{
        //console.log(e);
        this.classList.remove("load");
        this.classList.add("error");
        this.querySelector("span").innerText="Error";
        setTimeout(() => {
            transeditpanel.style.pointerEvents="auto";
            this.classList.remove("error");
            this.querySelector("span").innerText="Save";
        }, 3000);
    });
    }
    else
    {
    fetch(apiurl+`?addtrans=true&data0=${Id}&data1=${persontotalval}&data2=${transstr}`)
    .then(res=>res.text())
    .then(()=>{
        transeditpanel.style.pointerEvents="auto";
        cancelfortransedit2.click();
        loadData(Id);
        // cancelfortransedit2.click(); this happens before load due to async request
    }).catch(()=>{
      //  console.log(e);
        this.classList.remove("load");
        this.classList.add("error");
        this.querySelector("span").innerText="Error";
        setTimeout(() => {
            transeditpanel.style.pointerEvents="auto";
            this.classList.remove("error");
            this.querySelector("span").innerText="Save";
        }, 3000);
    });
    }


});

function activateformforpanel2()
{
    if(dateeditinput2.value.trim()==='')
    {
        savefortransedit2.classList.remove("active");
        return;
    }
    if(gaveeditinput2.value.trim()==='' || gaveeditinput2.value.trim()==='-' || (gaveeditinput2.value.trim()[gaveeditinput2.value.trim().length-1])==='.' || (isNaN(gaveeditinput2.value.trim())))
    {
        savefortransedit2.classList.remove("active");
        return;
    }
    savefortransedit2.classList.add("active");
}
dateeditinput2.addEventListener("input",activateformforpanel2);
gaveeditinput2.addEventListener("input",activateformforpanel2);

cancelfortransedit2.addEventListener("click",function(){
    dateeditinput2.value="";
    gaveeditinput2.value="";
    transeditpanel.classList.remove("shownpanel");
    addtransactionpanel.classList.add("shownpanel");
    savefortransedit2.classList.remove("active");
    savefortransedit2.classList.remove("load");
    savefortransedit2.classList.remove("error");
    savefortransedit2.querySelector("span").innerText="Save";
    cancelfortransedit.click();
});

savefortransedit2.addEventListener("click",function(){
    this.classList.add("load");
    this.querySelector("span").innerText="Saving";
    const Id=Number(document.querySelector(".personitem.clicked").id.substring(10));
    const dateval=dateeditinput2.value;
    let persontotalval;
    let gaveval=gaveeditinput2.value.trim();
    persontotalval=-1*gaveval;
    const day=new Date();
    const date=day.getDate().toString().padStart(2, '0');
    const month=(day.getMonth()+1).toString().padStart(2, '0');
    const year=day.getFullYear().toString().padStart(4, '0');
    const datestr=`${date}.${month}.${year}`;
    const hr=day.getHours().toString().padStart(2, '0');
    const min=day.getMinutes().toString().padStart(2, '0');
    const sec=day.getSeconds().toString().padStart(2, '0');
    const timestr=`${hr}.${min}:${sec}`;
    const datetimestr=`${datestr} / ${timestr}`;
    const transstr=`${dateval}(|)${gaveval}(|)${datetimestr}`;
    transeditpanel.style.pointerEvents="none";

    if(document.querySelector(".transitem.clicked"))
    {
    if(document.querySelector(".transitem.clicked .balanceintransitem"))
    {
        persontotalval=persontotalval-Number(document.querySelector(".transitem.clicked .balanceintransitem").textContent);
    }
    else
    {
        persontotalval=persontotalval-Number(document.querySelector(".transitem.clicked .balanceintransitem2").textContent);
    }
    let colid=document.querySelector(".transitem.clicked").id;
    const ind=colid.indexOf('t');
    colid=Number(colid.substring(ind+1));
    fetch(apiurl+`?transcng=true&data=${JSON.stringify([Id,colid,persontotalval,transstr])}`)
    .then(res=>res.text())
    .then(()=>{
        document.querySelector(".transitem.clicked").classList.remove("clicked");
        transeditpanel.style.pointerEvents="auto";
        cancelfortransedit2.click();
        loadData(Id);
    })
    .catch(()=>{
        //console.log(e);
        this.classList.remove("load");
        this.classList.add("error");
        this.querySelector("span").innerText="Error";
        setTimeout(() => {
            transeditpanel.style.pointerEvents="auto";
            this.classList.remove("error");
            this.querySelector("span").innerText="Save";
        }, 3000);
    });
    }



    else
    {
    fetch(apiurl+`?addtrans=true&data0=${Id}&data1=${persontotalval}&data2=${transstr}`)
    .then(res=>res.text())
    .then(()=>{
        transeditpanel.style.pointerEvents="auto";
        cancelfortransedit2.click();
        loadData(Id);
    }).catch(()=>{
       // console.log(e);
        this.classList.remove("load");
        this.classList.add("error");
        this.querySelector("span").innerText="Error";
        setTimeout(() => {
            transeditpanel.style.pointerEvents="auto";
            this.classList.remove("error");
            this.querySelector("span").innerText="Save";
        }, 3000);
    });
    }
});

function loadData(option)
{
    reloadoption=option;
    if(option==0)
    {
        // preloader showing is not here because it will take time to execute
        fetch(apiurl)
        .then(res=>res.json())
        .then((data)=>{
            ogpassword=data[0];
            mydata=data[1];
            if(document.querySelector(".shownpersonsubpanel"))
            document.querySelector(".shownpersonsubpanel").classList.remove("shownpersonsubpanel");
            if(Object.keys(data[1]).length)
            {
                createPersonList();
                personlistcon.classList.add("shownpersonsubpanel");
            }
            else
            {
                nocustomercon.classList.add("shownpersonsubpanel");
            }
            preloaderpanel.classList.remove("shownpanel");
            enterpasswordpanel.classList.add("shownpanel");
            setTimeout(() => {
                pbs[0].focus();
            }, 1);
        }).catch(()=>{
            preloaderpanel.classList.remove("shownpanel");
            connectionerrorpanel.classList.add("shownpanel");
        });
    }
    else
    {
        if(document.querySelector(".shownpanel"))
        {
            document.querySelector(".shownpanel").classList.remove("shownpanel");
        }
        loaderpanel.classList.add("shownpanel");
        humansearch.value="";
        personlistcon.innerHTML="";
        fetch(apiurl)
        .then(res=>res.json())
        .then((data)=>{
            ogpassword=data[0];
            mydata=data[1];
            if(document.querySelector(".shownpersonsubpanel"))
            document.querySelector(".shownpersonsubpanel").classList.remove("shownpersonsubpanel");
            if(Object.keys(data[1]).length)
            {
            createPersonList();
            loaderpanel.classList.remove("shownpanel");
            homescreenpanel.classList.add("shownpanel");
            personlistcon.classList.add("shownpersonsubpanel");
            if(option>1)
                document.getElementById(`PersonItem${option}`).click();
            }
            else
            {
                loaderpanel.classList.remove("shownpanel");
                homescreenpanel.classList.add("shownpanel");
                nocustomercon.classList.add("shownpersonsubpanel");
            }
        })
        .catch(()=>{
           // console.error(error);//new thing learned
            loaderpanel.classList.remove("shownpanel");
            connectionerrorpanel.classList.add("shownpanel");
        });
    }
}
loadData(0);

function createPersonList()
{
    for(let i=0;i<Object.keys(mydata).length;i++)
    {
        const rowtemp=mydata[`PersonItem${i+2}`];
        const row = rowtemp.filter(str => str !== '');
        const pid=`PersonItem${row[0]}`;
        const pname=String(row[1]);
        const pbalance=Number(row[3]);

        const personitem=document.createElement("div");
        personitem.id=pid;
        personitem.className="personitem";

        const leftsidepersonitem=document.createElement("div");
        leftsidepersonitem.className="leftsidepersonitem";

        const personitemname=document.createElement("div");
        personitemname.className="personitemname";
        personitemname.innerText=pname;

        const personitemdate = document.createElement("div");
        personitemdate.className = 'personitemdate';
        let dateText;
        if(Number(row[2][0])===0)
        dateText= document.createTextNode(row[2][1]);
        else
        dateText = document.createTextNode(row[2][0]+row[2][1]);
        const supElement = document.createElement('sup');
        supElement.textContent = monthsup[(Number(row[2][1]))];
        const monthText = document.createTextNode(` ${monthname[Number(row[2][3]+row[2][4])-1]} ${row[2].slice(6)}`);
        personitemdate.appendChild(dateText);
        personitemdate.appendChild(supElement);
        personitemdate.appendChild(monthText);

        leftsidepersonitem.appendChild(personitemname);
        leftsidepersonitem.appendChild(personitemdate);

        const rightsidepersonitem=document.createElement("div");
        rightsidepersonitem.className="rightsidepersonitem";

        const balancepersonitem=document.createElement("div");
        balancepersonitem.className="balancepersonitem";
        balancepersonitem.innerText=pbalance;
        if(pbalance<=0)
        {
            balancepersonitem.classList.add("flipped");
        }
        else
        {
            balancepersonitem.classList.remove("flipped");
        }
        rightsidepersonitem.appendChild(balancepersonitem);

        personitem.appendChild(leftsidepersonitem);
        personitem.appendChild(rightsidepersonitem);

        personlistcon.insertBefore(personitem, personlistcon.firstChild);

        personitem.addEventListener("click",function(){
            if(document.querySelector(".personitem.clicked"))
            {
                document.querySelector(".personitem.clicked").classList.remove("clicked");
            }
            this.classList.add("clicked");
            infoitemname.innerText=pname;
            if(Number(row[2][0])===0)
            iids1.innerText=row[2][1];
            else
            iids1.innerText=row[2][0]+row[2][1];
            itemdatesup.innerText=monthsup[(Number(row[2][1]))];
            iids2.innerText=` ${monthname[Number(row[2][3]+row[2][4])-1]} ${row[2].slice(6)}`;
            balanceinfoitem.innerText=pbalance;
            if(pbalance<=0)
            {
                balanceinfoitem.classList.add("flipped");
            }
            else
            {
                balanceinfoitem.classList.remove("flipped");
            }
            homescreenpanel.classList.remove("shownpanel");
            addtransactionpanel.classList.add("shownpanel");
            //adding transaction 
            translist.innerHTML="";
            transsearch.value="";
            notransactionfound.classList.remove("showntransinfopanel");
            if(row.length>4)
            {
                actualtransactionlist.classList.add("showntransinfopanel");
                notransactionbox.classList.remove("showntransinfopanel");
                let net=0;
                for(let j=4;j<row.length;j++)
                {
                    const transarr=row[j].split("(|)");
                    if(transarr.length===6)
                    {
                        const venue=transarr[0];
                        const shift=(transarr[2][0]==='d')?'Dinner':'Lunch';
                        const [yyyy,mm,dd]=transarr[1].split('-');
                        const date=`${dd}.${mm}.${yyyy}`;
                        const gave=(transarr[4]==='~')?0:transarr[4];
                        const total=transarr[3];
                        const balance=total-gave;
                        net+=balance;

                        const transactionItem = document.createElement("div");
                        transactionItem.classList.add("transactionitem", "transitem");
                        transactionItem.id=`p${i+2}t${j-3}`;
                
                        const leftInTransItem = document.createElement("div");
                        leftInTransItem.classList.add("leftintransitem");
                
                        const venueInTransItem = document.createElement("div");
                        venueInTransItem.classList.add("venueintransitem");
                        venueInTransItem.textContent = venue;
                        leftInTransItem.appendChild(venueInTransItem);
                
                        const sftNDateInTransItemCon = document.createElement("div");
                        sftNDateInTransItemCon.classList.add("sftndateintransitemcon");
                
                        const sftInTransItem = document.createElement("div");
                        sftInTransItem.classList.add("sftintransitem");
                        sftInTransItem.textContent = shift;
                        sftNDateInTransItemCon.appendChild(sftInTransItem);
                
                        const dateInTransItem = document.createElement("div");
                        dateInTransItem.classList.add("dateintransitem");
                        dateInTransItem.textContent = date;
                        sftNDateInTransItemCon.appendChild(dateInTransItem);
                
                        leftInTransItem.appendChild(sftNDateInTransItemCon);
                
                        const datetimeInTransItem = document.createElement("div");
                        datetimeInTransItem.classList.add("datetimeintransitem");
                        datetimeInTransItem.innerHTML = `${transarr[5].substring(0,2)}<sup>${monthsup[Number(transarr[5][1])]}</sup> ${monthname[Number(transarr[5].substring(3,5))-1]} ${transarr[5].substring(6)}`;
                        leftInTransItem.appendChild(datetimeInTransItem);
    
                        transactionItem.appendChild(leftInTransItem);
               
                        const rightInTransItem = document.createElement("div");
                        rightInTransItem.classList.add("rightintransitem");
                
                        const gaveInTransItem = document.createElement("div");
                        gaveInTransItem.classList.add("gaveintransitem");
                        gaveInTransItem.textContent = gave;
                        rightInTransItem.appendChild(gaveInTransItem);
                
                        const balanceInTransItem = document.createElement("div");
                        balanceInTransItem.classList.add("balanceintransitem");
                        balanceInTransItem.textContent = balance;
                        rightInTransItem.appendChild(balanceInTransItem);
           
                        transactionItem.appendChild(rightInTransItem);
                        
                        translist.insertBefore(transactionItem, translist.firstChild);

                        //event listener

                        transactionItem.addEventListener("click",function(){
                            if(document.querySelector(".transitem.clicked"))
                            {
                                document.querySelector(".transitem.clicked").classList.remove("clicked");
                            }
                            this.classList.add("clicked");
                            itipname.textContent=infoitemname.textContent;
                            itipvenue.textContent=venue;
                            itipshift.textContent=shift;
                            itipdate.innerHTML=`${Number(dd)}<sup>${monthsup[Number(dd[1])]}</sup> ${monthname[Number(mm)-1]} ${yyyy}`;
                            itiptotal.textContent=(Number(total)<0)?`-₹${-total}`:`₹${total}`;
                            itipgave.textContent=(Number(gave)<0)?`-₹${-gave}`:`₹${gave}`;
                            addtransactionpanel.classList.remove("shownpanel");
                            itip.classList.add("shownpanel");
                        });
                    }
                    else
                    {
                        const [yyyy,mm,dd]=transarr[0].split('-');
                        const date=`${dd}.${mm}.${yyyy}`;
                        const gave=transarr[1];
                        const balance=-1*gave;
                        net+=balance;

                        const transactionItem2 = document.createElement("div");
                        transactionItem2.classList.add("transactionitem2","transitem");
                        transactionItem2.id=`p${i+2}t${j-3}`;

                        const leftInTransItem2 = document.createElement("div");
                        leftInTransItem2.classList.add("leftintransitem2");

                        const dateInTransItem2 = document.createElement("div");
                        dateInTransItem2.classList.add("dateintransitem2");
                        dateInTransItem2.textContent = date;
                        leftInTransItem2.appendChild(dateInTransItem2);

                        const datetimeInTransItem2 = document.createElement("div");
                        datetimeInTransItem2.classList.add("datetimeintransitem2");
                        datetimeInTransItem2.innerHTML = `${Number(transarr[2].substring(0,2))}<sup>${monthsup[Number(transarr[2][1])]}</sup> ${monthname[Number(transarr[2].substring(3,5))-1]} ${transarr[2].substring(6)}`;
                        leftInTransItem2.appendChild(datetimeInTransItem2);

                        transactionItem2.appendChild(leftInTransItem2);

                        const rightInTransItem2 = document.createElement("div");
                        rightInTransItem2.classList.add("rightintransitem2");

                        const gaveInTransItem2 = document.createElement("div");
                        gaveInTransItem2.classList.add("gaveintransitem2");
                        gaveInTransItem2.textContent = gave;
                        rightInTransItem2.appendChild(gaveInTransItem2);

                        const balanceInTransItem2 = document.createElement("div");
                        balanceInTransItem2.classList.add("balanceintransitem2");
                        balanceInTransItem2.textContent = balance;
                        rightInTransItem2.appendChild(balanceInTransItem2);

                        transactionItem2.appendChild(rightInTransItem2);

                        translist.insertBefore(transactionItem2, translist.firstChild);

                        //event listener
                        transactionItem2.addEventListener("click",function(){
                            if(document.querySelector(".transitem.clicked"))
                            {
                                document.querySelector(".transitem.clicked").classList.remove("clicked");
                            }
                            this.classList.add("clicked");
                            itipname2.textContent=infoitemname.textContent;
                            itipdate2.innerHTML=`${Number(dd)}<sup>${monthsup[Number(dd[1])]}</sup> ${monthname[Number(mm)-1]} ${yyyy}`;
                            itipgave2.textContent=(Number(gave)<0)?`-₹${-gave}`:`₹${gave}`;
                            addtransactionpanel.classList.remove("shownpanel");
                            itip2.classList.add("shownpanel");
                        });

                    }
                    if(net==0)
                    {
                        const zeroBelowItCon = document.createElement("div");
                        zeroBelowItCon.classList.add("zerobelowitcon","transitem");

                        const zeroBelowItLine = document.createElement("div");
                        zeroBelowItLine.classList.add("zerobelowitline");
                        zeroBelowItCon.appendChild(zeroBelowItLine);

                        const zeroBelowItContent = document.createElement("div");
                        zeroBelowItContent.classList.add("zerobelowitcontent");
                        zeroBelowItContent.textContent = '0000';
                        
                        zeroBelowItCon.appendChild(zeroBelowItContent);

                        translist.insertBefore(zeroBelowItCon, translist.firstChild);
                    }
                }
            }
            else
            {
                actualtransactionlist.classList.remove("showntransinfopanel");
                notransactionbox.classList.add("showntransinfopanel");
            }

        });
    }
}