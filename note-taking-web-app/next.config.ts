import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the LAN IP used to access the dev server (avoids the cross-origin
  // /_next/* warning when opening the app via the Network URL).
  allowedDevOrigins: ["192.168.1.190"],
};

export default nextConfig;
