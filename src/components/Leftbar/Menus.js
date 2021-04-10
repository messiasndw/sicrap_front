import React, { useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CategoryIcon from '@material-ui/icons/Category';
import Button from '@material-ui/core/Button';
import useStyles from './styles'
import {Link} from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const Menus = (props) => {

    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const menus = [
        { name: "PROFILE", url: "/profile", icon: <AccountCircleIcon classes={{ root: classes.rootIcon }} /> },
        { name: "PRODUCTS", url: "/products", icon: <LibraryBooksIcon classes={{ root: classes.rootIcon }} /> },
        { name: "CATEGORIES", url: "/categories", icon: <CategoryIcon classes={{ root: classes.rootIcon }} /> },
        { name: "ORDERS", url: "/orders", icon: <AccountCircleIcon classes={{ root: classes.rootIcon }} /> },
    ]

    const [activeMenu,setActiveMenu] = useState(window.location.pathname.replace('/','').toUpperCase())

    return (
        <div style={{textAlign:"center"}}>
            <ul style={{padding:"0px",margin:"0px",textAlign:"left",display:"inline-block", listStyle:"none"}}>
            {menus.map((menu, key) =>
            (
                <li style={{marginBottom:"15px"}} key={key} >
                    <Link to={menu.url}>
                        <Button onClick={() => setActiveMenu(menu.name)} 
                            classes={ activeMenu == menu.name ? { root: classes.rootButtonActive } : {root:classes.rootButton}}
                        >
                            {menu.icon}
                            {!matches && menu.name}
                        </Button>
                    </Link>
                </li>
            )
            )}
            </ul>
        </div>
    )
}

export default Menus