import { useEffect, useState } from 'react'

export const useForm = ({
    initialValues,
    onSubmit,
}) => {

    const [form, setForm] = useState({ ...initialValues })

    const [validation, setValidation] = useState(
        {
            name: [{ type: 'required', msg: 'Name is required!' },],

        }

    )

    const [check, setCheck] = useState(checkInitState(validation))


    useEffect(() => {
        validate2(form, validation, setValidation, setCheck)
    }, [form])

    // useEffect(() => {
    //     console.log(check)
    // }, [check])

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(form)
    }

    const handleInputChange = (e) => {

        const input = e.target

        setForm((prevState) => (
            { ...prevState, [input.name]: input.value }
        ))

        // validate(input, validation, setValidation, form)

        // console.log(validation)

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


    return { handleSubmit, handleInputChange, form, handleSwitchChange, setForm, handleSelectChange, check }

}

const validate = (input, validation, setValidation, form) => {
    if (!!validation[input.name]) {
        validation[input.name].forEach((element, index) => {
            switch (element.type) {
                case 'required':
                    if (form[input.name] == '') {
                        const newArray = validation[input.name].slice()
                        newArray[index].isValid = false
                        setValidation((...prevState) => (
                            { ...prevState, [input.name]: newArray }
                        ))
                    } else {
                        const newArray = validation[input.name].slice()
                        newArray[index].isValid = true
                        setValidation((...prevState) => (
                            { ...prevState, [input.name]: newArray }
                        ))
                    }
                    break;

                default:
                    break;
            }
        });
    }
}

const validate2 = (form, validation, setValidation, setCheck) => {
    for (const key in form) {
        if (!!validation[key]) {
            const field = key;
            validation[field].forEach((element, index) => {
                switch (element.type) {
                    case 'required':
                        if (form[field] == '') {
                            setCheck((prevState) => ({ ...prevState, [field]: { ...prevState.field, [element.type]: { isValid: false, msg: validation[field][index].msg } } }))
                            const newArray = validation[field].slice()
                            newArray[index].isValid = false
                            setValidation((prevState) => (
                                { ...prevState, [field]: newArray }
                            ))
                        } else {
                            setCheck((prevState) => ({ ...prevState, [field]: { ...prevState.field, [element.type]: { isValid: true, msg: validation[field][index].msg } } }))
                            const newArray = validation[field].slice()
                            newArray[index].isValid = true
                            setValidation((prevState) => (
                                { ...prevState, [field]: newArray }
                            ))
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
            let newobj = {[key]:{}}
            element.forEach((element,index) => {
                newobj[key][element.type] = {isValid: false, msg: validation[key][index].msg}
                // newobj.isValid = false
            });
            gobj = { ...gobj, ...newobj }

        }
    }
    return gobj
}