/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/assessments/:path*',
        destination: 'http://8.134.196.184:8002/:path*',
        // destination: 'http://127.0.0.1:8000/:path*',
      },
      {
        source: '/grants/:path*',
        destination: 'http://8.134.152.28:8000/grants/:path*', // Your FastAPI endpoint
        // destination: 'http://127.0.0.1:8000/grants/:path*',
      },
      {
        source: '/alison-courses/:path*',
        destination: 'https://alison-courses-backend.vercel.app/:path*'
      },
      {
        source: '/auth/:path*',
        destination: 'http://8.134.196.184:8000/:path*', // auth-service FastAPI endpoint
      },
      {
        source: '/business-plan-writer/:path*',
        destination: 'http://8.134.196.184:8001/:path*', // business-plan-writer-backend FastAPI endpoint
      },
      {
        source: '/business-problem-triage/:path*',
        destination: 'http://127.0.0.1:8000/:path*',
      },
      {
        source: '/ecosystem-connector/:path*',
        destination: 'http://127.0.0.1:8000/recommendation/:path*'
      }
    ];
  },
};

module.exports = nextConfig;
