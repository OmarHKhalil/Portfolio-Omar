import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ... أي إعدادات أخرى كانت موجودة لديك اتركها هنا ... */
  
  allowedDevOrigins: ['unstable-decay-footer.ngrok-free.dev'],

  // 💡 إضافة إعدادات مصفوفة الجودة للسماح بالرقم 100
  images: {
    qualities: [100, 75, 70],
  },
};

export default nextConfig;