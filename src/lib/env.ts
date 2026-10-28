// 루트 .env (VITE_*) 값. 없으면 로컬 기본 포트를 쓴다.
export const SHOP_API_URL = import.meta.env.VITE_SHOP_API_URL ?? 'http://localhost:8010'
