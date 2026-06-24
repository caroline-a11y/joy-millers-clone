"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: string;
}

export default function ApplyModal({
  isOpen,
  onClose,
  position = "",
}: ApplyModalProps) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: position,
    coverLetter: "",
    resume: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm({ ...form, resume: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("position", form.position);
    formData.append("coverLetter", form.coverLetter);

    if (form.resume) {
      formData.append("resume", form.resume);
    }

    const res = await fetch("/api/apply", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      alert("Application submitted successfully!");
      onClose();
    } else {
      alert("Failed to submit application");
    }
  };

  // 👇 IMPORTANT: render nothing if closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <FaTimes />
        </button>

        <h2 className="text-xl font-bold mb-4">Apply for Job</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            name="position"
            placeholder="Position"
            value={form.position}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <textarea
            name="coverLetter"
            placeholder="Cover Letter"
            onChange={handleChange}
            className="w-full border p-2 rounded h-24"
          />

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="w-full"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}