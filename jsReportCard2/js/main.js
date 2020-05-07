function doCalc(task){
    let mCpp=Number(document.frm.marksCpp.value);
    let mJava=Number(document.frm.marksJava.value);
    let mWeb=Number(document.frm.marksWeb.value);
    let mApp=Number(document.frm.marksApp.value);
    let mIoT=Number(document.frm.marksIot.value);
    let total=mCpp+mIoT+mJava+mWeb+mApp;
    if(total>500)
        {
            alert("-_-  Shi Marks bharo !!");
            doClear();
        }
    else if(task=="sum")
    document.frm.total.value=total;
    else if(task=="grade"){
        let grade;
        
        if(total>400)
        grade= "A";
        else if(total>300)
        grade= "B";
        else if(total>200)
        grade= "C";
        else
        grade= "D";

        document.frm.grade.value=grade;
    }
    else{
        document.frm.perc.value=total*0.2;
    }
}
function doClear(){
    document.frm.marksCpp.value="";
    document.frm.marksJava.value="";
    document.frm.marksApp.value="";
    document.frm.marksWeb.value="";
    document.frm.marksIot.value="";
    document.frm.name.value="";
    document.frm.rollNo.value="";
    document.frm.perc.value="";
    document.frm.total.value="";
    document.frm.grade.value="";
}