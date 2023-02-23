import * as React from "react"
import { Home } from '../components';
import type { HeadFC } from "gatsby";
import favIcon from '../images/logo.png';

export default Home;

export const Head: HeadFC = () => <>
    <title>KF8 - LA MEILLEURE SOLUTION DE LIVRAISON EN 2023</title>
    <meta name="description" content="KF8" />
    <link rel="icon" type="image/x-icon" href={favIcon} />
</>

