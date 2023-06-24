import React, { useState } from "react";

type ModalInputProps = {
  showModal: boolean;
  title: string;
  message: string;
  buttontext: string;
  onCloseModal: () => void;
  onSaveChanges: (e: any, text: string) => void;
};

const ModalInput = ({
  showModal,
  title,
  message,
  buttontext,
  onCloseModal,
  onSaveChanges,
}: ModalInputProps) => {
  const [inputText, setInputText] = useState("");
  const [errorr, setErrorr] = useState(false);
  const handleInputChange = (e: any) => {
    setInputText(e.target.value);
  };

  const handleSaveClick = (e: any) => {
    e.preventDefault();
    if (inputText.length < 11) {
      setErrorr(true);
    } else {
      setErrorr(false);
      onSaveChanges(e, inputText);
      setInputText("");
      onCloseModal();
    }
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setErrorr(false);
                      setInputText("");
                      onCloseModal();
                    }}
                  >
                    <span className="text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {message}
                  </p>
                  <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:bordwe-blue-500 w-full"
                  />
                  {errorr && (
                    <p className="my-4 text-red-500 text-lg leading-relaxed">
                      Enter a valid phone number
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setErrorr(false);
                      setInputText("");
                      onCloseModal();
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#0b469c] text-white active:bg-[#0a3576] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSaveClick}
                  >
                    {buttontext}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalInput;
