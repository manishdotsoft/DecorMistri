export const PRIMARY_COLOR = '#00945d';
export const SECONDARY_COLOR = '#f0f4ef';
export const PAPER_COLOR = '#eee1e1';
export const WHITE_BACKGROUND = '#d3e4f8';

export const PRIMARY_DARK = '#3A7C63';

export const SECONDARY_COLOR_100 = '#f4f7f4';
export const GREY_50 = '#F2F2F2';
export const GREY_150 = '#F5F5F5';
export const GREY_100 = '#FAFAFA';
export const GREY_200 = '#f0f0f0';
export const GREY_300 = '#CACACA';
export const GREY_600 = '#CCCCCC';
export const GREY_700 = '#717171';
export const GREY_800 = '#F4F4F4';
export const SILVER_GREY = '#BCBCBC';
export const LABEL_GREY = '#606062';

export const GREY_400 = 'rgba(115, 115, 114, 0.9)';
export const GREY_500 = 'rgba(158, 158, 158, 1)';

export const BORDER_GREY = '#CCC';
export const PRIMARY_500 = '#0B9A64';
export const PRIMARY_400 = '#7bc67e';
export const PRIMARY_200 = '#d6efdcbf';
export const WHITE_100 = 'rgba(255, 255, 255, 0)';
export const WHITE_300 = 'rgba(255, 255, 255, 0.3)';
export const WHITE = '#ffffff';
export const BLACK_800 = 'rgba(0, 0, 0, 0.87)';

export const ACCENT_ERROR = 'rgba(255, 220, 218, 1)';
export const ACCENT_ERROR_100 = 'rgba(255, 220, 218, 0.6)';
export const ICON_COLOR = '#979797';
export const COMMON_DEFAULT = '#ffffff';
export const GRAY_COLOR = '#808080';
export const GRAY_BORDER_COLOR = '#BCBCBC';
export const GREY_FONT_COLOR = '#7c7b7b';

export const ICON_LIGHT = '#dadada';
export const TEXT_PRIMARY = '#212121';
export const TEXT_SECONDARY = '#616161';
export const TEXT_DISABLED = '#616161';
export const TEXT_SUCCESS = '#49433D';
export const TEXT_TERTIARY = '#625F5D';
export const COMMON_ERROR = '#9b160c';
export const SUCCESS_COLOR = '#E0E0E0';
export const WARNING_COLOR = '#FFF1DC';
export const TEXT_WARNING = '#BC5A00';
export const CONFIRM_COLOR = '#d6efdcbf';
export const TEXT_CONFIRM = '#3a7c63';
export const RED_ALERT = '#f44336';

// NEW COLOR ADD ACCORDINHG TO THE FIGMA
export const PRIMARY_MAIN = '#0B9A64';

export const PRIMARY_CARD = '#D6EFDC';
export const PRIMARY_LIGHT = '#DDF0E2';

export const SECONDARY_MAIN = '#F44336';
export const SECONDARY_DARK = '#9B160C';
export const SECONDARY_CARD = '#FFDCDA';
export const SECONDARY_LIGHT = '#FFEFEE';

export const PRIMARY_ICON_COLOR = '#49433D';
export const SECONDARY_ICON_COLOR = '#139262';
export const TROPHY_ICON_COLOR = '#FFB400';
export const UPCOMING_PROJECTS_COLOR = '#FFCD06';

export const ERROR_COLOR = '#FF0000';
export const SECONDARY_ICON = '#0B9A64';
export const PRIMARY_HOVER = '#087f53';

// Rate Shedule
export const BACKGROUND_A = '#F0F4EF';
export const BACKGROUND_B = '#F0F4EF';
export const BACKGROUND_C = '#E9EEF8';
export const COLOR_A = '#0B9A64';
export const COLOR_B = '#3c3a39';

export const COLOR_C = '#005AA1';
export const COLOR_D = '#0379FF';

export const COLOR_HOLIDAY = '#0B9A64';
export const COLOR_COMPLETE = '#1EB500';

export const REGULAR_A = '#D6EFDCBF';
export const PRIME_B = '#F0F4EF';
export const SUNDAY_C = '#E9EEF8';
export const REGULAR_D = '#FFFBF4';
export const PRIME_E = '#F6F3F0';
export const SUNDAY_F = '#FFEFEE';
export const HIGH1_G = '#FFF2DF';
export const HIGH2_H = '#FFB40026';
export const MINIMUM = '#FF000026';
export const BOOKED_OUT = '#FF4E0D';
export const DECOR_COLOR = '#C7148A';
export const DECOR_LIGHT = '#fff0f9';
export const DECOR_DARK = '#b60a7c';
export const LIGHT_COLOR = '#0b9a72';
export const BLACK_200 = '#000000';
export const BLACK_COLOR = '#1a1a1a';
export const DECOR_LOGO_COLOR_HOVER = '#fff5fb';
export const BOX_SHADOW3 = '#91919133';
export const BLACK_600 = '#00000019';
export const WHITE_lIGHT = '#ddd';
export const BLUE = '#007bff';
export const OFF_WHITE_GRAY = '#E4E4E4';
export const SUCCESS_GREEN = '#08c912';
export const WARNING_ORANGE = '#F69400';
export const CHECK_BOX = '#F8A0DA';
export const LIGHT_GREY = '#D9D9D9';

