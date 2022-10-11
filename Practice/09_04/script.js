/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */


const gridCon = document.querySelector(".grid"); 

gridCon.addEventListener('mouseenter', ()=>{
  gridCon.style.outline = ' 6px solid red';
});

gridCon.addEventListener('mouseleave',()=> {
    gridCon.style.outline = ""; 
});

const randColor =()=>{ return Math.floor(Math.random()* 16777215).toString(16)}; 

const gridCells = document.querySelectorAll('.cell'); 
gridCells.forEach(cell=>{
    cell.addEventListener('mouseenter', (e)=>{
       e.defaultPrevented; 
       cell.style.outline = ' 2px solid red'; 
    }); 

    cell.addEventListener('mouseleave', ()=>{
        cell.style.outline = ""; 
    });

cell.addEventListener('click',()=>{
   if(cell.style.backgroundColor){

    cell.style.backgroundColor ="";
 }else{
    cell.style.backgroundColor =`#${randColor()}`; 
 }
});

});


const body = document.body; 
body.addEventListener('keydown', (e)=>{
   console.log(e.code); 
   if(e.code == 'KeyD'){
    body.style.backgroundColour = "" ? (body.style.accentColor = `#${randColor()}`)
    : (body.style.background = `#${randColor()}`)
   }
})
