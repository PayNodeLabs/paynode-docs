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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="PayNode Documentation" />
      <meta property="og:description" content="The official developer guide for the x402 Agentic Payment Protocol." />
    </>
  )
};
