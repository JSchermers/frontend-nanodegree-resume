/*global $:false */
"use strict";

/*
global object for maintanance in one file
 */
var globals = {
	"workExperience" : $("#workExperience"),
	"project" : $("#projects"),
	"header" : $("#header"),
	"topContacts" : $("#topContacts"),
	"education" : $("#education"),
	"footerContacts" : $("#footerContacts"),
	"HTMLheaderName" : HTMLheaderName,
	"HTMLheaderRole" : HTMLheaderRole,
	"HTMLcontactGeneric" : HTMLcontactGeneric,
	"HTMLmobile" : HTMLmobile,
	"HTMLemail" : HTMLemail,
	"HTMLtwitter" : HTMLtwitter,
	"HTMLgithub" : HTMLgithub,
	"HTMLblog" : HTMLblog,
	"HTMLlocation" : HTMLlocation,
	"HTMLbioPic" : HTMLbioPic,
	"HTMLWelcomeMsg" : HTMLWelcomeMsg,
	"HTMLprojectTitle" : HTMLprojectTitle,
	"HTMLprojectDates" : HTMLprojectDates,
	"HTMLprojectDescription" : HTMLprojectDescription,
	"HTMLprojectImage" : HTMLprojectImage,
	"HTMLworkStart" : HTMLworkStart,
	"HTMLworkEmployer" : HTMLworkEmployer,
	"HTMLworkTitle" : HTMLworkTitle,
	"HTMLworkDates" : HTMLworkDates,
	"HTMLworkLocation" : HTMLworkLocation,
	"HTMLworkDescription" : HTMLworkDescription,
	"htmlSkillStart" : HTMLskillsStart,
	"htmlSkill" : HTMLskills,
	"HTMLschoolStart" : HTMLschoolStart,
	"HTMLschoolName" : HTMLschoolName,
	"HTMLschoolDegree" : HTMLschoolDegree,
	"HTMLschoolDates" : HTMLschoolDates,
	"HTMLschoolLocation" : HTMLschoolLocation,
	"HTMLschoolMajor" : HTMLschoolMajor,
	"HTMLonlineClasses" : HTMLonlineClasses,
	"HTMLonlineTitle" : HTMLonlineTitle,
	"HTMLonlineSchool" : HTMLonlineSchool,
	"HTMLonlineDates" : HTMLonlineDates,
	"HTMLonlineURL" : HTMLonlineURL,
	"internationalizeButton" : internationalizeButton,
	"googleMap" : googleMap
};

/*
Bio object for bio info with display() function
 */
var bio = {
	"name": "Joost Schermers",
	"role": "Web developer",
	"contacts" : {
			"mobile": "(+31)614778131",
			"email": "joost.schermers@gmail.com",
			"github": "https://github.com/JSchermers",
			"twitter": "https://twitter.com/jschermers",
			"location": "Gouda, the Netherlands"
	},
	"picture_url": "http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
	"Welcome_message": "This is my awesome portfolio. Please checkout my projects",
	"skills": ["html", "css", "javascript", "web design", "scrum", "nodejs", "awesomeness"],

	//Show bio info on screen with display() function
	"display": function(){
		var formattedName = globals.HTMLheaderName.replace("%data%", bio.name),
			formattedRole = globals.HTMLheaderRole.replace("%data%", bio.role),
			mobile = globals.HTMLmobile.replace("%data%" , bio.contacts.mobile),
			email = globals.HTMLemail.replace("%data%" , bio.contacts.email),
			github = globals.HTMLgithub.replace("%data%", bio.contacts.github),
			twitter = globals.HTMLtwitter.replace("%data%", bio.contacts.twitter),
			picture = globals.HTMLbioPic.replace("%data%", bio.picture_url),
			welcomeMessage = globals.HTMLWelcomeMsg.replace("%data%", bio.Welcome_message);

		//append to #header
		globals.header.prepend(formattedRole);
		globals.header.prepend(formattedName);
		globals.header.append(welcomeMessage);
		globals.header.append(picture);

		//append to top contacts
		globals.topContacts.append(mobile);
		globals.topContacts.append(email);
		globals.topContacts.append(github);
		globals.topContacts.append(twitter);

		//append to footer contacts
		globals.footerContacts.append(email);
		globals.footerContacts.append(github);
		globals.footerContacts.append(twitter);

		//add skills to #header if available
		if (bio.skills.length > 0) {
			globals.header.append(globals.htmlSkillStart);
			for (var i = 0; i < bio.skills.length; i++){
				var bioSkill = globals.htmlSkill.replace("%data%", bio.skills[i]);
				$("#skills").append(bioSkill);
			}
		}
	}
};

