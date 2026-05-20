import './index.css';
import liff from '@line/liff';

document.addEventListener('DOMContentLoaded', () => {
  const statusEl = document.getElementById('status');
  const loginButton = document.getElementById('loginButton');
  const profileCard = document.getElementById('profileCard');
  const profileImage = document.getElementById('profileImage');
  const displayName = document.getElementById('displayName');
  const userId = document.getElementById('userId');

  const showLoginButton = () => {
    loginButton.classList.remove('profile--hidden');
    loginButton.addEventListener('click', () => liff.login(), { once: true });
  };

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
      displayName.textContent = profile.displayName;
      userId.textContent = `userId: ${profile.userId}`;
      profileImage.src = profile.pictureUrl || '';
      profileCard.classList.remove('profile--hidden');
      statusEl.textContent = 'ログイン中';
    })
    .catch((error) => {
      statusEl.textContent = 'LIFF の初期化に失敗しました。LIFF_ID と Endpoint URL を確認してください。';
      // eslint-disable-next-line no-console
      console.error(error);
    });
});
