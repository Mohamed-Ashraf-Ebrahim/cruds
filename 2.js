let title=document.getElementById('title')
let price=document.getElementById('price')
let taxes=document.getElementById('taxes')
let ads=document.getElementById('ads')
let discount=document.getElementById('discount')
let total=document.getElementById('total')
let count=document.getElementById('count')
let catogry=document.getElementById('catogry')
let submit=document.getElementById('submit')
let mood='create'
let tmp;
//get total
function gettotal(){
    if(price.value>0)
    {
        let result=+price.value+ +taxes.value+ +ads.value- +discount.value
        total.style.background='green'
        total.innerHTML=result
    }else
    {
           total.style.background='red'
           total.innerHTML=''
    }
}
//creat product
let pro;
if(localStorage.product!=null)
{pro=JSON.parse(localStorage.product) }
else{
 pro=[];
}
submit.onclick=function(){
    let newpro={
        title:title.value,
       taxes:taxes.value,
       price:price.value,
      ads:ads.value,
      discount:discount.value,
      total:total.innerHTML,
      count:count.value,
      catogry:catogry.value
}
if(title.value!=''&&price.value!=''&&catogry.value&&count.value<100){
    if(mood==='create'){
    if(count.value>1){
        for(let x=0;x<count.value;x++)
            pro.push(newpro)
    }else
    {  pro.push(newpro)}
    }else{
        pro[tmp]=newpro;
    }
    cleardata()
}else{
   
  alert('please enter correct values') 
}
show()
}
  function cleardata(){
    localStorage.setItem('product',JSON.stringify(pro))
    //console.log(pro)
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value=''
    catogry.value='';
    show()
}

//read
function show(){
    gettotal()
let table='';
for(  let i=0;i < pro.length;i++)
{
    table+=`
    </tr>
			<td>${i+1}</td>
			<td>${pro[i].title}</td>
			<td>${pro[i].price}</td>
			<td>${pro[i].taxes}</td>
			<td>${pro[i].ads}</td>
			<td>${pro[i].discount}</td>
			<td>${pro[i].total}</td>
			<td>${pro[i].catogry}</td>
			<td><button  onclick="Updat(${i})"id="Updat">update</button></td>
			<td><button  onclick="delet(${i})"id="delete">delete</button></td>

	</tr>`
}
document.getElementById('tbody').innerHTML=table
}
//delet
function delet(i){
    pro.splice(i,1)
    localStorage.product=JSON.stringify(pro)
    show()
}
let btndel=document.getElementById('deletall')

    function deletALL(){
        localStorage.clear()
        pro.splice(0)
        show()
    }
show()

//count
//updat
function Updat(i){

    title.value=pro[i].title
   
    price.value=pro[i].price;
    taxes.value=pro[i].taxes;
    ads.value=pro[i].ads;
    discount.value=pro[i].discount;
    gettotal()
    catogry.value=pro[i].catogry
    count.style.display='none'
    submit.innerHTML='update'
    mood='update'
    tmp=i;
    scroll({
        top:0,
        behavior:'smooth'
    })
}

let bb=document.getElementById('scroll')
onscroll=function(){
    if(scrollY >400){
        bb.style.display='block'
    }
    else{
        bb.style.display='none'   
    }
    }
    bb.onclick=function(){
        scroll({
            left:0,
            top:0,
            behavior:"smooth"
        });   
    }
    let moodsearch="title";
    function searchmood(id)
    {
        let search=document.getElementById('search5')
        
        //console.log(search)
        if(id=='searchtitle'){
           
           
             moodsearch="title";
    }
    else{
        moodsearch="catogary";
       
    }
   // console.log(moodsearch)
    //console.log(search)
    search.ariaPlaceholder='search by'+moodsearch;
    search.focus()
    search.value=''
    show()
}
function searchdata(value){
    //console.log(value)
    let table='';
    if(moodsearch=='title')
        {
    for(let i=0;i<pro.length;i++){
    if(pro[i].title.includes(value)){
        //console.log(i)


    table+=`
    </tr>
			<td>${i}</td>
			<td>${pro[i].title}</td>
			<td>${pro[i].price}</td>
			<td>${pro[i].taxes}</td>
			<td>${pro[i].ads}</td>
			<td>${pro[i].discount}</td>
			<td>${pro[i].total}</td>
			<td>${pro[i].catogry}</td>
			<td><button  onclick="Updat(${i})"id="Updat">update</button></td>
			<td><button  onclick="delet(${i})"id="delete">delete</button></td>

	</tr>`;
}
    }















    }else{
        for(let i=0;i<pro.length;i++){
            if(pro[i].catogry.includes(value)){
                //console.log(i)
        
        
            table+=`
            </tr>
                    <td>${i}</td>
                    <td>${pro[i].title}</td>
                    <td>${pro[i].price}</td>
                    <td>${pro[i].taxes}</td>
                    <td>${pro[i].ads}</td>
                    <td>${pro[i].discount}</td>
                    <td>${pro[i].total}</td>
                    <td>${pro[i].catogry}</td>
                    <td><button  onclick="Updat(${i})"id="Updat">update</button></td>
                    <td><button  onclick="delet(${i})"id="delete">delete</button></td>
        
            </tr>`;
        }
            }    
    }
    document.getElementById('tbody').innerHTML=table
}
let mee=document.getElementById('mee')
function my(){
    if(mee.style.display=='block'){
mee.style.display='none'
    }else{
        mee.style.display='block'
    }
}