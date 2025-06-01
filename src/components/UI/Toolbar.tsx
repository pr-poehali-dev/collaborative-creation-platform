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
    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-2">
      <div className="flex items-center space-x-1">
        {toolbarItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={item.onClick}
            className="text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
            title={item.label}
          >
            <Icon name={item.icon as any} size={16} />
            <span className="ml-1 text-xs hidden md:inline">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
