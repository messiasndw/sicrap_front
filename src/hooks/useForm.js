import { useState } from 'react'

export const useForm = ({
    initialValues,
    onSubmit,
}) => {

    const [form, setForm] = useState({ ...initialValues })

    const [validation, setValidation] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(form)
    }

    const handleInputChange = (e) => {

        const input = e.target

        setForm((prevState) => (
            { ...prevState, [input.name]: input.value }
        ))

        if (!!validation) {
            for (const key in validation[input.name]) {
                console.log(key)
            }
        }

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


    return { handleSubmit, handleInputChange, form, handleSwitchChange, setForm, handleSelectChange }

}