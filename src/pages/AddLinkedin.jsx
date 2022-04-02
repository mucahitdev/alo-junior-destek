import React from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useInput } from "../components";


export const AddLinkedin = () => {
    let navigate = useNavigate();

    const [userName, userInput] = useInput({
        type: "text",
        id: "userName",
        placeholder: "Linkedin kullanıcı adın. (Örn: mucahitkok )",
    });
    const [description, descriptionInput] = useInput({
        type: "text",
        id: "description",
        placeholder: "İlgi alanın. (Örn: Front-End Developer) ",
    });
    const [fullName, fullNameInput] = useInput({
        type: "text",
        id: "fullName",
        placeholder: "İsim Soyisim (Örn: Mücahit Kökdemir)",
    });



    const sendUser = async (e) => {
        e.preventDefault();

        if (userName.length > 3 && description.length > 3 && fullName.length > 3) {
            if (userName) {
                try {
                    await addDoc(collection(db, "usersLinkedin"), {
                        userName,
                        description,
                        fullName,
                        created: Timestamp.now(),
                    });
                    navigate('/');
                } catch (err) { console.log(err) }
            }
        } else {
            return alert("Alanların hepsi dolu olmalı");
        }


    };
    return (
        <div className="px-3">




            <div className="flex flex-col justify-center  border-teal-500 py-2">
                <div className="border-b items-center hover:border-teal-700 border-teal-500">
                    {userInput}
                </div>
                <div className="border-b hover:border-teal-700 border-teal-500">
                    {fullNameInput}
                </div>
                <div className="border-b hover:border-teal-700 border-teal-500">
                    {descriptionInput}
                </div>

                <button
                    onClick={sendUser}
                    className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded mt-2"
                    type="button"
                >
                    Send User
                </button>
            </div>
        </div>
    );
};
