import React from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "../helper";

export const AddLinkedin = () => {
  let navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        fullName: "",
        description: "",
        userName: "",
      },
      validationSchema,
      onSubmit: (values) => {
        const comIndex = values.userName.indexOf("com/in/");
        const newUserName = values.userName.slice(comIndex + 7);
        try {
          addDoc(collection(db, "usersLinkedin"), {
            userName: newUserName,
            description: values.description,
            fullName: values.fullName,
            created: Timestamp.now(),
          });
          navigate("/");
        } catch (err) {
          console.log(err);
        }
      },
    });

  return (
    <div className="px-3">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center  border-teal-500 py-2"
      >
        <div className="items-center hover:border-teal-700  mb-3 border-teal-500">
          <span className="text-white mt-2">Ad Soyad</span>
          <input
            className="block py-2.5 px-2  w-full text-sm bg-gray-800 border rounded-full text-white    appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer "
            type="text"
            name="fullName"
            placeholder="Örn: Mücahit Kökdemir"
            onChange={handleChange}
            values={values.fullName}
            autoComplete="off"
            onBlur={handleBlur}
          />
          {errors.fullName && touched.fullName && (
            <span className="text-red-500">{errors.fullName}</span>
          )}
        </div>
        <div className="items-center hover:border-teal-700  mb-3 border-teal-500">
          <span className="text-white mt-2">Profil linkin</span>
          <input
            className="block py-2.5 px-2 bg-gray-800 border rounded-full  w-full text-sm text-white  appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer "
            type="text"
            name="userName"
            placeholder="Profil linkin (Örn: www.linkedin.com/in/mucahitkok )"
            onChange={handleChange}
            value={values.userName ? values.userName : "www.linkedin.com/in/"}
            values={values.userName}
            autoComplete="off"
            onBlur={handleBlur}
          />
          {errors.userName && touched.userName && (
            <span className="text-red-500">{errors.userName}</span>
          )}
        </div>
        <div className=" items-center hover:border-teal-700 mb-3  border-teal-500">
          <span className="text-white mt-2">İlgi Alanın</span>
          <input
            className="block py-2.5 px-2  w-full text-sm bg-gray-800 border rounded-full text-white    appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer "
            type="text"
            name="description"
            placeholder="Örn: Front-End Developer"
            onChange={handleChange}
            values={values.description}
            autoComplete="off"
            onBlur={handleBlur}
          />
          {errors.description && touched.description && (
            <span className="text-red-500">{errors.description}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded mt-2"
        >
          Send User
        </button>
      </form>
      <div className="text-white">
        <div className="text-red-400"> Uyarı </div>
        <div>
          Eğer githup hesabınızda varsa sizi
          <Link to="/add-github">
            <span className="text-green-400"> buraya </span>
          </Link>
          alalım.
        </div>
      </div>
      <div className="text-white">
        <div className="text-orange-400"> Bilgilendirme </div>
        <div>
          Link kısmına varsayılan value nun devamına kullanıcı adınızı
          ekleyebilirsiniz.
        </div>
        <div>
          <span className="text-orange-400">↓</span> Kabul edilen link
          formatları <span className="text-orange-400">↓</span>
        </div>
        <div>www.linkedin.com/in/mucahitkok</div>
        <div>https://www.linkedin.com/in/mucahitkok</div>
      </div>
    </div>
  );
};
