function filterJobs(){
let search = document.getElementById("searchInput").value.toLowerCase();
let filter = document.getElementById("filterSelect").value;
let jobs = document.querySelectorAll(".job-card");

jobs.forEach(job=>{
let title = job.querySelector("h3").innerText.toLowerCase();
let category = job.dataset.category;

let matchSearch = title.includes(search);
let matchFilter = filter === "all" || category === filter;

if(matchSearch && matchFilter){
job.style.display="block";
}else{
job.style.display="none";
}
});
}
