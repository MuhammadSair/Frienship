"use client";

import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import LoveLetter from "./components/loveletter";

function FloatingHeart() {
  const shape = createHeartShape();
  const geometry = new THREE.ShapeGeometry(shape);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.05;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      scale={0.8}
      rotation={[Math.PI, 0, 0]}
    >
      <meshStandardMaterial color="#f06292" side={THREE.DoubleSide} />
    </mesh>
  );
}

function createHeartShape(): THREE.Shape {
  const x = 0,
    y = 0;
  const heartShape = new THREE.Shape();
  heartShape.moveTo(x + 5, y + 5);
  heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
  heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
  heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
  heartShape.bezierCurveTo(x + 13, y + 15.4, x + 16, y + 11, x + 16, y + 7);
  heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
  heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
  return heartShape;
}

const qualities = [
  "Great storyteller 🎙️ (honestly should charge for those episodes)",
  "Lively and energetic 🌟 (like a Red Bull ad, but human)",
  "Can turn a boring day into a Netflix special 🍿",
  "Incredible listener 👂 (but don’t try to out-joke her)",
  "Witty as heck, and always 10 steps ahead of my sarcasm 🔥",
  "My only female friend and somehow still tolerates me 🫡",
];

export default function LaibaPage() {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #ffe4ec, #fff0f5)",
        minHeight: "100vh",
        py: 4,
        overflowX: "hidden",
      }}
    >
      {/* Animated Hearts Background */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage: `url('/hearts.gif')`,
          opacity: 0.05,
          backgroundSize: "cover",
        }}
      />

      {/* Header */}
      <Container
        maxWidth="sm"
        sx={{ textAlign: "center", mb: 6, position: "relative", zIndex: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#d81b60",
            textShadow: "0 0 10px #ff80ab",
          }}
        >
          Happy Girlfriend Day, Laiba! 💕
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ marginTop: 10, color: "#6a1b9a", fontSize: "1.2rem" }}
        >
          Here's to the CEO of Vibes™, and the queen of chaotic good energy 💫
        </motion.p>
      </Container>

      {/* 3D Heart */}
      <Container
        maxWidth="xs"
        component={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        sx={{ height: 300, mb: 6, position: "relative", zIndex: 1 }}
      >
        <Canvas camera={{ position: [0, 0, 30] }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          <FloatingHeart />
        </Canvas>
      </Container>

      {/* Qualities Section */}
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h5"
          component={motion.h2}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#ad1457",
            textAlign: "center",
          }}
        >
          What Makes You Ridiculously Awesome 💖
        </Typography>
        <Grid container spacing={2}>
          {qualities.map((quality, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                elevation={3}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "#f48fb1",
                  transition: { duration: 0.2 },
                }}
                sx={{
                  p: 2,
                  backgroundColor: "#f8bbd0",
                  color: "#880e4f",
                  borderRadius: 2,
                }}
              >
                <Typography variant="body1" align="center">
                  {quality}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Animated Emoji Section */}
      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          mt: 6,
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ fontSize: "2rem", marginBottom: 16 }}
        >
          💃 🎉 ✨ 🎈 💝
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <Typography variant="h6" sx={{ color: "#6a1b9a" }}>
              You're not just my only female friend — you're my whole comedy
              club 🎤💘
            </Typography>
          </motion.div>
        </motion.div>

        {/* Surprise Button */}
        {/* Love Letter Flip Card */}
        <LoveLetter />
      </Container>
    </Box>
  );
}
