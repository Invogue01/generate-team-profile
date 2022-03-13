const Employee = require("../staff/Employee");

test("Create Employee object", () => {
    const employee = new Employee();

    // Check if Employee object is created
    expect(employee).toEqual(expect.any(Employee));
});