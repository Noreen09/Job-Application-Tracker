type JobCardProps = {
  job: {
    id: number
    title: string
    salary: string
  }
  onSelect: () => void
}

function JobCard({ job, onSelect }: JobCardProps) {
  return (
    <li onClick={onSelect}>
      <h3>{job.title}</h3>
      <p>{job.salary}</p>
    </li>
  )
}

export default JobCard