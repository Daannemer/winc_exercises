//The Grade Assigner

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}

for (i = 60; i <= 100; i++) {
    console.log("With a score of " + i + "you receive an " + assignGrade(i));

};