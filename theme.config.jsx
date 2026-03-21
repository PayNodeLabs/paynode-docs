export default {
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span style={{ fontWeight: 800, letterSpacing: "-0.5px" }}>PAYNODE</span>
      <span style={{ opacity: 0.5 }}>DOCS</span>
    </div>
  ),
  project: {
    link: "https://github.com/PayNodeLabs"
  },
  docsRepositoryBase: "https://github.com/PayNodeLabs/paynode-docs/blob/main",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://paynode.dev" target="_blank">
          PayNode Protocol
        </a>
      </span>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – PayNode Docs"
    };
  },
  head: (
    <>
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="PayNode Documentation" />
      <meta property="og:description" content="The official developer guide for the x402 Agentic Payment Protocol." />
    </>
  )
};
