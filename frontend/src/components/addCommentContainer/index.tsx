import React from 'react';
import AddCommentHOC from '../addComment/hoc';
import NotSignedAddComment from '../notSignedAddComment';

export interface AddCommentContainerProps {
    isSignedIn: boolean
}

const AddCommentContainer: React.FC<AddCommentContainerProps> =
    ({isSignedIn}) =>
        isSignedIn ? <AddCommentHOC/> : <NotSignedAddComment/>;

export default AddCommentContainer;