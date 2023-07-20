import { useEffect, useState } from "react";
import Homee from "./homee";
import ModalWelcome from "@/components/ModalWelcome";

export default function Home() {
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    closeModal();
  };

  // useEffect(() => {
  //   const visitedBefore = localStorage.getItem("visitedBefore");

  //   if (!visitedBefore) {
  //     setShowModal(true);

  //     localStorage.setItem("visitedBefore", "true");
  //   }
  // }, []);
  return (
    <main>
      <Homee />
      {showModal && (
        <ModalWelcome
          showModal={showModal}
          onCloseModal={closeModal}
          onSaveChanges={handleSaveChanges}
        />
      )}
    </main>
  );
}
