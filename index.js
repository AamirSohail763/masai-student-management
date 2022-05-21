var form = document.getElementById("form")
form.addEventListener("submit",saveData)

function Students(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = `Unit:${u}`;
    this.image = i;
    this.batch = `FT-WEB${b}`;
}


function saveData(){
    event.preventDefault();
    let form = document.getElementById("form")
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let img = form.image.value;
    let batch = form.batch.value;

    let s1 = new Students(name,course,unit,img,batch)
   // console.log(s1)
    let dataArr = JSON.parse(localStorage.getItem("studentData")) || [];

    dataArr.push(s1)

    localStorage.setItem("studentData",JSON.stringify(dataArr))
    window.location.reload();
}
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