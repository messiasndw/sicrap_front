import { useEffect, useState, useCallback, useMemo } from 'react'

export const useForm = ({
    initialValues,
    onSubmit,
    validation
}) => {

    const [form, setForm] = useState({ ...initialValues })

    const [check, setCheck] = useState(checkInitState(validation))
    const [showMessages, setShowMessages] = useState(false)
    const [showErrors, setShowErrors] = useState(false)
    const [val, setVal] = useState({
        isAllValid: () => { },
        getMessage: (field) => { }
    })

    const v = {
        isValid: (field) => {
            
            for (const obj in check[field]) {
                const fieldValidation = check[field][obj];
                if (!showErrors) {
                    return true
                } else if (showErrors && !fieldValidation.isValid) {
                    return false
                }
            }
            return true
        },
        isAllValid: (gobj = check) => {
            let result = false
            for (const formField in gobj) {
                if (Object.hasOwnProperty.call(gobj, formField)) {
                    const field = gobj[formField];
                    for (const key in field) {
                        if (Object.hasOwnProperty.call(field, key)) {
                            const type = field[key];
                            if (type.isValid === false) {
                                return false
                            } else {
                                result = true
                            }
                        }
                    }
                }
            }
            return result
        },
        getMessage: (field) => {
            let result = null
            for (const obj in check[field]) {
                const fieldValidation = check[field][obj];
                if (!check[field][obj].isValid && showMessages) {
                    return check[field][obj].msg
                } else {
                    result = null
                }
            }
            return result
        }
    }

    useEffect(() => {
        validateFields(form, validation, setValidation, setCheck)
    }, [form])

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowMessages(true)
        setShowErrors(true)
        onSubmit(form, v)
    }
    const handleInputChange = (e) => {
        const input = e.target
        setForm((prevState) => (
            { ...prevState, [input.name]: input.value }
        ))

    }
    const handleSelectChange = (e, input, reason) => {
        setForm((prevState) => (
            { ...prevState, [input.name]: input.value }
        ))

    }
    const handleSwitchChange = (e) => {
        setForm((prevState) => (
            { ...prevState, [e.target.name]: e.target.checked ? 1 : 0 }
        ))
    }

    return { handleSubmit, handleInputChange, form, handleSwitchChange, setForm, handleSelectChange, check, v }

}

const validateFields = (form, validation, setValidation, setCheck) => {
    for (const key in form) {
        if (!!validation[key]) {
            const field = key;
            validation[field].forEach((element, index) => {
                const validationType = element.type.replace(/[^A-Za-z]+/g, '');
                switch (validationType) {
                    case 'required':
                        if (form[field] == '') {
                            setCheck((prevState) => ({ ...prevState, [field]: { ...prevState[field], [element.type]: { isValid: false, msg: validation[field][index].msg } } }))
                            const newArray = validation[field].slice()
                            newArray[index].isValid = false
                            // setValidation((prevState) => (
                            //     { ...prevState, [field]: newArray }
                            // ))
                        } else {
                            setCheck((prevState) => ({ ...prevState, [field]: { ...prevState[field], [element.type]: { isValid: true, msg: validation[field][index].msg } } }))
                            const newArray = validation[field].slice()
                            newArray[index].isValid = true
                            // setValidation((prevState) => (
                            //     { ...prevState, [field]: newArray }
                            // ))
                        }
                        break;
                    case 'min':
                        const array = element.type.split(':')
                        if (form[field].length < array[1]) {
                            setCheck((prevState) => ({ ...prevState, [field]: { ...prevState[field], [element.type]: { isValid: false, msg: validation[field][index].msg } } }))
                        } else {
                            setCheck((prevState) => ({ ...prevState, [field]: { ...prevState[field], [element.type]: { isValid: true, msg: validation[field][index].msg } } }))
                        }
                        break;
                    default:
                        break;
                }
            });
        }
    }
}

const checkInitState = (validation) => {
    let gobj = {}
    for (const key in validation) {
        if (Object.hasOwnProperty.call(validation, key)) {
            const element = validation[key];
            let newobj = { [key]: {} }
            element.forEach((element, index) => {
                newobj[key][element.type] = { isValid: false, msg: validation[key][index].msg }
                // newobj.isValid = false
            });
            gobj = { ...gobj, ...newobj }

        }
    }
    return gobj
}
