

export type PropsPass ={
    author: string;
    body: string;
}
export type HandleFunctions = {
    onCancel : () => void;
    onAddPost: (postData: {body:string, author:string}) => void;
    onStopPosting?: () => void;
}
export interface ChildrenReact{
    children: React.ReactNode;
}
export interface ModalProps extends ChildrenReact{
    propHideModalHandler: () => void;
}
export interface OncreateHandle {
    onCreatePost : () => void;
}

export interface PostListProps{
    isPosting: boolean;
    onStopPosting: () => void;
    enteredBody?: string;
    enteredTextBody?: string;
    onCancel?: () => void;
}