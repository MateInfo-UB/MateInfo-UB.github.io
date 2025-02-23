import { Card, H3 } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import { UnControlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/mode/javascript/javascript';
import { editii } from "./data";

function ToateDatele() {
  const date = editii;
  const date_JSON = JSON.stringify(date, null, 2);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        overflow: "auto",
      }}
    >
      <Card elevation={3} style={{
        marginLeft: "5vh",
        marginRight: "5vh",
        marginTop: "30px",
        marginBottom: "30px",
        width: "60vw",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
        height: "fit-content",

      }}>
        <H3>Datele în format JSON</H3>
        <p>
          Mai jos puteți regăsi un obiect JSON care conține toate problemele propuse în cadrul concursului MateInfoUB, secțiunea informatică.
        </p>
        <CodeMirror
          value={date_JSON}
          options={{
            mode: 'application/json',
            theme: 'xq-light',
            lineNumbers: true,
            styleActiveLine: true,
            readOnly: true,
            lineWrapping: true,
            viewportMargin: Infinity,
          }}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onBeforeChange={(editor, _data, _value) => {
            editor.setSize(null, 'auto'); // Adjust height dynamically
          }}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onChange={(editor, _data, _value) => {
            editor.refresh(); // Refresh layout to adjust height
          }}
        />
      </Card>
    </div >
  );
}

export { ToateDatele };
