import { node, string } from "prop-types";

import MainHeader from "./MainHeader";

import { main } from "./Layout.module.css";

const Layout = ({ pageTitle, children }) => (
  <>
    <title>{pageTitle}</title>
    <MainHeader />
    <main className={main}>{children}</main>
  </>
);

Layout.propTypes = {
  children: node.isRequired,
  pageTitle: string.isRequired,
};

export default Layout;
