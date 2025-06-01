import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Привет! Я ваш AI-помощник. Готов помочь с творческими проектами, анализом экрана и пошаговыми инструкциями.",
      timestamp: new Date(),
    },
  ]);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
  };

  const aiSuggestions = [
    "Анализ композиции",
    "Цветовая палитра",
    "Оптимизация UX",
    "Советы по анимации",
  ];

  return (
    <div className="h-full bg-white border border-gray-200 rounded-lg">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <Icon name="Brain" size={12} className="text-white" />
            </div>
            <span className="text-sm font-medium text-gray-900">
              AI-Помощник
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <div
              className={`w-2 h-2 rounded-full ${isListening ? "bg-green-500" : "bg-gray-400"}`}
            />
            <span className="text-xs text-gray-500">
              {isListening ? "Слушаю..." : "Готов"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[calc(100%-80px)] p-4">
        {/* Messages */}
        <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded p-3 ${
                  message.type === "user"
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <span className="text-xs opacity-60 mt-1 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestions */}
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-3">Быстрые команды:</p>
          <div className="grid grid-cols-1 gap-2">
            {aiSuggestions.map((suggestion, index) => (
              <button
                key={index}
                className="text-xs py-2 px-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 rounded transition-colors text-left"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Voice Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleVoiceToggle}
            className={`flex-1 py-2 px-3 text-sm font-medium rounded transition-colors ${
              isListening
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {isListening ? "Стоп" : "Говорить"}
          </button>
          <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center transition-colors">
            <Icon name="Type" size={14} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
