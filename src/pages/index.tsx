import { useEffect, useState } from "react";
import Homee from "./homee";
import ModalWelcome from "@/components/ModalWelcome";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    closeModal();
  };

  useEffect(() => {
    const visitedBefore = sessionStorage.getItem("modalShownBefore");

    if (!visitedBefore) {
      setShowModal(true);

      sessionStorage.setItem("modalShownBefore", "true");
    }
  }, []);
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
