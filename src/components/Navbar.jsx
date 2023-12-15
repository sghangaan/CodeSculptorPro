import { Container} from "@mui/material";

function Navbar() {
  return (
    <Container

    >
      {/* Image */}
      <img
        src="../Nav_CSPMain_Final.png" // Replace with the actual path to your image
        alt="Logo"
        style={{
          width: "600px", // Set the width as needed
          height: "800", // Maintain aspect ratio
          margin: "8px auto", // Center the image horizontally
          display: "block", // Ensure the image is treated as a block element
         
        }}
      />
    
    </Container>
  );
}

export default Navbar;

