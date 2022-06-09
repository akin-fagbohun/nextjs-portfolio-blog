import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function SyntaxHighlighterComponent(props) {
  <SyntaxHighlighter language={props.language} style={nightOwl}>
    {props.code}
  </SyntaxHighlighter>;
}
