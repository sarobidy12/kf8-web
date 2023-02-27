import * as React from "react"
import { Home } from '../components';
import type { HeadFC } from "gatsby";
import favIcon from '../images/logo.png';
import '../i18n/config';

export default Home;

export const Head: HeadFC = () => <>
    <title>KAF8</title>
    <meta name="description" content="KF8" />
    <link rel="icon" type="image/x-icon" href={favIcon} />
</>

