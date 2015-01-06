//global object for maintanance
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
}

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
	"display": function(){
		var formattedName = globals.HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = globals.HTMLheaderRole.replace("%data%", bio.role);
		var mobile = globals.HTMLmobile.replace("%data%" , bio.contacts.mobile);
		var email = globals.HTMLemail.replace("%data%" , bio.contacts.email);
		var github = globals.HTMLgithub.replace("%data%", bio.contacts.github);
		var twitter = globals.HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var picture = globals.HTMLbioPic.replace("%data%", bio.picture_url);
		var welcomeMessage = globals.HTMLWelcomeMsg.replace("%data%", bio.Welcome_message);

		globals.header.prepend(formattedRole);
		globals.header.prepend(formattedName);
		globals.header.append(welcomeMessage);
		globals.header.append(picture);
		globals.topContacts.append(mobile);
		globals.footerContacts.append(email);
		globals.footerContacts.append(github);
		globals.footerContacts.append(twitter)

		if (bio.skills.length > 0) {
			globals.header.append(globals.htmlSkillStart);
			for (var i = 0; i < bio.skills.length; i++){
				var bioSkill = globals.htmlSkill.replace("%data%", bio.skills[i])
				$("#skills").append(bioSkill);
			}
		}
	}
}

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
	"display" : function() {
		for (var school in education.schools) {
			globals.education.append(globals.HTMLschoolStart);
			var schoolName = globals.HTMLschoolName.replace("%data%", education.schools[school].name);
			var schoolDegree = globals.HTMLschoolDegree.replace("%data%", education.schools[school].graduation);
			var schoolYears = globals.HTMLschoolDates.replace("%data%", education.schools[school].years);
			var schoolLocation = globals.HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(schoolName);
			$(".education-entry:last").append(schoolDegree);
			$(".education-entry:last").append(schoolYears);
			$(".education-entry:last").append(schoolLocation);

			if (education.schools[school].majors.length > 0 ){
				for (var major in education.schools[school].majors) {
						var majorEntry = globals.HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
						$(".education-entry:last").append(majorEntry);
				}
			}
		}
		globals.education.append(globals.HTMLonlineClasses);

		for (var onlineCourse in education.onlineCourses) {
			globals.education.append(globals.HTMLschoolStart);
			var onlineTitle = globals.HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var onlineSchool = globals.HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var onlineDates = globals.HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
			var onlineUrl = globals.HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(onlineTitle);
			$(".education-entry:last").append(onlineSchool);
			$(".education-entry:last").append(onlineDates);
			$(".education-entry:last").append(onlineUrl);
		}
	}
}

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
	"display" : function() {
		for (var job in work.jobs){
			globals.workExperience.append(globals.HTMLworkStart);
			var emp = globals.HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var jobEmp = globals.HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var date = globals.HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var loc = globals.HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var desc = globals.HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var workItem = emp + " " + jobEmp;
			$(".work-entry:last").append(workItem);
			$(".work-entry:last").append(date);
			$(".work-entry:last").append(loc);
			$(".work-entry:last").append(desc);
		}
	}
};

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
	"display" : function(){
		for (var project in projects.projects) {
			globals.project.append(HTMLprojectStart);
			var projectTitle = globals.HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var projectDate = globals.HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var projectDesc = globals.HTMLprojectDescription.replace("%data%", projects.projects[project].description);

			$(".project-entry:last").append(projectTitle);
			$(".project-entry:last").append(projectDate);
			$(".project-entry:last").append(projectDesc);

			if (projects.projects[project].images.length > 0 ){
				for (var image in projects.projects[project].images) {
						var projectImg = globals.HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
						$(".project-entry:last").append(projectImg);
				}
			}
		}
	}

}

bio.display();
projects.display();
education.display();
work.display();

// Your code goes here! Let me help you get started
function locationizer(work_obj) {
	var locations = [];
	for (var work in work_obj.jobs) {
		locations.push(work_obj.jobs[work].location);
	}
	return locations;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

$('#main').append(globals.internationalizeButton);
$("#mapDiv").append(globals.googleMap);


// data visualization of json objects
var width = 800;
var height = 400;
var tree = d3.layout.tree()
	.size([height, width-400]);

var diagonal = d3.svg.diagonal()
	.projection (function(d) {return [d.y, d.x];});

var svg = d3.select("#skillsChart").append("svg")
	.attr("viewBox", "0 0 " + width + " " + height )
    .attr("preserveAspectRatio", "xMidYMid meet")
	.append("g")
	.attr("transform", "translate(50, -50)");

d3.json("work.json", function(root){
	var nodes = tree.nodes(root);
	var links = tree.links(nodes);
	var link = svg.selectAll(".link")
		.data(links)
		.enter().append("path")
		.attr("class", "link")
		.attr("d", diagonal);
	var node = svg.selectAll(".node")
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
		.text(function(d){return d.name});
	node.append("text")
		.attr("dx", function(d) { return d.children ? 8 : 8; })
		.attr("dy", 16)
		.attr("class", "jobemployer")
		.text( function(d){return d.employer});
	node.append("text")
		.attr("dx", function(d) { return d.children ? 8 : 8; })
		.attr("dy", 36)
		.attr("class", "jobtitle")
		.text( function(d){return d.title});
});


