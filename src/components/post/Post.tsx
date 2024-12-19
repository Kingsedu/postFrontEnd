import classes from "./Post.module.css"
import { PropsPass } from '../../../index';
export default function Post({ author, body}: PropsPass) {

    return (
    <div className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
    </div>
    )
}
