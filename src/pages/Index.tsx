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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700 relative z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">CreativeHub</h1>
            </div>

            <div className="flex items-center space-x-4 relative z-10">
              <Button className="bg-purple-600 hover:bg-purple-700 relative z-10">
                <Icon name="Plus" size={16} />
                Создать проект
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 relative z-10"
              >
                <Icon name="UserPlus" size={16} />
                Создать персонажа
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-200px)]">
          {/* Left Panel - Screen Share */}
          <div className="col-span-7">
            <ScreenShare
              isSharing={isSharing}
              onToggleShare={handleToggleShare}
            />
          </div>

          {/* Center Panel - Circular Navigation */}
          <div className="col-span-3 flex flex-col items-center justify-center relative z-10">
            <CircularNav
              onStudioSelect={handleStudioSelect}
              activeStudio={activeStudio}
            />

            {/* Quick Actions */}
            <div className="mt-8 space-y-3 w-full">
              <Button
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Icon name="FolderOpen" size={16} />
                Недавние проекты
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Icon name="Users" size={16} />
                Команды
              </Button>
            </div>
          </div>

          {/* Right Panel - AI Assistant */}
          <div className="col-span-2">
            <AIAssistant />
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="mt-6 flex items-center justify-between">
          <Toolbar
            onHistoryClick={() => console.log("История")}
            onFavoritesClick={() => console.log("Избранное")}
            onSettingsClick={() => console.log("Настройки")}
            onHelpClick={() => console.log("Помощь")}
          />

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Система готова</span>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Chat Panel */}
      <div className="fixed bottom-6 right-6">
        <ChatPanel />
      </div>
    </div>
  );
};

export default Index;
