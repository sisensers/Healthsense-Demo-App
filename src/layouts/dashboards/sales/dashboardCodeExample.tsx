export const dashboardCodeExample = `import React, { useEffect } from "react";

interface SisenseDashboardProps {
  sisenseUrl: string;
  watToken: string;
  dashboardId: string;
}

declare global {
  interface Window {
    "sisense.embed": {
      SisenseFrame: any;
      enums: any;
    };
  }
}

const SisenseDashboard: React.FC<SisenseDashboardProps> = ({
  sisenseUrl,
  watToken,
  dashboardId,
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://csdklivedemo.sisensepoc.com/js/frame.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Sisense Embed SDK is now loaded
      const sisenseFrame = new window["sisense.embed"].SisenseFrame({
        url: sisenseUrl,
        wat: watToken,
        dashboard: dashboardId,
        settings: {
          showToolbar: false,
          showLeftPane: false,
          showRightPane: false,
          showHeader: false,
        },
        element: document.getElementById("sisense-iframe"),
      });

      return () => {
        // Cleanup if necessary
        sisenseFrame.destroy();
      };
    };
  }, [sisenseUrl, watToken, dashboardId]);

  return <iframe id="sisense-iframe" style={{ height: "800px" }}></iframe>;
};

export default SisenseDashboard;
`;
