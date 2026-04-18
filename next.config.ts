import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  // webpack: (config, { dev, isServer }) => {
  //   if (dev) {
  //     // 'source-map' is slower but highly reliable for JetBrains
  //     config.devtool = 'source-map';
  //   }
  //   return config;
  // },

};

export default nextConfig;