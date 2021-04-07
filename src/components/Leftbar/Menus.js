import React from 'react'
import Grid from '@material-ui/core/Grid';
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

    return (
        <>
            {menus.map((menu, key) =>
            (
                <Grid key={key} item xs={12}>
                    <Link to={menu.url}>
                        <Button classes={{ root: classes.rootButton }}>
                            {menu.icon}
                            {!matches && menu.name}
                        </Button>
                    </Link>
                </Grid>
            )
            )}

        </>
    )
}

export default Menus