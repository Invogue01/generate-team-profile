const Intern = require("../staff/Intern");

test("Create Intern object", () => {
    const intern = new Intern();

    // Check if Intern object is created
    expect(intern).toEqual(expect.any(Intern));

    // Check if Intern text is set so it can be rendered to HTML
    expect(intern.getRole()).toBe("Intern");
});

test("Override final question depending on Employee role", () => {
    const intern = new Intern();

    // Check if final question is over written
    const length = intern.questions.length;
    const finalQuestion = intern.questions[length - 1].message;
    expect(finalQuestion).toEqual(expect.stringContaining("school"));
});