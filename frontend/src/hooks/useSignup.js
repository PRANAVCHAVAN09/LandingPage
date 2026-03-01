import { useState } from "react";

export default function useSignup() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const signup = async (email) => {

    setError("");
    setSuccess("");

    // validation
    if (!email) {
      setError("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return false;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        return false;
      }

      setSuccess(data.message);
      return true;

    } catch (err) {
      setError("Server not reachable");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, success };
}   