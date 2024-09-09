/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
        
      },
      eslint: {
        // Enable the following line to allow unescaped entities in React JSX
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
