
‎// School System Data
‎const students = [
‎  { id: 1, name: "Ali", marks: 85, class: "10th" },
‎  { id: 2, name: "sara", marks: 92, class: "10th" },
‎  { id: 3, name: "Ahmed", marks: 67, class: "9th" },
‎  { id: 4, name: "Zara", marks: 74, class: "9th" }
‎];
‎
‎//  show all names
‎let names = students.map(s => s.name)
‎console.log("All Students: ", names)
‎
‎//  students who passed
‎let passedStudents = students.filter(s => s.marks > 70)
‎console.log("Passed Students: ", passedStudents.map(s => s.name))
‎
‎//find student by ID
‎let foundStudent = students.find(s => s.id == 2) 
‎console.log("Student with ID 2: ", foundStudent)
‎
‎// average marks
‎let total = 0
‎for(let i=0; i<students.length; i++){
‎  total += students[i].marks
‎}
‎let avg = total / students.length
‎console.log("Average Marks: ", avg)
‎
‎// Print pass/feil
‎students.forEach(s => {
‎  if(s.marks >= 70){
‎    console.log(s.name + " passed")
‎  }else{
‎    console.log(s.name + " failed")
‎  }
‎})
‎
‎// add a new Student
‎students.push({ id: 5, name: "Hassan", marks: 88, class: "10th" })
‎console.log("After Adding Hassan: ", students.map(s=>s.name))
‎
‎//Remove a student
‎let studentsWithoutAhmed = students.filter(s => s.id != 3)
‎console.log("After Removing Ahmed: ", studentsWithoutAhmed.map(s=>s.name))
‎
‎// toppers
‎let topper = students[0]
‎for(let i=1;i<students.length;i++){
‎  if(students[i].marks > topper.marks){ 
‎    topper = students[i]
‎  }
‎}
‎console.log("Topper is: " + topper.name + " with marks: " + topper.marks)
‎
