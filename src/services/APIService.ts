export const loginApi = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    console.log(response);

    if (!response.ok) {
      const errorDetail = await response.json();
      throw new Error(errorDetail.message || "Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error logging in: ${error.message}`);
    } else {
      throw new Error("Error logging in: An unknown error occurred");
    }
  }
};
