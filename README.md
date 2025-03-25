# Visual Math Solver

## Overview  
Math Canvas Solver is a web-based application that allows users to **write handwritten math problems** on a digital canvas. Using **computer vision (CV) and machine learning (ML)**, the app recognizes handwritten digits and symbols, solves the equation, and displays both the **original problem and the computed solution**.  

## Features  
✅ **Handwritten Math Recognition** – Draw equations on a digital canvas and have them automatically parsed.  
✅ **AI-Powered OCR & Symbol Detection** – Uses a trained neural network to interpret handwritten numbers and operators.  
✅ **Real-Time Equation Solving** – Integrates with a math solver (SymPy or Math.js) to compute solutions.  
✅ **User-Friendly Interface** – Built with React and Fabric.js for a smooth drawing experience.  
✅ **Fast Inference in the Browser** – Runs efficiently using ONNX.js or TensorFlow.js for real-time recognition.  

## Technology Stack  
- **Frontend:** React, Fabric.js (Canvas), HTML5, CSS  
- **Machine Learning Model:**  
  - Trained in **Python (PyTorch or TensorFlow)**  
  - Exported to **ONNX** for use in the browser  
- **Computer Vision:** OpenCV.js for preprocessing handwritten input  
- **Math Solver:** Math.js (JavaScript) or SymPy via Pyodide  
- **Deployment:** GitHub Pages  

## How It Works  
1. Users write an equation on the canvas (e.g., `2x + 3 =`).  
2. The app preprocesses the image using OpenCV.js (denoising, thresholding).  
3. The trained ML model detects digits and symbols, converting them into structured math expressions.  
4. The parsed equation is solved using Math.js (or SymPy if running Python in-browser).  
5. The solution is displayed alongside the original handwritten problem.  

## Future Enhancements  
🔹 **Step-by-step solutions** with explanation.  
🔹 **Support for calculus** (integrals, derivatives, matrices).  
🔹 **Mobile touch support** for a better user experience.  
🔹 **Offline mode** using WebAssembly and Pyodide.  

