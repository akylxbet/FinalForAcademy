import React from 'react';
import s from "@/components/Form/Form.module.scss";
import Form from "@/components/Form/Form";
import { motion } from 'framer-motion';
const index = () => {
    return (
        <motion.div className={s.container}
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4 }}
        >
            <div className={s.content}>
                <Form/>
            </div>
           
        </motion.div>
    );
};

export default index;