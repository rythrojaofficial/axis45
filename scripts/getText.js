export async function readText(filePath) {
  let data = "";
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
  }
    return response.text();
  }catch (error) {
      console.error("Fetch failed:", error); 
      return null; // Return null (or a default value) if fetch fails
  }
}
