import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ScreenShare from "@/components/Main/ScreenShare";
import AIAssistant from "@/components/Main/AIAssistant";
import CircularNav from "@/components/Main/CircularNav";
import Toolbar from "@/components/UI/Toolbar";
import ChatPanel from "@/components/UI/ChatPanel";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isSharing, setIsSharing] = useState(false);
  const [activeStudio, setActiveStudio] = useState<string>("");

  const handleToggleShare = () => {
    setIsSharing(!isSharing);
  };

  const handleStudioSelect = (studioId: string) => {
    setActiveStudio(activeStudio === studioId ? "" : studioId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <Icon name="Zap" size={16} className="text-white" />
              </div>
              <h1 className="text-xl font-medium text-black">CreativeHub</h1>
            </div>

            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">
                Создать проект
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                Создать персонажа
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-12 gap-8 h-[calc(100vh-240px)]">
          {/* Left Panel - Screen Share */}
          <div className="col-span-7">
            <ScreenShare
              isSharing={isSharing}
              onToggleShare={handleToggleShare}
            />
          </div>

          {/* Center Panel - Circular Navigation */}
          <div className="col-span-3 flex flex-col items-center justify-center">
            <CircularNav
              onStudioSelect={handleStudioSelect}
              activeStudio={activeStudio}
            />

            {/* Quick Actions */}
            <div className="mt-12 space-y-3 w-full">
              <button className="w-full px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                Недавние проекты
              </button>
              <button className="w-full px-4 py-3 border border-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                Команды
              </button>
            </div>
          </div>

          {/* Right Panel - AI Assistant */}
          <div className="col-span-2">
            <AIAssistant />
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="mt-12 flex items-center justify-between">
          <Toolbar
            onHistoryClick={() => console.log("История")}
            onFavoritesClick={() => console.log("Избранное")}
            onSettingsClick={() => console.log("Настройки")}
            onHelpClick={() => console.log("Помощь")}
          />

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Система готова</span>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Chat Panel */}
      <div className="fixed bottom-8 right-8">
        <ChatPanel />
      </div>
    </div>
  );
};

export default Index;
