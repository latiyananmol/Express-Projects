
const cityName=document.getElementById("cityName");
const submitBtn=document.getElementById("submitBtn");
const city_name=document.getElementById("city_name");
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp");
const data_hide=document.querySelector(".middle_layer");



const getInfo= async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;


    if(cityVal===""){
        city_name.innerText="Please Enter Name Befor You Search";
        data_hide.classList.add("data_hide");

    }
    else{
      
        try{
          
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=076368ba303a8d5040a2817c5d83435e`;
        const response=await fetch(url);
        const data= await response.json();
        // console.log(data);
        const arrData=[data];
        console.log("qw",arrData[0].main.temp);
        console.log("op",arrData[0].weather[0].main);
        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText=`${arrData[0].main.temp} k`;
  
        // temp_status.innerText=arrData[0].weather[0].main;
        let tempMood=arrData[0].weather[0].main;
        if(tempMood==="Clear"){
            temp_status.innerHTML=`<i class='fas fa-sun' style='color: #eccc68;'></i>`;

        }else if(tempMood==="Clouds"){
            temp_status.innerHTML=`<i class='fas fa-cloud' style='color: #f1f2f6;'></i>`;
        }else if(tempMood==="Rain"){
            temp_status.innerHTML=`<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>`;
        }else{
            temp_status.innerHTML=`<i class='fas fa-cloud' style='color: #eccc68;'></i>`;
        }


        data_hide.classList.remove("data_hide");



        }catch{
            city_name.innerText="Please Enter Name Properly  Before You Search";
            data_hide.classList.add("data_hide");
                     
        }
    }


}
submitBtn.addEventListener("click",getInfo);
