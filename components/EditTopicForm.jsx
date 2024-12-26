"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-semibold text-gray-700">Edit Topic</h2>

      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-400 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Topic Title"
      />

      <textarea
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-400 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        placeholder="Topic Description"
      ></textarea>

      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#1d4ed8",
          color: "#000000",
          fontWeight: "bold",
          padding: "10px 20px",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#1d4ed8",
            color: "#ffffff"
          },
        }}
      >
        Update Topic
      </Button>
    </form>
  );
}
