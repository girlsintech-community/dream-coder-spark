import { useEffect, useState } from "react";
import santaImage from "@/assets/santa-follower.png";

const SantaCursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{
        left: position.x + 15,
        top: position.y + 15,
        transform: "translate(0, 0)",
      }}
    >
      <img
        src={santaImage}
        alt=""
        className="w-10 h-10 opacity-70"
        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
      />
    </div>
  );
};

export default SantaCursorFollower;
