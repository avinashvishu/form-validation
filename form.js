const details = () => {
    let detailsInput = document.getElementById('detailsInput').value;
    let fout = document.getElementById('fout');
    let FullName = document.getElementById('FullName');

    if (detailsInput.trim().length == 0) {
        fout.innerText = 'Please Enter Full Name';
        FullName.classList.remove('success')
        FullName.classList.add('error')
    } else {
        fout.innerText = ""
        FullName.classList.remove('error')
        FullName.classList.add('success')
    }
}
const userDetails = () => {
    let userInput = document.getElementById('userInput').value;
    let uout = document.getElementById('Uout');
    let UserName = document.getElementById('UserName');
    if (userInput.trim().length == 0) {
        uout.innerText = 'Please Enter User Name';
        UserName.classList.remove('success')
        UserName.classList.add('error')
    } else {
        uout.innerText = ""
        UserName.classList.remove('error')
        UserName.classList.add('success')
    }

}
const emailDetail = () => {
    let emailInput = document.getElementById('emailInput').value;
    if (emailInput.trim().length == 0) {
        document.getElementById('Eout').innerText = 'Please Enter Email Id';
        EmailId.classList.remove('success')
        EmailId.classList.add('error')

    } else if (emailInput.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) == null) {
        document.getElementById('Eout').innerText = 'Please Enter Valid Email Id';
        EmailId.classList.remove('success')
        EmailId.classList.add('error')
    } else {
        document.getElementById('Eout').innerText = '';
        EmailId.classList.remove('error')
        EmailId.classList.add('success')
    }
}
const phoneDetails = () => {
    let phoneInput = document.getElementById('phoneInput').value;

    if (phoneInput.trim().length == 0) {
        document.getElementById('Pout').innerText = 'Please Enter Your Phone Number';
        PhoneNumber.classList.remove('success')
        PhoneNumber.classList.add('error')
    } else if (phoneInput.trim().length < 10) {
        document.getElementById('Pout').innerText = 'Please Enter Valid Phone Number';
        PhoneNumber.classList.remove('success')
        PhoneNumber.classList.add('error')
    } else {
        document.getElementById('Pout').innerText = '';
        PhoneNumber.classList.remove('error')
        PhoneNumber.classList.add('success')
    }
}
const password = () => {
    let passInput = document.getElementById('passInput').value;
    if (passInput.trim().length < 15) {
        if (passInput.trim().length < 8) {
            document.getElementById('pout').innerText = "Min length of password is 8";
            document.getElementById('ppout').style.display = "block";
            document.getElementById('ppout').style.backgroundColor = "red";
        } else if (passInput.trim().length < 11) {
            document.getElementById('pout').innerText = "";
            document.getElementById('ppout').style.backgroundColor = "orange";
        }
    } else {
        document.getElementById('ppout').style.backgroundColor = "green";
    }
}
const cpassword = () => {
    let cpassInput = document.getElementById('cpassInput').value;
    let passInput = document.getElementById('passInput').value;
    let ConfirmPassword = document.getElementById('ConfirmPassword')
    if (passInput !== cpassInput) {
        document.getElementById('cpout').innerText = "Password Does Not Match";
        ConfirmPassword.classList.remove('success')
        ConfirmPassword.classList.add('error')

    } else {
        document.getElementById('cpout').innerText = "";
        ConfirmPassword.classList.remove('error')
        ConfirmPassword.classList.add('success')
    }
}