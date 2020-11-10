import React from 'react';
import Header from '../header';
import {connect} from 'react-redux';

interface HeaderHOCProps {
    user?: {
        username: string
        imgSrc?: string
    }
}

const HeaderHOC: React.FC<HeaderHOCProps> =
    ({user}) => (<Header user={user}/>);

const mapStateToProps = ({signUpForm: {user}}: any) => ({user});


export default connect(mapStateToProps)(HeaderHOC);