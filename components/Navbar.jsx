import Link from "next/link";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center px-8 py-3 shadow-lg mx-auto"
      style={{
        background: "linear-gradient(90deg, #1e3a8a, #3b82f6)", // Gradient background
        borderRadius: "12px", // Rounded corners
        width: "95%", // Increase width of the navbar
        maxWidth: "1200px", // Set a maximum width for larger screens
        margin: "20px auto", // Center the navbar on the page
      }}
    >
      <Link
        className="text-white font-bold text-3xl hover:opacity-90 transition-opacity"
        href={"/"}
      >
        Studium
      </Link>
      <Link href={"/addTopic"}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffffff",
            color: "#ffffff", 
            borderRadius: "8px",
            padding: "6px 16px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#ffffff",
              color: "#000000"
            },
          }}
        >
          Add Topic
        </Button>
      </Link>
    </nav>
  );
}
