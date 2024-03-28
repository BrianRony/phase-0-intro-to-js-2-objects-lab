const employee = {
    name:"Sam",
    streetAdress:"11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee,name,streetAddress){
    const employee1 = {...employee};
    employee1[name]  = streetAddress;
    return (employee1);
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,name,streetAddress){
    employee[name]  = streetAddress;
    return (employee);
}
function deleteFromEmployeeByKey(employee,name,streetAddress){
    const employee2 = {...employee};
    delete employee2.name;
    return(employee2);
}
function destructivelyDeleteFromEmployeeByKey(employee,name,streetAddress){
    delete employee.name;
    return(employee);
}
