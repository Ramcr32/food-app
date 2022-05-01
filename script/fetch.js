let searchMeal =async (api)=>{


    try{
        let res= await fetch(
            api);

        let data=await res.json();
        // console.log(data)
        return data.meals
    }catch(err){
        console.log("errbh:", err)
    }
}

let append =(data,container)=>{
    data.forEach(({strInstructions,strMealThumb,strMeal,strTags})=>{
        let div=document.createElement("div")
        let img=document.createElement("img");
        let p=document.createElement("p")
        let tag=document.createElement("h3")
        let name=document.createElement("h2")

        name.innerText=`name: ${strMeal}`;
        tag.innerText=`type: ${strTags}`;
        img.src=strMealThumb;
        p.innerText=`receipe: ${strInstructions}`;
        div.append(name,tag,img,p)
        container.append(div)
    })
}

function debounce(fun,delay) {
    let id;
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(()=>{
        fun();
    },delay)
}


export {searchMeal ,append,debounce}