/*
Edcucation Object for education info with display() function
 */
var education = {
    "schools": [
        {
            "name": "Haagse Hoge School",
            "location": "The Hague",
            "majors": ["French", "German"],
            "years": "4 years",
            "graduation": "Yes"
        },
        {
            "name": "Goudse Scholen Gemeenschap",
            "location": "Gouda",
            "majors": ["Dutch", "Geography"],
            "years": "6 years",
            "graduation": "Yes"
        }

    ],
	"onlineCourses": [
	 	{
            "title": "Udacity front end nano degree",
            "school": "Udacity",
            "dates": "04-12-2014 -- 06-09-2015",
            "url": "https://www.udacity.com/course/nd001"
	    },
    	{
            "title": "JQuery",
            "school": "Gouda",
            "dates": "04-12-2012 -- 01-03-2012",
            "url": "https://www.codeschool.com/courses/try-jquery"
	    }
	],

	//Show education info on screen with display() function
	"display" : function() {
		for (var school in education.schools) {
			globals.education.append(globals.HTMLschoolStart);
			var schoolName = globals.HTMLschoolName.replace("%data%", education.schools[school].name),
				schoolDegree = globals.HTMLschoolDegree.replace("%data%", education.schools[school].graduation),
				schoolYears = globals.HTMLschoolDates.replace("%data%", education.schools[school].years),
				schoolLocation = globals.HTMLschoolLocation.replace("%data%", education.schools[school].location);

			//append to .education-entry
			$(".education-entry:last").append(schoolName);
			$(".education-entry:last").append(schoolDegree);
			$(".education-entry:last").append(schoolYears);
			$(".education-entry:last").append(schoolLocation);

			//if majors available append them
			if (education.schools[school].majors.length > 0 ){
				for (var major in education.schools[school].majors) {
						var majorEntry = globals.HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
						$(".education-entry:last").append(majorEntry);
				}
			}
		}

		//append online classes from education
		globals.education.append(globals.HTMLonlineClasses);

		for (var onlineCourse in education.onlineCourses) {
			var onlineTitle = globals.HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title),
				onlineSchool = globals.HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school),
				onlineDates = globals.HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates),
				onlineUrl = globals.HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

			//append div schoolstart to html
			globals.education.append(globals.HTMLschoolStart);

			//append online classes info to html
			$(".education-entry:last").append(onlineTitle);
			$(".education-entry:last").append(onlineSchool);
			$(".education-entry:last").append(onlineDates);
			$(".education-entry:last").append(onlineUrl);
		}
	}
};

/*
Work object for work info with display() function
 */
var work = {
	"jobs": [
		{
			"employer": "PGGM",
			"title": "Front end developer",
			"location": "Zeist",
			"dates": "01-01-2012 -- 12-12-2014",
			"description": "Working as a Front end developer on SharePoint platform for public facing websites"
		},
		{
			"employer": "Deventer Ziekenhuis",
			"title": "Front end developer, Sharepoint consultant",
			"location": "Deventer",
			"dates": "01-01-2012 -- 01-04-2012",
			"description": "Working as a Front end developer on SharePoint platform  for public facing websites"
		},
		{
			"employer": "Heineken",
			"title": "Front end developer, SharePoint developer",
			"location": "Amsterdam",
			"dates": "01-01-2011 -- 01-01-2012",
			"description": "Working as a Front end developer on SharePoint platform for intranet"
		}
	],

	//Show work info on screen with display() function
	"display" : function() {
		for (var job in work.jobs){
			var emp = globals.HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
				jobEmp = globals.HTMLworkTitle.replace("%data%", work.jobs[job].title),
				date = globals.HTMLworkDates.replace("%data%", work.jobs[job].dates),
				loc = globals.HTMLworkLocation.replace("%data%", work.jobs[job].location),
				desc = globals.HTMLworkDescription.replace("%data%", work.jobs[job].description),
				workItem = emp + " " + jobEmp;

			//append div workstart to html
			globals.workExperience.append(globals.HTMLworkStart);

			//append work info to html
			$(".work-entry:last").append(workItem);
			$(".work-entry:last").append(date);
			$(".work-entry:last").append(loc);
			$(".work-entry:last").append(desc);
		}
	}
};

