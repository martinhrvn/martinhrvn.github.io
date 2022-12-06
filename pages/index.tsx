import { Emphasize } from "../components/emphasize";

export default function App() {
  return (
    <div className={"shadow-2xl"}>
      <main className={"container mx-auto py-10"}>
        <div className={"text-xl my-4"}>Hi, my name is</div>
        <h1 className={"text-4xl lg:text-6xl"}>
          <b>Martin</b> Harvan
        </h1>
        <h1 className={"text-2xl lg:text-6xl"}>
          <b
            className={
              "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
            }
          >
            I build full stack applications
          </b>
        </h1>
        <div className={"text-xl pt-5 max-w-xl"}>
          I'm a software engineer creating awesome digital experience. My main
          passion is developing web applications using{" "}
          <Emphasize>React</Emphasize>, <Emphasize>Next.js</Emphasize>,{" "}
          <Emphasize>Remix</Emphasize>,<Emphasize>Node.js</Emphasize>, and{" "}
          <Emphasize>TypeScript</Emphasize>.
        </div>
        <div className={"text-xl pt-5 max-w-xl"}>
          I also have experience with many other technologies:{" "}
          <Emphasize>Golang</Emphasize>, <Emphasize>Elixir</Emphasize>,{" "}
          <Emphasize>Java</Emphasize>, <Emphasize>SQL</Emphasize>,{" "}
          <Emphasize>GraphQL</Emphasize>,<Emphasize>Docker</Emphasize>,{" "}
          <Emphasize>Git</Emphasize>, <Emphasize>Kubernetes</Emphasize>...
        </div>
      </main>
    </div>
  );
}
