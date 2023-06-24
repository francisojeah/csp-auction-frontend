import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";

type Props = {
  title: string;
  message: string;
};

const Notifications = ({ title, message }: Props) => {
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const closeTimeout = setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    return () => {
      clearTimeout(closeTimeout);
    };
  }, []);

  const handleClose = () => {
    setShowNotification(false);
  };

  if (!showNotification) {
    return null;
  }
  return (
    <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500">
      <span className="text-xl inline-block mr-5 align-middle">
        <FaBell />
      </span>
      <span className="inline-block align-middlemr-8">
        <b className="capitalize">{title}</b> {message}
      </span>
      <button
        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        onClick={handleClose}
      >
        <span>&times;</span>
      </button>
    </div>
  );
};

export default Notifications;
