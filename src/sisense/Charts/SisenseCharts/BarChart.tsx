import { useState } from "react";

import { ButtonGroup } from "../../../components/ButtonGroup";
import { ExecuteQuery, BarChart } from "@sisense/sdk-ui";
import CodeHighlight from "../../../components/CodeHighlight";
import CodeBlock from "../../../components/CodeBlock";
import { Data, Filter, measures } from "@sisense/sdk-data";
import * as DM from "sisense/Schemas/healthsense-master";
import { Card } from "@mui/material";

type Props = {
  filters: Filter;
};

export default function ExecuteQueryChart(props: Props) {
  const [view, setView] = useState("Preview");

  return (
    <CodeHighlight uniqueKey={view}>
      <article className="my-8">
        <header className="flex items-baseline" style={{ padding: "10px" }}>
          <div style={{ color: "white" }}>
            <ButtonGroup selected={view} onChange={setView} labels={["Preview", "React"]} />
          </div>
        </header>

        {view === "Preview" && (
          <Card style={{ borderRadius: "20px" }}>
            <ExecuteQuery
              dataSource={DM.DataSource}
              dimensions={[DM.Healthsense.VisitDate.Years]}
              measures={[measures.count(DM.Healthsense.PatientID, "Total Quantity")]}
              filters={[]}
            >
              {(data: Data) => {
                return (
                  <BarChart
                    dataSet={data}
                    dataOptions={{
                      category: [{ name: "Years", type: "datetime" }],
                      value: [{ name: "Total Quantity" }],
                      breakBy: [],
                    }}
                  />
                );
              }}
            </ExecuteQuery>
          </Card>
        )}

        {view === "React" && (
          <CodeBlock language="tsx">
            {`
            import React from "react";
            import { ExecuteQuery, BarChart } from "@sisense/sdk-ui";
            import { Data, Filter, measures } from "@sisense/sdk-data";
            import * as DM from "sisense/Schemas/healthsense-master";

            export default function App() {
             return (
                <>

            <ExecuteQuery
            dataSource={DM.DataSource}
            dimensions={[DM.Healthsense.VisitDate.Years]}
            measures={[measures.count(DM.Healthsense.PatientID, "Total Quantity")]}
            filters={[]}
          >
            {(data: Data) => {
              return (
                <BarChart
                  dataSet={data}
                  dataOptions={{
                    category: [{ name: "Years", type: "datetime" }],
                    value: [{ name: "Total Quantity" }],
                    breakBy: [],
                  }}
                />
              );
            }}
          </ExecuteQuery>
          </>
          );
        }


`}
          </CodeBlock>
        )}
      </article>
    </CodeHighlight>
  );
}
