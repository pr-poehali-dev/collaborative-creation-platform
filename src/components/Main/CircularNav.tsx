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
      <div className="absolute w-16 h-16 bg-black rounded-full shadow-sm flex items-center justify-center">
        <Icon name="Zap" size={20} className="text-white" />
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
            <button
              className={`w-14 h-14 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-black shadow-md scale-110"
                  : isHovered
                    ? "bg-gray-800 scale-105"
                    : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => onStudioSelect(studio.id)}
              onMouseEnter={() => setHoveredStudio(studio.id)}
              onMouseLeave={() => setHoveredStudio(null)}
            >
              <Icon
                name={studio.icon as any}
                size={20}
                className={
                  isActive || isHovered ? "text-white" : "text-gray-600"
                }
              />

              {/* Active indicator */}
              {isActive && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </button>

            {/* Studio label */}
            {(isHovered || isActive) && (
              <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-gray-900 text-sm font-medium whitespace-nowrap">
                  {studio.name}
                </p>
                <p className="text-gray-500 text-xs whitespace-nowrap">
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
