import React, { useState, useEffect } from 'react'
import Leftbar from '../../components/Leftbar/index'
import AuthGrid from './Grid'
import LeftbarSkeleton from '../../components/Leftbar/Skeleton/index'
import Skeleton from '@material-ui/lab/Skeleton';
import {useSelector, useDispatch} from 'react-redux'
import {me} from '@redux-actions'

const AuthLayout = ({ main, header }) => {


    const dispatch = useDispatch()
    const isAuthenticating = useSelector(({User}) => User.isAuthenticating)
    const isAuth = useSelector(({User}) => User.isAuth)

    // WHEN USER REFRESHES THE PAGE, THIS REQUEST SHOULD BE SEND TO SERVER TO VALIDATE THE USER TOKEN
    useEffect(() => {
        dispatch(me())
    }, [])

    const [sideBar, setSidebar] = useState([])
    const [sb, setSb] = useState(false)
    const [s, set] = useState(false)
    return (
        <>
            {
                isAuthenticating || !isAuth  ?
                <AuthGrid
                    leftbar={<LeftbarSkeleton menusSidebar={[{}, {}, {}]} isOpen={sideBar} />}
                    header={<Skeleton variant="text" width="460px" height="70px" />}
                    main={<Skeleton variant="rect" width="100%" height="100%" />}
                    rightbar={null}
                />
                :
            <AuthGrid
                leftbar={<Leftbar />}
                header={header}
                main={main}
                rightbar={null}
            />
            }

        </>
    )

}

export default AuthLayout

