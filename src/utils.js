const mailIDRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export const preventSubmit = event => event.preventDefault()

export const isEmpty = value => !value

export const isValidEmail = mailID => mailIDRegex.test(mailID)

export const isValidPassword = password => {
    let validity = false
    let error = null
    if (!password)
        error = 'Please enter a password'
    else if (password.length < 8)
        error = 'Password must be atleast 8 characters long'
    else if (!/[a-z]+/.test(password))
        error = 'Password must contain a lowercase letter'
    else if (!/[A-Z]+/.test(password))
        error = 'Password must contain a uppercase letter'
    else if (!/\d+/.test(password))
        error = 'Password must contain a number'
    else
        validity = true
    return [validity, error]

}

export const isMatchingPasswords = (password, confirmPassword) => password === confirmPassword