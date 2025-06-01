import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ChatMessage {
  id: string;
  user: string;
  message: string;
  timestamp: Date;
  avatar?: string;
}

const ChatPanel: React.FC = () => {
  const [messages] = useState<ChatMessage[]>([
    {
      id: "1",
      user: "Анна",
      message: "Отличная идея с анимацией! 🎨",
      timestamp: new Date(Date.now() - 300000),
      avatar: "👩‍🎨",
    },
    {
      id: "2",
      user: "Михаил",
      message: "Можем добавить звуковые эффекты?",
      timestamp: new Date(Date.now() - 180000),
      avatar: "🎵",
    },
    {
      id: "3",
      user: "Елена",
      message: "Согласна, это добавит атмосферы",
      timestamp: new Date(Date.now() - 60000),
      avatar: "🌟",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlineUsers = [
    { name: "Анна", status: "active", avatar: "👩‍🎨" },
    { name: "Михаил", status: "active", avatar: "🎵" },
    { name: "Елена", status: "away", avatar: "🌟" },
  ];

  if (isCollapsed) {
    return (
      <div className="w-12">
        <Button
          variant="ghost"
          onClick={() => setIsCollapsed(false)}
          className="w-full h-12 bg-gray-800 hover:bg-gray-700 border border-gray-600"
        >
          <Icon name="MessageSquare" size={20} className="text-gray-400" />
        </Button>
      </div>
    );
  }

  return (
    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="MessageSquare" size={16} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-900">
              Чат команды
            </span>
          </div>
          <button
            onClick={() => setIsCollapsed(true)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Online Users */}
        <div>
          <p className="text-xs text-gray-500 mb-3">
            Онлайн ({onlineUsers.length})
          </p>
          <div className="flex space-x-2">
            {onlineUsers.map((user, index) => (
              <div key={index} className="relative">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                  {user.avatar}
                </div>
                <div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                    user.status === "active" ? "bg-green-500" : "bg-yellow-500"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="h-48 overflow-y-auto space-y-3">
          {messages.map((msg) => (
            <div key={msg.id} className="flex space-x-2">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs">
                {msg.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-medium text-gray-700">
                    {msg.user}
                  </span>
                  <span className="text-xs text-gray-500">
                    {msg.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-sm text-gray-900 bg-gray-50 rounded px-3 py-2">
                  {msg.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Написать сообщение..."
            className="flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400"
          />
          <button className="px-3 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors">
            <Icon name="Send" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
