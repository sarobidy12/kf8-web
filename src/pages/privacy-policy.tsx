import * as React from "react"
import { PrivacyPolicy } from '../components';
import type { HeadFC } from "gatsby";
import favIcon from '../images/favicon.ico';
import appleTouchIcon from '../images/apple-touch-icon.png';
import favicon32 from '../images/favicon-32x32.png';
import favicon16 from '../images/favicon-16x16.png';
import safariPinnedTab from '../images/safari-pinned-tab.svg';
import '../i18n/config';

export default PrivacyPolicy;

export const Head: HeadFC = () => <>
    <title>KAF8</title>
    <meta name="description" content="KF8" />
    <link rel="icon" type="image/x-icon" href={favIcon} />
    <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    <link rel="mask-icon" href={safariPinnedTab} color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff"></meta>
</>

