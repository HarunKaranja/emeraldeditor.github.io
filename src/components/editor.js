import CodeMirror from "@uiw/react-codemirror"
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript"
import { dracula } from "@uiw/codemirror-theme-dracula";
import { python } from "@codemirror/lang-python";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { css } from "@codemirror/lang-css";

const Editor = ({ value, onChange, language }) => {

    const extension = () => {

        if ( language === 'html' ){
            return html({ matchClosingTags: true, autoCloseTags: true })
        } else if ( language === 'py' ){
            return python()
        } else if ( language === 'java' ){
            return java()
        } else if ( language === 'c' ){
            return cpp()
        } else if ( language === 'go' ){
            return java()
        } else if ( language === 'css' ){
            return css()
        }
        else {
            return javascript({ jsx: true })   
        }

    }

    return (
        <CodeMirror
            value={ value }
            height="100vh"
            theme={ dracula }
            extensions={ [ extension() ] }
            onChange={onChange}
        />
    )
}

export default Editor