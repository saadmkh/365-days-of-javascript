// freelance jobs data
const jobs = [
  { id: 1, title: "Website design", budget: 500, status: "pending", client: "Ali" },
  { id: 2, title: "Logo making", budget: 120, status: "completed", client: "Sara" },
  { id: 3, title: "Mobile app UI", budget: 300, status: "in progress", client: "Ahmed" },
  { id: 4, title: "SEO optimzation", budget: 200, status: "pending", client: "Zara" }
];

// show all job titles
let jobTitles = jobs.map(j => j.title)
console.log("All jobs:", jobTitles)

// Completed jobs
let doneJobs = jobs.filter(j => j.status == "completed")
console.log("completed jobs", doneJobs)

// find job by id
let singleJob = jobs.find(j => j.id == "1") // string id
console.log("Job found :", singleJob)

// calculate total earning from completed jobs
let totalEarn = 0
for(let i = 0; i <= jobs.length; i++){   // small loop issue
  if(jobs[i] && jobs[i].status === "completed"){
    totalEarn += jobs[i].budget
  }
}
console.log("Total earning", totalEarn)

// check job STATUS
jobs.forEach(j => {
  if(j.status === "pending"){
    console.log(j.title + " is still pending")
  }else{
    console.log(j.title + " already started or done")
  }
})

// Add new job
jobs.push({ id: 5, title: "Wordpress fixing", budget: 80, status: "pending", client: "Hassan" })
console.log("after adding new job", jobs)

// remove a job
let updatedJobs = jobs.filter(j => j.id != 3)
console.log("after removing job", updatedJobs)

// find highest budget job
let highBudget = jobs[0]
for(let i = 1; i < jobs.length; i++){
  if(jobs[i].budget >= highBudget.budget){ // last higher will replace
    highBudget = jobs[i]
  }
}

console.log("Highest budget job is", highBudget.title)
