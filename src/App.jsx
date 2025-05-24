import { useRef, useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const OTP_DIGITS_COUNT = 5;
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    const newValue = value.trim();
    if (isNaN(newValue)) return;
    console.log(newValue);
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    console.log(e);

    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  const refArr = useRef([]);

  return (
    <div className="text-white border-[2px] rounded-2xl flex items-center min-h-[500px] mt-28 bg-gray-950">
      <div className="m-20">
        <h1 className="text-5xl">OTP Validation</h1>
        <div className="mt-9">
          {inputArr.map((input, index) => {
            return (
              <input
                type="text"
                key={index}
                value={inputArr[index]}
                className="p-2 border-[2px] m-2 w-14 h-14 text-3xl text-center rounded-[12px] "
                onChange={(e) => handleOnChange(e.target.value, index)}
                ref={(input) => {
                  refArr.current[index] = input;
                }}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
