import { useState } from 'react';

export const DELIVERY_DELAY_POPUP_STORAGE_KEY = 'deliveryDelayPopupHidden';

export const DELIVERY_DELAY_POPUP_TEXT = {
  title: '배송 지연 안내',
  message:
    '현재 주문량 증가로 일부 상품의 배송이 지연되고 있어요. 이용에 불편을 드려 죄송합니다.',
  close: '닫기',
  dontShowAgain: '다시보지않기',
};

function isHiddenByUser(): boolean {
  try {
    return localStorage.getItem(DELIVERY_DELAY_POPUP_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export default function DeliveryDelayPopup() {
  const [visible, setVisible] = useState<boolean>(() => !isHiddenByUser());

  if (!visible) {
    return null;
  }

  const handleClose = () => {
    setVisible(false);
  };

  const handleDontShowAgain = () => {
    try {
      localStorage.setItem(DELIVERY_DELAY_POPUP_STORAGE_KEY, 'true');
    } catch {
      // localStorage를 사용할 수 없는 환경에서는 상태만 닫는다.
    }
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="delivery-delay-popup-title"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: 8,
          padding: 24,
          width: 'calc(100% - 48px)',
          maxWidth: 360,
          boxSizing: 'border-box',
        }}
      >
        <h2 id="delivery-delay-popup-title" style={{ margin: '0 0 12px', fontSize: 18 }}>
          {DELIVERY_DELAY_POPUP_TEXT.title}
        </h2>
        <p style={{ margin: '0 0 20px', fontSize: 14, lineHeight: 1.5 }}>
          {DELIVERY_DELAY_POPUP_TEXT.message}
        </p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <button type="button" onClick={handleDontShowAgain}>
            {DELIVERY_DELAY_POPUP_TEXT.dontShowAgain}
          </button>
          <button type="button" onClick={handleClose}>
            {DELIVERY_DELAY_POPUP_TEXT.close}
          </button>
        </div>
      </div>
    </div>
  );
}
