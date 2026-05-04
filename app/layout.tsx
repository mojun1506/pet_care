import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "毛茸日常 | 宠物洗护店",
  description: "毛茸日常宠物洗护店，提供犬猫洗澡、精修、SPA、牙耳护理和预约服务。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
