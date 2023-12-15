import { Alert } from "@mui/material";

function Information() {
  return (
    <Alert icon={false} severity="info"
      sx={{
       
        color: "#ffffff", // White font color
        background: "radial-gradient(circle at 0% 0%, #422532, #120544, #992c2c);", // Linear gradient background
      }}
    >
      {"CodeSculptorPro operates as a specialized single-line code analyzer, leveraging the initial three stages of the compilation process. This software focuses exclusively on scrutinizing declarations and assignment operations, offering a detailed examination of various recognized data types, including String, int, char, boolean, double, and float. By adhering to a stringent analysis approach, CodeSculptorPro facilitates a comprehensive understanding of the codebase, emphasizing precision and thoroughness in its assessment of the specified data types within the programming context."}
    </Alert>
  );
}

export default Information;
