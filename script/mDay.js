import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


import { searchMeal, append,debounce } from "./fetch.js"
let search=()=>{
    debounce(main,3000)
}
let api=`https://www.themealdb.com/api/json/v1/1/search.php?s=`

searchMeal(api).then((res)=>{
    console.log(res);

    if(res==undefined){
        return false;
    }
    container.innerHTML=null;
    append(res,container)

})
document.getElementById("query").addEventListener("input",search)
function main(){
            var value=document.getElementById("query").value
            api=`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`

            let container=document.getElementById("container");
            container.innerHTML=null;

            searchMeal(api).then((res)=>{
                console.log(res);

                if(res==undefined){
                    return false;
                }
                container.innerHTML=null;
                append(res,container)

            });
}

