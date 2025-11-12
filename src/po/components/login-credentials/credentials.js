module.exports = {
    usernameMissing: [
        { username: 'TestuserName', password: 'TestuserPassword', expectedError: 'Epic sadface: Username is required' }
    ],
    passwordMissing: [
        { username: 'TestuserName', password: 'TestuserPassword', expectedError: 'Epic sadface: Password is required' }
    ],
    ValidLogin: [
        { username: 'standard_user', password: 'secret_sauce', expectedTitle: 'Products' }
    ]
};