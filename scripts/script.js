// ===============================
//	Created by: Jason
// 	Email: jasonkurniadj@yahoo.com
// ===============================

function openNav () {
	document.getElementById("sidebar-wrapper").style.width = "250px";
	document.getElementById("page-content-wrapper").style.marginLeft = "250px";
}

function menuToggled () {
	sidebar = document.getElementById("sidebar-wrapper");
	content = document.getElementById("page-content-wrapper");

	if (sidebar.style.width === "250px") {
		sidebar.style.width = "0";
		content.style.marginLeft = "0";
	}
	else {
		sidebar.style.width = "250px";
		content.style.marginLeft = "250px";
	}
}

function gotoQuiz () {
	var rand = function() {
		return Math.random().toString(36).substr(2); // remove `0.`
	}

	var token = rand() + rand();

	$("a").attr("href", "quiz/questions.html?"+token);
}
