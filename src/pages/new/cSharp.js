import axios from "axios"
import { useState, useCallback, useEffect } from "react"
import Editor from "../../components/editor"
import qs from 'qs'

const CSharp  = () => {

    const [active, setActive] = useState(0)
    const [value, setValue] = useState(`using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
          Console.WriteLine("Hello World!");    
        }
    }
}`)
    const [outputValue, setOutputValue] = useState('')
    const [input, setInput] = useState('')

    useEffect( () => {
        document.title = 'C#'
    }, [] )

    const showStyles = value => {

        if ( value === active ){
            return "p-2 text-white ms-2 active"
        }

        return "p-2 text-white ms-2"
    }


    const showEditor = () => {
        return <Editor value={ value } language='c' onChange={ setValue } />
    }

    const inputModal = () => {

        return (
            <div className="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Input</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Enter your input here if your code needs one</p>
                    <input className="form-control my-2" placeholder="Enter input here" onChange={ e => setInput(e.target.value ) } />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="btn-close">Close</button>
                    <button type="button" className="btn btn-primary" onClick={ () => setActive(1) }>Run</button>
                </div>
                </div>
            </div>
            </div>
        )
    }

    const output = () => {

        document.getElementById('btn-close').click()

        var data = qs.stringify({
            code: value,
            language: "cs",
            input: input,
        });

        axios({
            method: 'post',
            url: "https://codex-api.herokuapp.com/",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: data,
        })
        .then( response => {

            const data = response.data
            
            if ( data.success ){
                setOutputValue(data.output)
            } else {
                setOutputValue(data)
            }

        } )
        .catch( error => {
            console.log(error)
        } )

        return (
            <div className="text-white p-2">
                { outputValue }
            </div>
        )
    }


    const showContent = () => {
        if ( active === 0 ){
            return showEditor()
        } 

        return output()
    }

    const save = () => {

        window.postMessage(value, '*')

    }

    return (
        <div className="content">
        <nav className="sticky-top">
            <div>
                <span className={ showStyles(0) } type='button' onClick={ () => setActive(0) }>Code</span>
                <span className={ showStyles(1) } type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">Output</span>
            </div>
            <div>
                <span className="material-icons text-white p-2" type='button' onClick={ save }>save</span>
            </div>
        </nav>

        <div>
            { inputModal() }
            { showContent() }
            <button className="run-btn bg-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><span className="material-icons text-white">play_arrow</span></button>
        </div>
    </div>
    )
}

export default CSharp