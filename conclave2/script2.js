
var countDownDate = new Date("Sept 30, 2019 1:50:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var total = days+hours+minutes+seconds;
  document.getElementById("hours").innerHTML =  hours + "h ";
  document.getElementById("mins").innerHTML = minutes + "m"+ seconds + "s";

  if(hours==0){
    document.getElementById("hours").innerHTML= minutes + "m" +  seconds +"s";
    document.getElementById("mins").innerHTML= "";
    
  }
  if (minutes==0){
      document.getElementById("hours").innerHTML=seconds + "s";
      document.getElementById('secs').innerHTML= "";
      document.getElementById('mins').innerHTML= "";
  }
  if (total==0) {
    //clearInterval(x);
    document.getElementById("hours").innerHTML = "NOW";
  }
},1000);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("tiles");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/*
var data = [
    {
        name: 'RADHIKA APTE',
        desc: 'Indian Theatre actress worked in Badlapur and Sacred Games.'
    },
    {
        name: 'SANDEEP SINGH',
        desc: 'Ex-captain of the Indian national hockey team.He received Arjuna Award in 2010.'
    },
    {
        name: 'ASHWIN SANGHI',
        desc: "Indian writer in the fiction - Thriller genre of best selling titles like The Rozobal line and it's seccessors."
    },
    {
        name: 'JITENDER KUMAR',
        desc: 'Indian actor famous for his roles in comedy sketches of ’The Viral Fever’.'
    },
    {
        name: 'PRAJAKTA KOHLI',
        desc: ' Indian YouTube personality who makes comedy videos popularly known by her YouTube name "MostlySane".'
    },
    {
        name:'JATIN SARNA',
        desc:'Indian film and theatre actor,as well as stage director, best known for his work in Sacred Games.'
    },
    {
        name:'GIRISH NARAYANDASS',
        desc:'Writer and director, known for AIB:Honest Engineering Campus Placements (2017) and On Air with AIB (2015)'
    },
    {
        name:'SAGARIKA GHOSE',
        desc:'A renowed journalist, news anchor and author.She was a deputy editor and prime time anchor on news channel CNN-IBN.'
    },
    {
        name:'ABHISHEK UPMANYU',
        desc:'A fast paced,very well renowed standup comedian.'
    },
]

assign();

function assign() {
    let body = document.getElementsByClassName('content')
    for (let i = 0; i < body.length; i++) {
        let person = data[i];
        let content = 
        `
        <div class="logo"></div>
        <div class="name"><h1>${person.name}</h1></div>
        <div class="speaker-info">${person.desc}</div>
        `
        body[i].innerHTML += content;
    }
}

*/
