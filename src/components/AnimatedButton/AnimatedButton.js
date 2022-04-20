import "./styles.css";
import { useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { transition } from "./settings";
import useMeasure from "react-use-measure";


function AnimatedButton({ enter }) {
    const [ref, bounds] = useMeasure({ scroll: false });
    const [isHover, setIsHover] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const resetMousePosition = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <MotionConfig transition={transition}>

            <motion.button
                onClick={enter}
                className='button'
                drag='x'
                dragConstraints={{ left: 1, right: 0 }}
                onDrag={() => {
                    resetMousePosition();
                    setIsHover(false);
                }}
                ref={ref}
                initial={false}
                animate={isHover ? "hover" : "rest"}
                whileTap="press"
                variants={{
                    rest: { scale: 0.7 },
                    hover: { scale: 0.85 },
                    press: { scale: 0.8 }
                }}
                onHoverStart={() => {
                    resetMousePosition();
                    setIsHover(true);
                }}
                onHoverEnd={() => {
                    resetMousePosition();
                    setIsHover(false);
                }}
                onPointerMove={(e) => {
                    mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                    mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                }}
            >
                <motion.div
                    className="shapes"
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 }
                    }}
                >
                    <div className="pink blush" />
                    <div className="blue blush" />
                    <div className="container" />
                </motion.div>
                <motion.div
                    variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
                    className="label"
                >
                    ENTER
                </motion.div>
            </motion.button>
        </MotionConfig >
    );
}

export default AnimatedButton