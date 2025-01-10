export async function signUp(signUpData) {
  const response = await fetch(
    "http://localhost:4000/api/v1/trainers/auth/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    }
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data.error);
  return data;
}

export async function getCurrentUser(token, userRole) {
  const response = await fetch(
    userRole === "admin"
      ? "http://localhost:4000/api/v1/admin/PersonalInfo"
      : "http://localhost:4000/api/v1/trainers/trainer_Data",
    {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) throw new Error(response.status);
  const data = await response.json();
  return data;
}

export async function login({ email, password }) {
  const response = await fetch(
    "http://localhost:4000/api/v1/trainers/auth/SignIn",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data.error);
  return data;
}
