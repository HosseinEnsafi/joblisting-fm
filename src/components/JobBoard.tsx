import { useEffect, useState } from "react"
import Job, { JobType } from "./Job"
import data from "../../data"

interface Filter {
  role: string
  level: string
  languages: string[]
  tools: string[]
}

// const fetchJobs = async (): Promise<JobType[]> => {
//   const response = await fetch("http://localhost:3000/jobs")
//   const data: JobType[] = await response.json()
//   return data
// }

const JobBoard = () => {
  const [jobs, setJobs] = useState<JobType[]>([])
  const [filters, setFilters] = useState<string[]>([])

  useEffect(() => {
    /*     const loadJobs = async () => {
      try {
        const fetchedJobs = await fetchJobs()
        setJobs(fetchedJobs)
      } catch (error) {
        console.log(error)
      }
    } */
    // loadJobs()

    setJobs(data.jobs)
  }, [])

  const filterByTag = ({ role, level, languages, tools }: Filter): boolean => {
    const tags: string[] = [role, level, ...languages, ...tools]
    return tags.some((tag) => filters.includes(tag))
  }

  const tagClickHandler = (tag: string) => {
    setFilters((prevState) => {
      if (prevState.includes(tag)) return prevState
      return [...prevState, tag]
    })
  }

  const deleteFilterHandler = (filter: string) => {
    setFilters((prevState) => {
      const updatedFilter = prevState.filter((f) => f !== filter)
      return updatedFilter
    })
  }

  const filteredJobs = filters.length === 0 ? jobs : jobs.filter(filterByTag)

  return (
    <div className="container mx-auto px-2">
      {filters.length > 0 && (
        <div className="gapy6 mb-12 flex flex-wrap gap-4 rounded bg-white p-5 text-sm shadow-md">
          {filters.map((filter) => (
            <span
              onClick={deleteFilterHandler.bind(null, filter)}
              className="cursor-pointer rounded text-teal-900"
              key={Math.random()}
            >
              <span className="rounded-bl rounded-tl bg-teal-100 p-2">
                {filter}
              </span>
              <span className="rounded-br rounded-tr bg-teal-800 p-2 font-bold text-white">
                X
              </span>
            </span>
          ))}
        </div>
      )}
      <ul className="flex flex-col justify-center gap-10 sm:px-0">
        {filteredJobs.map((job) => (
          <Job onTagClickHandler={tagClickHandler} key={job.id} job={job} />
        ))}
      </ul>
    </div>
  )
}

export default JobBoard
