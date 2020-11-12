import React, {useState} from 'react';
import styles from './addComment.module.scss';
import ButtonContainer from '../buttonContainer';
import defaultUserImage from '../../assets/no-image.png';
import UserImage from '../userImage';

export interface AddCommentsProps {
    oneNewsId?: string
    user: {
        username: string
        imgSrc?: string
    }
    createComment: (comment: {
        text: string
        authorId: string
        oneNewsId: string
    }) => void
}

const AddComment: React.FC<AddCommentsProps> =
    ({user, oneNewsId, createComment}) => {
        const [text, setText] = useState('');
        return (<div className={styles.addContainer}>
            <UserImage src={user.imgSrc || defaultUserImage} size={70}/>
            <div>
                <input
                    type="text" placeholder="Оставьте комментарий"
                    value={text}
                    onChange={event => setText(event.target.value)}
                />
                {oneNewsId &&
                <ButtonContainer
                    addButtonName="Оставить комментарий"
                    onClickToCancel={() => setText('')}
                    onClickToAdd={() => {
                        createComment({
                            text,
                            oneNewsId,
                            authorId: user?.username
                        });
                        setText('');
                    }}
                />}
            </div>
        </div>);
    }

export default AddComment;