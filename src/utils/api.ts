import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosHeaders,
  type AxiosError,
} from "axios";

// Helper function to get the app slug header for Axios requests
/* const getAppSlugHeaderForAxios = (): Record<string, string> => {
  if (isInDevelopmentMode()) return {};
  const { app_slug } = decodeDataFromURL();
  let appSlug = app_slug;
  if (
    isStringEqual(app_slug || "", APP_SLUGS.GCASH_ALIPLUS) ||
    isStringEqual(app_slug || "", APP_SLUGS.WOW_GAMES)
  ) {
    appSlug = APP_SLUGS.GCASH;
  }
  return { "GG-App": appSlug || "" };
}; */

// Interface for headers
interface Headers {
  [key: string]: string;
}

// Provides authentication headers from session storage
const authHeaderProvider = (): Headers => {
  try {
    const previousToken =
      sessionStorage?.getItem("session-token") ||
      sessionStorage?.getItem("init-token");
    return previousToken ? { Authorization: `Bearer ${previousToken}` } : {};
  } catch (e) {
    return {};
  }
};

// Function to create Axios instances
const createApiInstance = (
  baseURL: string,
  includeAuth: boolean,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _includeAppSlug: boolean
): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 30000,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  // Request interceptor to add headers
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const headers = config.headers as AxiosHeaders;
      headers.setContentType("application/json;charset=UTF-8");
      /* if (includeAppSlug) {
        const appSlugHeader = getAppSlugHeaderForAxios();
        for (const key in appSlugHeader) {
          if (Object.prototype.hasOwnProperty.call(appSlugHeader, key)) {
            headers.set(key, appSlugHeader[key]);
          }
        }
      } */

      if (includeAuth) {
        const authHeader = authHeaderProvider();
        for (const key in authHeader) {
          if (Object.prototype.hasOwnProperty.call(authHeader, key)) {
            headers.set(key, authHeader[key]);
          }
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  handleErrors(instance);
  return instance;
};

const handleErrors = (instance: AxiosInstance) => {
  // Response interceptor for error handling
  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      // Handle error based on response status
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // Handle unauthorized errors
            console.error("Unauthorized access - possibly invalid token");
            break;
          case 403:
            // Handle forbidden errors
            console.error("Access forbidden - you don't have permission");
            break;
          case 404:
            // Handle not found errors
            console.error("Resource not found");
            break;
          case 500:
            // Handle server errors
            console.error("Internal server error");
            break;
          default:
            // Handle other types of errors
            console.error(`Error: ${error.response.status}`);
        }
      } else if (error.request) {
        // Handle errors that occur during the request
        console.error("Network error or no response received");
      } else {
        // Handle other errors
        console.error(`Error: ${error.message}`);
      }
      return Promise.reject(error);
    }
  );
};

// Create API instances
export const api = createApiInstance(
  `${import.meta.env.VITE_API_URL_BASE}/api/v2/`,
  true,
  true
);
export const apiUnauthorized = createApiInstance(
  `${import.meta.env.VITE_API_URL_BASE}/api/v2/`,
  false,
  true
);
/* export const apiAds = createApiInstance(
  `${import.meta.env.VITE_API_URL_BASE}/api/v2/`,
  false,
  false
);
export const apiUserServiceBase = createApiInstance(
  `${import.meta.env.VITE_API_URL_BASE}/`,
  true,
  true
);
 */
export default api;
