

export const checkValidData = (email, password, name) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/.test(password);
    //const isNameValid = /^[A-Za-z\s]{2,30}$/.test(name);

    //if (!isNameValid) return "Name is not valid";

    if (!isEmailValid) return "Email ID is not valid"; //if this isEmailValid not true than return Error Message
    if (!isPasswordValid) return "Password is not valid"; //if this Password function not true than return Error Message

    return null; // if the isEmailValid and isPasswordValid validate true than it return null;

};