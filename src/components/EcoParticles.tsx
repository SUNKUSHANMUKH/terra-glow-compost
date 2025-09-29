import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  animationDelay: number;
  size: number;
}

const EcoParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 8,
        size: 2 + Math.random() * 3,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="eco-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default EcoParticles;