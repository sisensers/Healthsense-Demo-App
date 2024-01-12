import {
  Dimension,
  DateDimension,
  Attribute,
  createAttribute,
  createDateDimension,
  createDimension,
} from "@sisense/sdk-data";

export const DataSource = "Healthsense-Master";

interface DoctorDimension extends Dimension {
  DoctorID: Attribute;
  Name: Attribute;
  PracticeID: Attribute;
  Specialty: Attribute;
}
export const Doctor = createDimension({
  name: "Doctor",
  DoctorID: createAttribute({
    name: "DoctorID",
    type: "numeric-attribute",
    expression: "[Doctor.Doctor ID]",
  }),
  Name: createAttribute({
    name: "Name",
    type: "text-attribute",
    expression: "[Doctor.Name]",
  }),
  PracticeID: createAttribute({
    name: "PracticeID",
    type: "numeric-attribute",
    expression: "[Doctor.Practice ID]",
  }),
  Specialty: createAttribute({
    name: "Specialty",
    type: "text-attribute",
    expression: "[Doctor.Specialty]",
  }),
}) as DoctorDimension;

interface HealthsenseDimension extends Dimension {
  AgeRange: Attribute;
  City: Attribute;
  DayOfWeek: Attribute;
  Description: Attribute;
  DoctorID: Attribute;
  InsuranceClaimAmount: Attribute;
  InsuranceReimbursedAmount: Attribute;
  PatientID: Attribute;
  PatientPaymentAmount: Attribute;
  PaymentStatus: Attribute;
  PracticeID: Attribute;
  PracticeName: Attribute;
  Reimbursed: Attribute;
  State: Attribute;
  Submitted: Attribute;
  VisitID: Attribute;
  VisitType: Attribute;
  WaitTime: Attribute;
  VisitDate: DateDimension;
}
export const Healthsense = createDimension({
  name: "Healthsense",
  AgeRange: createAttribute({
    name: "AgeRange",
    type: "text-attribute",
    expression: "[Healthsense.Age Range]",
  }),
  City: createAttribute({
    name: "City",
    type: "text-attribute",
    expression: "[Healthsense.City]",
  }),
  DayOfWeek: createAttribute({
    name: "DayOfWeek",
    type: "text-attribute",
    expression: "[Healthsense.DayOfWeek]",
  }),
  Description: createAttribute({
    name: "Description",
    type: "text-attribute",
    expression: "[Healthsense.Description]",
  }),
  DoctorID: createAttribute({
    name: "DoctorID",
    type: "numeric-attribute",
    expression: "[Healthsense.Doctor ID]",
  }),
  InsuranceClaimAmount: createAttribute({
    name: "InsuranceClaimAmount",
    type: "numeric-attribute",
    expression: "[Healthsense.Insurance Claim Amount]",
  }),
  InsuranceReimbursedAmount: createAttribute({
    name: "InsuranceReimbursedAmount",
    type: "numeric-attribute",
    expression: "[Healthsense.Insurance Reimbursed Amount]",
  }),
  PatientID: createAttribute({
    name: "PatientID",
    type: "numeric-attribute",
    expression: "[Healthsense.Patient ID]",
  }),
  PatientPaymentAmount: createAttribute({
    name: "PatientPaymentAmount",
    type: "numeric-attribute",
    expression: "[Healthsense.Patient Payment Amount]",
  }),
  PaymentStatus: createAttribute({
    name: "PaymentStatus",
    type: "text-attribute",
    expression: "[Healthsense.Payment Status]",
  }),
  PracticeID: createAttribute({
    name: "PracticeID",
    type: "numeric-attribute",
    expression: "[Healthsense.Practice ID]",
  }),
  PracticeName: createAttribute({
    name: "PracticeName",
    type: "text-attribute",
    expression: "[Healthsense.Practice Name]",
  }),
  Reimbursed: createAttribute({
    name: "Reimbursed",
    type: "text-attribute",
    expression: "[Healthsense.Reimbursed]",
  }),
  State: createAttribute({
    name: "State",
    type: "text-attribute",
    expression: "[Healthsense.State]",
  }),
  Submitted: createAttribute({
    name: "Submitted",
    type: "text-attribute",
    expression: "[Healthsense.Submitted]",
  }),
  VisitID: createAttribute({
    name: "VisitID",
    type: "numeric-attribute",
    expression: "[Healthsense.Visit ID]",
  }),
  VisitType: createAttribute({
    name: "VisitType",
    type: "text-attribute",
    expression: "[Healthsense.Visit Type]",
  }),
  WaitTime: createAttribute({
    name: "WaitTime",
    type: "numeric-attribute",
    expression: "[Healthsense.Wait Time]",
  }),
  VisitDate: createDateDimension({
    name: "VisitDate",
    expression: "[Healthsense.Visit Date (Calendar)]",
  }),
}) as HealthsenseDimension;

