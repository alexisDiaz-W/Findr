/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns:[
//             {
//                 protocol: 'https',
//                 hostname: 'images.unplash.com',

//             },
           
//         ],
       
//       },
// };

// export default nextConfig;


  // next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'img.clerk.com'
        },
        {
          protocol: 'https',
          hostname: 'www.gravatar.com'
        },
        {
          protocol: 'https',
          hostname: 'images.clerk.dev'
        },
      ],
    },
  };
  