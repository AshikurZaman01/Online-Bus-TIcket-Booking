import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SearchBar = () => {
    const [placeholderText, setPlaceholderText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [phraseIndex, setPhraseIndex] = useState(0);

    const phrases = ["Search for a place", "Find your destination", "Explore locations"];
    const typingSpeed = 100; // Speed for typing
    const deletingSpeed = 50; // Speed for deleting
    const pauseTime = 1000; // Pause before deleting or moving to the next phrase

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        let timeout;

        if (!isDeleting && charIndex < currentPhrase.length) {
            // Typing
            timeout = setTimeout(() => {
                setPlaceholderText((prev) => prev + currentPhrase[charIndex]);
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            // Deleting
            timeout = setTimeout(() => {
                setPlaceholderText((prev) => prev.slice(0, -1));
                setCharIndex(charIndex - 1);
            }, deletingSpeed);
        } else if (charIndex === currentPhrase.length && !isDeleting) {
            // Pause after typing the full phrase
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && charIndex === 0) {
            // Move to the next phrase
            setIsDeleting(false);
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, phrases, phraseIndex]);

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="w-full p-3 top-40 absolute z-50"
            >
                <div className="w-[30%] mx-auto bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl">
                    <input
                        type="text"
                        placeholder={placeholderText}
                        className="w-full p-3 text-lg outline-none bg-transparent px-7"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default SearchBar;