interface PatientDimension extends Dimension {
  Age: Attribute;
  AgeRange: Attribute;
  Gender: Attribute;
  PatientID: Attribute;
  PatientName: Attribute;
  DateofBirth: DateDimension;
}
export const Patient = createDimension({
  name: "Patient",
  Age: createAttribute({
    name: "Age",
    type: "numeric-attribute",
    expression: "[Patient.Age]",
  }),
  AgeRange: createAttribute({
    name: "AgeRange",
    type: "text-attribute",
    expression: "[Patient.Age Range]",
  }),
  Gender: createAttribute({
    name: "Gender",
    type: "text-attribute",
    expression: "[Patient.Gender]",
  }),
  PatientID: createAttribute({
    name: "PatientID",
    type: "numeric-attribute",
    expression: "[Patient.Patient ID]",
  }),
  PatientName: createAttribute({
    name: "PatientName",
    type: "text-attribute",
    expression: "[Patient.Patient Name]",
  }),
  DateofBirth: createDateDimension({
    name: "DateofBirth",
    expression: "[Patient.Date of Birth (Calendar)]",
  }),
}) as PatientDimension;

interface PracticeDimension extends Dimension {
  City: Attribute;
  Name: Attribute;
  PracticeID: Attribute;
  Status: Attribute;
}
export const Practice = createDimension({
  name: "Practice",
  City: createAttribute({
    name: "City",
    type: "text-attribute",
    expression: "[Practice.City]",
  }),
  Name: createAttribute({
    name: "Name",
    type: "text-attribute",
    expression: "[Practice.Name]",
  }),
  PracticeID: createAttribute({
    name: "PracticeID",
    type: "numeric-attribute",
    expression: "[Practice.Practice ID]",
  }),
  Status: createAttribute({
    name: "Status",
    type: "text-attribute",
    expression: "[Practice.Status]",
  }),
}) as PracticeDimension;

interface TreatmentDimension extends Dimension {
  Name: Attribute;
  Patient_ID: Attribute;
  Quantity: Attribute;
  Stock: Attribute;
  Type: Attribute;
  Date: DateDimension;
}
export const Treatment = createDimension({
  name: "Treatment",
  Name: createAttribute({
    name: "Name",
    type: "text-attribute",
    expression: "[Treatment.Name]",
  }),
  Patient_ID: createAttribute({
    name: "Patient_ID",
    type: "numeric-attribute",
    expression: "[Treatment.Patient_ID]",
  }),
  Quantity: createAttribute({
    name: "Quantity",
    type: "numeric-attribute",
    expression: "[Treatment.Quantity]",
  }),
  Stock: createAttribute({
    name: "Stock",
    type: "numeric-attribute",
    expression: "[Treatment.Stock]",
  }),
  Type: createAttribute({
    name: "Type",
    type: "text-attribute",
    expression: "[Treatment.Type]",
  }),
  Date: createDateDimension({
    name: "Date",
    expression: "[Treatment.Date (Calendar)]",
  }),
}) as TreatmentDimension;
