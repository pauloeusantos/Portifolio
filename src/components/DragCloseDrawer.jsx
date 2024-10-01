import React from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useDragControls, useMotionValue, useAnimate } from "framer-motion";

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/50"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full rounded-t-3xl bg-neutral-900" 
            style={{ y }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full  active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full hide-scrollbar p-4 pt-12 overflow-auto"> 
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default DragCloseDrawer;
