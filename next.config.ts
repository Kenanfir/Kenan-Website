import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      { source: '/w6', destination: '/w6/index.html' },
      { source: '/w7', destination: '/w7/index.html' },
      { source: '/w9', destination: '/w9/index.html' },
      { source: '/w9/', destination: '/w9/index.html' },
      { source: '/w8', destination: '/w8/index.html' },
      { source: '/w8/', destination: '/w8/index.html' },
    ];
  },
  async redirects() {
    return [
      { source: '/w8/form1', destination: 'https://forms.gle/6eg8gjEQRn3q3SeJ8', permanent: false },
      { source: '/w8/form2', destination: 'https://forms.gle/LikszbeFHs2UTsu36', permanent: false },
    ];
  },
};

export default nextConfig;
