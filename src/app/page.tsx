"use client";
import { useState } from "react";

export default function Flames() {
  const [result, setResult] = useState<string>("");
  const [name1, setName1] = useState<string>("");
  const [name2, setName2] = useState<string>("");

  function FlameCalculator(): string {
    const freq1: Record<string, number> = {};
    const freq2: Record<string, number> = {};

    for (const c of name1) freq1[c] = (freq1[c] || 0) + 1;
    for (const c of name2) freq2[c] = (freq2[c] || 0) + 1;

    let remaining = "";

    for (const c of name1) {
      if (freq2[c]) freq2[c]--;
      else remaining += c;
    }

    for (const c of name2) {
      if (freq1[c]) freq1[c]--;
      else remaining += c;
    }

    const flames = ["F", "L", "A", "M", "E", "S"];
    const length = remaining.length;

    while (flames.length > 1) {
      const removeIndex = (length - 1) % flames.length;
      flames.splice(removeIndex, 1);
    }

    const resultMap: Record<string, string> = {
      F: "Friends",
      L: "Love",
      A: "Affection",
      M: "Marriage",
      E: "Enemies",
      S: "Siblings",
    };

    return resultMap[flames[0]];
  }

  async function handleSubmit() {
    const calculatedResult = FlameCalculator();
    setResult(calculatedResult);

    try {
      const res = await fetch("/API/flamecal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username1: name1, username2: name2, result: calculatedResult }),
      });

      const data = await res.json();
      console.log("Saved to DB:", data);
    } catch (error) {
      console.error("Failed to save result:", error);
    }
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-6 bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 drop-shadow-xl">FLAMES</h1>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <input
          className="rounded-md text-center shadow-md bg-white p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          type="text"
          placeholder="Your Name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
        <input
          className="rounded-md text-center shadow-md bg-white p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          type="text"
          placeholder="Your Partner's Name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-pink-500 text-white shadow-md rounded-md py-2 hover:bg-violet-600 transition duration-300 cursor-pointer"
        >
          Check
        </button>
        {result && (
          <p className="text-xl font-medium text-gray-800 text-center">
             <span className="text-pink-600 font-bold">{result}</span>
          </p>
        )}
      </div>
    </div>
  );
}
