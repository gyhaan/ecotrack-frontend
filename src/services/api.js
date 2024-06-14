export async function registerUser(username, password) {
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!res.ok) {
      if (res.status === 409) {
        throw new Error(
          "A user with this username already exists. Please choose a different username."
        );
      } else if (res.status >= 500) {
        throw new Error("Server error. Please try again later.");
      } else if (res.status >= 400) {
        throw new Error("Client error. Please check your input and try again.");
      } else {
        throw new Error("An unexpected error occurred. Please try again.");
      }
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error(err);
  }
}

export async function fetchPendingCollections() {
  try {
    const res = await fetch("/api/collections/pending");
    if (!res.ok) {
      throw new Error("Failed to fetch pending collections");
    }
    return await res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchCompletedCollections() {
  try {
    const res = await fetch("/api/collections/completed");
    if (!res.ok) {
      throw new Error("Failed to fetch completed collections");
    }
    return await res.json();
  } catch (err) {
    throw new Error(err.message);
  }
}
