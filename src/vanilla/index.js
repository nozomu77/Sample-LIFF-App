import './index.css';
import liff from '@line/liff';

document.addEventListener('DOMContentLoaded', () => {
  const statusEl = document.getElementById('status');
  const actionStatusEl = document.getElementById('actionStatus');
  const loginButton = document.getElementById('loginButton');
  const profileCard = document.getElementById('profileCard');
  const tokenCard = document.getElementById('tokenCard');
  const actionCard = document.getElementById('actionCard');
  const errorCard = document.getElementById('errorCard');
  const profileImage = document.getElementById('profileImage');
  const displayName = document.getElementById('displayName');
  const userId = document.getElementById('userId');
  const idTokenPreview = document.getElementById('idTokenPreview');
  const accessTokenPreview = document.getElementById('accessTokenPreview');
  const sendWebhookButton = document.getElementById('sendWebhookButton');
  const errorDetail = document.getElementById('errorDetail');

  let cachedProfile = null;
  let cachedIdToken = null;
  let cachedAccessToken = null;
  const webhookUrl = process.env.WEBHOOK_URL;

  const showLoginButton = () => {
    loginButton.classList.remove('profile--hidden');
    loginButton.addEventListener('click', () => liff.login(), { once: true });
  };

  const hideError = () => {
    errorCard.classList.add('profile--hidden');
    errorDetail.textContent = '';
  };

  const showError = (headline, error) => {
    statusEl.textContent = headline;
    const details = {
      message: error && error.message ? error.message : 'unknown',
      code: error && error.code ? error.code : 'n/a',
      liffId: process.env.LIFF_ID || 'missing',
      endpoint: window.location.href,
    };
    errorDetail.textContent = JSON.stringify(details, null, 2);
    errorCard.classList.remove('profile--hidden');
    // eslint-disable-next-line no-console
    console.error(headline, error);
  };

  const setTokenPreview = () => {
    const idValue = cachedIdToken ? `${cachedIdToken.slice(0, 20)}...` : '(なし)';
    const accessValue = cachedAccessToken ? `${cachedAccessToken.slice(0, 20)}...` : '(なし)';
    idTokenPreview.textContent = idValue;
    accessTokenPreview.textContent = accessValue;
    tokenCard.classList.remove('profile--hidden');
  };

  const sendWebhook = () => {
    if (!webhookUrl) {
      actionStatusEl.textContent = 'WEBHOOK_URL が未設定です。';
      return;
    }
    if (!cachedProfile) {
      actionStatusEl.textContent = 'プロフィール未取得のため送信できません。';
      return;
    }

    actionStatusEl.textContent = '送信中...';
    sendWebhookButton.disabled = true;

    const payload = {
      timestamp: new Date().toISOString(),
      userId: cachedProfile.userId,
      displayName: cachedProfile.displayName,
      pictureUrl: cachedProfile.pictureUrl || '',
      idTokenPresent: !!cachedIdToken,
      accessTokenPresent: !!cachedAccessToken,
    };

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(cachedAccessToken ? { Authorization: `Bearer ${cachedAccessToken}` } : {}),
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        actionStatusEl.textContent = 'Webhook送信に成功しました。';
      })
      .catch((error) => {
        actionStatusEl.textContent = 'Webhook送信に失敗しました。';
        showError('Webhook送信でエラーが発生しました。', error);
      })
      .finally(() => {
        sendWebhookButton.disabled = false;
      });
  };

  sendWebhookButton.addEventListener('click', sendWebhook);

  liff
    .init({ liffId: process.env.LIFF_ID })
    .then(() => {
      if (!liff.isLoggedIn()) {
        statusEl.textContent = 'LINEログインが必要です。';
        showLoginButton();
        return Promise.resolve(null);
      }
      return liff.getProfile();
    })
    .then((profile) => {
      if (!profile) {
        return;
      }
      hideError();
      cachedProfile = profile;
      cachedIdToken = liff.getIDToken();
      cachedAccessToken = liff.getAccessToken();
      displayName.textContent = profile.displayName;
      userId.textContent = `userId: ${profile.userId}`;
      profileImage.src = profile.pictureUrl || '';
      profileCard.classList.remove('profile--hidden');
      setTokenPreview();
      actionCard.classList.remove('profile--hidden');
      statusEl.textContent = 'ログイン中';
    })
    .catch((error) => {
      showError('LIFF の初期化に失敗しました。LIFF_ID と Endpoint URL を確認してください。', error);
    });
});
