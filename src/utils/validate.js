// this is our validate function for form validation

export const checkValidData = (name, email , password , isSignInForm) => {

    // now it will validate name only if it's a signup form
    if(!isSignInForm){
        const isNameValid = /^[A-z]*$|^[A-z]+\s[A-z]*$/.test(name)
        if(!isNameValid) return "Name should contain only alphabets"
}

    const isEmailValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null; // it means that there is no error

}

