"use client"
import React, { useState } from 'react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData:FaqItem[] = [
  {
    id: 1,
    question: "Am I swiping on someone's memes?",
    answer: "Memes are uploaded by Schmooze which includes - featured meme creators, an in-house meme officer team, and user-generated content."
  },
  {
    id: 2,
    question: "How will you find me matches through memes?",
    answer: "Our proprietary compatibility algorithm analyses your meme swipes (likes & dislikes) and humor preferences to recommend the most compatible matches to profiles. You can Schmooze them if you like or Snooze if you don't. It's a match if you both Schmooze!"
  },
  {
    id: 3,
    question: "What happens after I Schmooze someone?",
    answer: "When you Schmooze someone, your like is sent to them, showing your interest. If they Schmooze back, it's a match and you both can now chat on Schmooze."
  },
  {
    id: 4,
    question: "I am getting very few recommendations. What should I do?",
    answer: "Key is to actively swipe through the memes in your feed to see recommendations regularly. Additionally, make sure your profile is updated and you are representing yourself properly. Check on your dating preferences; if they are too narrow they will limit recommendations shown to you."
  },
  {
    id: 5,
    question: "What is included in the Schmooze Premium Subscription?",
    answer: "You get 5 SuperVibes, 5 Compliments, and 2x memes every day for each week. The SuperVibes and Compliments expire and replenish weekly on the day original subscription was made."
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<Number | null>(null);

  const toggleFaq = (id:Number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen w-full bg-black bg-dot-white/[0.2] relative flex items-center justify-center py-16">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-600">
          Frequently Asked Questions
        </h2>
        {faqData.map((item) => (
          <div key={item.id} className="mb-6">
            <button
              className="w-full text-left p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 flex justify-between items-center"
              onClick={() => toggleFaq(item.id)}
            >
              <span className="text-xl font-semibold text-purple-400">{item.question}</span>
              <span className="text-2xl text-purple-400">{openId === item.id ? '−' : '+'}</span>
            </button>
            {openId === item.id && (
              <div className="mt-2 p-4 bg-gray-900 rounded-lg text-gray-300 animate-fadeIn">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;