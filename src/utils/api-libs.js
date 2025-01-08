export async function getAllDevices(codename) {
  const response = await fetch(`https://orion-apiv1.vercel.app/device/?${codename}`, {
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

