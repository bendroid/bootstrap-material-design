var bio = {
	"name" : "Ben Collins",
	"role" : "Web Developer",
	"welcomeMessage": "Welcome to my site!",
	"skillsstart": "Skills at a Glance:",
	"skills": ["awesomeness", "programming", "teaching", "JS"],
	"bioPic": "./images/fry.jpg"
};

var education = {
  "schools": [
	{
		"name": "School of Hard Knocks",
		"location": "New York",
		"degree": "Masters",
		"majors": ["CS"],
		"dates": 2001,
		"url": "http://example.com"
	},
	{
		"name": "Another School",
		"location": "California",
		"degree": "BA",
		"majors": ["CS"],
		"dates": 2004,
		"url": "http://example.com"
	}
  ],
  "onlineCourses": [
    {
	    "title": "JavaScript Syntax",
	    "school": "Udacity",
	    "dates": 2014,
	    "url": "http://example.com"
    }
  ]
}

var contacts = {
	"mobile": "(555)-555-5555",
	"email": "noemail@noemail.com",
	"github": "bendroid",
	"twitter": "@jaemood",
	"location": "Rochester, NY"
};

var work = {
	"jobs": [
		{
			"employer": "Company 2",
			"title": "Project Manager",
			"dates": "2004 - Present",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ex vitae ligula tristique, in egestas diam aliquam. In aliquet nulla et ante porta euismod. In vel nisl vulputate, venenatis elit non, vulputate enim. Vivamus eu sem ullamcorper, vulputate urna vitae, commodo risus. Etiam sagittis eget purus a mattis. Etiam pharetra vel mi ut gravida. Fusce ex ligula, fringilla quis luctus in, fringilla venenatis eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at metus ut velit finibus luctus. Quisque eget quam ut ante hendrerit faucibus. Vestibulum quis metus finibus, mattis nunc eu, sollicitudin dolor. Donec id venenatis magna, vitae laoreet dui. Phasellus laoreet, arcu laoreet laoreet vestibulum, dolor metus sagittis libero, ac auctor dui purus ut velit. Donec cursus et elit vel pellentesque. Morbi ornare tristique dolor.",
		},
		{
			"employer": "Company 1",
			"title": "Project Manager Again",
			"dates": "2001 - 2004",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ex vitae ligula tristique, in egestas diam aliquam. In aliquet nulla et ante porta euismod. In vel nisl vulputate, venenatis elit non, vulputate enim. Vivamus eu sem ullamcorper, vulputate urna vitae, commodo risus. Etiam sagittis eget purus a mattis. Etiam pharetra vel mi ut gravida. Fusce ex ligula, fringilla quis luctus in, fringilla venenatis eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at metus ut velit finibus luctus. Quisque eget quam ut ante hendrerit faucibus. Vestibulum quis metus finibus, mattis nunc eu, sollicitudin dolor. Donec id venenatis magna, vitae laoreet dui. Phasellus laoreet, arcu laoreet laoreet vestibulum, dolor metus sagittis libero, ac auctor dui purus ut velit. Donec cursus et elit vel pellentesque. Morbi ornare tristique dolor.",
		},
	]
};


var projects = {
	"projects": [
		{
		"title": "Sample Project 1",
		"dates": "2004 - Present",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum ex vitae ligula tristique, in egestas diam aliquam. In aliquet nulla et ante porta euismod. In vel nisl vulputate, venenatis elit non, vulputate enim. Vivamus eu sem ullamcorper, vulputate urna vitae, commodo risus. Etiam sagittis eget purus a mattis. Etiam pharetra vel mi ut gravida. Fusce ex ligula, fringilla quis luctus in, fringilla venenatis eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed at metus ut velit finibus luctus. Quisque eget quam ut ante hendrerit faucibus. Vestibulum quis metus finibus, mattis nunc eu, sollicitudin dolor. Donec id venenatis magna, vitae laoreet dui. Phasellus laoreet, arcu laoreet laoreet vestibulum, dolor metus sagittis libero, ac auctor dui purus ut velit. Donec cursus et elit vel pellentesque. Morbi ornare tristique dolor.",
		"images": "http://placehold.it/350x150"
		},
		{ 
		"title": "placeholder",
		"dates": "2015",
		"description": "placeholder",
		"images": "http://placehold.it/350x150"
		}
	]
};




var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedEmail = HTMLemail.replace("%data%", contacts.email);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedTwitter = HTMLtwitter.replace("%data%", contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
var formattedMobile = HTMLmobile.replace("%data%", contacts.mobile);
var formattedLocation = HTMLlocation.replace("%data%", contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);



$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWelcome);
$("#header").append(formattedPic);


if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

function displayWork() {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    };
}

displayWork();

/*
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);
});
*/
/*
projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		if (projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();
*/

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDate);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedImage);

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}	
	}
};

projects.display();

$("#map-div").append(googleMap);



/*
if(work.employer.length > 0) {
  $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer[0]);
    $(".work-entry").append(formattedEmployer);
    var formattedPosition = HTMLworkTitle.replace("%data%",work.position[0]);
    $(".work-entry").append(formattedPosition);
};

if(work.position.length > 0) {
  //$("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.employer[1]);
    $(".work-entry").append(formattedEmployer);
    var formattedPosition = HTMLworkTitle.replace("%data%",work.position[1]);
    $(".work-entry").append(formattedPosition);
};

*/
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedLocation);


if(document.getElementsByClassName('flex-item').length === 0) {
          // document.style.backgroundColor = "black";
    			document.getElementById('topContacts').style.backgroundColor = "black";
        }
        if(document.getElementsByTagName('h1').length === 0) {
          // document.style.display = 'none';
    					document.getElementById('header').style.backgroundColor = "black";
        }
        if(document.getElementsByClassName('work-entry').length === 0) {
          // document.getElementById('workExperience').style.display = 'none';
    					document.getElementById('workExperience').style.backgroundColor = "black";
        }
        if(document.getElementsByClassName('project-entry').length === 0) {
          // document.getElementById('projects').style.display = 'none';
    					document.getElementById('projects').style.backgroundColor = "black";
        }
        if(document.getElementsByClassName('education-entry').length === 0) {
          // document.getElementById('education').style.display = 'none';
    					document.getElementById('education').style.backgroundColor = "black";
        }
        if(document.getElementsByClassName('flex-item').length === 0) {
          // document.getElementById('lets-connect').style.display = 'none';
    					document.getElementById('lets-connect').style.backgroundColor = "black";
        }
        if(document.getElementById('map') === null) {
          // document.getElementById('mapDiv').style.display = 'none';
    					document.getElementById('mapDiv').style.backgroundColor = "black";
        }
