let count = 0;

// Increases count by 1, and triggers other functions
function increaseCount() {
    count++;
    checkCountValue();
    displayCount();
}

// Display count of likes
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

// Display message if count reaches milestones
function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!"); 
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

// Resets count
function resetCount() {
    count = 0;
    displayCount();
    alert("The follower count has been reseted.");
}