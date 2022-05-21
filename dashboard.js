//counting the number of students in each batch
function counter(){
    let dataArr = JSON.parse(localStorage.getItem("studentData")) || [];

    let obj = {};
    for(let i=0;i<dataArr.length;i++)
    {
        if(!obj[dataArr[i].batch]){
            obj[dataArr[i].batch]=0;
        }
    }
    
    for(let i=0;i<dataArr.length;i++)
    {
        obj[dataArr[i].batch]++;
    }
    //console.log(obj)
    
    var navbar = document.getElementById("navbar")
    
    for(var key in obj){
        let p = document.createElement("p")
        p.innerText= key+" : "+obj[key]+" | "
        navbar.append(p)
    }
}

counter()


//display of cards
let dataArr = JSON.parse(localStorage.getItem("studentData")) || [];

function display(data){
    let container = document.getElementById("container")
    container.innerHTML = null;
    data.forEach(function(el,index){
        
        let card = document.createElement("div")
        card.setAttribute("class","card")

        let image = document.createElement("img")
        image.src = el.image

        let name = document.createElement("h2")
        name.innerText = el.name

        let unit = document.createElement("p")
        unit.innerText= el.unit

        let course = document.createElement("p")
        course.innerText= el.course

        let batch = document.createElement("p")
        batch.innerText= el.batch

        let btn = document.createElement("button")
        btn.innerText= "Remove"
        btn.addEventListener("click",function(){
            removeCard(index)
        });

        card.append(image,name,unit,course,batch,btn)
        container.append(card)
    })
}
display(dataArr)

//removing a card from DOM and Local Storage and storing it with trash key in Local Storage
function removeCard(index){
    let dataArr = JSON.parse(localStorage.getItem("studentData")) || [];

    let newData = dataArr.filter(function(el,i){
        if(i=== index){
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
            return i !== index;
        }
    });
    localStorage.setItem("studentData",JSON.stringify(newData));
    window.location.reload();
    display(newData)

}