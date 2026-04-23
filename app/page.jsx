"use client";
import Navbar from "@/components/Navbar";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks((prev) => [...prev, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const clearAll = () => setTasks([]);

  // 🧠 AI Suggestion function
  const getSuggestions = async () => {
    const res = await fetch("/api/suggest", {
      method: "POST",
    });

    const data = await res.json();

    setTasks((prev) => [...prev, ...data.tasks]);
  };

  return (
    <>
      <Navbar />

      <div className="toDoList">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
        />
        <input
  value={task}
  onChange={(e) => setTask(e.target.value)}
  placeholder="Enter task..."
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      addTask();
    }
  }}
/>

        <button onClick={addTask}>Add</button>
        <button onClick={clearAll}>Clear All</button>

        {/* ✨ AI Button */}
        <button onClick={getSuggestions}>
          ✨ Suggest Tasks
        </button>

        <ol>
          <AnimatePresence>
            {tasks.map((t, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
              >
                {t}
                <button onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
      </div>
    </>
  );
}