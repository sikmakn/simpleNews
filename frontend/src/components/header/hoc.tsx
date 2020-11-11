import React from 'react';
import Header from './index';
import {connect} from 'react-redux';

interface HeaderHOCProps {
    user?: {
        username: string
        imgSrc?: string
    }
}

const HeaderHOC: React.FC<HeaderHOCProps> =
    ({user}) => (<Header user={user}/>);

const mapStateToProps = ({user}: any) => ({user: user.value});


export default connect(mapStateToProps)(HeaderHOC);