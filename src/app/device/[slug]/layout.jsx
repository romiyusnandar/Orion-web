export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const response = await fetch("https://orion-apiv1.vercel.app/device");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const device = await response.json();
    return device.map((data) => ({
      slug: data.slug,
    }));
  } catch (error) {
    console.error("Error fetching device data:", error);
    return [];
  }
}

export default function Layout({ children }) {
  return children;
}