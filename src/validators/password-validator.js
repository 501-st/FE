let PasswordValidator = (pass, setPass) => {
    if (pass.value === "") {
        setPass({...pass, error: "Пароль обязателен к заполнению"})
        return false
    } else if (!String(pass.value).match(
        /^\w{4,10}$/
    )) {
        setPass({...pass, error: "От 4 до 10 букв и цифр"})
        return false
    }
    return true
}

export default PasswordValidator