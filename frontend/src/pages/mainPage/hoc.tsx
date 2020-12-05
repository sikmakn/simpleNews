import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import MainPage, {MainPageProps} from './index';
import {setTag} from '../../store/tag/actions';

interface MainPageHOCProps extends MainPageProps {
    tag?: string
    setTag: (tag?: string) => void
}

export const MainPageHOC: React.FC<MainPageHOCProps> = ({tag, setTag}) => {
    useEffect(() => setTag(tag), [tag, setTag]);
    return <MainPage/>;
}

export const mapStateToProps = (state: any, {location}: any) =>
    ({tag: (new URLSearchParams(location?.search)).get('tag') ?? undefined});


const mapDispatchToProps = {setTag};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageHOC);