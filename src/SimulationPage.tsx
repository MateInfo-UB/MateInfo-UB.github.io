import { useEffect, useState } from "react";
import {
  Button,
  Card,
  HTMLSelect,
  NonIdealState,
  NonIdealStateIconSize,
  ProgressBar,
} from "@blueprintjs/core";
import { editii } from "./data";
import { ProblemViewer } from "./ProblemViewer";
import { useTimer } from "react-timer-hook";
import { ProblemaType, ScoreOfProblem } from "./types";
import { useNavigate, useLocation } from "react-router-dom";
import { usePathQuery } from "./helpers";
import { History } from "history";

const ComputeScore = (
  problemAnswers: string[],
  problems: ProblemaType[],
): string => {
  let score = 0,
    total_score = 0;
  for (let i = 0; i < problems.length; i++) {
    if (problemAnswers[i] == problems[i].raspuns) {
      score += ScoreOfProblem(problems[i]);
    }
    total_score += ScoreOfProblem(problems[i]);
  }
  return `${score} / ${total_score}`;
};

const contestDurationInSeconds = 2 * 60 * 60;

const SimulationPage = ({ history }: { history: History }) => {
  const { getPathQuery, setPathQuery } = usePathQuery();
  const allEditions = editii;
  const navigate = useNavigate();
  const location = useLocation();
  const [editionId, setEditionIdInternal] = useState(
    getPathQuery("edition", allEditions[0].name),
  );
  const setEditionId = (newEdition: string) => {
    // Try to navigate to the new edition.
    setPathQuery("edition", newEdition);
  };
  const edition =
    allEditions.find((edition) => edition.name === editionId) || allEditions[0];

  const [problemAnswers, setProblemAnswers] = useState<string[]>([]);
  const [activeProblem, setActiveProblem] = useState<number | undefined>(
    undefined,
  );
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,
    restart,
    pause,
    resume,
  } = useTimer({
    expiryTimestamp: new Date(
      new Date().getTime() + contestDurationInSeconds * 1000,
    ),
    autoStart: true,
  });

  // Update the editionId if the location changes.
  useEffect(() => {
    const newEditionId = getPathQuery("edition", allEditions[0].name);
    if (newEditionId !== editionId) {
      setEditionIdInternal(newEditionId);
    }
  }, [location, getPathQuery, editionId, allEditions]);

  const timerIsFinished = totalSeconds === 0;
  const problems = edition.probleme;

  useEffect(() => {
    setProblemAnswers(problems.map(() => ""));
    setActiveProblem(undefined);
    restart(new Date(new Date().getTime() + contestDurationInSeconds * 1000));

    // Wrong edition, should bail out
    if (edition.name !== editionId) {
      navigate(`/simulari/${edition.name}`);
    }
  }, [editionId, edition, problems]);

  // Prompt the user before leaving the page, if they answered any questions.
  useEffect(() => {
    // Set up the blocker, this will be called whenever the user tries to navigate away.
    const unblock = history.block((tx) => {
      // If the user has answered any questions, prompt them before leaving.
      const hasAnsweredQuestions = problemAnswers.some(
        (answer) => answer !== "",
      );
      if (
        !hasAnsweredQuestions ||
        window.confirm(
          "Progresul tău va fi pierdut. Ești sigur că vrei să părăsești pagina?",
        )
      ) {
        console.log("Unblocking navigation.");
        unblock();
        tx.retry();
      }
    });

    return () => {
      unblock();
    };
  }, [problemAnswers, history]);

  const hoursPassed = Math.floor(
    (contestDurationInSeconds - totalSeconds) / 3600,
  );
  const minutesPassed = Math.floor(
    ((contestDurationInSeconds - totalSeconds) % 3600) / 60,
  );
  const secondsPassed = (contestDurationInSeconds - totalSeconds) % 60;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Card
        elevation={3}
        style={{
          height: "100%",
          width: "25%",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "15px",
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
        }}
      >
        <HTMLSelect
          value={edition.name}
          onChange={(e) => {
            const editionName = e.target.value;
            const edition = allEditions.find(
              (edition) => edition.name === editionName,
            );
            if (edition) {
              setEditionId(editionName);
            }
          }}
          style={{
            width: "100%",
            minWidth: "150px",
            marginBottom: "10px",
          }}
        >
          {allEditions.map((edition) => (
            <option value={edition.name} key={edition.name}>
              {edition.name}
            </option>
          ))}
        </HTMLSelect>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Button
            onClick={() => {
              if (isRunning) {
                pause();
              } else {
                resume();
              }
            }}
            style={{
              width: "30%",
            }}
            disabled={timerIsFinished}
          >
            {timerIsFinished || isRunning ? "Pauză" : "Reluare"}
          </Button>

          <Button
            onClick={() => {
              restart(new Date(new Date().getTime()));
            }}
            style={{
              width: "30%",
            }}
          >
            Oprește
          </Button>

          <Button
            onClick={() => {
              setActiveProblem(undefined);
              setProblemAnswers(problems.map(() => ""));
              restart(
                new Date(
                  new Date().getTime() + contestDurationInSeconds * 1000,
                ),
              );
            }}
            style={{
              width: "30%",
            }}
            intent="danger"
          >
            Reîncepe
          </Button>
        </div>

        <div
          style={{
            flex: 1,
            overflow: "scroll",
            overflowX: "hidden",
            border: "1px solid #d3d3d3",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingBottom: "10px",
          }}
        >
          {problems.map((problem, index) => {
            return (
              <Button
                key={problem.titlu}
                onClick={() => setActiveProblem(index)}
                active={activeProblem === index}
                intent={
                  problemAnswers[index] === ""
                    ? "none"
                    : !timerIsFinished
                      ? "primary"
                      : problemAnswers[index] == problem.raspuns
                        ? "success"
                        : "danger"
                }
                style={{
                  width: "100%",
                  textAlign: "left",
                  marginTop: "10px",
                }}
              >
                {problem.titlu}
              </Button>
            );
          })}
        </div>
        <div
          style={{
            paddingTop: "10px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              paddingBottom: "-10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!timerIsFinished && (
              <div>
                <p style={{ margin: 0 }}>
                  Timp scurs:{" "}
                  <strong>
                    {hoursPassed.toString().padStart(2, "0")}:
                    {minutesPassed.toString().padStart(2, "0")}:
                    {secondsPassed.toString().padStart(2, "0")}
                  </strong>
                </p>
                <p style={{ margin: 0 }}>
                  Timp rămas:{" "}
                  <strong>
                    {hours.toString().padStart(2, "0")}:
                    {minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}
                  </strong>
                </p>
              </div>
            )}
            {timerIsFinished && (
              <div>
                <p style={{ margin: 0 }}>Timpul a expirat!</p>
                <p style={{ margin: 0 }}>
                  Scor:{" "}
                  <strong>{ComputeScore(problemAnswers, problems)}</strong>
                </p>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <ProgressBar
            animate={isRunning}
            stripes
            value={totalSeconds / contestDurationInSeconds}
            intent="primary"
          />
        </div>
      </Card>

      <Card
        style={{
          flex: 1,
          height: "100%",
          marginLeft: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          overflow: "auto",
          padding: 0,
        }}
        elevation={3}
      >
        {activeProblem === undefined && (
          <NonIdealState
            title="Selectează o problemă"
            icon="add"
            iconSize={NonIdealStateIconSize.SMALL}
          />
        )}
        {activeProblem !== undefined && (
          <ProblemViewer
            isInReviewMode={timerIsFinished}
            pickedAnswer={problemAnswers[activeProblem]}
            setPickedAnswer={(answer) => {
              const newAnswers = [...problemAnswers];
              newAnswers[activeProblem] = answer;
              setProblemAnswers(newAnswers);
            }}
            problem={problems[activeProblem]}
          />
        )}
      </Card>
    </div>
  );
};

export { SimulationPage };
