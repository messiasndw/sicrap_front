import alertContext from '../context/alertContext'
import {useContext} from 'react'

export const useAlertDialog = () => {

    const alert = useContext(alertContext)

    return ({title,body, onClose = () => {}, onConfirm = () => {}} = {}) => {
        alert.setOpen(true)
        alert.setTitle(title)
        alert.setBody(body)
        alert.setActions((prevState) => ({...prevState, onClose: () => {onClose()}, onConfirm: () => {onConfirm()}}))
        // alert.setState({
        //     body,
        //     title
        // })
        // // alert.body(body)
    }

}
