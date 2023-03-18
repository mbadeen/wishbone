import { node, string } from "prop-types";

import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

import { main } from "./Layout.module.css";

const Layout = ({ pageTitle, children }) => (
  <>
    <title>{pageTitle}</title>
    <MainHeader />
    <main className={main}>{children}</main>
    <MainFooter />
  </>
);

Layout.propTypes = {
  children: node.isRequired,
  pageTitle: string.isRequired,
};

export default Layout;
