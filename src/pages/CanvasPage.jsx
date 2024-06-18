import { Box } from "@chakra-ui/react";

function CanvasPage() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <canvas id="drawingCanvas" width="800" height="600" style={{ border: "1px solid black" }}></canvas>
    </Box>
  );
}

export default CanvasPage;
