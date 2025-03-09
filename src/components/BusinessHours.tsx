import React from "react";
import { Clock } from "lucide-react";

interface BusinessHoursProps {
  className?: string;
  title?: string;
  scheduleItems?: {
    text: string;
  }[];
}

export function BusinessHours({ 
  className, 
  title, 
  scheduleItems = [] 
}: BusinessHoursProps) {
  return (
    <div className={`bg-[#1e2c4f] text-white p-6 rounded-lg ${className}`}>
      {title && <h2 className="text-3xl font-bold mb-8">{title}</h2>}

      <div className="space-y-6">
        {scheduleItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="bg-[#2a3a61] p-3 rounded-full">
              <Clock className="h-6 w-6 text-blue-400" />
            </div>
            <span className="text-xl">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 