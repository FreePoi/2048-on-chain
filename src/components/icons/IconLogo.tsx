import { SvgIcon, SvgIconProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const Svg = styled(SvgIcon)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '214.375px',
    height: '20px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '257.25px',
    height: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '343px',
    height: '32px',
  },
}));

export default function IconLogo({ ...props }: SvgIconProps) {
  return (
    <Svg viewBox="0 0 343 32" {...props}>
      <g fill="none" fillRule="evenodd" id="页面-1" stroke="none" strokeWidth="1">
        <g id="rollp-bridge" transform="translate(-106.000000, -36.000000)">
          <g id="编组-2" transform="translate(106.000000, 36.000000)">
            <g id="altbridge-logo">
              <rect height="32" id="矩形" width="204" x="2.50111043e-10" y="0"></rect>
              <path
                d="M17.9629188,31.9734044 C18.2007593,31.973746 18.4363545,31.9271106 18.6562317,31.8360852 C18.8759362,31.7450598 19.0756048,31.6115444 19.243665,31.4433115 L33.406144,17.2808325 C33.5743769,17.1126169 33.7077196,16.9129483 33.7987449,16.6932093 C33.8897703,16.4734702 33.9367512,16.2379442 33.9367512,16.0000864 C33.9367512,15.7622286 33.8897703,15.5267025 33.7987449,15.3069462 C33.7077196,15.0872071 33.5743769,14.8875558 33.406144,14.719392 L19.243665,0.556930268 C19.0756048,0.38855576 18.8759362,0.255045529 18.6562317,0.164071443 C18.4363545,0.073097875 18.2007593,0.0264543605 17.9629188,0.0268172932 L17.9629188,31.9734044 Z"
                fill="#6667AB"
                fillRule="nonzero"
                id="路径"
              ></path>
              <path
                d="M15.974351,26.0135696 C15.5109851,26.0135696 15.0476193,25.9042355 14.6942093,25.6810765 L0.530108438,16.8026988 C-0.176702813,16.3595589 -0.176702813,15.6407175 0.530108438,15.1975948 L14.6931212,6.31925167 C15.0465311,6.09768172 15.509897,5.98663766 15.9732628,5.98663766 L15.974351,26.0135696 Z"
                fill="#6667AB"
                fillRule="nonzero"
                id="路径"
                opacity="0.5"
              ></path>
              <path
                d="M15.974351,20.0264483 C15.5109851,20.0264483 15.0476193,19.9171142 14.6942093,19.6944734 L0.530108438,10.8160611 C-0.176702813,10.3729385 -0.176702813,9.65407979 0.530108438,9.21042172 L14.6931212,0.332617466 C15.0443375,0.109413376 15.509897,0 15.974351,0 L15.974351,20.0264483 Z"
                fill="#6667AB"
                fillRule="nonzero"
                id="路径"
                opacity="0.5"
              ></path>
              <path
                d="M15.974351,32 C15.5109851,32 15.0476193,31.8906659 14.6942093,31.6675069 L0.530108438,22.7896819 C-0.176702813,22.3459548 -0.176702813,21.6270788 0.530108438,21.1840425 L14.6931212,12.3056648 C15.0465311,12.0841121 15.509897,11.9736035 15.9732628,11.9736035 L15.974351,32 Z"
                fill="#6667AB"
                fillRule="nonzero"
                id="路径"
                opacity="0.5"
              ></path>
              <path
                d="M39.4549276,26.9328051 L47.8064635,5.06919851 L53.7148228,5.06919851 L62.0663587,26.9328051 L56.3616407,26.9328051 L54.3920724,21.9763261 L47.0936329,21.9763261 L45.1582639,26.9328051 L39.4549276,26.9328051 Z M47.8404901,17.9361462 L53.6453879,17.9361462 L50.7261848,10.3319857 L47.8404901,17.9361462 Z"
                fill="#6667AB"
                fillRule="nonzero"
                id="形状"
                opacity="0.66"
              ></path>
              <polygon
                fill="#6667AB"
                fillRule="nonzero"
                id="路径"
                opacity="0.66"
                points="63.973401 26.9328051 63.973401 5.06919851 69.4392422 5.06919851 69.4392422 22.7230106 79.762419 22.7230106 79.762419 26.9328051"
              ></polygon>
              <polygon
                fill="#6667AB"
                fillRule="nonzero"
                id="路径"
                opacity="0.66"
                points="76.9800131 9.27888939 83.5053414 9.27888939 83.5053414 26.9328051 88.8868934 26.9328051 88.8868934 5.06919851 76.9800131 5.06919851"
              ></polygon>
              <g
                fill="#6667AB"
                fillRule="nonzero"
                id="BRIDGE"
                transform="translate(90.800000, 4.764000)"
              >
                <path
                  d="M0,22.236 L0,0.34 L11.56,0.34 C13.7586667,0.34 15.419,0.861333333 16.541,1.904 C17.663,2.94666667 18.224,4.42 18.224,6.324 C18.224,7.48 18.003,8.449 17.561,9.231 C17.119,10.013 16.5353333,10.6193333 15.81,11.05 C16.8073333,11.4126667 17.5893333,11.9453333 18.156,12.648 C18.7226667,13.3506667 19.006,14.4046667 19.006,15.81 C19.006,17.8953333 18.394,19.4876667 17.17,20.587 C15.946,21.6863333 14.1893333,22.236 11.9,22.236 L0,22.236 Z M5.474,9.248 L9.928,9.248 C10.88,9.248 11.5713333,9.03266667 12.002,8.602 C12.4326667,8.17133333 12.648,7.57066667 12.648,6.8 C12.648,5.96133333 12.4326667,5.33233333 12.002,4.913 C11.5713333,4.49366667 10.7893333,4.284 9.656,4.284 L5.474,4.284 L5.474,9.248 Z M5.474,18.326 L10.472,18.326 C11.4693333,18.326 12.2116667,18.122 12.699,17.714 C13.1863333,17.306 13.43,16.5806667 13.43,15.538 C13.43,14.6993333 13.192,14.0703333 12.716,13.651 C12.24,13.2316667 11.424,13.022 10.268,13.022 L5.474,13.022 L5.474,18.326 Z"
                  id="形状"
                ></path>
                <path
                  d="M21.794,22.236 L21.794,0.34 L32.742,0.34 C35.326,0.34 37.23,1.02 38.454,2.38 C39.678,3.74 40.29,5.56466667 40.29,7.854 C40.29,9.32733333 39.916,10.6193333 39.168,11.73 C38.42,12.8406667 37.4,13.668 36.108,14.212 C36.4253333,14.4613333 36.6803333,14.739 36.873,15.045 C37.0656667,15.351 37.2753333,15.776 37.502,16.32 L40.086,22.236 L34.374,22.236 L31.926,16.66 C31.722,16.184 31.4613333,15.8383333 31.144,15.623 C30.8266667,15.4076667 30.3733333,15.3 29.784,15.3 L27.268,15.3 L27.268,22.236 L21.794,22.236 Z M27.268,11.084 L31.314,11.084 C32.3793333,11.084 33.2123333,10.8176667 33.813,10.285 C34.4136667,9.75233333 34.714,8.942 34.714,7.854 C34.714,5.65533333 33.66,4.556 31.552,4.556 L27.268,4.556 L27.268,11.084 Z"
                  id="形状"
                ></path>
                <polygon
                  id="路径"
                  points="43.078 22.236 43.078 0.34 48.552 0.34 48.552 22.236"
                ></polygon>
                <path
                  d="M52.02,22.236 L52.02,0.34 L61.506,0.34 C63.7273333,0.34 65.5973333,0.708333333 67.116,1.445 C68.6346667,2.18166667 69.7906667,3.36033333 70.584,4.981 C71.3773333,6.60166667 71.774,8.74933333 71.774,11.424 C71.774,15.1866667 70.907,17.9293333 69.173,19.652 C67.439,21.3746667 64.8833333,22.236 61.506,22.236 L52.02,22.236 Z M57.494,18.02 L60.758,18.02 C61.9366667,18.02 62.9283333,17.8443333 63.733,17.493 C64.5376667,17.1416667 65.1496667,16.49 65.569,15.538 C65.9883333,14.586 66.198,13.2146667 66.198,11.424 C66.198,9.61066667 66.011,8.211 65.637,7.225 C65.263,6.239 64.6736667,5.54766667 63.869,5.151 C63.0643333,4.75433333 62.0273333,4.556 60.758,4.556 L57.494,4.556 L57.494,18.02 Z"
                  id="形状"
                ></path>
                <path
                  d="M85.476,22.576 C81.6906667,22.576 78.812,21.6183333 76.84,19.703 C74.868,17.7876667 73.882,15.0846667 73.882,11.594 C73.882,7.94466667 74.8906667,5.1 76.908,3.06 C78.9253333,1.02 81.8946667,0 85.816,0 C87.1533333,0 88.3603333,0.0793333333 89.437,0.238 C90.5136667,0.396666667 91.5393333,0.634666667 92.514,0.952 L92.514,5.644 C91.5393333,5.28133333 90.525,5.032 89.471,4.896 C88.417,4.76 87.3346667,4.692 86.224,4.692 C83.8666667,4.692 82.1496667,5.253 81.073,6.375 C79.9963333,7.497 79.458,9.23666667 79.458,11.594 C79.458,13.7473333 79.968,15.3396667 80.988,16.371 C82.008,17.4023333 83.5153333,17.918 85.51,17.918 C86.8246667,17.918 88.0486667,17.7366667 89.182,17.374 L89.182,13.226 L84.456,13.226 L84.456,9.792 L93.772,9.792 L93.772,20.638 C93.0013333,21.1366667 91.9303333,21.5843333 90.559,21.981 C89.1876667,22.3776667 87.4933333,22.576 85.476,22.576 Z"
                  id="路径"
                ></path>
                <polygon
                  id="路径"
                  points="96.56 22.236 96.56 0.34 112.71 0.34 112.71 4.556 102.034 4.556 102.034 9.146 111.452 9.146 111.452 13.43 102.034 13.43 102.034 18.02 112.71 18.02 112.71 22.236"
                ></polygon>
              </g>
            </g>
            <rect fill="#AFB0CC" height="24" id="矩形" width="1" x="216" y="4"></rect>
            <g
              fill="#AFB0CC"
              fillRule="nonzero"
              id="rollup"
              transform="translate(230.016000, 5.072000)"
            >
              <path
                d="M0,20.928 L0,0.32 L9.472,0.32 C11.776,0.32 13.456,0.912 14.512,2.096 C15.568,3.28 16.096,4.88533333 16.096,6.912 C16.096,8.36266667 15.7333333,9.6 15.008,10.624 C14.2826667,11.648 13.2373333,12.3626667 11.872,12.768 C12.256,13.0453333 12.5546667,13.344 12.768,13.664 C12.9813333,13.984 13.1946667,14.4106667 13.408,14.944 L16,20.928 L12.416,20.928 L9.888,15.168 C9.65333333,14.6133333 9.37066667,14.2186667 9.04,13.984 C8.70933333,13.7493333 8.14933333,13.632 7.36,13.632 L3.488,13.632 L3.488,20.928 L0,20.928 Z M3.488,10.816 L8.544,10.816 C9.80266667,10.816 10.7946667,10.5066667 11.52,9.888 C12.2453333,9.26933333 12.608,8.27733333 12.608,6.912 C12.608,4.33066667 11.36,3.04 8.864,3.04 L3.488,3.04 L3.488,10.816 Z"
                id="形状"
              ></path>
              <path
                d="M28.16,21.248 C24.896,21.248 22.4533333,20.3893333 20.832,18.672 C19.2106667,16.9546667 18.4,14.2933333 18.4,10.688 C18.4,6.93333333 19.2106667,4.21333333 20.832,2.528 C22.4533333,0.842666667 24.896,0 28.16,0 C31.4453333,0 33.8933333,0.842666667 35.504,2.528 C37.1146667,4.21333333 37.92,6.93333333 37.92,10.688 C37.92,14.2933333 37.1146667,16.9546667 35.504,18.672 C33.8933333,20.3893333 31.4453333,21.248 28.16,21.248 Z M28.16,18.304 C30.3146667,18.304 31.8986667,17.712 32.912,16.528 C33.9253333,15.344 34.432,13.3973333 34.432,10.688 C34.432,7.82933333 33.9253333,5.82933333 32.912,4.688 C31.8986667,3.54666667 30.3146667,2.976 28.16,2.976 C26.0266667,2.976 24.4533333,3.54666667 23.44,4.688 C22.4266667,5.82933333 21.92,7.82933333 21.92,10.688 C21.92,13.3973333 22.4266667,15.344 23.44,16.528 C24.4533333,17.712 26.0266667,18.304 28.16,18.304 Z"
                id="形状"
              ></path>
              <polygon
                id="路径"
                points="41.312 20.928 41.312 0.32 44.8 0.32 44.8 18.24 55.36 18.24 55.36 20.928"
              ></polygon>
              <polygon
                id="路径"
                points="58.112 20.928 58.112 0.32 61.6 0.32 61.6 18.24 72.16 18.24 72.16 20.928"
              ></polygon>
              <path
                d="M83.712,21.248 C80.8746667,21.248 78.672,20.5653333 77.104,19.2 C75.536,17.8346667 74.752,15.8613333 74.752,13.28 L74.752,0.32 L78.24,0.32 L78.24,13.152 C78.24,14.88 78.7146667,16.1706667 79.664,17.024 C80.6133333,17.8773333 81.9626667,18.304 83.712,18.304 C85.44,18.304 86.7786667,17.8773333 87.728,17.024 C88.6773333,16.1706667 89.152,14.88 89.152,13.152 L89.152,0.32 L92.608,0.32 L92.608,13.28 C92.608,15.8613333 91.8293333,17.8346667 90.272,19.2 C88.7146667,20.5653333 86.528,21.248 83.712,21.248 Z"
                id="路径"
              ></path>
              <path
                d="M96.48,20.928 L96.48,0.32 L105.664,0.32 C107.242667,0.32 108.544,0.618666667 109.568,1.216 C110.592,1.81333333 111.349333,2.62933333 111.84,3.664 C112.330667,4.69866667 112.576,5.87733333 112.576,7.2 C112.576,9.248 111.941333,10.8906667 110.672,12.128 C109.402667,13.3653333 107.690667,13.984 105.536,13.984 L99.968,13.984 L99.968,20.928 L96.48,20.928 Z M99.968,11.232 L104.896,11.232 C106.282667,11.232 107.328,10.8693333 108.032,10.144 C108.736,9.41866667 109.088,8.43733333 109.088,7.2 C109.088,5.87733333 108.752,4.85333333 108.08,4.128 C107.408,3.40266667 106.4,3.04 105.056,3.04 L99.968,3.04 L99.968,11.232 Z"
                id="形状"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
}