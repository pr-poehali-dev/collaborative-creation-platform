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
    <div className="h-full bg-white border border-gray-200 rounded-lg">
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div
              className={`w-2 h-2 rounded-full ${isSharing ? "bg-green-500" : "bg-gray-400"}`}
            />
            <span className="text-gray-700 font-medium text-sm">
              {isSharing ? "Экран демонстрируется" : "Готов к демонстрации"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsAIActive(!isAIActive)}
              className={`px-3 py-1 text-xs font-medium rounded ${
                isAIActive
                  ? "bg-black text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              } transition-colors`}
            >
              AI-Помощник
            </button>
            <button
              onClick={onToggleShare}
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                isSharing
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {isSharing ? "Остановить" : "Поделиться экраном"}
            </button>
          </div>
        </div>

        {/* Main Screen Area */}
        <div className="flex-1 bg-gray-50 rounded border-2 border-dashed border-gray-300 flex items-center justify-center relative">
          {isSharing ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Monitor" size={24} className="text-white" />
              </div>
              <h3 className="text-gray-900 text-lg font-medium mb-2">
                Экран демонстрируется
              </h3>
              <p className="text-gray-600 text-sm">
                Участники видят ваш экран в реальном времени
              </p>
            </div>
          ) : (
            <div className="text-center">
              <Icon
                name="Monitor"
                size={48}
                className="text-gray-400 mx-auto mb-4"
              />
              <h3 className="text-gray-700 text-base font-medium mb-2">
                Нажмите "Поделиться экраном"
              </h3>
              <p className="text-gray-500 text-sm">
                чтобы начать совместную работу
              </p>
            </div>
          )}

          {/* AI Assistant Overlay */}
          {isAIActive && (
            <div className="absolute top-4 right-4 bg-black rounded p-4 text-white max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-sm font-medium">
                  AI-Ассистент активен
                </span>
              </div>
              <p className="text-xs text-gray-300">
                Готов помочь с анализом экрана и предложить улучшения
              </p>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors">
              Настройки качества
            </button>
            <button className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors">
              3 участника
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors">
              <Icon name="Mic" size={16} className="text-gray-600" />
            </button>
            <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors">
              <Icon name="Video" size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenShare;
