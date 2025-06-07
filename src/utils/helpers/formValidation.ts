import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const ZIPCodeRegExp = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/
const fullNameRegExp =  /^([\w]{3,})+\s+([\w\s]{3,})+$/i

export const validationSchema = yup.object().shape({
    Email: yup.string().required('Email is required').email('Email is not valid'),
    Phone: yup.string().required('Phone number is required').matches(phoneRegExp, 'Phone number is not valid'),
    'Full name': yup.string().required('Name and surname is required').matches(fullNameRegExp, 'Name and surname is not valid'),
    'ZIP code': yup.string().required('ZIP code is required').matches(ZIPCodeRegExp, "Invalid zipcode format"),
    Date: yup.string().required('Date is required'),

    'Property size': yup.object().shape({
        label: yup.string().required('Property size is required'),
        value: yup.number().required(),
    }),
    cleaningType: yup.object().shape({
        type: yup.string().required(),
        cost: yup.number().required(),
    }),
})