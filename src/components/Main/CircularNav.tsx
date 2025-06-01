import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Studio {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

interface CircularNavProps {
  onStudioSelect: (studioId: string) => void;
  activeStudio?: string;
}

const CircularNav: React.FC<CircularNavProps> = ({
  onStudioSelect,
  activeStudio,
}) => {
  const [hoveredStudio, setHoveredStudio] = useState<string | null>(null);

  const studios: Studio[] = [
    {
      id: "video",
      name: "Видео Студия",
      icon: "Video",
      color: "from-red-500 to-pink-500",
      description: "Создание и монтаж видео",
    },
    {
      id: "music",
      name: "Музыка Студия",
      icon: "Music",
      color: "from-green-500 to-teal-500",
      description: "Создание и микширование треков",
    },
    {
      id: "social",
      name: "Соц Сети",
      icon: "Share2",
      color: "from-blue-500 to-cyan-500",
      description: "Управление и аналитика",
    },
    {
      id: "graphic",
      name: "Графика",
      icon: "Palette",
      color: "from-orange-500 to-yellow-500",
      description: "Дизайн и редактирование",
    },
    {
      id: "character",
      name: "Персонажи",
      icon: "User",
      color: "from-purple-500 to-indigo-500",
      description: "Создание аватаров",
    },
  ];

  const getStudioPosition = (index: number, total: number) => {
    const angle = (index * 360) / total - 90; // Start from top
    const radius = 120;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y };
  };

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Central Hub */}
      <div className="absolute w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full shadow-lg flex items-center justify-center z-10">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
          <Icon name="Zap" size={24} className="text-white" />
        </div>
      </div>

      {/* Studios */}
      {studios.map((studio, index) => {
        const position = getStudioPosition(index, studios.length);
        const isActive = activeStudio === studio.id;
        const isHovered = hoveredStudio === studio.id;

        return (
          <div
            key={studio.id}
            className="absolute"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
          >
            <Button
              variant="ghost"
              className={`w-20 h-20 rounded-full p-0 transition-all duration-300 ${
                isActive || isHovered
                  ? "scale-110 shadow-xl"
                  : "scale-100 hover:scale-105"
              }`}
              onClick={() => onStudioSelect(studio.id)}
              onMouseEnter={() => setHoveredStudio(studio.id)}
              onMouseLeave={() => setHoveredStudio(null)}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${studio.color} rounded-full flex items-center justify-center relative overflow-hidden`}
              >
                {/* Glow effect */}
                {(isActive || isHovered) && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${studio.color} opacity-30 blur-sm scale-110`}
                  />
                )}

                <Icon
                  name={studio.icon as any}
                  size={24}
                  className="text-white relative z-10"
                />

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                )}
              </div>
            </Button>

            {/* Studio label */}
            {(isHovered || isActive) && (
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center animate-fade-in">
                <p className="text-white text-sm font-medium whitespace-nowrap">
                  {studio.name}
                </p>
                <p className="text-gray-400 text-xs whitespace-nowrap">
                  {studio.description}
                </p>
              </div>
            )}
          </div>
        );
      })}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {studios.map((_, index) => {
          const pos = getStudioPosition(index, studios.length);
          return (
            <line
              key={index}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${pos.x}px)`}
              y2={`calc(50% + ${pos.y}px)`}
              stroke="rgba(139, 92, 246, 0.2)"
              strokeWidth="1"
              strokeDasharray="4,4"
              className="animate-pulse"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default CircularNav;
