import React, { useEffect, useRef } from "react";

const AutoFocusableInput: React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (props) => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!ref.current) {
            return;
        }
        ref.current.focus();
        ref.current.select();
    }, []);

    return <input ref={ref}{...props} className="form-control" />
}

export default AutoFocusableInput;