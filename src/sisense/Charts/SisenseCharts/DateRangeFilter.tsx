import { useState } from "react";

import { ButtonGroup } from "../../../components/ButtonGroup";
import { Chart, DateRangeFilterTile, ExecuteQuery, PieChart } from "@sisense/sdk-ui";
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
  const [dateRangeFilter, setDateRangeFilter] = useState(
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
              <DateRangeFilterTile
                title="Date Range"
                dataSource={DM.DataSource}
                attribute={DM.Healthsense.VisitDate.Days}
                filter={dateRangeFilter}
                onChange={(filter) => {
                  setDateRangeFilter(filter);
                }}
              />
              <Chart
                dataSet={DM.DataSource}
                chartType={"line"}
                dataOptions={{
                  category: [DM.Healthsense.VisitDate.Months],
                  value: [measures.sum(DM.Healthsense.PatientPaymentAmount, "Revenue")],
                  breakBy: [DM.Patient.Gender],
                }}
                filters={[dateRangeFilter]}
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
                <>
                <DateRangeFilterTile
                  title="Date Range"
                  dataSource={DM.DataSource}
                  attribute={DM.Healthsense.VisitDate.Days}
                  filter={dateRangeFilter}
                  onChange={(filter) => {
                    setDateRangeFilter(filter);
                  }}
                />
                <Chart
                  dataSet={DM.DataSource}
                  chartType={"line"}
                  dataOptions={{
                    category: [DM.Healthsense.VisitDate.Months],
                    value: [measures.sum(DM.Healthsense.PatientPaymentAmount, "Revenue")],
                    breakBy: [DM.Patient.Gender],
                  }}
                  filters={[dateRangeFilter]}
                />
              </>
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
