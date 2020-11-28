import React, {useEffect} from 'react';
import CommonEditPage from '../../components/commonEditPage';
import {cleanOneNewsStatus, loadOneNews, updateOneNews} from '../../store/oneNews/actions';
import {Redirect} from 'react-router-dom';
import {noMatchPagePath, oneNewsPagePath} from '../../paths';
import {connect} from 'react-redux';
import Loader from '../../components/loader';
import fetchProcess from '../../types/fetching';

interface EditOneNewsPageHOCProps {
    username?: string
    oneNewsId:string
    loadOneNews: (id: string) => void
    status?: fetchProcess
    error?: string
    oneNews?: {
        id: string
        imgSrc: string
        tag: string
        title: string
        text: string
        authorId: string
    }
    save: (oneNews: {
        id: string
        img: File
        tag: string
        title: string
        text: string
    }) => void,
    cleanStatus: () => void
    history: any
}

const EditOneNewsPageHOC: React.FC<EditOneNewsPageHOCProps> =
    ({
         username,
         oneNewsId,
         oneNews,
         loadOneNews,
         save,
         history,
         ...props
     }) => {
        useEffect(() => loadOneNews(oneNewsId), [oneNewsId, loadOneNews]);

        if (!username)
            return <Redirect to={noMatchPagePath()}/>;

        if (!oneNews)
            return (<Loader size={300}/>);

        if (oneNews.authorId !== username)
            return <Redirect to={noMatchPagePath()}/>;

        return (<CommonEditPage
            {...props}
            oneNewsId={oneNewsId}
            oneNews={oneNews}
            save={
                (n: {
                    img: File
                    tag: string
                    title: string
                    text: string
                }) => save({...n, id:oneNewsId})
            }
            cancel={() => history.push(oneNewsPagePath(oneNews.id))}
        />);
    }

const mapStateToProps = ({user, oneNews}: any, ownProps: any) =>
    ({
        oneNewsId: ownProps.match?.params?.id,
        username: user.value?.username,
        oneNews: oneNews.value,
        history: ownProps.history,
        status: oneNews.updatingStatus,
        error: oneNews.updatingError,
    });

const mapDispatchToProps = {
    loadOneNews,
    save: updateOneNews,
    cleanStatus: cleanOneNewsStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditOneNewsPageHOC);