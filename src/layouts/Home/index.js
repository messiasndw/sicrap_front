import React from 'react'
import AuthGrid from './Grid'
import Register from '../../views/Register/index'

const HomeLayout = (props) => {

    return (
        <>
            <AuthGrid
                topBar={props.topBar}
                main={props.main}
            />
        </>
    )

}

export default HomeLayout