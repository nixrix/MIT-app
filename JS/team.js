var json = [
  {"name":"Lizzie",
    "bio":"Lizzie is mum to 4m old Etta. She was working at an English language school but is now in the process of setting up her own online school (Teleus) with former colleagues. She is here to learn more about coding so that she can build their website. She has a phobia of yoghurt!"},
  {"name":"Lolade","bio":"Lolade is a Mum of two Modupe and Folorunso and after a break from work as a strategy consultant working on financial services projects she is exploring her next steps in the tech sector and hopes to be inspired by other women in tech with a start up ideas to take back home to Nigeria"},
  {"name":"Nicola","bio":"Going back to work for Google but wants to explore software dev more to see if she'd like to eventually do  GA course. May move to Bristol in the future so wants options for career change. Mum to Ezra, who has just started crawling! Allergic to strawberries and used to be a secondary school teacher."},
  {"name":"Philippa","bio":"Philippa works with her husband in a company they set up which uses data analytics. This involves taking data from the web such as social media sites and news channels and runs these through a Natural Processing Language technology to determine how trusted a certain company is."},
  {"name":"Rachel","bio":"Rachel works for Barclays as an internal auditor in equity-linked derivatives. She works with tech people who write algorithms for trading which she would like to understand more fully. She would also like to better understand the coding side of the business so she can assure the quality standards for clients. She is currently on maternity leave, returning to work in November. She has been working in internal audit for investment banks for 10 years, in a variety of roles "}
];

  $.each(json, function(index){
    $('.col-md-8').append(
      '<div class="card" style="width:20rem;display:inline-block;margin:1rem;">' +
      '<img class="card-img-top img-fluid" src="' + this.pic + '" alt="Card image cap">' +
        '<div class="card-block">' +
          '<h1>' + 
            this.name + 
          '</h1>' +
          '<div id="hidden-div" class="hidden-bio">' + 
          this.bio + 
      '</div>' +
      '</div>' +
      '</div>'
    );
  });

  $('.card').on('click', function() {
    $('#hidden-div').toggleClass("hidden-bio");
  });
