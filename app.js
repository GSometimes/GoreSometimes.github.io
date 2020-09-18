function validate(){
  let name = document.getElementById("name").value;
  let subject = document.getElementById("subject").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  let text;
  if(name.length < 2){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 5){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length >= 140){
    text = "Please Enter Less Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

document.querySelector("form").reset();



$('.navbar-collapse a').click(function(){
  $(".navbar-collapse").collapse('hide');
});

let sheetUrl = "https://docs.google.com/spreadsheets/d/15nKaaCMX-SV-i9JJJ4ammvc5zy0MbeEB5Zwkl8y0P7Y";
  
let sheetID = "15nKaaCMX-SV-i9JJJ4ammvc5zy0MbeEB5Zwkl8y0P7Y"

let sheetAsJSON = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`


$.ajax({ url: sheetAsJSON })
    .then((data) => {
    console.log("data", data);   
    
    const projects = data.feed.entry.map((project) => {
      return {
        title: project.gsx$title.$t,
        image: project.gsx$image.$t,
        url: project.gsx$url.$t,
      };

    });renderCards(projects);

  });

  const renderCards = (projectsArr) => {
    projectsArr.forEach( project => {
        $('.projects').append(`
      <div class="card" style="width: 18rem;">
        <img src=${project.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <a href="${project.url}" class="btn btn-dark">View</a>
        </div>
      </div>
      `);
      });
    };

    
    
    