import React from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema2 } from "../helper";

export const AddGithub = () => {
  let navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        linkedin: "",
        github: "",
      },
      validationSchema: validationSchema2,
      onSubmit: (values) => {
        const comIndex = values.linkedin.indexOf("com/in/");
        const linkedin = values.linkedin.slice(comIndex + 7);
        const comIndex2 = values.github.indexOf("github.com/");
        const github = values.github.slice(comIndex2 + 11);
        
        try {
          addDoc(collection(db, "usersDual"), {
            linkedin,
            github,
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
          <span className="text-white mt-2">Linkedin Profil Linki</span>
          <input
            className="block py-2.5 px-2 bg-gray-800 border rounded-full  w-full text-sm text-white  appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer "
            type="text"
            name="linkedin"
            placeholder="Profil linkin (Örn: www.linkedin.com/in/mucahitkok )"
            onChange={handleChange}
            value={values.linkedin ? values.linkedin : "www.linkedin.com/in/"}
            values={values.linkedin}
            autoComplete="off"
            onBlur={handleBlur}
          />
          {errors.linkedin && touched.linkedin && (
            <span className="text-red-500">{errors.linkedin}</span>
          )}
        </div>
        <div className="items-center hover:border-teal-700  mb-3 border-teal-500">
          <span className="text-white mt-2">Github Profil Linki</span>
          <input
            className="block py-2.5 px-2 bg-gray-800 border rounded-full  w-full text-sm text-white  appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer "
            type="text"
            name="github"
            placeholder="Profil linkin (Örn: https://github.com/mucahitkok )"
            onChange={handleChange}
            value={values.github ? values.github : "https://github.com/"}
            values={values.github}
            autoComplete="off"
            onBlur={handleBlur}
          />
          {errors.github && touched.github && (
            <span className="text-red-500">{errors.github}</span>
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
          Eğer githup hesabınız yoksa sizi
          <Link to="/add-linkedin">
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
        <div>https://github.com/mucahitkok</div>
      </div>
    </div>
  );
};
