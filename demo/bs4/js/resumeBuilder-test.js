var bio = {
	"name": "Ben Collins",
	"role": "Web Developer",
	"welcomeMessage": "Welcome to my resume! Please explore and feel free to contact me with any questions.",
	"contacts": {
		"mobile": "(555)-555-5555",
		"email": "noemail@noemail.com",
		"github": "bendroid",
		"twitter": "@jaemood",
		"location": "Rochester, NY"
	},
	"skills": [
		"Website design and creation", "Search Engine Optimization", "JS"
		],
	"bioPic": "./images/ben-sm.jpg"
	//display: function taking no paramaters
};

var contacts = {
	"mobile": "(555)-555-5555",
	"email": "noemail@noemail.com",
	"github": "bendroid",
	"twitter": "@jaemood",
	"location": "Rochester, NY"
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedPic);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var work = {
	"jobs": [
		{
			"employer": "Paychex",
			"title": "Research Services Specialist",
			"location": "Rochester, NY",
			"dates": "June 2010 - Present",
			"description": "Manage the Circulation Desk at the Law Library; Hire, train and supervise staff of 10 – 12 student workers; Draft and publish guides for library patrons; Process interlibrary loan requests for students and faculty; Assist students and members of the public in their use of library materials; Teach research classes in legal writing program; Participate in collection development; Serve as a liaison in the library's Faculty Liaison Program."
		},
		{
			"employer": "Company 2",
			"title": "Green Bag Journal Fellow",
			"location": "Rochester, NY",
			"dates": "April 2009 - July 2010",
			"description": "Managed day-to-day activities of The Green Bag journal (general law journal featuring eclectic mix of readable legal scholarship: www.greenbag.org); Worked with publishers and authors to secure reprint copyright licenses; Conducted research on a range of issues from copyright status of works to law journal circulation numbers."
		},
		{
			"employer": "Company 3",
			"title": "Writing Fellow",
			"location": "Rochester, NY",
			"dates": "Fall 2008 - Spring 2009",
			"description": "Taught First Year legal research and writing class; Designed lectures and projects; Graded students’ written work."
		},
		{
			"employer": "Company 4",
			"title": "SLIP Intern",
			"location": "Rochester, NY",
			"dates": "Summer 2008",
			"description": "Conducted in-depth research on ethics issues; Drafted memoranda and opinion letters."
		},
		{
			"employer": "Company 5",
			"title": "Intern",
			"location": "Rochester, NY",
			"dates": "Spring 2008",
			"description": "Researched and wrote memoranda on First Amendment issues, with focus on religion clause."
		},
		{
			"employer": "Company 6",
			"title": "Law Clerk",
			"location": "Rochester, NY",
			"dates": "Fall 2007 - Spring 2008",
			"description": "Researched several tort claims; Drafted complaints, motions, and discovery documents."
		},
		{
			"employer": "Company 7",
			"title": "Law Clerk",
			"location": "Rochester, NY",
			"dates": "Fall 2007 - Spring 2008",
			"description": "Wrote memoranda for brief to Supreme Court of the Northern Mariana Islands."
		},
		{
			"employer": "Company 8",
			"title": "Intern",
			"location": "Rochester, NY",
			"dates": "Summer 2007",
			"description": "Provided legal services to indigent clients, with a focus on consumer, housing, and family law."
		},
		{
			"employer": "Company 9",
			"title": "Starbucks Manager",
			"location": "Rochester, NY",
			"dates": "August 2005 - August 2006",
			"description": "Opened and then managed a Starbucks kiosk in a brand new Harris Teeter grocery store. Participated in the hiring of employees for the new store."
		},
		{	
			"employer": "Company 10",
			"title": "English Teacher",
			"location": "Rochester, NY",
			"dates": "April 2004 - April 2005",
			"description": "Taught English to small groups of Japanese students of varying ages and ability levels. Learned Japanese customs and culture."
		},
		{
			"employer": "Company 11",
			"title": "Sales Associate",
			"location": "Rochester, NY",
			"dates": "Fall 2003",
			"description": "Sold sports memorabilia."
		}
	]
};

var projects = { 
	"projects": [
		{ 
		"title": "Webpage",
		"dates": "2015",
		"description": "Udacity P1",
		"images": ["./images/image-src.png"]
		},
		{ 
		"title": "placeholder",
		"dates": "2015",
		"description": "placeholder",
		"images": ["./images/image-1x.png"]
		}
	]
};


var education = {
	"schools": [
		{
			"name": "Gustavus Adolphus College",
			"location": "St. Peter, MN, US",
			"degree": "BA",
			"majors": ["Studio Art", "Political Science"],
			"dates": "Fall 1999 - Spring 2003",
			"url": "https://gustavus.edu/"
		},
		{
			"name": "George Mason University School of Law",
			"location": "Arlington, VA, US",
			"degree": "J.D.",
			"majors": "Law",
			"dates": "Fall 2006 - Spring 2009",
			"url": "http://www.law.gmu.edu/"
		},
	]	
};

var onlineClasses = {
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
		for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
}

displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

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

$("#mapDiv").append(googleMap);
