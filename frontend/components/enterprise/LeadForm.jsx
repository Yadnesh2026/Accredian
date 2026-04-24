"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  company: "",
  workEmail: "",
  teamSize: "",
  focusArea: "GenAI Mastery",
  message: "",
};

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ state: "loading", message: "Submitting your request..." });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to submit your request.");
      }

      setForm(initialForm);
      setStatus({
        state: "success",
        message: "Thanks. Your enterprise learning request has been captured.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    }
  }

  function updateField(field) {
    return (event) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
    };
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field">
          <span>Name</span>
          <input required value={form.name} onChange={updateField("name")} placeholder="Aarav Sharma" />
        </label>
        <label className="field">
          <span>Company</span>
          <input
            required
            value={form.company}
            onChange={updateField("company")}
            placeholder="Northstar Systems"
          />
        </label>
        <label className="field">
          <span>Work Email</span>
          <input
            required
            type="email"
            value={form.workEmail}
            onChange={updateField("workEmail")}
            placeholder="aarav@northstar.com"
          />
        </label>
        <label className="field">
          <span>Team Size</span>
          <input
            required
            value={form.teamSize}
            onChange={updateField("teamSize")}
            placeholder="150 learners"
          />
        </label>
        <label className="field field-full">
          <span>Focus Area</span>
          <select value={form.focusArea} onChange={updateField("focusArea")}>
            <option>GenAI Mastery</option>
            <option>Leadership Elevation</option>
            <option>Tech & Data Insights</option>
            <option>Operations Excellence</option>
            <option>Digital Enterprise</option>
            <option>Product & Innovation Hub</option>
          </select>
        </label>
        <label className="field field-full">
          <span>What outcome are you aiming for?</span>
          <textarea
            rows="4"
            value={form.message}
            onChange={updateField("message")}
            placeholder="Upskill mid-level managers for AI-assisted decision-making and cross-functional execution."
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" className="button button-primary" disabled={status.state === "loading"}>
          {status.state === "loading" ? "Submitting..." : "Request A Callback"}
        </button>
        <p className={`form-status ${status.state}`}>{status.message}</p>
      </div>
    </form>
  );
}
