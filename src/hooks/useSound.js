import { useCallback } from 'react';

// Short "Pop" sound base64
const POP_SOUND = "data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU"; // Placeholder, real base64 needed

// Short "Click" sound
const CLICK_SOUND = "data:audio/wav;base64,UklGRi4AAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA="; // Placeholder

export const useSound = () => {
    const playHover = useCallback(() => {
        // Subtle high frequency tick
        const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"); // Using a CDN for reliability
        audio.volume = 0.05;
        audio.play().catch(e => console.log("Audio play failed interaction", e));
    }, []);

    const playClick = useCallback(() => {
        const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
        audio.volume = 0.1;
        audio.play().catch(e => console.log("Audio play failed interaction", e));
    }, []);

    return { playHover, playClick };
};
