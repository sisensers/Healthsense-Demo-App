import Button from "@mui/material/Button";
import React, { useEffect, useState, useRef } from "react";

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
  const [sisenseFrame, setSisenseFrame] = useState<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const loadEmbedSdk = async () => {
      const script = document.createElement("script");
      script.src = "https://csdklivedemo.sisensepoc.com/js/frame.js";
      script.async = true;
      document.body.appendChild(script);

      return new Promise<void>((resolve) => {
        script.onload = () => {
          resolve();
        };
      });
    };

    const initializeSisenseFrame = async () => {
      await loadEmbedSdk();

      const frame = new window["sisense.embed"].SisenseFrame({
        url: sisenseUrl,
        wat: watToken,
        dashboard: dashboardId,
        settings: {
          showToolbar: false,
          showLeftPane: false,
          showRightPane: false,
        },
        element: iframeRef.current,
      });

      setSisenseFrame(frame);
      return frame;
    };

    initializeSisenseFrame();
  }, [sisenseUrl, watToken, dashboardId]);

  useEffect(() => {
    if (sisenseFrame) {
      sisenseFrame.render().then(() => {
        console.log("iFrame element rendered");

        // Handle dashboard load event
        sisenseFrame.dashboard.on(
          window["sisense.embed"].enums.DashboardEventType.LOADED,
          dashboardLoadedHandler
        );

        // Handle filter change
        sisenseFrame.dashboard.on(
          window["sisense.embed"].enums.DashboardEventType.FILTERS_CHANGED,
          dashboardLoadedHandler
        );
      });
    }
  }, [sisenseFrame]);

  const dashboardLoadedHandler = (args: any) => {
    // Handle dashboard load event
    console.log("Dashboard loaded:", args.dashboard);
  };

  function exportPDF() {
    console.log("Opening export window");

    // Open Sisense Dashboard Export to PDF window
    sisenseFrame.dashboard.export().then(() => {
      console.log("Export window closed");
    });
  }

  function openSimplyAsk() {
    console.log("Opening Simply Ask");

    // Open Simply Ask
    sisenseFrame.dashboard.openSimplyAsk();
  }

  function toggleRightPane() {
    console.log("Toggling Right Pane");

    // Get current UI settings
    const currentSettings = sisenseFrame.getSettings();

    // Toggle the visibility of the right pane
    currentSettings.showRightPane = !currentSettings.showRightPane;

    // Update to new settings
    sisenseFrame.updateSettings(currentSettings).then(() => {
      console.log("Updated UI settings");
    });
  }

  return (
    <div>
      <Button
        onClick={exportPDF}
        variant="contained"
        color="primary"
        style={{
          color: "white",
          marginBottom: "16px",
          borderRadius: "10px",
        }}
      >
        Export
      </Button>
      <Button
        onClick={toggleRightPane}
        variant="contained"
        color="primary"
        style={{
          color: "white",
          marginLeft: "8px",
          marginBottom: "16px",
          borderRadius: "10px",
        }}
      >
        {sisenseFrame && sisenseFrame.getSettings().showRightPane ? "Hide Filters" : "Filters"}
      </Button>
      <Button
        onClick={openSimplyAsk}
        variant="contained"
        color="primary"
        style={{
          color: "white",
          marginLeft: "8px",
          marginBottom: "16px",
          borderRadius: "10px",
        }}
      >
        Ask A Question!
      </Button>
      <iframe
        id="sisense-iframe"
        ref={iframeRef}
        style={{
          height: "800px", // Adjust the initial height as needed
          border: "none",
          width: "100%",
          borderRadius: "10px",
        }}
      ></iframe>
    </div>
  );
};

export default SisenseDashboard;
