let employees = [];

// Function to display employees
function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    if (employees.length === 0) {
        employeeList.innerHTML = '<p>You have 0 employees.</p>';
        return;
    }

    employees.forEach((employee, index) => {
        const employeeDiv = document.createElement('div');
        employeeDiv.classList.add('employee');
        employeeDiv.innerHTML = `
            <p>Name: ${employee.name} | Profession: ${employee.profession} | Age: ${employee.age}</p>
            <button onclick="deleteEmployee(${employee.id})">Delete User</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

// Function to add an employee
document.getElementById('addUserBtn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;
    const message = document.getElementById('message');

    // Input validation
    if (!name || !profession || !age) {
        message.innerHTML = '<p class="error">Error: Make sure all fields are filled before adding an employee!</p>';
        return;
    }

    // Success message
    message.innerHTML = '<p class="success">Success: Employee Added!</p>';

    // Add employee to array
    const newEmployee = {
        id: employees.length + 1,
        name,
        profession,
        age: parseInt(age)
    };
    employees.push(newEmployee);

    // Clear form inputs
    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';

    // Update the employee list
    displayEmployees();
});

// Function to delete an employee
function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}