const palette = {
  decor: {
    main: DECOR_COLOR,
    dark: DECOR_DARK,
    light: DECOR_LIGHT,
    hover: DECOR_LOGO_COLOR_HOVER,
    Check: CHECK_BOX,
  },

  primary: {
    main: PRIMARY_MAIN,
    contrastText: COMMON_DEFAULT,
    complete: COLOR_COMPLETE,
    success: SUCCESS_GREEN,
    dark: PRIMARY_DARK,
    icon: PRIMARY_ICON_COLOR,
    200: PRIMARY_200,
    400: PRIMARY_400,
    500: PRIMARY_500,
    hover: PRIMARY_HOVER,
    card: PRIMARY_CARD,
    cardLight: PRIMARY_LIGHT,
    blue: BLUE,
  },
  secondary: {
    main: SECONDARY_COLOR,

    contrastText: COMMON_DEFAULT,
    100: SECONDARY_COLOR_100,
  },
  grey: {
    main: GRAY_COLOR,
    textColor: GREY_100,
    iconColor: ICON_COLOR,
    borderColor: GRAY_BORDER_COLOR,
    greyFontColor: GREY_FONT_COLOR,
    offwhite: OFF_WHITE_GRAY,
    lightGrey: LIGHT_GREY,
    silverGrey: SILVER_GREY,
    labelGrey: LABEL_GREY,
    20: GREY_800,
    50: GREY_50,
    100: ICON_LIGHT,
    150: GREY_150,
    200: GREY_200,
    300: GREY_300,
    400: GREY_400,
    600: GREY_600,
    700: GREY_700,
    500: GREY_500,
    800: BORDER_GREY,
  },
  white: {
    main: WHITE,
    light: WHITE_lIGHT,
    100: WHITE_100,
    300: WHITE_300,
  },
  black: {
    // 100: BLACK_100,
    800: BLACK_800,
    100: BLACK_COLOR,
    200: BLACK_200,
    500: BOX_SHADOW3,
    600: BLACK_600,
  },
  error: {
    // main: ACCENT_ERROR,
    main: ERROR_COLOR,
    contrastText: COMMON_ERROR,
    alert: RED_ALERT,
    100: ACCENT_ERROR_100,
  },
  success: {
    main: SUCCESS_COLOR,
    contrastText: TEXT_SUCCESS,
    midSuccess: PRIMARY_400,
    fullSuccess: PRIMARY_500,
  },
  warning: {
    main: WARNING_COLOR,
    contrastText: TEXT_WARNING,
    warning: TROPHY_ICON_COLOR,
    real: TROPHY_ICON_COLOR,
    upcoming: UPCOMING_PROJECTS_COLOR,
    orange: WARNING_ORANGE,
  },
  confirm: {
    main: CONFIRM_COLOR,
    contrastText: TEXT_CONFIRM,
  },
  text: {
    primary: TEXT_PRIMARY,
    secondary: TEXT_SECONDARY,
    tertiary: TEXT_TERTIARY,
    disabled: TEXT_DISABLED,
    primarydark: PRIMARY_DARK,
  },
  background: {
    default: SECONDARY_COLOR,
    paper: WHITE,
    white: WHITE_BACKGROUND,
  },
  icon: {
    secondary: SECONDARY_ICON,
  },
  rateSheduleColors: {
    backgroundColorA: BACKGROUND_A,
    backgroundColorB: BACKGROUND_B,
    backgroundColorC: BACKGROUND_C,
    colorA: COLOR_A,
    colorB: COLOR_B,
    colorC: COLOR_C,
    colorD: COLOR_D,

    colorHoliday: COLOR_HOLIDAY,
    bookedOut: BOOKED_OUT,
    regularA: REGULAR_A,
    primeB: PRIME_B,
    sundayC: SUNDAY_C,
    regularD: REGULAR_D,
    primeE: PRIME_E,
    sundayF: SUNDAY_F,
    high1G: HIGH1_G,
    high2H: HIGH2_H,
    minimum: MINIMUM,
    complete: COLOR_COMPLETE,
  },
};

export default palette;
