import React from 'react';
import { Star, ThumbsUp, MessageSquare, Filter } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      customer: 'Sarah Miller',
      rating: 5,
      comment: "Alex was incredibly professional and fixed my iPhone screen in less than 30 minutes. It looks brand new! Highly recommend his services.",
      date: 'March 15, 2024',
      service: 'iPhone 13 Screen Repair',
      avatar: 'Sarah'
    },
    {
      id: 2,
      customer: 'David Chen',
      rating: 4,
      comment: "Great work on the laptop repair. A bit of a delay in arrival, but the quality of work was excellent and he explained everything clearly.",
      date: 'March 12, 2024',
      service: 'MacBook Pro SSD Upgrade',
      avatar: 'David'
    },
    {
      id: 3,
      customer: 'Emily Watson',
      rating: 5,
      comment: "Very polite and knowledgeable. Fixed my washing machine quickly. Fair pricing and transparent about parts cost.",
      date: 'March 10, 2024',
      service: 'Appliance Repair',
      avatar: 'Emily'
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 leading-tight">Reviews & Ratings</h1>
          <p className="text-slate-500 mt-1">What your customers are saying about your work.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <Filter size={18} />
            Sort By
          </button>
        </div>
      </div>

      {/* Ratings Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
          <h2 className="text-6xl font-black text-slate-800">4.9</h2>
          <div className="flex items-center gap-1 my-4">
            {[1, 2, 3, 4, 1].map((_, i) => (
              <Star key={i} className={`w-6 h-6 fill-amber-400 text-amber-400`} />
            ))}
          </div>
          <p className="text-slate-500 font-medium">Total 124 Reviews</p>
          <div className="w-full mt-8 space-y-3">
            {[5, 4, 3, 2, 1].map((stars) => {
              const percentages = {5: 85, 4: 10, 3: 3, 2: 2, 1: 0};
              return (
                <div key={stars} className="flex items-center gap-3 text-sm">
                  <span className="w-4 font-bold text-slate-600">{stars}</span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-400 rounded-full" 
                      style={{ width: `${percentages[stars]}%` }} 
                    />
                  </div>
                  <span className="w-8 text-slate-400 text-right">{percentages[stars]}%</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 overflow-hidden ring-2 ring-white">
                    <img 
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.avatar}`} 
                      alt={review.customer}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{review.customer}</h4>
                    <p className="text-xs text-slate-400 font-medium">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={`${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} 
                    />
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-50/50 p-4 rounded-2xl mb-4">
                <p className="text-slate-600 text-sm leading-relaxed italic">"{review.comment}"</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {review.service}
                </span>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">
                    <ThumbsUp size={14} /> Helpful?
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">
                    <MessageSquare size={14} /> Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="w-full py-4 text-slate-500 font-bold hover:text-blue-600 hover:bg-slate-50 rounded-2xl transition-all border-2 border-dashed border-slate-100">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
