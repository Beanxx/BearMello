const BASE_URL = "";

export const API = {
  JOIN: `${BASE_URL}/user/join`,
  LOGIN: `${BASE_URL}/user/login`,
  MYPAGE_INFO: `${BASE_URL}/user/info`,
  MYPAGE_EDIT: `${BASE_URL}/user/edit`,
  LOGOUT: `${BASE_URL}/user/logout`,
  회원탈퇴: `${BASE_URL}/user/edit#`,
  ADMIN_POST_REGISTER: `${BASE_URL}/admin/post`,
  ADMIN_POST_EDIT: `${BASE_URL}/admin/post/{post-id}`,
  ADMIN_POST_DELETE: `${BASE_URL}/admin/post/{post-id}`,
  ADMIN_RESERVATION_READ: `${BASE_URL}/admin/rez`,
  ADMIN_RESERVATION_CANCEL: `${BASE_URL}/admin/rez/{rez-id}`,
  CAMPING_LIST_READ: `${BASE_URL}/main`,
  ADMIN_REVIEW_READ: `${BASE_URL}/admin/rev`,
  ADMIN_REVIEW_REPLY: `${BASE_URL}/admin/rev/{rev-id}`,
  ADMIN_REVIEW_EDIT: `${BASE_URL}/admin/rev/{comment-id}`,
  ADMIN_REVIEW_DELETE: `${BASE_URL}/admin/rev/{comment-id}`,
  CAMPING_DETAIL_READ: `${BASE_URL}/client/detail/{post-id}`,
  CAMPING_RESERVATION: `${BASE_URL}/client/detail/{post-id}`,
  CAMPING_POSIBLE_RESERVATION_READ: `${BASE_URL}/client/detail/{post-id}`,
  MY_RESERVATION_READ: `${BASE_URL}/client/info/rez`,
  MY_RESERVATION_CANCEL: `${BASE_URL}/client/info/rez{rez-id}`,
  MY_BEFORE_RESERVATION_READ: `${BASE_URL}/client/info/before`,
  CLIENT_REVIEW_REGISTER: `${BASE_URL}/client/rev`,
  CLIENT_REVIEW_EDIT: `${BASE_URL}/client/rev{rev-id}`,
  CLIENT_REVIEW_DELETE: `${BASE_URL}/client/rev{rev-id}`,
  CLIENT_REVIEW_READ: `${BASE_URL}/client/rev`,
  CAPMING_SORT_REGION: `${BASE_URL}/main`,
  CAPMING_SORT_PRICE: `${BASE_URL}/main`,
};
