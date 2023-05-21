import {motion} from "framer-motion";
const FadeInWhenVisible = ({ children }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: .7, delay: .1}}
            variants={{
                visible: { opacity: 1, y: 0},
                hidden: { opacity: 0, y: 50}
            }}
        >
            {children}
        </motion.div>
    );
}

export {FadeInWhenVisible}