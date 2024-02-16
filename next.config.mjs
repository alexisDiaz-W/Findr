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
      ],
    },
  };
  