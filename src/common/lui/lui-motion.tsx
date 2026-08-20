import { AnimatePresence, motion } from "framer-motion";

export const InPage = ({
  children,
  once,
}: {
  children: React.ReactElement;
  once?: boolean;
}) => {
  return (
    <>
      <motion.div
        layout
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileTap={{ x: 4 }}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        viewport={{ amount: 0.4, once: !once }}
        exit={{ x: -2 }}
        whileFocus={{ x: 4 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export const ZInMotion = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ z: -40, opacity: 0 }}
          whileInView={{
            z: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          whileTap={{ z: 2 }}
          whileHover={{ z: 2 }}
          viewport={{ amount: 0, once: true }}
          exit={{ z: -2 }}
          whileFocus={{ z: -20, opacity: 0.4 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export const VibrationX = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: [0, -5, 5, -5, 5, 0] }}
          transition={{
            duration: 0.3,
            delay: 1,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
          whileTap={{ z: -2, y: -2 }}
          whileHover={{ z: -2, y: -2 }}
          viewport={{ amount: 0.8 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
