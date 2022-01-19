

window.addEventListener('DOMContentLoaded', (event) => {
    salaryOutput();
    validateName();
    validateDate();  
});

const salaryOutput = () => {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
}

const validateName = () => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
}

const validateDate = () => {
    
    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');

    day.addEventListener('input', isValidDate);
    month.addEventListener('input', isValidDate);
    year.addEventListener('input', isValidDate);

}

const isValidDate = () => {
    const dateError = document.querySelector('.date-error');
    try {
        (new EmployeePayrollData()).startDate = new Date(month.value+" "+day.value+" "+year.value);
        dateError.textContent = " ";
    } catch (e) {
        dateError.textContent = e ;
    } 
 }