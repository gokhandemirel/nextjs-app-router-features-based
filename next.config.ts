import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  rewrites() {
    return [
      {
        source: '/remote-api/:path*',
        destination: `/remote-api/:path*`
      }
    ];
  },
  devIndicators: false,
  compiler: {
    styledComponents: true
  }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
