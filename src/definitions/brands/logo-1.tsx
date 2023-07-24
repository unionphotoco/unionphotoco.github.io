import { chakra, type ChakraProps, useToken } from "@chakra-ui/react";

const Logo1: React.FC<ChakraProps> = ({ color, ...rest }): JSX.Element => {
  const activeColor = color ? useToken("colors", color as string) : null;
  return (
    <chakra.svg
      width="154px"
      height="27px"
      viewBox="0 0 154 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M23.1526 20.6945H31.1477L11.3422 0.888916L3.34702 0.888916L23.1526 20.6945Z"
        fill={activeColor ? activeColor : "#7476ED"}
      />
      <path
        d="M15.4497 0.888917L34.5419 19.9811V0.888916H29.3752V6.91668L23.3474 0.888916L15.4497 0.888917Z"
        fill={activeColor ? activeColor : "#E56F8C"}
      />
      <path
        d="M0 1.55194V20.6944L5.16667 20.6944V14.6666L11.1944 20.6944H19.1425L0 1.55194Z"
        fill={activeColor ? activeColor : "#64C2DB"}
      />
      <path
        d="M47.0098 17.7164H51.6391V20.4444H43.4758V5.93644H47.0098V17.7164Z"
        fill={activeColor ? activeColor : "#3A3B7B"}
      />
      <path
        d="M57.9541 20.6098C56.8243 20.6098 55.8047 20.3687 54.8954 19.8864C53.9998 19.4042 53.2903 18.7153 52.7667 17.8198C52.257 16.9242 52.0021 15.8771 52.0021 14.6784C52.0021 13.4936 52.2638 12.4533 52.7874 11.5578C53.311 10.6484 54.0274 9.95266 54.9367 9.47044C55.8461 8.98822 56.8656 8.74711 57.9954 8.74711C59.1252 8.74711 60.1447 8.98822 61.0541 9.47044C61.9634 9.95266 62.6798 10.6484 63.2034 11.5578C63.727 12.4533 63.9887 13.4936 63.9887 14.6784C63.9887 15.8633 63.7201 16.9104 63.1827 17.8198C62.6592 18.7153 61.9358 19.4042 61.0127 19.8864C60.1034 20.3687 59.0838 20.6098 57.9541 20.6098ZM57.9541 17.5511C58.6292 17.5511 59.201 17.3031 59.6694 16.8071C60.1516 16.3111 60.3927 15.6016 60.3927 14.6784C60.3927 13.7553 60.1585 13.0458 59.6901 12.5498C59.2354 12.0538 58.6705 11.8058 57.9954 11.8058C57.3065 11.8058 56.7347 12.0538 56.2801 12.5498C55.8254 13.032 55.5981 13.7416 55.5981 14.6784C55.5981 15.6016 55.8185 16.3111 56.2594 16.8071C56.7141 17.3031 57.279 17.5511 57.9541 17.5511Z"
        fill={activeColor ? activeColor : "#3A3B7B"}
      />
      <path
        d="M69.6249 8.74711C70.4378 8.74711 71.1474 8.91244 71.7536 9.24311C72.3736 9.57378 72.8489 10.0078 73.1796 10.5451V8.91244H76.7136V20.4238C76.7136 21.4847 76.5 22.4422 76.0729 23.2964C75.6596 24.1644 75.0189 24.8533 74.1509 25.3631C73.2967 25.8729 72.2289 26.1278 70.9476 26.1278C69.2391 26.1278 67.8545 25.7213 66.7936 24.9084C65.7327 24.1093 65.1265 23.0209 64.9749 21.6431H68.4676C68.5778 22.084 68.8396 22.4284 69.2529 22.6764C69.6663 22.9382 70.176 23.0691 70.7823 23.0691C71.5125 23.0691 72.0911 22.8556 72.5183 22.4284C72.9591 22.0151 73.1796 21.3469 73.1796 20.4238V18.7911C72.8351 19.3284 72.3598 19.7693 71.7536 20.1138C71.1474 20.4444 70.4378 20.6098 69.6249 20.6098C68.6743 20.6098 67.8131 20.3687 67.0416 19.8864C66.27 19.3904 65.6569 18.6947 65.2023 17.7991C64.7614 16.8898 64.5409 15.8427 64.5409 14.6578C64.5409 13.4729 64.7614 12.4327 65.2023 11.5371C65.6569 10.6416 66.27 9.95266 67.0416 9.47044C67.8131 8.98822 68.6743 8.74711 69.6249 8.74711ZM73.1796 14.6784C73.1796 13.7967 72.9316 13.1009 72.4356 12.5911C71.9534 12.0813 71.3609 11.8264 70.6583 11.8264C69.9556 11.8264 69.3563 12.0813 68.8603 12.5911C68.378 13.0871 68.1369 13.776 68.1369 14.6578C68.1369 15.5396 68.378 16.2422 68.8603 16.7658C69.3563 17.2756 69.9556 17.5304 70.6583 17.5304C71.3609 17.5304 71.9534 17.2756 72.4356 16.7658C72.9316 16.256 73.1796 15.5602 73.1796 14.6784Z"
        fill={activeColor ? activeColor : "#3A3B7B"}
      />
      <path
        d="M83.8996 20.6098C82.7698 20.6098 81.7503 20.3687 80.8409 19.8864C79.9454 19.4042 79.2358 18.7153 78.7123 17.8198C78.2025 16.9242 77.9476 15.8771 77.9476 14.6784C77.9476 13.4936 78.2094 12.4533 78.7329 11.5578C79.2565 10.6484 79.9729 9.95266 80.8823 9.47044C81.7916 8.98822 82.8112 8.74711 83.9409 8.74711C85.0707 8.74711 86.0903 8.98822 86.9996 9.47044C87.9089 9.95266 88.6254 10.6484 89.1489 11.5578C89.6725 12.4533 89.9343 13.4936 89.9343 14.6784C89.9343 15.8633 89.6656 16.9104 89.1283 17.8198C88.6047 18.7153 87.8814 19.4042 86.9583 19.8864C86.0489 20.3687 85.0294 20.6098 83.8996 20.6098ZM83.8996 17.5511C84.5747 17.5511 85.1465 17.3031 85.6149 16.8071C86.0972 16.3111 86.3383 15.6016 86.3383 14.6784C86.3383 13.7553 86.1041 13.0458 85.6356 12.5498C85.1809 12.0538 84.6161 11.8058 83.9409 11.8058C83.2521 11.8058 82.6803 12.0538 82.2256 12.5498C81.7709 13.032 81.5436 13.7416 81.5436 14.6784C81.5436 15.6016 81.7641 16.3111 82.2049 16.8071C82.6596 17.3031 83.2245 17.5511 83.8996 17.5511Z"
        fill={activeColor ? activeColor : "#3A3B7B"}
      />
      <path
        d="M92.9665 7.71378C92.3465 7.71378 91.8367 7.53466 91.4371 7.17644C91.0514 6.80444 90.8585 6.34978 90.8585 5.81244C90.8585 5.26133 91.0514 4.80666 91.4371 4.44844C91.8367 4.07644 92.3465 3.89044 92.9665 3.89044C93.5727 3.89044 94.0687 4.07644 94.4545 4.44844C94.854 4.80666 95.0538 5.26133 95.0538 5.81244C95.0538 6.34978 94.854 6.80444 94.4545 7.17644C94.0687 7.53466 93.5727 7.71378 92.9665 7.71378ZM94.7231 8.91244V20.4444H91.1891V8.91244H94.7231Z"
        fill={activeColor ? activeColor : "#3A3B7B"}
      />
      <path
        d="M100.198 10.5451C100.543 10.0078 101.018 9.57378 101.624 9.24311C102.23 8.91244 102.94 8.74711 103.753 8.74711C104.704 8.74711 105.565 8.98822 106.336 9.47044C107.108 9.95266 107.714 10.6416 108.155 11.5371C108.61 12.4327 108.837 13.4729 108.837 14.6578C108.837 15.8427 108.61 16.8898 108.155 17.7991C107.714 18.6947 107.108 19.3904 106.336 19.8864C105.565 20.3687 104.704 20.6098 103.753 20.6098C102.954 20.6098 102.244 20.4444 101.624 20.1138C101.018 19.7831 100.543 19.356 100.198 18.8324V25.9418H96.6642V8.91244H100.198V10.5451ZM105.241 14.6578C105.241 13.776 104.993 13.0871 104.497 12.5911C104.015 12.0813 103.415 11.8264 102.699 11.8264C101.996 11.8264 101.397 12.0813 100.901 12.5911C100.419 13.1009 100.178 13.7967 100.178 14.6784C100.178 15.5602 100.419 16.256 100.901 16.7658C101.397 17.2756 101.996 17.5304 102.699 17.5304C103.402 17.5304 104.001 17.2756 104.497 16.7658C104.993 16.2422 105.241 15.5396 105.241 14.6578Z"
        fill={activeColor ? activeColor : "#3A3B7B"}
      />
      <path
        d="M114.762 20.6098C113.756 20.6098 112.861 20.4376 112.076 20.0931C111.29 19.7487 110.67 19.2802 110.216 18.6878C109.761 18.0816 109.506 17.4064 109.451 16.6624H112.944C112.985 17.062 113.171 17.3858 113.502 17.6338C113.832 17.8818 114.239 18.0058 114.721 18.0058C115.162 18.0058 115.499 17.9231 115.734 17.7578C115.982 17.5787 116.106 17.3513 116.106 17.0758C116.106 16.7451 115.933 16.504 115.589 16.3524C115.244 16.1871 114.686 16.008 113.915 15.8151C113.088 15.6222 112.399 15.4224 111.848 15.2158C111.297 14.9953 110.822 14.6578 110.422 14.2031C110.023 13.7347 109.823 13.1078 109.823 12.3224C109.823 11.6611 110.002 11.0618 110.36 10.5244C110.732 9.97333 111.27 9.53933 111.972 9.22244C112.689 8.90555 113.536 8.74711 114.514 8.74711C115.961 8.74711 117.098 9.10533 117.924 9.82178C118.765 10.5382 119.247 11.4889 119.371 12.6738H116.106C116.05 12.2742 115.871 11.9573 115.568 11.7231C115.279 11.4889 114.893 11.3718 114.411 11.3718C113.998 11.3718 113.681 11.4544 113.46 11.6198C113.24 11.7713 113.13 11.9849 113.13 12.2604C113.13 12.5911 113.302 12.8391 113.646 13.0044C114.004 13.1698 114.556 13.3351 115.3 13.5004C116.154 13.7209 116.85 13.9413 117.387 14.1618C117.924 14.3684 118.393 14.7129 118.792 15.1951C119.206 15.6636 119.419 16.2973 119.433 17.0964C119.433 17.7716 119.24 18.3778 118.854 18.9151C118.482 19.4387 117.938 19.852 117.222 20.1551C116.519 20.4582 115.699 20.6098 114.762 20.6098Z"
        fill={activeColor ? activeColor : "#3A3B7B"}
      />
      <path
        d="M132.362 8.91244V20.4444H128.828V18.8738C128.47 19.3836 127.981 19.7969 127.361 20.1138C126.755 20.4169 126.08 20.5684 125.336 20.5684C124.454 20.5684 123.675 20.3756 123 19.9898C122.325 19.5902 121.802 19.0184 121.43 18.2744C121.058 17.5304 120.872 16.6556 120.872 15.6498V8.91244H124.385V15.1744C124.385 15.946 124.585 16.5453 124.984 16.9724C125.384 17.3996 125.921 17.6131 126.596 17.6131C127.285 17.6131 127.829 17.3996 128.229 16.9724C128.629 16.5453 128.828 15.946 128.828 15.1744V8.91244H132.362Z"
        fill={activeColor ? activeColor : "#3A3B7B"}
      />
      <path
        d="M148.995 8.78844C150.428 8.78844 151.565 9.22244 152.405 10.0904C153.26 10.9584 153.687 12.164 153.687 13.7071V20.4444H150.173V14.1824C150.173 13.4384 149.974 12.8667 149.574 12.4671C149.188 12.0538 148.651 11.8471 147.962 11.8471C147.273 11.8471 146.729 12.0538 146.329 12.4671C145.944 12.8667 145.751 13.4384 145.751 14.1824V20.4444H142.237V14.1824C142.237 13.4384 142.038 12.8667 141.638 12.4671C141.252 12.0538 140.715 11.8471 140.026 11.8471C139.337 11.8471 138.793 12.0538 138.393 12.4671C138.008 12.8667 137.815 13.4384 137.815 14.1824V20.4444H134.281V8.91244H137.815V10.3591C138.173 9.87689 138.641 9.498 139.22 9.22244C139.799 8.93311 140.453 8.78844 141.183 8.78844C142.051 8.78844 142.823 8.97444 143.498 9.34644C144.187 9.71844 144.724 10.2489 145.11 10.9378C145.51 10.304 146.054 9.78733 146.743 9.38778C147.432 8.98822 148.183 8.78844 148.995 8.78844Z"
        fill={activeColor ? activeColor : "#3A3B7B"}
      />
    </chakra.svg>
  );
};

export default Logo1;