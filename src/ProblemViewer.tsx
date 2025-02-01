import { H3, Radio } from '@blueprintjs/core'
import { ProblemaType, ScoreOfProblem } from './types'
import MarkdownPreview from '@uiw/react-markdown-preview';
import katex from 'katex';
import 'katex/dist/katex.css';
import { getCodeString } from 'rehype-rewrite';

interface ProblemViewerProps {
  problem: ProblemaType,
  pickedAnswer: string | undefined,
  setPickedAnswer: (answer: string) => void,
  // Answer is shown, and the user can't change it
  isInReviewMode: boolean,
}

const ProblemViewer = ({ problem, pickedAnswer, setPickedAnswer, isInReviewMode }: ProblemViewerProps) => {
  return <div
    style={{
      // height: "100%",
      width: "100%",
      padding: "50px",
      paddingTop: "30px",
      paddingBottom: "30px",
      // overflow: "auto",
    }}
    data-color-mode="light"
  >
    <H3 style={{ textAlign: "center" }}>{problem.titlu} ({problem.dificultate}, {ScoreOfProblem(problem)} puncte)</H3>
    <MarkdownPreview source={problem.enunt_markdown} style={{ padding: 16 }}
      components={{
        code: ({ children = [], className, ...props }) => {
          if (typeof children === 'string' && /^\$\$(.*)\$\$/.test(children)) {
            const html = katex.renderToString(children.replace(/^\$\$(.*)\$\$/, '$1'), {
              throwOnError: false,
            });
            return <code dangerouslySetInnerHTML={{ __html: html }} style={{ background: 'transparent' }} />;
          }
          // eslint-disable-next-line react/prop-types
          const code = props.node && props.node.children ? getCodeString(props.node.children) : children;
          if (
            typeof code === 'string' &&
            typeof className === 'string' &&
            /^language-katex/.test(className.toLocaleLowerCase())
          ) {
            const html = katex.renderToString(code, {
              throwOnError: false,
            });
            return <code style={{
              fontSize: '100%', textAlign: 'center'
            }} dangerouslySetInnerHTML={{ __html: html }} />;
          }
          return <code className={String(className)}>{children}</code>;
        },
      }}
    />
    {problem.imagine && <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
      <img src={problem.imagine} style={{
        maxWidth: "400px",
        maxHeight: "300px",
      }} />
    </div>}

    <H3 style={{
      textAlign: "center",
      paddingTop: "30px",
      paddingBottom: "10px",
    }}>Răspuns</H3>
    {/* the choices */}
    <div style={{
      display: "flex",
      flexDirection: "row",
      padding: "10px",
      paddingTop: "0",
      flexWrap: "wrap",
      justifyContent: "center",
    }}>
      {problem.variante.map((varianta) => {
        return <Radio
          key={varianta}
          value={varianta.toString()}
          label={varianta.toString() + (isInReviewMode && varianta.toString() === problem.raspuns.toString() ? " (corect)" : "")}
          onClick={() => setPickedAnswer(varianta.toString())}
          // disabled={isInReviewMode}
          checked={pickedAnswer === varianta.toString()}
          onChange={() => { }}
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            fontWeight: isInReviewMode && varianta.toString() === problem.raspuns.toString() ? "bold" : "normal"
          }}
        />
      })}
    </div>
  </div>
}

export { ProblemViewer }
export type { ProblemViewerProps }
