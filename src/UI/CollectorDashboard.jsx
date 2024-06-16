import { useState, useEffect } from "react";
import {
  fetchPendingCollections,
  fetchCompletedCollections,
} from "../services/api";
import { useUser } from "../Context/ContextProvider";

export default function CollectorDashboard() {
  const { token } = useUser();
  const [pendingCollections, setPendingCollections] = useState([]);
  const [completedCollections, setCompletedCollections] = useState([]);
  const [loadingPending, setLoadingPending] = useState(false);
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPendingCollections() {
      try {
        setLoadingPending(true);
        const pending = await fetchPendingCollections(token);
        setPendingCollections(pending);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingPending(false);
      }
    }
    loadPendingCollections();
  }, [token]);

  /*   useEffect(() => {
    async function loadCompletedCollections() {
      try {
        setLoadingCompleted(true);
        const completed = await fetchCompletedCollections(token);
        setCompletedCollections(completed);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingCompleted(false);
      }
    }
    loadCompletedCollections();
  }, [token]); */

  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center p-10 box-border">
      <header className="flex items-center space-x-3 mb-8">
        <img src="/Logo.svg" alt="EcoTrack Logo" className="w-24 h-24" />
        <h1 className="text-5xl font-oregano text-green-800">EcoTrack</h1>
      </header>
      <h2 className="text-2xl font-bold mb-4">
        Welcome to EcoTrack, Collector
      </h2>
      {/* {(loadingPending || loadingCompleted) && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <section className="w-full max-w-3xl mb-8">
        <h3 className="text-xl font-semibold mb-2">Pending Collections</h3>
        <ul className="space-y-2">
          {pendingCollections?.map((collection) => (
            <li
              key={collection.id}
              className="flex justify-between items-center p-4 bg-yellow-100 rounded"
            >
              <span>{new Date(collection.date).toLocaleDateString()}</span>
              <button className="bg-green-500 text-white px-3 py-1 rounded">
                Done
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full max-w-3xl">
        <h3 className="text-xl font-semibold mb-2">Completed Collections</h3>
        <ul className="space-y-2">
          {completedCollections?.map((collection) => (
            <li
              key={collection.id}
              className="flex justify-between items-center p-4 bg-green-100 rounded"
            >
              <span>{new Date(collection.date).toLocaleDateString()}</span>
              <img src="/check-icon.svg" alt="Completed" className="w-6 h-6" />
            </li>
          ))}
        </ul>
      </section> */}
    </div>
  );
}
