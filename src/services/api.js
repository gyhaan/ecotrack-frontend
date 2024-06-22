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
      body: JSON.stringify({ house_number: houseNumber, area }),
    });

    if (!res.ok) {
      throw new Error("Looks like something went wrong!! Try Again.");
    }

    const data = await res.json();
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
      throw new Error("Looks like something went wrong!! Try Again.");
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
      throw new Error("Looks like something went wrong");
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err.message);
    throw Error(err.message);
  }
}

export async function fetchCollectionDates(token) {
  try {
    const res = await fetch(`/api/collection_dates`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Looks like something wrong!! Try Again.");
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}

export async function createCollectionDate(date, token) {
  try {
    const res = await fetch(`/api/collection_dates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ collection_date: date }),
    });
    if (!res.ok) {
      throw new Error("Failed to create collection date");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchCompletedCollections(token) {
  try {
    const res = await fetch(`/api/collection_dates`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch completed collections");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err.message);
    throw Error(err.message);
  }
}

export async function fetchPendingCollections(token) {
  try {
    const res = await fetch(`/api/collection_dates`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch pending collections");
    }
    const data = await res.json();
    return data.filter((date) =>
      date.collection_requests.some((request) => request.status === "pending")
    );
  } catch (err) {
    throw new Error(err.message);
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

export async function getAllHouseholds(token) {
  try {
    const res = await fetch("/api/households", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Could not fetch Household");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw Error(err.message);
  }
}

export async function getAllCollectors(token) {
  try {
    const res = await fetch("/api/collectors", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Could not fetch Household");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
    throw Error(err);
  }
}

export async function getHouseHoldById(id, token) {
  try {
    const res = await fetch(`/api/households/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Data");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

export async function deleteHouseHoldById(id, token) {
  try {
    const res = await fetch(`/api/households/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Data");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

export async function getCollectorById(id, token) {
  try {
    const res = await fetch(`/api/collectors/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Data");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

export async function deleteCollectorById(id, token) {
  try {
    const res = await fetch(`/api/collectors/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Data");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

export async function createCollectionRequest(id, amount, token) {
  try {
    const body = JSON.stringify({
      amount: Number(amount),
      collection_date_id: id,
    });
    console.log(body);

    const res = await fetch("/api/collection_requests", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // Ensure the Content-Type header is set
      },
      body: body,
    });

    if (!res.ok) {
      // Check if the server provides additional error information
      const errorData = await res.json();
      console.error("Error:", errorData);
      throw new Error(
        errorData.message || "Failed to create collection request"
      );
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

export async function patchRequest(id, token) {
  try {
    const res = await fetch(`/api/collection_requests/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: "completed" }),
    });

    if (!res.ok) {
      throw new Error("Failed to Patch");
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err.message);
    throw new Error(err);
  }
}

export async function getCollectionById(id, token) {
  try {
    const res = await fetch(`/api/collection_dates/${id}/collection_requests`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}

export async function getCollectionDates(token) {
  try {
    const res = await fetch(`/api/collection_dates`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Data");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}
