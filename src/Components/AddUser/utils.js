import * as yup from 'yup';

export const websiteRegex = /((?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
export const phoneRegex = /^[0-9]\d{2}-[0-9]\d{2}-\d{4}$/;

export const initialValues = {
    fullname: '',
    username: '',
    email: '',
    phone: '',
    website: ''
}


export const addUserSchema = yup.object().shape({
    fullname: yup.string().required('Full Name required'),
    username: yup.string().required('Username required'),
    email: yup.string().email().required('Email Required'),
    phone: yup.string().matches(phoneRegex, { message: 'should be in this format xxx-xxx-xxxx'}).required('Phone Number Required'),
    website: yup.string().matches(websiteRegex, { message: 'should be in this format example.com'}).required('Website required')
});