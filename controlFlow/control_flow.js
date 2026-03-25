let userRole = 'admin';
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = 'subscriber';
let userCategory;

let isAuthenticated = true;

// Check role and asign access level
if (userRole === 'admin') {
    accessLevel = "Full access granted";
} else if (userRole ==='manager') {
    accessLevel = "Limited access granted";
} else {
    accessLevel = 'No access granted';
}

console.log('Access Level: ', accessLevel);
document.getElementById('access_level').innerHTML = 'Access Level: ' + accessLevel;

// Check if user is logged in
if (isLoggedIn) {
    if (userRole === 'admin') {
        userMessage = 'Welcome, Admin!';
    } else {
        userMessage = 'Welcome, User!';
    }
} else {
    userMessage = 'Please log in to access the system.';
}

console.log("User Message:", userMessage);
document.getElementById('user_message').innerHTML = 'User Message: ' + userMessage;

// Determinate user category according to user type
switch (userType) {
    case 'admin':
        userCategory = 'Administrator';
        break;
    case 'manager':
        userCategory = 'Manager';
        break;
    case 'subscriber':
        userCategory = 'Subscriber';
        break;
    default:
        userCategory = 'Unknown';
}

console.log('User Category: ',userCategory);
document.getElementById('user_category').innerHTML = 'User Category: ' + userCategory;

// Check authentication
let authenticationStatus = isAuthenticated ? 'Authenticated' : 'Not authenticated';

console.log('Auth Status: ',authenticationStatus);
document.getElementById('authentication').innerHTML = 'Authentication Status: ' + authenticationStatus;