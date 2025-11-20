const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "1rem",
        textAlign: "center",
        borderTop: "1px solid #e2e2e2",
        marginTop: "2rem",
        fontSize: "0.9rem",
        color: "#555"
      }}
    >
      © {year} AI-CPA | All rights reserved.
    </footer>
  );
};

export default Footer;
