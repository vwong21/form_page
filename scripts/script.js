const form = document.getElementById('main-form'); //Main form variable
const submitBtn = document.getElementById('button'); //Button variable

//Variables for require inputs
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const stuNum = document.getElementById('studentnumber')

form.addEventListener('submit', (e) => {

    //Variables for required inputs values
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const stuNumValue = stuNum.value.trim()
    const studentNumberRegEx    = /^a0[0-9]{7}$/i;

    //Variables for error messages
    const firstNameError = document.getElementById('first-name-error')
    const lastNameError = document.getElementById('last-name-error')
    const emailError = document.getElementById('email-error')
    const stuNumError = document.getElementById('stu-num-error')
    console.log(firstNameError.innerHTML)
    if (firstNameValue == '') {
        e.preventDefault();
        firstNameError.innerHTML = "First name cannot be empty"
        console.log('first name is empty');
    };

    if (lastNameValue == '') {
        e.preventDefault();
        lastNameError.innerHTML = "Last name cannot be empty"
        console.log('last name is empty');
    };

    if (emailValue == '') {
        e.preventDefault();
        emailError.innerHTML = "Email cannot be empty"
        console.log('email is empty');
    };

    if (!studentNumberRegEx.test(stuNumValue)){
        e.preventDefault();
        stuNumError.innerHTML = "Student number doesn't match the criteria"
        console.log('student number is invalid');
    };
});
