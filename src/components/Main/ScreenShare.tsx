import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ScreenShareProps {
  isSharing: boolean;
  onToggleShare: () => void;
}

const ScreenShare: React.FC<ScreenShareProps> = ({
  isSharing,
  onToggleShare,
}) => {
  const [isAIActive, setIsAIActive] = useState(false);

  return (
    <Card className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 border-purple-500/20">
      <CardContent className="p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div
              className={`w-3 h-3 rounded-full ${isSharing ? "bg-green-400 animate-pulse" : "bg-gray-500"}`}
            />
            <span className="text-white font-medium">
              {isSharing ? "Экран демонстрируется" : "Готов к демонстрации"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={isAIActive ? "default" : "outline"}
              size="sm"
              onClick={() => setIsAIActive(!isAIActive)}
              className="text-xs"
            >
              <Icon name="Brain" size={16} />
              AI-Помощник
            </Button>
            <Button
              variant={isSharing ? "destructive" : "default"}
              onClick={onToggleShare}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Icon
                name={isSharing ? "ScreenShareOff" : "ScreenShare"}
                size={16}
              />
              {isSharing ? "Остановить" : "Поделиться экраном"}
            </Button>
          </div>
        </div>

        {/* Main Screen Area */}
        <div className="flex-1 bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-600 flex items-center justify-center relative">
          {isSharing ? (
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Icon name="Monitor" size={32} className="text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                Экран демонстрируется
              </h3>
              <p className="text-gray-400">
                Участники видят ваш экран в реальном времени
              </p>
            </div>
          ) : (
            <div className="text-center">
              <Icon
                name="Monitor"
                size={64}
                className="text-gray-500 mx-auto mb-4"
              />
              <h3 className="text-gray-300 text-lg font-medium mb-2">
                Нажмите "Поделиться экраном"
              </h3>
              <p className="text-gray-500">чтобы начать совместную работу</p>
            </div>
          )}

          {/* AI Assistant Overlay */}
          {isAIActive && (
            <div className="absolute top-4 right-4 bg-purple-600 rounded-lg p-3 text-white max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">
                  AI-Ассистент активен
                </span>
              </div>
              <p className="text-xs text-purple-100">
                Готов помочь с анализом экрана и предложить улучшения
              </p>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <Icon name="Settings" size={16} />
              Настройки качества
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <Icon name="Users" size={16} />3 участника
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <Icon name="Mic" size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white"
            >
              <Icon name="Video" size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScreenShare;
