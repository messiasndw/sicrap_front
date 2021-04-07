import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/index'
import Leftbar from '../../components/Leftbar/index'
import { menusSidebar } from './config'
import AuthGrid from './Grid'
import Profile from '../../views/Profile/index'
import LeftbarSkeleton from '../../components/Leftbar/Skeleton/index'
import Skeleton from '@material-ui/lab/Skeleton';

const AuthLayout = ({ main, header }) => {

    useEffect(() => {
        console.log("montou")
    }, [])

    const [sideBar, setSidebar] = useState(false)
    const [sb, setSb] = useState(false)
    const [s, set] = useState(false)
    return (
        <>
            {
                false ?
                <AuthGrid
                    leftbar={<LeftbarSkeleton isOpen={sideBar} menusSidebar={menusSidebar} />}
                    header={<Skeleton variant="text" width="460px" height="70px" />}
                    main={<Skeleton variant="rect" width="100%" height="100%" />}
                    rightbar={null}
                />
                :
            <AuthGrid
                leftbar={<Leftbar isOpen={sideBar} menusSidebar={menusSidebar} />}
                header={header}
                main={main}
                rightbar={null}
            />
            }

        </>
    )

}

export default AuthLayout

