"use client";

import { useEffect } from "react";

export default function YandexAd() {
  useEffect(() => {
    const loadYandexAds = () => {
      window.yaContextCb = window.yaContextCb || [];

      // 1️⃣ Blok #1 (oddiy reklama)
      window.yaContextCb.push(() => {
        window.Ya.Context.AdvManager.render({
          blockId: "R-A-16731105-1",
          renderTo: "yandex_rtb_R-A-16731105-1",
        });
      });

      // 2️⃣ Blok #2 (fullscreen reklama, faqat desktop)
      window.yaContextCb.push(() => {
        window.Ya.Context.AdvManager.render({
          blockId: "R-A-16590718-3",
          type: "fullscreen",
          platform: "desktop",
        });
      });
    };

    // Skript hali yuklanmagan bo‘lsa — yuklaymiz
    if (!document.getElementById("yandex-ads-script")) {
      const script = document.createElement("script");
      script.id = "yandex-ads-script";
      script.src = "https://yandex.ru/ads/system/context.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = loadYandexAds;
    } else {
      // Skript allaqachon yuklangan bo‘lsa
      loadYandexAds();
    }
  }, []);

  return <div id="yandex_rtb_R-A-16731105-1"></div>;
}
