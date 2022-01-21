window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml = `${innerHtml}
    
        <tr>
        <td><img class="profile" alt="" src="${empPayrollData._profilePic}"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
            <td>
                
                <img name="${empPayrollData._id}" onclick="remove(this)"src="/EmployeePayrollApp/assets 2/icons/delete-black-18dp.svg">
                <img name="${empPayrollData._id}" onclick="update(this)" src="/EmployeePayrollApp/assets 2/icons/create-black-18dp.svg">
            </td>
        </tr>        
    `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
} 


const getDeptHtml = (deptList) => {
    let deptHtml ='';
    for (const dept of deptList){
        deptHtml = `${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () =>{
    let empPayrollList=[
        {
            _name:'Naincy singh',
            _gender:'Female',
            _department:['Engineering'],
            _salary:'500000',
            _startDate:'29 oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/EmployeePayrollApp/assets 2/profile-images/Ellipse -1.png'
        },
        {
            _name:'Aman raj',
            _gender:'Male',
            _department:['Engineering','Finance'],
            _salary:'300000',
            _startDate:'1 jan 2021',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '/EmployeePayrollApp/assets 2/profile-images/Ellipse -2.png'
        },
        {
            _name:'Atul raj',
            _gender:'Male',
            _department:['Engineering','Finance'],
            _salary:'300000',
            _startDate:'15 nov 2021',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '/EmployeePayrollApp/assets 2/profile-images/Ellipse -3.png'
        }

    ];
    return empPayrollList;
}