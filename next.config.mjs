/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/download",
        destination:
          "https://pub-be0b55b9e6cd4d4fb4eae595e19438dd.r2.dev/typebetter/macos/releases/latest/TypeBetter.zip",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
