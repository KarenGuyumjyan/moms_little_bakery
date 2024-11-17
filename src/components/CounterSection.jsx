'use client'
import { useEffect, useState } from 'react';

const CounterSection = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    specialists: 0,
    projects: 0,
    clients: 0,
  });

  useEffect(() => {
    const targetValues = { experience: 12345, specialists: 12345, projects: 12345, clients: 12345 };
    const duration = 2000;
    const intervalTime = 10;

    const incrementCounters = () => {
      setCounters((prev) => ({
        experience: Math.min(prev.experience + (targetValues.experience / (duration / intervalTime)), targetValues.experience),
        specialists: Math.min(prev.specialists + (targetValues.specialists / (duration / intervalTime)), targetValues.specialists),
        projects: Math.min(prev.projects + (targetValues.projects / (duration / intervalTime)), targetValues.projects),
        clients: Math.min(prev.clients + (targetValues.clients / (duration / intervalTime)), targetValues.clients),
      }));
    };

    const interval = setInterval(incrementCounters, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-cover py-20 mb-10 contact relative overflow-hidden bg-center bg-no-repeat" style={{ backgroundImage: 'url(/bg.jpg)' }}>
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Our Experience", icon: "fa-star", count: counters.experience },
            { label: "Cake Specialist", icon: "fa-users", count: counters.specialists },
            { label: "Complete Project", icon: "fa-check", count: counters.projects },
            { label: "Happy Clients", icon: "fa-mug-hot", count: counters.clients },
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-blue-600 flex items-center justify-center rounded-full mb-3" style={{ width: '60px', height: '60px' }}>
                <i className={`fa ${item.icon} text-red text-xl`}></i>
              </div>
              <div className="pl-4">
                <h6 className="text-blue-600 uppercase">{item.label}</h6>
                <h1 className="text-5xl text-red font-bold">{Math.floor(item.count)}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
