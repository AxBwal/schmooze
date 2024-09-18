import React from 'react';
import { Download, MessageSquare, Heart } from 'lucide-react';

// Define the structure of each stat data item
interface StatData {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: string;
  label: string;
}

// Define the stat data with type annotation
const statData: StatData[] = [
  { icon: Download, value: '1.2M+', label: 'Total Downloads' },
  { icon: MessageSquare, value: '800M+', label: 'Total Meme Interactions' },
  { icon: Heart, value: '200K+', label: 'Successful Dates' },
];

// Define props for the StatCard component
interface StatCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: string;
  label: string;
}

// Create the StatCard component with typed props
const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
    <Icon className="w-12 h-12 mb-4 text-purple-400" />
    <span className="text-4xl font-bold text-white mb-2 animate-fadeIn">
      {value}
    </span>
    <span className="text-sm text-gray-300">{label}</span>
  </div>
);

// Main Appinfo component
export const Appinfo: React.FC = () => {
  return (
    <div className="py-16 bg-black bg-dot-white/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};