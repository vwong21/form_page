const form = document.getElementById('main-form');
const submitBtn = document.getElementById('button');

form.addEventListener('submit', (e) => {
    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const stuNum = document.getElementById('studentnumber').value.trim();
    const studentNumberRegEx    = /^a0[0-9]{7}$/i;
    
    if (firstName == '') {
        e.preventDefault();
        
        console.log('first name is empty');
    };

    if (lastName == '') {
        e.preventDefault();
        console.log('last name is empty');
    };

    if (email == '') {
        e.preventDefault();
        console.log('email is empty');
    };

    if (!studentNumberRegEx.test(stuNum)){
        e.preventDefault();
        console.log('student number is invalid');
    };
});
