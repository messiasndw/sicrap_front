import React,{useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/index'
import Leftbar from '../../components/Leftbar/index'
import {menusSidebar} from './config'
import AuthGrid from './Grid'
import Profile from '../../views/Profile/index'


const AuthLayout = ({main,header}) => {

    useEffect(()=>{
        console.log("montou")
    },[])

    const [sideBar,setSidebar] = useState(false)
    const [sb,setSb] = useState(false)
    const [s,set] = useState(false)
    return(
        <>
        <AuthGrid
            leftbar={<Leftbar isOpen={sideBar} menusSidebar={menusSidebar}/>}
            header={header}
            main={main}
            rightbar={null}
        />
            
        </>
    )

}

export default AuthLayout

