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
      } else {
        throw new Error("An unexpected error occurred. Please try again.");
      }
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw Error(err);
  }
}

export async function addHousehold(houseNumber, area, token) {
  try {
    const res = await fetch(`/api/households`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        house_number: houseNumber,
        area,
      }),
    });

    if (!res.ok) {
      throw new Error("Looks like something wrong!! Try Again.");
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function addCollector(assignedArea, token) {
  try {
    const res = await fetch(`/api/collectors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ allocated_area: assignedArea }),
    });

    if (!res.ok) {
      throw new Error("Looks like something wrong!! Try Again.");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function loginUser(username, password) {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      if (res.status === 401) {
        throw new Error("Unauthorized: Incorrect username or password.");
      } else {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err.message);
    throw Error(err.message);
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

export async function fetchCollectionDates(token) {
  try {
    const res = await fetch("/api/collection_dates", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to create collection");
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function addCollectionRequest(token) {
  try {
    const res = await fetch("/api/collection_requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Collection Request Failed");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function fetchCollectionRequests(token) {
  try {
    const res = await fetch("/api/collection_requests", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
