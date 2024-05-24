export async function readText(filePath) {
    let data = ''
    const response = await fetch(filePath);
    return response.text();
  }