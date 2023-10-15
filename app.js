const slides = document.getElementsByClassName('carousel-item');
const dots = document.querySelectorAll('.dot');
// console.log(slides);
// console.log(dots);

let currslide = 1;

document.getElementById('prev').addEventListener('click',function(){
    // console.log('i am prev');

    // console.log(currslide -=1);
    // console.log(currslide--);
    carousel(currslide -=1);
});


document.getElementById('next').addEventListener('click',function(){
    // console.log('i am next');

    // console.log(currslide +=1);
    // console.log(currslide++);
    carousel(currslide +=1);
});

carousel(currslide); //စစချင်းမှာ ပထမ slide တစ်ခုကိုပေါ်စေချင်လို့

function carousel(slidenum){
    // console.log(slidenum);

    var x,y;
    // hide all slides
    for(x=0;x<slides.length;x++){
        slides[x].style.display = "none";
    }


    // hide all dots
    for(y=0;y<dots.length;y++){
        // dots[y].classname = "dot";
        // dots[y].classname = dots[y].classname.replace("active","");
        dots[y].classList.remove('active');
    }
    
    

    // currslide 1 to 3 & 3 to 1

    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = slides.length;
    }

    // console.log(currslide);

    slides[currslide-1].style.display = "block";
    // dots[currslide-1].className ="dot active";
    dots[currslide-1].className +=" active";
    // dots[currslide-1].classList.add('active');

};


for(var q = 0; q < dots.length; q++){
    dots[q].addEventListener("click",function(){
        // console.log(this.getAttribute('data-bs-slide-to'));
        currslide = this.getAttribute('data-bs-slide-to');
        carousel(currslide);

    });
}





// slides          0                1                   2
// currslide       1-1=0            2-1=1               3-1=2




// 6CL
// 13CU