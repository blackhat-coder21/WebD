let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
        logoSpan.forEach((span, idx)=>{
            setTimeout(() => {
                span.classList.add('active');
            }, (idx+1)*400);
        });

        setTimeout(() => {
            logoSpan.forEach((span,idx)=>{
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');  
                }, (idx+1)*50)
            })   
        },2000);

        setTimeout(() => {
            intro.style.top = '-100vh';  
        }, 2300)
    })
})


window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY)
})


ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});


const typed = new Typed('.multiple-text', {
  strings: ['Interview Guides','Mock Interviews','Resume and Cover Letter Support','Company-specific Insights','Video Tutorials',
    'Interview Success Stories','Interview Preparation Tools','Community Forum'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

const typed1 = new Typed('.multiple-text1', {
    strings: ['Full Stack Developer','Graphics Designer','App Developer', 'Frontend Developer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });


// Function to update the progress bar based on completion rate
function updateProgressBar() {
    const checkboxes = document.querySelectorAll('.bg-color-checkbox');
    const totalQuestions = checkboxes.length;
    let completedQuestions = 0;
  
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        completedQuestions++;
      }
    });
  
    const completionRate = (completedQuestions / totalQuestions) * 100;
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${completionRate}%`;
  }
  
  // Update the progress bar on page load and when checkboxes are changed
  document.addEventListener('DOMContentLoaded', function () {
    updateProgressBar();
  });
  
  const checkboxes = document.querySelectorAll('.bg-color-checkbox');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      updateProgressBar();
      storeMarkedQuestions();
      const questionDiv = this.parentElement;
      questionDiv.style.backgroundColor = this.checked ? 'green' : 'initial';
    });
  });
  