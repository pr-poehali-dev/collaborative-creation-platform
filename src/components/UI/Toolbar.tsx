import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ToolbarProps {
  onHistoryClick: () => void;
  onFavoritesClick: () => void;
  onSettingsClick: () => void;
  onHelpClick: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onHistoryClick,
  onFavoritesClick,
  onSettingsClick,
  onHelpClick,
}) => {
  const toolbarItems = [
    { icon: "History", label: "История", onClick: onHistoryClick },
    { icon: "Heart", label: "Избранное", onClick: onFavoritesClick },
    { icon: "Settings", label: "Настройки", onClick: onSettingsClick },
    { icon: "HelpCircle", label: "Помощь", onClick: onHelpClick },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2">
      <div className="flex items-center space-x-1">
        {toolbarItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors rounded text-sm font-medium"
            title={item.label}
          >
            <Icon name={item.icon as any} size={16} />
            <span className="ml-2 hidden md:inline">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
