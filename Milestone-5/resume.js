document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume");
    var resumeDisplayElement = document.getElementById("resume-display");
    var shareableLinkContainer = document.getElementById('shareable-link');
    ;
    var shareableLinkElement = document.getElementById('link');
    var downloadPdfButton = document.getElementById('download');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Collect form values
        var image = document.getElementById("image");
        var username = document.getElementById('username').value;
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
        var personalSkills = (document.getElementById("personal-skills"));
        // Collect selected languages
        var selectedLanguages = [];
        var languageElements = document.querySelectorAll(".interest:checked");
        languageElements.forEach(function (lang) { return selectedLanguages.push(lang.value); });
        var resumeData = {
            image: image,
            firstName: firstName,
            lastName: lastName,
            field: field,
            phone: phone,
            email: email,
            address: address,
            personalSkills: personalSkills,
            career: career,
            education: education,
            from: from,
            to: to,
            technicalSkills: technicalSkills,
            selectedLanguages: selectedLanguages
        };
        localStorage.setItem(username, JSON.stringify(resumeData));
        // Set image HTML if image is uploaded
        var imageHTML = '';
        if (image.files && image.files[0]) {
            var imageURL = URL.createObjectURL(image.files[0]);
            imageHTML = "<img src=\"".concat(imageURL, "\" alt=\"Profile picture\" style=\"border-radius: 55%; height: 10rem; width: 200px; margin:10px;\">");
        }
        // Adding functionality to personal skills
        var personalSkillsInput = document.getElementById("personal-skills");
        // Construct the resume HTML
        var resumeHTML = "\n            <div>\n                ".concat(imageHTML, "\n                <h2 style=\"margin-top:15px; width:100%; background-color:#d6d297; color:black;\">").concat(firstName, " ").concat(lastName, "</h2>\n                <p style=\"margin-top:10px; font-size:1rem;\"><span contenteditable = \"true\">").concat(field, "</span></p>\n                <h2 style=\"margin-top:10px; width:100%; background-color:#d6d297; color:black;\">Contact Information</h2>\n                <p style=\"margin-top:9px; font-size:1rem;\"><b>Phone:</b><span contenteditable = \"true\"> ").concat(phone, "</span></p>\n                <p style=\"margin-top:9px; font-size:1rem;\"><b>Email:</b><span contenteditable = \"true\"> ").concat(email, "</span></p>\n                <p style=\"margin-top:9px; font-size:1rem;\"><b>Address:</b><span contenteditable = \"true\"> ").concat(address, "</span></p>\n                <h2 style=\"margin-top:10px; width:100%; background-color:#d6d297; color:black;\">Personal Skills</h2>\n                <p style=\"margin-top:9px; font-size:1rem;\" contenteditable = \"true\">").concat(personalSkills, "</p>\n                <h3 style=\"margin-top:10px; width:100%; background-color:#d6d297; color:black;\">Languages</h3>\n                <p style=\"margin-top:9px; display:flex; flex-direction:column; font-size:1rem;\" contenteditable = \"true\">").concat(selectedLanguages.join(", "), "</p>\n                <h3 style=\"margin-top:10px; width:100%; background-color:#d6d297; color:black;\">Career Objective</h3>\n                <p style=\"margin-top:9px; font-size:1rem;\" contenteditable = \"true\">").concat(career, "</p>\n                <h3 style=\"margin-top:10px; width:100%; background-color:#d6d297; color:black;\">Education</h3>\n                <p style=\"margin-top:9px; font-size:1rem;\" contenteditable = \"true\">").concat(education, " (").concat(from, " to ").concat(to, ")</p>\n                <h3 style=\"margin-top:10px; width:100%; background-color:#d6d297; color:black;\">Technical Skills</h3>\n                <p style=\"margin-top:5px; font-size:1rem;\" contenteditable = \"true\">").concat(technicalSkills, "</p>\n            </div>\n        ");
        // Display the generated resume in the resumeDisplayElement div
        resumeDisplayElement.innerHTML = resumeHTML;
        var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
        // Display the shareable link
        shareableLinkContainer.style.display = 'block';
        shareableLinkElement.href = shareableURL;
        shareableLinkElement.textContent = shareableURL;
    });
    // Handle PDF download
    downloadPdfButton.addEventListener('click', function () {
        window.print(); // This will open the print dialog and allow the user to save
        // as PDF
    });
    // Prefill the form based on the username in the URL
    window.addEventListener('DOMContentLoaded', function () {
        var urlParams = new URLSearchParams(window.location.search);
        var username = urlParams.get('username');
        if (username) {
            var savedResumeData = localStorage.getItem(username);
            if (savedResumeData) {
                var resumeData = JSON.parse(savedResumeData);
                document.getElementById('username').value =
                    username;
                document.getElementById('name').value =
                    resumeData.name;
                document.getElementById('email').value =
                    resumeData.email;
                document.getElementById('phone').value =
                    resumeData.phone;
                document.getElementById('education').value =
                    resumeData.education;
                document.getElementById('experience').value
                    = resumeData.experience;
                document.getElementById('skills').value =
                    resumeData.skills;
            }
        }
    });
});
