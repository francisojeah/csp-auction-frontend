import * as Yup from 'yup';

export const GenerateSchema = Yup.object().shape({
    fullname: Yup.string()
        .required('No password provided.')
        .matches(/[a-zA-Z]/, 'Can only contain Latin letters.'),
    email: Yup.string().email().required('Email is required'),
});

export const RegisterUsersSchema = Yup.object().shape({
    jobId: Yup.string().required('Select a job'),
    msg: Yup.string().required('Insert a message'),
    subject: Yup.string().required('Email subject is empty'),
});

export const RegistrationSchema = Yup.object().shape({
    email: Yup.string().required('Insert your email'),
    password: Yup.string().required('Please insert your password'),
    firstname: Yup.string().required('Please insert your firstname'),
    lastname: Yup.string().required('Please insert your lastname'),
});

export const SubmitSchema = Yup.object().shape({
    link: Yup.string().required('Please insert your submission link'),
});

export const UserSignupSchema = Yup.object().shape({
    email: Yup.string().required('Insert your email'),
    password: Yup.string().required('Please insert your password').min(8, 'Password should be at least 8 characters long'),
    cpassword: Yup.string()
        .required('Please confirm your password').min(8, 'Password should be at least 8 characters long')
        // @ts-ignore
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    agree: Yup.boolean().oneOf(
        [true],
        'You must agree to the terms and conditions',
    ),
});

export const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Insert your email'),
    password: Yup.string().required('Please insert your password').min(6, 'Password should be at least 6 characters long'),
    loginAlways: Yup.boolean(),
});

export const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Insert your email'),
});

export const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string().required('Insert your password').min(8, 'Password should be at least 8 characters long'),
    cpassword: Yup.string()
        .required('Please confirm your password').min(8, 'Password should be at least 8 characters long')
        // @ts-ignore
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});




