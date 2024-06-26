import { loadLocalStorage } from "../utils/localstorage";
// -------------------------lOGIN--------------------------
export const loginApi = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

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
// -------------------------PRODUCTS--------------------------
export interface Products {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
}

export const ProductsApi = async (): Promise<Products[]> => {
  try {
    const token = loadLocalStorage<string>("token");
    const response = await fetch(`http://localhost:8080/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products: Products[] = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
