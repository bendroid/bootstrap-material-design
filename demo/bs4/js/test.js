var bio = {
	"name" : "Ben Collins",
	"role" : "Web Developer"
	"contacts": {
		"mobile": "(555)-555-5555",
		"email": "email@myemail.com";
		"github": "bendroid",
		"twitter": "@jaemood",
		"location": "Rochester, NY"
	},
	"welcomeMessage": "Welcome to my site!",
	"skills": ["awesomeness", "programming", "teaching", "JS"],
	"bioPic": "./images/fry.jpg"
};
//

//
var work = {};
work.position = "Doing Work";
work.employer = "My Job";
work.years = 0.3;

var education = {};
education["name"] = "School of Hard Knocks";
education["years"] = "2001-2005"
education["city"] = "New York";

$("main").append(work["position"]);
$("main").append(education.name);
//

//
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	("#skills").append(formattedSkill);
}
//

/*
HTMLworkEmployer
HTMLworkTitle
HTMLworkDates
HTMLworkLocation
HTMLworkDescription
*/
//var mySkills = HTMLskills.replace("%data%", bio.skills[0] + "<br>" + bio.skills[1]);
//var mySkills = HTMLskills.replace("%data%", skills);

//var mySkillsStart = HTMLskillsStart.replace("%data%", skillsstart);
//var formattedSkill = HTMLskillsStart.replace("%data%", skillsstart);


/*
var bio = {
	"name" : "Ben Collins",
	"city" : "Rochester,NY",
	"skills" : skills
};
*/


/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Ben Collins");
/*
var name = "Ben Collins";
var role = "Web Developer";
var email = "collins.drums@gmail.com";
var twitter = "@jaemood";
var github = "bendroid";
var mobile = "(555)-555-5555";
var skills = ["awesomeness", "programming", "teaching", "JS"];

var locale = "Rochester, NY";
var pic = "./images/fry.jpg";
var welcome = "Welcome to my site!";
*/