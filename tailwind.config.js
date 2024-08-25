/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgColor: `var(--bgColor)`,
        textColor: `var(--textColor)`,
        textWhiteColor: `var(--textWhiteColor)`,
        textRvWhiteColor: `var(--textRvWhiteColor)`,
        cardBg: `var(--cardBg)`,
        selectBtnBg: `var(--selectBtnBg)`,
        selectBlackBtnBg: `var(--selectBlackBtnBg)`,
        yesBg: `var(--yesBg)`,
        yesHoverBg: `var(--yesHoverBg)`,
        yesBtnText: `var(--yesBtnText)`,
        noBg: `var(--noBg)`,
        noHoverBg: `var(--noHoverBg)`,
        noBtnText: `var(--noBtnText)`,
        
        btnColor: `var(--btnColor)`,
        btnHoverColor:`var(--btnHoverColor)`,
        selBtnHoverColor:`var(--selBtnHoverColor)`,
        selBtnHoverTextColor:`var(--selBtnHoverTextColor)`,

        searchHover: `var(--searchHover)`,


        footerBg:`var(--footerBg)`
      },
      //   colors: {
      //     darkBg: "#1f2a3b",
      //     darkCardBg:'#2f3f4f',
      //     darkYesBg:'#335554',
      //     darkNoBg:'#524350',
      //     darkBtn:'#2d9cdb',
      //   }
    },
  },
  plugins: [],
};
