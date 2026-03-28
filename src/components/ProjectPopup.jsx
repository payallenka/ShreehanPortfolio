import React from 'react';
import { X } from 'lucide-react';

const ProjectPopup = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-[2px] animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 max-w-lg w-full p-8 relative animate-popupOpen">
        <button
          className="absolute top-4 right-4 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={28} />
        </button>
        <h2 className="text-2xl md:text-3xl font-bold mb-1 text-slate-900 dark:text-white leading-tight">{project.title}</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{project.date}</p>
        <div className="border-b border-slate-200 dark:border-slate-700 mb-5"></div>
        <p className="mb-7 text-slate-700 dark:text-slate-200 text-base leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-bold uppercase transition-all hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:scale-105 cursor-pointer shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.links && project.links.length > 0 && (
          <div className="mt-2">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">External Links:</div>
            <div className="flex flex-col gap-2">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors border border-blue-100 dark:border-blue-800 shadow-sm group"
                >
                  <svg className="w-4 h-4 text-blue-500 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-200 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-1 3 3m0 0-7 7m7-7V4a1 1 0 0 0-1-1h-3"/></svg>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes popupOpen {
          0% { opacity: 0; transform: scale(0.95) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-popupOpen {
          animation: popupOpen 0.25s cubic-bezier(.4,2,.6,1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease both;
        }
      `}</style>
    </div>
  );
};

export default ProjectPopup;
