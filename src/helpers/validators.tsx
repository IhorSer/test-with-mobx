import * as Yup from 'yup';

export const loginValidator = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email required'),
        password: Yup.string().min(6).required('Password required')
    })

export const registerValidator = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email required'),
        password: Yup.string().min(6).required('Password required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords don\'t match')
            .required('Confirm password')
    })

export const taskCreateValidator = Yup.object ({
        title: Yup.string().min(6).max(30, 'Please, be less specific').required('Provide title for Todo'),
        description: Yup.string().min(12).max(120, 'Please, be less specific').required('Provide description for Todo')
})