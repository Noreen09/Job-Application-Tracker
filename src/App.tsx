import JobCard from './jobCard'
import { useState } from 'react'

function App() {
  const [ search, setSearch] = useState("")
  const [selectedJob, setSelectedJob] = useState<{ id: number; title: string; salary: string } | null>(null)

  const jobs = [
    {id: 1, title: "Software Engineer", salary: "$100,000"},
    {id: 2, title: "Data Scientist", salary: "$120,000"},
    {id: 3, title: "Product Manager", salary: "$110,000"},
    {id: 4, title: "UX Designer", salary: "$90,000"},
    {id: 5, title: "DevOps Engineer", salary: "$105,000"},

  ]

const filteredJobs = jobs.filter((job) =>
	job.title.toLowerCase().includes(search.toLowerCase())

)

 

  return (
    <>
    <h1>Job Listings</h1>
    <input type="text"
          placeholder="Search for jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
    />
    <ul>
      {filteredJobs.map((job) =>(
        <JobCard key={job.id} job={job} onSelect={() => setSelectedJob(job)} />
      ))}
    </ul>

    {selectedJob && (
  <div>
    <h2>Selected Job</h2>
    <p>{selectedJob.title} - {selectedJob.salary}</p>
  </div>
)}

 
    
    </>
  
  )
}

export default App