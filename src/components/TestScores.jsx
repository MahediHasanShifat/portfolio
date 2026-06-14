import React from 'react';

const TestScores = () => {
  // Data Structure
  const testScoresData = {
    testName: "TOEFL IBT", // [cite: 70]
    date: "21 December 2024", // [cite: 70]
    scores: [
      { category: "Overall", score: 92, myBest: 96 }, // [cite: 71]
      { category: "Listening", score: 26, myBest: 26 }, // [cite: 71]
      { category: "Reading", score: 25, myBest: 25 }, // [cite: 71]
      { category: "Writing", score: 22, myBest: 22 }, // [cite: 71]
      { category: "Speaking", score: 19, myBest: 23 } // [cite: 71]
    ]
  };

  return (
    <section>
      <h2 className="text-3xl font-bold border-b-2 border-blue-600 pb-2 mb-8 text-slate-800">Standardized Test Scores</h2>
      <div className="bg-white p-6 rounded-lg border border-slate-200 overflow-x-auto shadow-sm">
        <div className="mb-4">
          <h3 className="font-bold text-lg">{testScoresData.testName}</h3>
          <p className="text-sm text-slate-500">Date: {testScoresData.date}</p>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 border-b border-slate-300 font-semibold text-sm">Category</th>
              <th className="p-3 border-b border-slate-300 font-semibold text-sm">Score</th>
              <th className="p-3 border-b border-slate-300 font-semibold text-sm">MyBest Score</th>
            </tr>
          </thead>
          <tbody>
            {testScoresData.scores.map((row, idx) => (
              <tr key={idx} className={idx === 0 ? "font-bold bg-blue-50" : "border-b border-slate-100"}>
                <td className="p-3 text-sm">{row.category}</td>
                <td className="p-3 text-sm text-blue-700 font-semibold">{row.score}</td>
                <td className="p-3 text-sm">{row.myBest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TestScores;