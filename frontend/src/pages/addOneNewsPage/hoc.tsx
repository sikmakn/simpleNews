import React from 'react';
import AddOneNewsPage from './index';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {mainPagePath, noMatchPagePath} from '../../paths';
import {createOneNews} from '../../store/oneNews/actions';

interface AddOneNewsPageHOCProps {
    user?: any
    save: (oneNews: {
        img: File
        tag: string
        title: string
        text: string
        authorUsername: string
        redirect: (path: string) => void,
    }) => void,
    history: any
}

const AddOneNewsPageHOC: React.FC<AddOneNewsPageHOCProps> = ({user, save, history}) =>
    user ?
        <AddOneNewsPage
            save={(oneNews: {
                img: File
                tag: string
                title: string
                text: string
            }) => {
                save({
                    authorUsername: user.username,
                    ...oneNews,
                    redirect:history.push
                });
            }}
            cancel={() => history.push(mainPagePath())}
        /> :
        <Redirect to={noMatchPagePath()}/>;


const mapStateToProps = ({user}: any, ownProps: any) => ({
    user: user.value,
    history: ownProps.history
});

const mapDispatchToProps = {save: createOneNews};

export default connect(mapStateToProps, mapDispatchToProps)(AddOneNewsPageHOC);