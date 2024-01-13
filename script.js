/* let slike=document.querySelectorAll('.slider-images')
let pozils=document.querySelectorAll('.slider-images img')
let pictures=Array.from(document.querySelectorAll('.slider-images img'))
const btnleft=document.getElementById('left-btn')
const btnRight=document.getElementById('right-btn') 


let curentPictures=0

/////////////////////////////////////////////////////////////////
btnleft.addEventListener('click', function(){

   
})
//////////////////////////////////////////////////////////////////////////
btnRight.addEventListener('click', function(){
   
    curentPictures=0
    pictures.forEach(function(pictur){

    if (curentPictures===pictures.length) {
        curentPictures=0
        pictur++
    }

})
}) */

/////////////////////////////////
///////////////////////////////
let pictures = Array.from(document.querySelectorAll('.slider-images img'));
let trenutnaSl = 0;

const btnLeft=document.getElementById('left-btn')
const btnRight=document.getElementById('right-btn') 

btnLeft.addEventListener('click', function() {
  trenutnaSl--;
  if (trenutnaSl < 0) {
    trenutnaSl = pictures.length - 1;
  }
  updateSlider();
});

btnRight.addEventListener('click', function() {
  trenutnaSl++;
  if (trenutnaSl >= pictures.length) {
    trenutnaSl = 0;
  }
  updateSlider();
});



function updateSlider() {
  pictures.forEach(function(picture) {
    picture.style.display = 'none';
  });
  pictures[trenutnaSl].style.display = 'block';
}

updateSlider();





////////////////////////////////////////////////////////////
let categori=document.querySelectorAll('.portfolio-categories button')
let portfolio= document.querySelectorAll('.portfolio-single-item ')



/* categori.forEach(function(dugme){
dugme.addEventListener('click', function(){

    portfolio.forEach(function(port){
        port.style.display='none'
        })
if (dugme ==='sve') {
    portfolio.forEach(function(port){
        port.style.display='block'
        })
}
    
})
}) */

categori.forEach(function(dugme){
    dugme.addEventListener('click', function(){
      // Get the value of the data-category attribute of the clicked button
      let category = this.getAttribute('data-category');
  
      // Hide all portfolio items
      portfolio.forEach(function(port){
        port.style.display = 'none';
      });
  
      // Show only the portfolio items that have the same data-category value as the clicked button
      let filteredPortfolio = document.querySelectorAll(`.portfolio-single-item[data-category="${category}"]`);
      filteredPortfolio.forEach(function(port){
        port.style.display = 'block';
      });
      
      }
    )
    });
  
  