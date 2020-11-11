import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import MainPage, {MainPageProps} from './index';
import {setTag} from '../../store/tag/actions';

interface MainPageHOCProps extends MainPageProps {
    tag?: string
    setTag: (tag?: string) => void
}

const MainPageHOC: React.FC<MainPageHOCProps> = ({tag, setTag}) => {
    useEffect(() => setTag(tag), [tag]);
    return <MainPage/>;
}

const mapStateToProps = (state: any, ownProps: any) =>
    ({tag: ownProps.match.params.tag});


const mapDispatchToProps = {setTag};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageHOC);