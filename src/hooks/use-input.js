import { useRef } from "react";
//validateValue is a fuction which validates the the value as per that condition /

const useInput = () => {
    const inputValueRef = useRef("");

    const inputValidity = (inputValueRef) => {
        const validity = inputValueRef.current.value.trim().length === "0";
        return validity;
    }
    const resetValue = (inputValueRef) => {
        inputValueRef.current.value = "";
    }
    return {
        valueRef: inputValueRef,
        inputValidity,
        resetValue
    }
}

export default useInput;