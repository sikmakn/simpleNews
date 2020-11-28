import React, {useEffect, useState} from 'react';
import ErrorMessage from '../errorMessage';
import ErrorLayout from '../errorsLayout';
import styles from './addComment.module.scss';
import ButtonContainer from '../buttonContainer';
import defaultUserImage from '../../assets/no-image.png';
import UserImage from '../userImage';
import Loader from '../loader';
import fetchProcess from "../../types/fetching";

export interface AddCommentsProps {
    oneNewsId: string
    user: {
        username: string
        imgSrc?: string
    }
    createComment: (comment: {
        text: string
        authorUsername: string
        oneNewsId: string
    }) => void

    status?: fetchProcess
    error?: string
}

const AddComment: React.FC<AddCommentsProps> =
    ({
         user,
         oneNewsId,
         createComment,
         error,
         status
     }) => {
        const [text, setText] = useState('');
        useEffect(() => {
            if (status === fetchProcess.success) setText('')
        }, [status, setText]);
        return (<div className={styles.addContainer}>
            <UserImage src={user.imgSrc || defaultUserImage} size={70}/>
            <div>
                <input
                    type="text" placeholder="Оставьте комментарий"
                    value={text}
                    onChange={event => setText(event.target.value)}
                />
                {error && <ErrorLayout>
                    <ErrorMessage message={error}/>
                </ErrorLayout>}
                {status === fetchProcess.loading && <Loader size={50}/>}
                <ButtonContainer
                    addButtonName="Оставить комментарий"
                    onClickToCancel={() => setText('')}
                    onClickToAdd={() =>
                        createComment({
                            text,
                            oneNewsId,
                            authorUsername: user.username
                        })}
                />
            </div>
        </div>);
    }

export default AddComment;