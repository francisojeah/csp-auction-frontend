import React from "react";

type ModalProps = {
  showModal: boolean;
  onCloseModal: () => void;
  onSaveChanges: () => void;
};

const ModalWelcome = ({
  showModal,
  onSaveChanges,
  onCloseModal,
}: ModalProps) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Art for a Cause</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onCloseModal}
                  >
                    <span className="text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className=" text-lg leading-relaxed">
                    Welcome to the CSPxYSMA silent auction platform! Explore a
                    captivating collection of exquisite artworks. To participate
                    in the auction, please log in with Google.
                  </p>

                  <p className="font-semibold my-2  text-lg leading-relaxed">
                    Why Log In?
                  </p>
                  <p className="my-2  text-lg leading-relaxed">
                    Logging in with Google provides us with your details such as
                    your name and email address. This allows us properly
                    identify different users that place bids.
                  </p>
                  <p className="font-semibold my-2  text-lg leading-relaxed">
                    Your Privacy Matters
                  </p>
                  <p className="my-2  text-lg leading-relaxed">
                    We value your privacy and handle your data securely,
                    ensuring a safe and enjoyable auction experience.
                  </p>
                  <p className="font-semibold my-2  text-lg leading-relaxed">
                    How to Bid:
                  </p>
                  <ul className="m-4  text-lg leading-relaxed list-disc">
                    <li>
                      <span className="font-semibold"> Log In:</span> Click "Log
                      In" at the top right corner to log in with Google.
                    </li>
                    <li>
                      <span className="font-semibold">Explore:</span> Discover a
                      diverse range of paintings, photography, and more.{" "}
                    </li>
                    <li>
                      <span className="font-semibold">Place Bids:</span> Enter
                      your desired bid amount, which should be higher than the
                      starting bid. You'd also be required to provide your
                      contact details - phone number{" "}
                    </li>
                    <li>
                      <span className="font-semibold">Win:</span> If your bid is
                      the highest at the end of the auction, you will be
                      contacted with the payment details. Thank you!{" "}
                    </li>
                  </ul>
                  
                  <p className="my-2  text-lg leading-relaxed">
                    Receive email notifications about your bids and any
                    outbidding.
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onCloseModal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-[#0b469c] text-white active:bg-[#0a3576] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onSaveChanges}
                  >
                    Get Started
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

export default ModalWelcome;
