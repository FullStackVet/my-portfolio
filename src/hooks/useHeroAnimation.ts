import { useState, useEffect } from "react";
import { statusItems } from "../data/profile";

export const useHeroAnimation = () => {
  const [firstNameVisible, setFirstNameVisible] = useState(false);
  const [lastNameVisible, setLastNameVisible] = useState(false);
  const [lastNameReversed, setLastNameReversed] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(0);

  useEffect(() => {
    // First name animation
    const firstNameTimer = setTimeout(() => setFirstNameVisible(true), 800);

    // Last name animation
    const lastNameTimer = setTimeout(() => {
      setLastNameVisible(true);

      // Correct last name after pause
      const correctTimer = setTimeout(() => {
        setIsFlipping(true);

        // After animation completes, update the name
        const finishFlipTimer = setTimeout(() => {
          setLastNameReversed(false);
          setIsFlipping(false);
        }, 1200);

        return () => clearTimeout(finishFlipTimer);
      }, 2000);

      return () => clearTimeout(correctTimer);
    }, 1800);

    // Cycle through status messages
    const statusInterval = setInterval(() => {
      setCurrentStatus((prev) => (prev + 1) % statusItems.length);
    }, 5000);

    return () => {
      clearTimeout(firstNameTimer);
      clearTimeout(lastNameTimer);
      clearInterval(statusInterval);
    };
  }, []);

  return {
    firstNameVisible,
    lastNameVisible,
    lastNameReversed,
    currentStatus,
    isFlipping,
  };
};
