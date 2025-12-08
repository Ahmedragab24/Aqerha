let googleMapsPromise: Promise<void> | null = null;

export function loadGoogleMapsScript(
  libraries: string = "places,geometry"
): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Window is not defined"));
  }

  // If already loaded and available on window
  if (window.google?.maps) {
    return Promise.resolve();
  }

  // Return ongoing loading promise if one exists
  if (googleMapsPromise) {
    return googleMapsPromise;
  }

  // Check if script tag already exists in the document
  const existingScript = document.querySelector<HTMLScriptElement>(
    'script[src*="maps.googleapis.com/maps/api/js"]'
  );

  if (existingScript) {
    googleMapsPromise = new Promise((resolve, reject) => {
      if (window.google?.maps) {
        resolve();
        return;
      }
      existingScript.addEventListener("load", () => resolve());
      existingScript.addEventListener("error", () =>
        reject(new Error("Failed to load Google Maps"))
      );
    });
    return googleMapsPromise;
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  googleMapsPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=${libraries}&language=ar&region=SA`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      resolve();
    };

    script.onerror = () => {
      googleMapsPromise = null;
      reject(new Error("Failed to load Google Maps"));
    };

    document.head.appendChild(script);
  });

  return googleMapsPromise;
}