/*
Projects Object for project info with display() function
 */
var projects = {
	"projects" : [
		{
			"title": "The future of html5",
			"dates": "01-01-2010",
			"description": "Presentation about html5 to colleagues",
			"images": ["http://www.petelepage.com/assets/gela1.png"]
		},
		{
			"title": "Resume with css only",
			"dates": "01-10-2014",
			"description": "A timeline resume build with some javascript libraries with pure experimental css",
			"images": ["http://eduweb.hhs.nl/~10074546/afbeeldingen/cv.jpg"]
		},
		{
			"title": "Mflora",
			"dates": "01-10-2011",
			"description": "A website for a gardener in Gouda. Started my first html5 project there.",
			"images": ["http://www.mflora.nl/images/logo.jpg", "http://www.mflora.nl/php/rotate.php?slide=../images/slideshow/ontwerp/&697"]
		}
	],

	//Show projects info on screen with display() function
	"display" : function(){
		for (var project in projects.projects) {
			var projectTitle = globals.HTMLprojectTitle.replace("%data%", projects.projects[project].title),
				projectDate = globals.HTMLprojectDates.replace("%data%", projects.projects[project].dates),
				projectDesc = globals.HTMLprojectDescription.replace("%data%", projects.projects[project].description);

			//append div projectstart to html
			globals.project.append(HTMLprojectStart);

			//append project info to html
			$(".project-entry:last").append(projectTitle);
			$(".project-entry:last").append(projectDate);
			$(".project-entry:last").append(projectDesc);

			//if images available append them to html
			if (projects.projects[project].images.length > 0 ){
				for (var image in projects.projects[project].images) {
						var projectImg = globals.HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
						$(".project-entry:last").append(projectImg);
				}
			}
		}
	}
};

/*
call display() functions for resume
 */
bio.display();
projects.display();
education.display();
work.display();

/*
Append internationalizeButtom & googleMap to html
 */
$("#main").append(globals.internationalizeButton);
$("#mapDiv").append(globals.googleMap);

/*
Log clicks
 */
$(document).click(function(loc) {
	var x = loc.clientX,
		y = loc.clientY;
	logClicks(x, y);
});

/*
Extra mile ;)
data visualization object of json objects with d3
*/
var Visualization = (function () {
	var width = 800,
		height = 400,
		tree = d3.layout.tree()
				.size([height, width - 400]),
		diagonal = d3.svg.diagonal()
					.projection(function(d){return [d.y, d.x];}),
		svg = d3.select("#skillsTree").append("svg")
			.attr("viewBox", "0 0 " + width + " " + height )
		    .attr("preserveAspectRatio", "xMidYMid meet")
			.append("g")
			.attr("transform", "translate(50, -50)"),
		display = function(data) {
			d3.json(data, function(root){
				var nodes = tree.nodes(root),
					links = tree.links(nodes),
					link = svg.selectAll(".link")
						.data(links)
						.enter().append("path")
						.attr("class", "link")
						.attr("d", diagonal),
					node = svg.selectAll(".node")
						.data(nodes)
						.enter().append("g")
						.attr("class", "node")
						.attr("transform", function(d) { return "translate(" + d.y + ", " + d.x + ")"; });
					node.append("circle")
						.attr("r", 4.5);
					node.append("text")
						.attr("dx", function(d) { return d.children ? 8 : 8; })
						.attr("dy", -4)
						.attr("class", "jobname")
						.text(function(d){return d.name;});
					node.append("text")
						.attr("dx", function(d) { return d.children ? 8 : 8; })
						.attr("dy", 16)
						.attr("class", "jobemployer")
						.text( function(d){return d.employer;});
					node.append("text")
						.attr("dx", function(d) { return d.children ? 8 : 8; })
						.attr("dy", 36)
						.attr("class", "jobtitle")
						.text( function(d){return d.title;});
					});
			};
			return {
				displayVisualization : display
			};
})();

/*
create visualization
*/
Visualization.displayVisualization("work.json");
