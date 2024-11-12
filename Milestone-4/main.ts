document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume") as HTMLFormElement;
    const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        // Collect form values
        const image = document.getElementById("image") as HTMLInputElement;  
        const firstName = (document.getElementById("firstname") as HTMLInputElement).value;
        const lastName = (document.getElementById("lastname") as HTMLInputElement).value;
        const field = (document.getElementById("field") as HTMLSelectElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const address = (document.getElementById("address") as HTMLInputElement).value;
        const career = (document.getElementById("career") as HTMLTextAreaElement).value;
        const education = (document.getElementById("Education") as HTMLInputElement).value;
        const from = (document.getElementById("from") as HTMLInputElement).value;
        const to = (document.getElementById("to") as HTMLInputElement).value;
        const technicalSkills = (document.getElementById("tech-skills") as HTMLInputElement).value;

        // Collect selected languages
        const selectedLanguages: string[] = [];
        const languageElements = document.querySelectorAll<HTMLInputElement>(".interest:checked");
        languageElements.forEach(lang => selectedLanguages.push(lang.value));
        
        // Set image HTML if image is uploaded
        let imageHTML = '';
        if (image.files && image.files[0]) {
            const imageURL = URL.createObjectURL(image.files[0]);
            imageHTML = `<img src="${imageURL}" alt="Profile picture" style="border-radius: 55%; height: 10rem; width: 200px; margin:10px;">`;
        }

        // Adding functionality to personal skills
        const personalSkillsInput = document.getElementById("personal-skills") as HTMLInputElement;


        // Construct the resume HTML
        const resumeHTML = `
            <div>
                ${imageHTML}
                <h2 style="margin-top:15px; width:100%; background-color:#d6d297; color:black;">${firstName} ${lastName}</h2>
                <p style="margin-top:10px; font-size:1rem;"><span contenteditable = "true">${field}</span></p>
                <h2 style="margin-top:10px; width:100%; background-color:#d6d297; color:black;">Contact Information</h2>
                <p style="margin-top:9px; font-size:1rem;"><b>Phone:</b><span contenteditable = "true"> ${phone}</span></p>
                <p style="margin-top:9px; font-size:1rem;"><b>Email:</b><span contenteditable = "true"> ${email}</span></p>
                <p style="margin-top:9px; font-size:1rem;"><b>Address:</b><span contenteditable = "true"> ${address}</span></p>
                <h2 style="margin-top:10px; width:100%; background-color:#d6d297; color:black;">Personal Skills</h2>
                <p style="margin-top:9px; font-size:1rem;" contenteditable = "true">${personalSkillsInput}</p>
                <h3 style="margin-top:10px; width:100%; background-color:#d6d297; color:black;">Languages</h3>
                <p style="margin-top:9px; display:flex; flex-direction:column; font-size:1rem;" contenteditable = "true">${selectedLanguages.join(", ")}</p>
                <h3 style="margin-top:10px; width:100%; background-color:#d6d297; color:black;">Career Objective</h3>
                <p style="margin-top:9px; font-size:1rem;" contenteditable = "true">${career}</p>
                <h3 style="margin-top:10px; width:100%; background-color:#d6d297; color:black;">Education</h3>
                <p style="margin-top:9px; font-size:1rem;" contenteditable = "true">${education} (${from} to ${to})</p>
                <h3 style="margin-top:10px; width:100%; background-color:#d6d297; color:black;">Technical Skills</h3>
                <p style="margin-top:5px; font-size:1rem;" contenteditable = "true">${technicalSkills}</p>
            </div>
        `;

        // Display the generated resume in the resumeDisplayElement div
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        } else {
            console.error('The resume display element is missing');
        }
    });
});