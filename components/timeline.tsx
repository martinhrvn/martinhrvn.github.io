import React from "react";

interface Job {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
  tags: string[];
  isCurrent?: boolean;
}
interface TimelineProps {
  jobs: Job[];
}
const TimelineItem: React.FC<Job> = (job) => {
  return (
    <li className="mb-10 ml-6">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
      <h3 className="flex items-center mb-1 text-lg text-gray-900">
        <span className={"font-bold"}>{job.jobTitle}</span>&nbsp;at&nbsp;
        <span className={"font-bold"}>{job.company}</span>
        {job.isCurrent && (
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
            current
          </span>
        )}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
        {job.startDate} - {job.endDate}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {job.description}
      </p>
      <div className="flex items-center mb-2 text-sm font-normal leading-none text-gray-400">
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className={"mr-2"}
        >
          <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
        </svg>

        {job.location}
      </div>
      <div className="flex flex-wrap mt-5 gap-y-2">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </li>
  );
};
export const Timeline: React.FC<TimelineProps> = ({ jobs }) => (
  <ol className="relative border-l border-gray-200 max-w-2xl">
    {jobs.map((job) => (
      <TimelineItem {...job} />
    ))}
  </ol>
);
