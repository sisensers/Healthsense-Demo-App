import { useState } from "react";

import { ButtonGroup } from "../../../components/ButtonGroup";
import { Chart, MemberFilterTile } from "@sisense/sdk-ui";
import CodeHighlight from "../../../components/CodeHighlight";
import CodeBlock from "../../../components/CodeBlock";
import { Data, Filter, filters, measures } from "@sisense/sdk-data";
import * as DM from "sisense/Schemas/healthsense-master";
import { Card } from "@mui/material";

type Props = {
  filters: Filter;
};

export default function ExecuteQueryChart(props: Props) {
  const [view, setView] = useState("Preview");
  const [AgeRangeFilter, setAgeRangeFilter] = useState(
    filters.dateRange(DM.Healthsense.VisitDate.Days)
  );

  return (
    <CodeHighlight uniqueKey={view}>
      <article className="my-8">
        <header className="flex items-baseline" style={{ padding: "10px" }}>
          <div style={{ color: "white" }}>
            <ButtonGroup selected={view} onChange={setView} labels={["Preview", "React"]} />
          </div>
        </header>

        {view === "Preview" && (
          <Card>
            <>
              <MemberFilterTile
                title="Age Range"
                dataSource={DM.DataSource}
                attribute={DM.Healthsense.AgeRange}
                filter={AgeRangeFilter}
                onChange={(filter) => {
                  setAgeRangeFilter(filter);
                }}
              />
              <Chart
                dataSet={DM.DataSource}
                chartType={"line"}
                dataOptions={{
                  category: [DM.Healthsense.VisitDate.Years],
                  value: [measures.count(DM.Healthsense.PatientID, "Revenue")],
                }}
                filters={[AgeRangeFilter]}
              />
            </>
          </Card>
        )}

        {view === "React" && (
          <CodeBlock language="tsx">
            {`
            import React from "react";
            import { Chart, DateRangeFilterTile} from "@sisense/sdk-ui";
            import { Data, Filter, measures } from "@sisense/sdk-data";
            import * as DM from "sisense/Schemas/healthsense-master";

            export default function App() {
             return (
                <MemberFilterTile
                title="Age Range"
                dataSource={DM.DataSource}
                attribute={DM.Healthsense.AgeRange}
                filter={AgeRangeFilter}
                onChange={(filter) => {
                  setAgeRangeFilter(filter);
                }}
              />
              <Chart
                dataSet={DM.DataSource}
                chartType={"line"}
                dataOptions={{
                  category: [DM.Healthsense.VisitDate.Years],
                  value: [measures.count(DM.Healthsense.PatientID, "Revenue")],
                }}
                filters={[AgeRangeFilter]}
              />
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
