import Layout from "../components/Layout";

import { h1, section } from "./Events.module.css";

const Catering = () => {
  return (
    <Layout pageTitle="Wishbone Events">
      <section className={section}>
        <header>
          <h1 className={h1}>Catering</h1>
        </header>
      </section>
    </Layout>
  );
};

export default Catering;
