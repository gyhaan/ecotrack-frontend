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
      body: JSON.stringify({
        house_number: houseNumber,
        area,
      }),
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

export async function addCollector(assignedArea, token) {
  try {
    const res = await fetch(`/api/households`, {
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
