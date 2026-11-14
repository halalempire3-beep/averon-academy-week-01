import { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import ProfileCard from "./components/ProfileCard";
import "./index.css";

function App() {
  const [username, setUsername] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchUsername) return;

    const controller = new AbortController();

    async function fetchUser() {
      setLoading(true);
      setError("");
      setUser(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${encodeURIComponent(searchUsername)}`,
          { signal: controller.signal }
        );

        if (response.status === 404) {
          throw new Error("GitHub user not found. Check the username.");
        }

        if (!response.ok) {
          throw new Error("Something went wrong. Please try again.");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Unable to connect. Check your internet.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    return () => controller.abort();
  }, [searchUsername]);

  function handleSearch(value) {
    const trimmed = value.trim();

    if (!trimmed) {
      setError("Please enter a GitHub username.");
      setUser(null);
      return;
    }

    setError("");
    setSearchUsername(trimmed);
  }

  return (
    <main className="app">
      <h1>GitHub Profile Finder</h1>
      <p className="subtitle">
        Search for any GitHub user and explore their profile.
      </p>

      <SearchForm
        username={username}
        setUsername={setUsername}
        onSearch={handleSearch}
        loading={loading}
      />

      {loading && <p className="message">Loading profile...</p>}
      {error && <p className="error">{error}</p>}
      {user && <ProfileCard user={user} />}
    </main>
  );
}

export default App;