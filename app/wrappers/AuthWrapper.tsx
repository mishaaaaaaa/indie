"use client";
import React, { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();

  useEffect(() => {
    // Проверяем, есть ли сессия и вход выполнен успешно

    if (status === "authenticated" && session?.user?.access_token) {
      // Сохраняем access token в куки
      Cookies.set("access_token", session.user.access_token);
    } else {
      // Если сессия не активна, перенаправляем на страницу входа
      //     router.push("/api/signin");
    }
  }, [session, status]);

  //   if (status === "loading") { // work on loader in future
  //     // Пока происходит проверка сессии, можно отобразить загрузочный компонент
  //     return <div>Loading...</div>;
  //   }

  return <div>{children}</div>;
}
