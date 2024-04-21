var c=document.getElementById('city');
var temp3=document.getElementsByClassName('list-group-item');
var error=document.getElementsByClassName('alert');
var loader=document.getElementsByClassName('loader');
c.addEventListener('input',function(){
   // console.log("something is happening");
    if(c.value.length==0) {
        temp3[0].style.display='none';
        temp3[1].style.display='none';
        temp3[2].style.display='none';
       error[0].style.display='none';
    }
    else if(c.value.length!=0) error[0].style.display='none';
})
function hit(){
loader[0].style.display='block';
console.log(c.value);
response(c.value);
}
 async function response(cityName){
    console.log("city name is: ",cityName);
//    console.log('https://api.weatherapi.com/v1/current.json?key=559331bb05c64d3abed115334241804&q='+cityName)
   
    const response=await fetch('https://api.weatherapi.com/v1/current.json?key=559331bb05c64d3abed115334241804&q='+cityName);
    if(response.ok) {
        loader[0].style.display='none';
    console.log(response.status);
    const res=await response.json();
    console.log(res);
    console.log("temperature is",res.current.temp_c);
    // if(){
    //     alert("Location not found");
    // }else{
        
    temp3[0].innerHTML=res.current.temp_c;
    temp3[1].innerHTML=res.current.feelslike_c;
    temp3[2].innerHTML=res.current.humidity;
    temp3[0].style.display='block';
    temp3[1].style.display='block';
    temp3[2].style.display='block';
    }else{
        loader[0].style.display='none';
       error[0].style.display='block';
    }
}
