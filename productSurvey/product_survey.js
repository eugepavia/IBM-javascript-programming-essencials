// Submit button event
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Allow Enter key to 
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
})

// Alternative
// document.addEventListener('keydown',enterSubmit());
// function enterSubmit(event) {
//     if (event.key === 'Enter') {
//         submitFeedback();
//     }
// }

function submitFeedback() {
    // Store user input
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('experienceText').value;
    
    alert('Thank you for your valuable feedback');
    
    // Display user input
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperience').innerHTML = experience;
    document.getElementById('userInfo').style.display = 'block'; // makes input visible
}