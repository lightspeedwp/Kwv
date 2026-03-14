import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COLORS } from '../../constants/theme';
import { Typography } from '../common/Typography';
import { Button } from '../common/Button';

/**
 * AgeVerificationModal Component
 * 
 * Displays a modal dialog to verify the user's age.
 * 
 * Features:
 * - Checks localStorage for previous verification ('handcrafted_wines_age_verified').
 * - If not verified, shows a modal blocking access to the site.
 * - If user confirms age > 18, saves to localStorage and closes modal.
 * - If user denies, redirects to Google.
 * - Uses `motion/react` for fade/scale animations.
 * 
 * @returns {JSX.Element} The Age Verification Modal component.
 */
export const AgeVerificationModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasVerified = localStorage.getItem('handcrafted_wines_age_verified');
    if (!hasVerified) {
      setIsVisible(true);
    }
  }, []);

  /**
   * Handles the verification logic.
   * @param {boolean} isOver18 - Whether the user confirmed they are over 18.
   */
  const handleVerify = (isOver18: boolean) => {
    if (isOver18) {
      localStorage.setItem('handcrafted_wines_age_verified', 'true');
      setIsVisible(false);
    } else {
      window.location.href = 'https://www.google.com'; // Redirect away
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white max-w-md w-full p-8 md:p-12 text-center shadow-2xl"
            style={{ borderTop: `4px solid ${COLORS.wineRed}` }}
          >
            <Typography variant="h2" className="mb-2" color={COLORS.darkBrown}>Handcrafted Wines</Typography>
            <div className="w-16 h-1 bg-[#DAA520] mx-auto mb-8"></div>
            
            <Typography variant="h3" className="mb-4">Are you over 18?</Typography>
            
            <Typography variant="body" className="mb-8">
              You must be of legal drinking age in your country to enter this site.
            </Typography>

            <div className="flex flex-col gap-4">
              <Button onClick={() => handleVerify(true)} fullWidth>
                Yes, I am over 18
              </Button>
              <Button variant="outline" onClick={() => handleVerify(false)} fullWidth>
                No, I am not
              </Button>
            </div>
            
            <Typography variant="caption" className="mt-8 opacity-60">
              Enjoy Responsibly.
            </Typography>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};