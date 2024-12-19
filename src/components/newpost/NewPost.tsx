import { FormEvent } from "react";
import classes from "./NewPost.module.css";
import { HandleFunctions } from "../../..";
import { ChangeEvent,useState } from "react"

export default function NewPost({
    onCancel,
    onAddPost
    }:HandleFunctions) {

    const [enteredBody, setEnteredBody] = useState<string>("");
    
    const [enteredTextBody, setEnteredTextBody] = useState<string>("");
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
            setEnteredBody(e.target.value)
    }
    const handleChangeTextArea =(e:ChangeEvent<HTMLTextAreaElement>) =>{
            setEnteredTextBody(e.target.value)
        }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const postData ={
                body: enteredTextBody,
                author: enteredBody,
            }
            onCancel();
            onAddPost(postData);
        }
    
    return (
    <form className={classes.form} onSubmit={handleSubmit}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={handleChangeTextArea}/>
        </p>
        <p>
            <label htmlFor="name">Input</label>
            <input id="name" required type="text" onChange={handleChange}/>
        </p>
        <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Submit Form</button>
        </p>
    </form>
    )
}
