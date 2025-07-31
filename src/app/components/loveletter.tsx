"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";

const cardVariants = {
  front: { rotateY: 0 },
  back: { rotateY: 180 },
};

export default function LoveLetter() {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      onClick={() => setFlipped(!flipped)}
      sx={{
        perspective: 1000,
        width: 300,
        height: 200,
        margin: "40px auto",
        cursor: "pointer",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
        animate={flipped ? "back" : "front"}
        variants={{
          front: { rotateY: 0 },
          back: { rotateY: 180 },
        }}
        transition={{ duration: 0.8 }}
      >
        {/* Front of the letter */}
        <Box
          component={motion.div}
          sx={{
            position: "absolute",
            backfaceVisibility: "hidden",
            width: "100%",
            height: "100%",
            bgcolor: "#fff",
            border: "2px solid #d81b60",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            color: "#d81b60",
            boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
          }}
        >
          💌 Click to Open
        </Box>

        {/* Back of the letter */}
        <Box
          component={motion.div}
          sx={{
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            width: "100%",
            height: "100%",
            bgcolor: "#fce4ec",
            border: "2px solid #d81b60",
            borderRadius: 2,
            p: 2,
            boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#6a1b9a", fontStyle: "italic" }}
          >
            Dear Laiba,
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            You brighten my days with your stories and your energy. You&apos;re
            not just my only female friend — you&apos;re my light, my laugh, my
            calm in chaos. 💖
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, textAlign: "right" }}>
            — Yours, always.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
