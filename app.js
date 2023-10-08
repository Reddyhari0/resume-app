const generateResumeForm = document.querySelector("form");

generateResumeForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const phone = document.querySelector("input[name='phone']").value;
  const education = document.querySelector("textarea[name='education']").value;
  const workExperience = document.querySelector("textarea[name='work_experience']").value;
  const skills = document.querySelector("textarea[name='skills']").value;

  // Generate the resume
  const resume = `
## ${name}
### ${email}
### ${phone}

**Education**

${education}

**Work Experience**

${workExperience}

**Skills**

${skills}
`;

  // Save the resume to a file
  const blob = new Blob([resume], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "resume.txt";
  link.click();
});
