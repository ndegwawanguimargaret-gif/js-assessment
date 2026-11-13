// Function to calculate the average marks
function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
}

// Function to determine the student's grade
function calculateGrade(average) {
    if (average >= 80 && average <= 100) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else if (average >= 50) {
        return "D";
    } else {
        return "E";
    }
}

// Request student information
let studentName = prompt("Enter student's full name:");
let courseName = prompt("Enter course name:");

// Check for empty information
if (!studentName || !studentName.trim() || 
    !courseName || !courseName.trim()) {
    alert("Student name and course cannot be empty.");
} else {

    // Request marks for three subjects
    let mark1 = prompt("Enter marks for Subject 1:");
    let mark2 = prompt("Enter marks for Subject 2:");
    let mark3 = prompt("Enter marks for Subject 3:");

    // Check for empty marks
    if (mark1.trim() === "" || mark2.trim() === "" || mark3.trim() === "") {
        alert("Marks cannot be empty.");
    } else {

        // Convert marks into numbers
        mark1 = Number(mark1);
        mark2 = Number(mark2);
        mark3 = Number(mark3);

        // Validate marks
        if (
            !Number.isFinite(mark1) || !Number.isFinite(mark2) || !Number.isFinite(mark3) ||
            mark1 < 0 || mark1 > 100 ||
            mark2 < 0 || mark2 > 100 ||
            mark3 < 0 || mark3 > 100
        ) {
            alert("Invalid marks! Marks must be between 0 and 100.");
        } else {

            // Calculate average and grade
            let average = calculateAverage(mark1, mark2, mark3);
            let grade = calculateGrade(average);

            // Display student results
            console.log("===== STUDENT RESULTS =====");
            console.log("Student Name: " + studentName);
            console.log("Course: " + courseName);
            console.log("Subject 1: " + mark1);
            console.log("Subject 2: " + mark2);
            console.log("Subject 3: " + mark3);
            console.log("Average Marks: " + average.toFixed(2));
            console.log("Final Grade: " + grade);

            alert(
                "Student Results\n" +
                "Name: " + studentName +
                "\nCourse: " + courseName +
                "\nAverage: " + average.toFixed(2) +
                "\nGrade: " + grade
            );
        }
    }
}