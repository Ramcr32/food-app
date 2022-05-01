import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

const api=`https://www.themealdb.com/api/json/v1/1/random.php`;
searchMeal(api).then((res)=>{
    console.log(res);

    if(res==undefined){
        return false;
    }
    container.innerHTML=null;
    append(res,container)

});

import { searchMeal, append,debounce } from "./fetch.js"
let search=()=>{
    debounce(main,3000)
}


document.getElementById("query").addEventListener("input",search)
function main(){
            var value=document.getElementById("query").value
            var api=`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`

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

