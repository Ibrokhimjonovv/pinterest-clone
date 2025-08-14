"use client"; // faqat client tarafda ishlashi uchun

import { useEffect } from "react";

export default function YandexAd() {
  useEffect(() => {
    if (!document.getElementById("yandex-ads-script")) {
      const script = document.createElement("script");
      script.id = "yandex-ads-script";
      script.src = "https://yandex.ru/ads/system/context.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.yaContextCb = window.yaContextCb || [];
        window.yaContextCb.push(() => {
          window.Ya.Context.AdvManager.render({
            blockId: "R-A-16731105-1",
            renderTo: "yandex_rtb_R-A-16731105-1",
          });
        });
      };
    } else {
      // Skript allaqachon yuklangan bo'lsa, faqat render qilish
      window.yaContextCb = window.yaContextCb || [];
      window.yaContextCb.push(() => {
        window.Ya.Context.AdvManager.render({
          blockId: "R-A-16731105-1",
          renderTo: "yandex_rtb_R-A-16731105-1",
        });
      });
    }
  }, []);

  return <div id="yandex_rtb_R-A-16731105-1"></div>;
}
