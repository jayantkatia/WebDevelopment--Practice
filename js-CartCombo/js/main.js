function doFill(ref) {
    let index = ref.selectedIndex;
    let refList = document.getElementById("ItemList");
    let refPrice = document.getElementById("ItemPrice");
    refList.innerHTML = "";
    refPrice.innerHTML = "";
    var arr, arrPrice;
    if (index == 0) {
        arr = ["None"];
        arrPrice = ["None"];
    }
    else if (index == 1) {
        arr = ["Asus M2 Max", "Nokia 8.1", "iPhone XR", "Samsung S20"];
        arrPrice = [8500, 14000, 45000, 98000];

    } else {
        arr = ["Hp da1058tu", "Hp Pavilion", "Asus FX gaming", "Asus vivobook"];
        arrPrice = [48000, 64000, 55000, 40000];
    }
    for (let i = 0; i < arr.length; i++) {
        var optList = new Option(arr[i], arr[i]);  //text , value
        refList.add(optList);
        var optPrice = new Option(arrPrice[i], arrPrice[i]);  //text , value
        refPrice.add(optPrice);
    }
}
function addToCart(ref){
    var index=ref.selectedIndex;
    var itemName=ref[index].text;
    var itemPrice=document.getElementById("ItemPrice")[index].value;
    
    var opt=new Option(itemName,itemName);
    var optPrice=new Option(itemPrice,itemPrice);

    var destName=document.getElementById("CartItems");
    var destPrice=document.getElementById("CartPrice");
    if(destName[0].innerHTML==="None"){
        destPrice.innerHTML="";
        destName.innerHTML="";
    }
    destName.add(opt);
    destPrice.add(optPrice);
}
function doBill(){
    var cartPrice=document.getElementById("CartPrice");
    var total=0;
    for(let i=0;i<cartPrice.length;i++){
        total+=Number(cartPrice[i].value);
    }
    document.getElementById("display").innerHTML=total;
}