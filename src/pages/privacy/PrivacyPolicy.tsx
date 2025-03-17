import React from "react";

// Define the type for each section
interface Section {
  title: string;
  content: string;
}

const PrivacyPolicy: React.FC = () => {
  const sections: Section[] = [
    {
      title: "Overview",
      content:
        "We, SMIT WhatsApp Extension, enhance your privacy while using WhatsApp Web. This policy explains how we handle your data responsibly.",
    },
    {
      title: "What Information Do We Collect?",
      content:
        "- No Personal Data: We do not collect or store messages, contacts, or any personal information.\n- Usage Data: The extension operates locally and does not track or share analytics.",
    },
    {
      title: "How Do We Use Your Data?",
      content:
        "The extension provides features like screen lock and message hiding, all processed locally in your browser.",
    },
    {
      title: "Data Protection",
      content:
        "All features run directly on your device. No data is stored or transmitted to our servers.",
    },
    {
      title: "Third-Party Data Sharing",
      content:
        "We do not share your data with third parties. This extension is not affiliated with WhatsApp Inc.",
    },
    {
      title: "Prohibited Usage",
      content:
        "This extension must not be used for scams, fraud, harassment, or any malicious activities. Any misuse of this extension is strictly prohibited.",
    },
    {
      title: "Policy Changes",
      content:
        "We may update this policy. Significant changes will be communicated through the extension.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0eafc, #cfdef3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 6px 14px rgba(0, 0, 0, 0.1)",
          padding: "35px",
          maxWidth: "850px",
          width: "100%",
          textAlign: "left",
          fontFamily: "'Poppins', sans-serif",
          marginTop: "30px",
        }}
      >
        <h1 style={headingMainStyle}>Privacy Policy</h1>
        <p style={dateStyle}>
          <strong>Last Updated: March 17, 2025</strong>
        </p>

        {sections.map(({ title, content }, index) => (
          <section key={index} style={sectionStyle}>
            <h2 style={headingStyle}>{title}</h2>
            <p style={paragraphStyle}>{content}</p>
          </section>
        ))}

        <p style={footerStyle}>
          <strong>Disclaimer:</strong> This extension is an independent project
          and is not affiliated with WhatsApp Inc.
        </p>
      </div>
    </div>
  );
};

// Define styles as objects with explicit types
const headingMainStyle: React.CSSProperties = {
  fontSize: "2.3rem",
  color: "#333",
  textAlign: "center",
  marginBottom: "18px",
  borderBottom: "2px solid #14b8a6",
  paddingBottom: "8px",
};

const dateStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#666",
  textAlign: "center",
  marginBottom: "25px",
};

const sectionStyle: React.CSSProperties = {
  marginBottom: "20px",
};

const headingStyle: React.CSSProperties = {
  fontSize: "1.6rem",
  color: "#14b8a6",
  marginBottom: "12px",
};

const paragraphStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "#444",
  lineHeight: "1.7",
};

const footerStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  color: "#777",
  textAlign: "center",
  marginTop: "30px",
};

export default PrivacyPolicy;
