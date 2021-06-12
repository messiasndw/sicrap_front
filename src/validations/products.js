export const filter = {

}

export const newFormValidation = {
    name: [
        {type: 'min:3', msg: '3 min characters!'},
        {type: 'required',msg: 'Name is required!'},
        
    ],
    code: [
        {type: 'required', msg: 'Code is required!'},
        {type: 'min:3', msg: '3 min characters!'}
    ]
}