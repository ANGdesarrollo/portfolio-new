import {useState} from "react";

export const useBoolean = () => {
    const [boolean, setBoolean] = useState(false);
    const handleBoolean = () => {
        setBoolean(!boolean);
    };

    return {boolean, handleBoolean};
}
