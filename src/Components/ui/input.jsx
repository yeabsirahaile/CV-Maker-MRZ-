import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, value, nam, ...props }, ref) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
      if (nam !== undefined && inputValue === "") {
        setInputValue(nam);
      }
    }, [nam, inputValue]);

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    return (
      <input
        value={value !== undefined ? value : inputValue}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
