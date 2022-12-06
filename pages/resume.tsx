import { Timeline } from "../components/timeline";

const ResumePage = () => {
  return (
    <main className={"container mx-auto py-10"}>
      <h1 className={"text-4xl lg:text-6xl"}>
        <span className={"font-extralight"}>Martin</span>{" "}
        <span className={"font-bold"}>Harvan</span>
      </h1>
      <h2 className={"text-xl"}>full-stack engineer</h2>
      <div className={"max-w-xl pt-10 gap-5"}>
        <Timeline
          jobs={[
            {
              jobTitle: "Technical Lead",
              company: "Ness",
              startDate: "Dec 2021",
              endDate: "Present",
              description:
                "Leading a team of 4. Working for a large platform for matching care seekers with care providers. The team was involved on several projects within the organization and was responsible for the design and development of frontend and the backend services and the deployment of the application to the cloud.",
              location: "Kosice, Slovakia",
              tags: [
                "React",
                "Golang",
                "TypeScript",
                "Node.js",
                "GraphQL",
                "Docker",
                "Kubernetes",
                "AWS",
                "GRPC",
              ],
              isCurrent: true,
            },
            {
              jobTitle: "Senior Software Engineer",
              company: "IKEA",
              startDate: "Jan 2014",
              endDate: "Dec 2021",
              description:
                "Working on multiple client-facing and internal projects. The main focus was on the development of the IKEA website. I was responsible for the design and development of frontend and the backend services and the deployment of the application to the cloud as well as maintenance and support.",
              location: "Helsingborg, Sweden",
              tags: [
                "React",
                "TypeScript",
                "Node.js",
                "GraphQL",
                "Docker",
                "Kubernetes",
                "Google Cloud",
              ],
            },
          ]}
        />
      </div>
    </main>
  );
};

export default ResumePage;
