"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-gray-100 shadow-md rounded-lg p-6 max-w-lg mx-auto mt-8"
    >
      <h2 className="text-2xl font-bold text-gray-700 mb-2">Add a New Topic</h2>

      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-gray-400 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Topic Title"
      />

      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-gray-400 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        placeholder="Topic Description"
      ></textarea>

      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#1e40af",
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
        Add Topic
      </Button>
    </form>
  );
}
