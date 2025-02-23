import React from 'react';
import { Bot, Sparkles, BookOpen, BrainCircuit, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-800/20 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              EduLift
            </h1>
            <p className="text-xl text-gray-300 mb-8">Your AI-Powered Teaching Assistant</p>
            <div className="flex justify-center mb-12">
              <iframe 
                src="https://copilotstudio.microsoft.com/environments/Default-a5a5ade4-347a-4014-bfe7-2b94c59d9ec0/bots/crdfc_aiPoweredTeacherAssistant/webchat?__version__=2" 
                className="w-full max-w-3xl h-[600px] rounded-lg shadow-2xl border border-pink-500/30"
                style={{ background: 'rgba(255, 255, 255, 0.05)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            <Sparkles className="text-pink-500" />
            What This App Can Do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-pink-500" size={24} />
              <h3 className="text-xl font-semibold">AI-Generated Lesson Planning</h3>
            </div>
            <p className="text-gray-400 mb-4">Plan smarter, not harder! Our AI helps teachers generate structured lesson plans in seconds:</p>
            <ul className="space-y-2 text-gray-300">
              <li>✔ Custom lesson structures based on subject & grade level</li>
              <li>✔ Adaptive learning paths tailored to student needs</li>
              <li>✔ Editable & reusable lesson templates</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="text-pink-500" size={24} />
              <h3 className="text-xl font-semibold">AI-Powered Quiz Generation</h3>
            </div>
            <p className="text-gray-400 mb-4">Create quizzes in seconds! Our AI designs engaging and effective assessments with:</p>
            <ul className="space-y-2 text-gray-300">
              <li>✔ Multiple-choice, fill-in-the-blanks, and open-ended questions</li>
              <li>✔ Auto-generated quizzes based on curriculum topics</li>
              <li>✔ Custom difficulty levels to match student needs</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <BrainCircuit className="text-pink-500" size={24} />
              <h3 className="text-xl font-semibold">Automatic Grading & Instant Feedback</h3>
            </div>
            <p className="text-gray-400 mb-4">Save time with AI grading! No more manual corrections:</p>
            <ul className="space-y-2 text-gray-300">
              <li>✔ Instant quiz grading with AI-based accuracy</li>
              <li>✔ Detailed feedback for students on wrong answers</li>
              <li>✔ Auto-generated score reports for teachers</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-pink-500" size={24} />
              <h3 className="text-xl font-semibold">Student Performance & Progress Analysis</h3>
            </div>
            <p className="text-gray-400 mb-4">Get real-time insights on student progress!</p>
            <ul className="space-y-2 text-gray-300">
              <li>✔ AI-driven performance reports with personalized insights</li>
              <li>✔ Identifies struggling students & recommends extra help</li>
              <li>✔ Subject-wise strength and weakness analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-pink-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            AI Teaching Assistant project for HorizonAI Global Hackathon 2025. Powered by Microsoft Copilot
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;