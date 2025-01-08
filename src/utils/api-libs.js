export async function getAllDevices(searchTerm = '') {
  const url = searchTerm
    ? `https://orion-apiv1.vercel.app/device/search?q=${encodeURIComponent(searchTerm)}`
    : "https://orion-apiv1.vercel.app/device";

  const response = await fetch(url, {
    next: {
      revalidate: 300
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch devices");
  }

  return response.json();
}

export async function getDeviceByBrand(brand) {
  const response = await fetch(`https://orion-apiv1.vercel.app/device/brand/${brand}`, {
    next: {
      revalidate: 300
    }
  });

  if (!response.ok) {
    throw new Error("Failed to fetch devices by brand");
  }

  return response.json();
}

