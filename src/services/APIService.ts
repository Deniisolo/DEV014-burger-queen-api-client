import { loadLocalStorage } from "../utils/localstorage";
// -------------------------lOGIN--------------------------
export const loginApi = async (email: string, password: string) => {
  try {
    const response = await fetch(
      "https://burger-queen-api-mock-7aa0.onrender.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

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
    const response = await fetch(
      `https://burger-queen-api-mock-7aa0.onrender.com/products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
      }
    );

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
//-------------------------Orders-----------------------------------

export interface Orders {
  id: number;
  userId: number;
  client: string;
  products: [];
  status: string;
  dataEntry: string;
}

export const OrdersApi = async (): Promise<Orders[]> => {
  try {
    const token = loadLocalStorage<string>("token");
    const response = await fetch(
      `https://burger-queen-api-mock-7aa0.onrender.com/orders`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const orders: Orders[] = await response.json();
    return orders;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
//--------------------------------- historial de order ------------------------------------------------
export const createOrder = async (clientName: string, products: any[]) => {
  try {
    const data = {
      client: clientName,
      products: products,
      status: "pending",
    };
    const token = loadLocalStorage<string>("token");
    const response = await fetch(
      `https://burger-queen-api-mock-7aa0.onrender.com/orders`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error creating order");
    }
    return response.json();
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
