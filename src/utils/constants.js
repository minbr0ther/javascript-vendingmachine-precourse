export const ERROR = {
  PRODUCT_NAME_BLANK_SUBMIT: '상품명을 빈칸으로 제출하실 수 없습니다.',
  PRODUCT_NAME_INCLUDE_SPACE: '상품명에 공백을 입력하실 수 없습니다.',
  PRODUCT_NAME_DUPLICATED: '동일한 상품명이 이미 존재합니다.',

  PRODUCT_PRICE_BLANK_SUBMIT: '상품가격을 빈칸으로 제출하실 수 없습니다.',
  PRODUCT_PRICE_INCLUDE_SPECIAL: '상품가격에 특수문자를 입력하실 수 없습니다.',
  PRODUCT_PRICE_UNDER_HUNDRED: '상품가격은 100원 미만일 수 없습니다.',
  PRODUCT_PRICE_NOT_TEN_MULTIPLE: '상품가격은 10의 배수만 입력 가능합니다.',

  PRODUCT_QUANTITY_BLANK_SUBMIT: '상품수량은 빈칸으로 제출하실 수 없습니다.',
  PRODUCT_QUANTITY_INCLUDE_SPECIAL: '상품수량에 특수문자를 입력하실 수 없습니다.',
  PRODUCT_QUANTITY_NOT_POSIVITE_INT: '상품수량은 양의 정수 입력만 가능합니다.',

  MACHINE_CHARGE_BLANK_SUBMIT: '충전할 금액을 빈칸으로 제출하실 수 없습니다.',
  MACHINE_CHARGE_INCLUDE_SPECIAL: '충전할 금액에 특수문자를 입력하실 수 없습니다.',
  MACHINE_CHARGE_UNDER_TEN: '충전할 금액은 10원 미만일 수 없습니다.',
  MACHINE_CHARGE_NOT_TEN_MULTIPLE: '충전할 금액은 10의 배수만 입력 가능합니다.',
};

export const REGEX = {
  IS_INCLUDE_SPACE: /\s/g,
  HAS_SPECIAL: /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/g,
};
