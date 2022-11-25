
let arr=["1.jpg","2.jpg","3.jpg","4.jpg"]
let i=0;
document.body.innerHTML = ` <div class="headingcontainer">
                               <h1>BREWERY</h1>
                               <h4>where your relief can be found</h4>
                            </div>
                            <div class="maincontainer" id="maincontainer">

                            </div>`


const getBreweryData=async()=>{
    try{ 
       
         const response=await fetch("https://api.openbrewerydb.org/breweries")
         const data =await response.json();
         maincontainer.innerHTML="";
         
        //  data.forEach(object => {
              data.forEach(  displayBreweryData)
        //    displayBreweryData(object)
    
//   });

    }catch(err){
        console.log(err)
    }

}
getBreweryData()
const displayBreweryData = (obj,index) =>{
    let i = index%4
    maincontainer.innerHTML +=  ` <marquee><div class="container">
    <h3 class="test" ><span>${obj.name}</span></h3>
    <img class="icon" src="${arr[i]}" width="200px" height="200px">
    <p class="paratest"><span>State:${obj.state}</span></p>
    <p class="paratest"><span>City:${obj.city}</span></p>
    <p class="paratest"><span>Street:${obj.street}</span></p>
    </div></marquee>`

}









