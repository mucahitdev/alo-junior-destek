import { useState } from "react";

export const useInput = ({ type, placeholder, id }) =>{
    const [value, setValue] = useState("");
    const input = (
        <input
            required
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type={type}
            className="block py-2.5 px-0 w-full text-sm text-gray-900  border-b border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
            autoComplete="off"
        />
    );
    return [value, input];
}