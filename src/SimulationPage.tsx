import { useEffect, useState } from 'react'
import { Button, Card, NonIdealState, NonIdealStateIconSize, ProgressBar } from '@blueprintjs/core'
import { editii } from './data'
import { ProblemViewer } from './ProblemViewer'
import { useTimer } from 'react-timer-hook'
import { ProblemaType } from './types'

const ScoreOfProblem = (problem: ProblemaType): number => {
  if (problem.dificultate === "usor") {
    return 2
  }
  else if (problem.dificultate === "mediu") {
    return 3
  }
  else {
    return 5
  }
}

const ComputeScore = (problemAnswers: string[], problems: ProblemaType[]): string => {
  let score = 0, total_score = 0
  for (let i = 0; i < problems.length; i++) {
    if (problemAnswers[i] == problems[i].raspuns) {
      score += ScoreOfProblem(problems[i])
    }
    total_score += ScoreOfProblem(problems[i])
  }
  return `${score} / ${total_score}`
}

const SimulationPage = () => {
  const allEditions = editii
  const [edition, setEdition] = useState(allEditions[allEditions.length - 1])
  const problems = edition.probleme
  const [problemAnswers, setProblemAnswers] = useState<string[]>([])
  const [activeProblem, setActiveProblem] = useState<number | undefined>(undefined)

  const contestDurationInSeconds = 60
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,
    restart
  } = useTimer({ expiryTimestamp: new Date((new Date).getTime() + contestDurationInSeconds * 1000), autoStart: true });

  useEffect(() => {
    setProblemAnswers(problems.map(() => ""))
  }, [edition, problems])

  const hoursPassed = Math.floor((contestDurationInSeconds - totalSeconds) / 3600)
  const minutesPassed = Math.floor(((contestDurationInSeconds - totalSeconds) % 3600) / 60)
  const secondsPassed = (contestDurationInSeconds - totalSeconds) % 60

  return <div style={{
    height: "100%",
    width: "100%",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
  }}>
    <Card
      elevation={3}
      style={{
        height: "100%",
        width: "25%",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "15px",
        position: "relative",
      }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: "10px",
      }}>
        <select
          value={edition.name}
          onChange={(e) => {
            const editionName = e.target.value
            const edition = allEditions.find(edition => edition.name === editionName)
            if (edition) {
              setActiveProblem(undefined)
              restart(new Date((new Date).getTime() + contestDurationInSeconds * 1000))
              setEdition(edition)
            }
          }}
          style={{
            width: "40%"
          }}
        >
          {allEditions.map(edition => <option value={edition.name} key={edition.name}>{edition.name}</option>)}
        </select>
        <Button onClick={() => {
          setActiveProblem(undefined)
          setProblemAnswers(problems.map(() => ""))
          restart(new Date((new Date).getTime() + contestDurationInSeconds * 1000))
        }}>Resetează</Button>
      </div>

      <div style={{
        flex: 1,
        overflow: "scroll",
        border: "1px solid #d3d3d3",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}>
        {problems.map((problem, index) => {
          return <Button
            key={problem.titlu}
            onClick={() => setActiveProblem(index)}
            active={activeProblem === index}
            intent={problemAnswers[index] === "" ? "none" : (isRunning ? "primary" : (problemAnswers[index] == problem.raspuns ? "success" : "danger"))}
            style={{
              width: "100%",
              textAlign: "left",
              marginTop: "10px",
            }}
          >
            {problem.titlu}
          </Button>
        })
        }
      </div>
      <div style={{
        paddingTop: "10px",
      }}>
        <div style={{
          textAlign: "center",
          fontSize: "20px",
          paddingBottom: "-10px"
        }}>
          {isRunning &&
            <p style={{ margin: 0 }}>
              Timp scurs: <strong>{hoursPassed.toString().padStart(2, '0')}:{minutesPassed.toString().padStart(2, '0')}:{secondsPassed.toString().padStart(2, '0')}</strong>
            </p>
          }
          {isRunning &&
            <p style={{ margin: 0 }}>
              Timp rămas: <strong>{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</strong>
            </p>
          }
          {!isRunning && <p style={{ margin: 0 }}>Timpul a expirat!</p>}
          {!isRunning && <p style={{ margin: 0 }}>Scor: <strong>{ComputeScore(problemAnswers, problems)}</strong></p>}
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}>
        <ProgressBar
          animate
          stripes
          value={totalSeconds / contestDurationInSeconds}
        />
      </div>
    </Card>

    <Card
      style={{
        flex: 1,
        height: "100%",
        marginLeft: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
      elevation={3}
    >
      {activeProblem === undefined && <NonIdealState title="Selectează o problemă" icon="add" iconSize={NonIdealStateIconSize.SMALL} />}
      {activeProblem !== undefined &&
        <ProblemViewer
          isInReviewMode={!isRunning}
          pickedAnswer={problemAnswers[activeProblem]}
          setPickedAnswer={(answer) => {
            const newAnswers = [...problemAnswers]
            newAnswers[activeProblem] = answer
            setProblemAnswers(newAnswers)
          }}
          problem={problems[activeProblem]}
        />
      }
    </Card>
  </div>
}

export { SimulationPage }