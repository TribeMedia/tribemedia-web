import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  productionBrowserSourceMaps: true,
  transpilePackages: ['@zitadel/node'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.prometheus-platform.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.tribemedia.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'proxy.dify.svc.cluster.local',
        port: '8223',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'kong-rev.reveles.svc.cluster.local',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_DIFY_API_KEY: process.env.NEXT_PUBLIC_DIFY_API_KEY,
    NEXT_PUBLIC_DIFY_API_URL: process.env.NEXT_PUBLIC_DIFY_API_URL,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: 'crypto-browserify',
      };
    }
    return config;
  },
  experimental: {
    
  },
};

// Properly combine the MDX plugin with nextConfig
const combinedConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeHighlight, rehypeKatex],
  },
})(nextConfig);

export default combinedConfig;