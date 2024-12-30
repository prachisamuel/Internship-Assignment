# React.js Assignment

## **Assessment 1: Mapping Words/Sentences Between Two Boxes**

### **Objective:**
To map each word/sentence in one box to its counterpart in another box, allowing users to scroll to the same sentence/word in the input box when clicking on it in the output box.

---

### **Instructions:**
1. **Setup:**
   - Clone the repository and navigate to the project directory:
     ```bash
     git clone https://github.com/prachisamuel/Internship-Assignment.git
     cd assessment_1
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

2. **Implementation Overview:**
   - Create two scrollable boxes (Input Box and Output Box) in the UI.
   - Highlight words or sentences in both boxes.
   - Add an `onClick` event for the highlighted words/sentences in the Output Box.
   - On click, the corresponding word/sentence in the Input Box should scroll into view.

3. **Run the Project:**
   ```bash
   npm start
   ```
   Open the browser and navigate to `http://localhost:3000`.

4. **How It Works:**
   - Clicking a word/sentence in the Output Box triggers an event.
   - The event identifies the selected word/sentence and scrolls to its position in the Input Box.

---

### **Key Concepts Used:**
- React state management
- DOM manipulation
- Event handling
- Smooth scrolling

---

### **Future Improvements:**
- Add animations to highlight selected words.
- Handle overlapping words/sentences efficiently.

---

## **Assessment 2: Mapping Symptoms to a 3D Body Model**

### **Objective:**
To create a 3D body model that highlights specific organs based on symptoms, diseases, or tests related to a patient.

---

### **Instructions:**
1. **Setup:**
   - Clone the repository and navigate to the project directory:
     ```bash
     git clone https://github.com/prachisamuel/Internship-Assignment.git
     cd assessment_2
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

2. **Implementation Overview:**
   - Use a 3D model library like `three.js` or `react-three-fiber` to render a body model.
   - Highlight specific organs based on the given symptoms, diseases, or tests.
   - Create a unique model for each patient with dynamic updates.

3. **Run the Project:**
   ```bash
   npm start
   ```
   Open the browser and navigate to `http://localhost:3000`.

4. **How It Works:**
   - Symptoms, diseases, or tests are dynamically mapped to specific organs.
   - Clicking on a symptom highlights the related organ(s) in the 3D model.
   - Multiple symptoms/diseases will highlight multiple organs simultaneously.

---

### **Key Concepts Used:**
- `three.js` or `react-three-fiber` for 3D rendering
- State management for dynamic symptom mapping
- Event handling for interactions with the model

---

### **Future Improvements:**
- Add animations for highlighting organs.
- Include tooltips with additional information about the highlighted organ.
- Optimize the 3D model for better performance.

---

## **Common Steps to Build and Deploy:**
1. **Build the Project:**
   ```bash
   npm run build
   ```

2. **Deploy the Project:**
   - Use services like Vercel, Netlify, or AWS Amplify to deploy the application.
   - Alternatively, serve the `build/` directory using any static server.

3. **Testing:**
   - Test the application for responsiveness and cross-browser compatibility.
   - Ensure smooth scrolling and 3D model rendering work seamlessly.

---
