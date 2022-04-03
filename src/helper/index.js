import * as Yup from 'yup';


export const validationSchema = Yup.object({
	userName: Yup.string().required("Zorunlu alan").matches(
        /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/,
        "Girdiğin url Linkedin profil formatına ait değil"
    ).required('Zorunlu alan'),
	description: Yup.string().required("Zorunlu alan").min(5,'Minimum 5 karakter olmalı').max(35,'En fazla 35 karakter olabilir'),
	fullName: Yup.string().required('Zorunlu alan').min(3,'Minimum 3 karakter olmalı').max(22,'En fazla 22 karakter olabilir'),
});