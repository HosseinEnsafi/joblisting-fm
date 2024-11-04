export interface JobType {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}

const Job = ({
  job: {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  onTagClickHandler,
}: {
  job: JobType
  onTagClickHandler: (tag: string) => void
}) => {
  const tags: string[] = [role, level, ...languages, ...tools]

  return (
    <li
      className={`relative flex flex-col gap-4 rounded-sm bg-white px-8 py-8 shadow-md sm:flex-row ${featured ? "border-l-[6px] border-solid border-l-cyan-desaturated-dark" : ""}`}
    >
      <img
        className="absolute top-0 h-12 w-12 -translate-x-2 translate-y-[-50%] sm:static sm:h-20 sm:w-20 sm:translate-x-0 sm:translate-y-0 sm:self-center"
        src={logo}
        alt="company logo"
      />

      <div className="flex shrink-0 flex-col gap-2">
        <div className="flex items-center gap-8 pr-[8%] sm:gap-2">
          <h3 className="text-base font-bold text-teal-600">{company}</h3>
          <div className="flex gap-1 text-[10px] font-bold uppercase">
            {isNew && (
              <label className="inline-flex items-center rounded-full bg-teal-400 p-1 px-2 text-white">
                new
              </label>
            )}
            {featured && (
              <label className="inline-flex items-center rounded-full bg-teal-700 p-1 px-2 text-white">
                new
              </label>
            )}
          </div>
        </div>

        <h2 className="text-lg">{position}</h2>

        <div className="flex items-baseline gap-4 text-sm text-gray-400">
          <span className="">{postedAt}</span>
          <span className="before:mr-[1px] before:font-extrabold before:content-['.']">
            {contract}
          </span>
          <span className="before:mr-[1px] before:font-extrabold before:content-['.']">
            {location}
          </span>
        </div>

        <hr className="border-t-1 border-gray-300 sm:hidden" />
      </div>
      <div className="flex flex-wrap items-center gap-3 gap-y-5 text-sm font-semibold sm:ml-auto">
        {tags.map((tag, i) => {
          return (
            <span
              key={i}
              onClick={onTagClickHandler.bind(null, tag)}
              className="flex cursor-pointer rounded bg-teal-100 px-3 py-1 text-teal-700"
            >
              {tag}
            </span>
          )
        })}
      </div>
    </li>
  )
}

export default Job
