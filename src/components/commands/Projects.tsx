import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        My projects are diverse from Machine learning to Web development <br/>
        or just something exploring a fundamental concept.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "OCR Sudoku Solver",
    desc: "A web app built with flask that solves sudoku using tensorflow and opencv.",
    url: "https://github.com/EteimZ/OCR_Sudoku_Solver",
  },
  {
    id: 2,
    title: "Socket.io tic tac toe",
    desc: "A tic-tac-toe game powered by socket.io that enables realtime playing among two players.",
    url: "https://github.com/EteimZ/socketio_tic_tac_toe",
  },
  {
    id: 3,
    title: "AI plays snake",
    desc: "An AI model trained to play the game of snake using reinforcement learning",
    url: "https://github.com/EteimZ/deep-Qlearning-Snake",
  },
  {
    id: 4,
    title: "Euclidean Geometry in OOP",
    desc: "Exploring the wonderful world of geometry using OPP and turtle graphics",
    url: "https://github.com/EteimZ/Geometry",
  },
  {
    id: 5,
    title: "HTTP implementation in python.",
    desc: "Implementing the HTTP protocol in Python.",
    url: "https://github.com/EteimZ/python-http-server",
  },
];

export default Projects;
