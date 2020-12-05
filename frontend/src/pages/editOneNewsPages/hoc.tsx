import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import CommonEditPage from '../../components/commonEditPage';
import ErrorMessage from '../../components/errorMessage';
import ErrorLayout from '../../components/errorsLayout';
import Loader from '../../components/loader';
import {noMatchPagePath, oneNewsPagePath} from '../../paths';
import {cleanOneNewsStatus, loadOneNews, updateOneNews} from '../../store/oneNews/actions';
import fetchProcess from '../../types/fetching';

interface EditOneNewsPageHOCProps {
    username?: string
    oneNewsId: string
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
        img?: File
        tag: string
        title: string
        text: string
    }) => void,
    cleanStatus: () => void
    history: any
    loadingError?: string
}

export const EditOneNewsPageHOC: React.FC<EditOneNewsPageHOCProps> =
    ({
         username,
         oneNewsId,
         oneNews,
         loadOneNews,
         save,
         history,
         loadingError,
         ...props
     }) => {
        useEffect(() => loadOneNews(oneNewsId), [oneNewsId, loadOneNews]);

        if (!username)
            return (<Redirect to={noMatchPagePath()}/>);

        if (!oneNews) {
            if (loadingError)//todo add loading error component
                return (<ErrorLayout>
                    <ErrorMessage message={loadingError}/>
                </ErrorLayout>);
            return (<Loader size={300}/>);
        }

        if (oneNews.authorId !== username)
            return <Redirect to={noMatchPagePath()}/>;

        return (<CommonEditPage
            {...props}
            oneNewsId={oneNewsId}
            oneNews={oneNews}
            save={(n: { img?: File, tag: string, title: string, text: string }) =>
                save({...n, id: oneNewsId})}
            cancel={() => history.push(oneNewsPagePath(oneNews.id))}
        />);
    };

export const mapStateToProps = ({user, oneNews}: any, {match, history}: any) =>
    ({
        oneNewsId: match.params.id,
        history: history,
        username: user.value?.username,
        oneNews: oneNews.value,
        status: oneNews.updatingStatus,
        error: oneNews.updatingError,
        loadingError: oneNews.loadingError,
    });

export const mapDispatchToProps = {
    loadOneNews,
    save: updateOneNews,
    cleanStatus: cleanOneNewsStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditOneNewsPageHOC);