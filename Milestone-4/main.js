document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume");
    var resumeDisplayElement = document.getElementById("resume-display");
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Collect form values
        var image = document.getElementById("image");
        var firstName = document.getElementById("firstname").value;
        var lastName = document.getElementById("lastname").value;
        var field = document.getElementById("field").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var career = document.getElementById("career").value;
        var education = document.getElementById("Education").value;
        var from = document.getElementById("from").value;
        var to = document.getElementById("to").value;
        var technicalSkills = document.getElementById("tech-skills").value;
        // Collect selected languages
        var selectedLanguages = [];
        var languageElements = document.querySelectorAll(".interest:checked");
        languageElements.forEach(function (lang) { return selectedLanguages.push(lang.value); });
        // Set image HTML if image is uploaded
        var imageHTML = '';
        if (image.files && image.files[0]) {
            var imageURL = URL.createObjectURL(image.files[0]);
            imageHTML = "<img src=\"".concat(imageURL, "\" alt=\"Profile picture\" style=\"border-radius: 55%; height: 10rem; width: 200px; margin:10px;\">");
        }
        // Adding functionality to personal skills
        var personalSkillsInput = document.getElementById("personal-skills");
        // Construct the resume HTML
        var resumeHTML = "\n            <div>\n                ".concat(imageHTML, "\n                <h2 style=\"margin-top:15px; width:100%; background-color:#d6d297; color:black;\">").concat(firstName, " ").concat(lastName, "</h2>\n                <p style=\"margin-top:10px; font-size:1rem;\"><span contenteditable = \"true\">").concat(field, "</span></p>\n                <h2 style=\"margin-top:10px; width:100%; background-color:#d6d297; color:black;\">Contact Information</h2>\n                <p style=\"margin-top:9px; font-size:1rem;\"><b>Phone:</b><span contenteditable = \"true\"> ").concat(phone, "</span></p>\n                <p style=\"margin-top:9px; font-size:1rem;\"><b>Email:</b><span contenteditable = \"true\"> ").concat(email, "</span></p>\n                <p style=\"margin-top:9px; font-size:1rem;\"><b>Address:</b><span contenteditable = \"true\"> ").concat(address, "</span></p>\n                <h2 style=\"margin-top:10px; width:100%; background-color:#d6d297; color:black;\">Personal Skills</h2>\n                <p style=\"margin-top:9px; font-size:1rem;\" contenteditable = \"true\">").concat(personalSkillsInput, "</p>\n                <h3 style=\"margin-top:10px; width:100%; background-color:#d6d297; color:black;\">Languages</h3>\n                <p style=\"margin-top:9px; display:flex; flex-direction:column; font-size:1rem;\" contenteditable = \"true\">").concat(selectedLanguages.join(", "), "</p>\n                <h3 style=\"margin-top:10px; width:100%; background-color:#d6d297; color:black;\">Career Objective</h3>\n                <p style=\"margin-top:9px; font-size:1rem;\" contenteditable = \"true\">").concat(career, "</p>\n                <h3 style=\"margin-top:10px; width:100%; background-color:#d6d297; color:black;\">Education</h3>\n                <p style=\"margin-top:9px; font-size:1rem;\" contenteditable = \"true\">").concat(education, " (").concat(from, " to ").concat(to, ")</p>\n                <h3 style=\"margin-top:10px; width:100%; background-color:#d6d297; color:black;\">Technical Skills</h3>\n                <p style=\"margin-top:5px; font-size:1rem;\" contenteditable = \"true\">").concat(technicalSkills, "</p>\n            </div>\n        ");
        // Display the generated resume in the resumeDisplayElement div
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error('The resume display element is missing');
        }
    });
});
