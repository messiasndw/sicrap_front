

export const profileFormValidation = {
    name: [
        {type: 'required',msg: 'Name is required!'},
        {type: 'min:3', msg: '3 min characters!'},
    ],
    email: [
        {type: 'required', msg: 'Email is required!'},
    ],

}