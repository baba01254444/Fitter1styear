const drawingQuestions = [
  {
    q: "Q1. पहली कोणीय प्रणाली का प्रतीक क्या है? / What is the symbol of first angle projection?",
    o: [
      "एक शंकु और एक वर्ग (Cone and square)",
      "एक गोला और एक त्रिभुज (Circle and triangle)",
      "एक सिलेंडर और एक आयत (Cylinder and rectangle)",
      "एक वृत्त और एक घन (Circle and cube)"
    ],
    a: 1
  },
  {
    q: "Q2. रेखा की मोटाई को कैसे दर्शाया जाता है? / How is line thickness represented?",
    o: [
      "रंग से (By color)",
      "डैश से (By dash)",
      "मोटाई से (By thickness)",
      "व्यास से (By diameter)"
    ],
    a: 2
  },
  {
    q: "Q3. एक रेखा और एक वक्र के बीच कोण मापने के लिए कौन सा यंत्र उपयोग किया जाता है? / Which instrument is used to measure angle between a line and a curve?",
    o: [
      "वर्नियर कैलिपर (Vernier caliper)",
      "डिवाइडर (Divider)",
      "प्रोट्रैक्टर (Protractor)",
      "स्केल (Scale)"
    ],
    a: 2
  },
  {
    q: "Q4. सबसे सामान्य रेखा प्रकार कौन सी है? / Which is the most common type of line?",
    o: [
      "डैश लाइन (Dash line)",
      "सॉलिड लाइन (Solid line)",
      "डॉटेड लाइन (Dotted line)",
      "डबल लाइन (Double line)"
    ],
    a: 1
  },
  {
    q: "Q5. चित्रण में प्रयुक्त सबसे सामान्य मापन इकाई क्या है? / What is the most common unit used in drawing?",
    o: [
      "सेमी (cm)",
      "मीटर (m)",
      "मिलीमीटर (mm)",
      "इंच (inch)"
    ],
    a: 2
  },
  {
    q: "Q6. स्केल का मुख्य उपयोग क्या है? / What is the main use of a scale?",
    o: [
      "कोण मापना (Measure angle)",
      "व्यास मापना (Measure diameter)",
      "लंबाई मापना (Measure length)",
      "वजन मापना (Measure weight)"
    ],
    a: 2
  },
  {
    q: "Q7. दो समानांतर रेखाओं के बीच की दूरी को क्या कहते हैं? / What is the distance between two parallel lines called?",
    o: [
      "कोण (Angle)",
      "त्रिज्या (Radius)",
      "व्यास (Diameter)",
      "चौड़ाई (Width)"
    ],
    a: 3
  },
  {
    q: "Q8. चित्रण में किस प्रकार की रेखा छुपी वस्तुओं को दर्शाती है? / Which type of line represents hidden objects in drawing?",
    o: [
      "ठोस रेखा (Solid line)",
      "डैश लाइन (Dash line)",
      "डॉटेड लाइन (Dotted line)",
      "ज़िगज़ैग लाइन (Zigzag line)"
    ],
    a: 1
  },
  {
    q: "Q9. अक्ष रेखा (Axis line) को कैसे दर्शाया जाता है? / How is axis line represented?",
    o: [
      "लंबी-छोटी डैश रेखा (Long-short dash line)",
      "ठोस रेखा (Solid line)",
      "डबल लाइन (Double line)",
      "बिंदु रेखा (Dotted line)"
    ],
    a: 0
  },
  {
    q: "Q10. त्रिकोण स्क्वायर में कोण होते हैं: / Triangle square contains angles of:",
    o: [
      "30°, 60°, 90°",
      "45°, 90°, 60°",
      "15°, 30°, 90°",
      "60°, 60°, 60°"
    ],
    a: 0
  },
  {
    q: "Q11. चित्रण में 'बीम' शब्द किसके लिए प्रयुक्त होता है? / What does 'beam' refer to in drawing?",
    o: [
      "सहारा देने वाली संरचना (Supporting structure)",
      "रंग (Color)",
      "रेखा (Line)",
      "घन (Cube)"
    ],
    a: 0
  },
  {
    q: "Q12. वक्र रेखा को चित्र में कैसे दर्शाया जाता है? / How is a curved line shown in drawing?",
    o: [
      "सीधी रेखा (Straight line)",
      "बिंदु रेखा (Dotted line)",
      "चाप (Arc)",
      "डैश लाइन (Dash line)"
    ],
    a: 2
  },
  {
    q: "Q13. चित्र में 'Sectional View' का उपयोग कब किया जाता है? / When is a 'Sectional View' used in drawing?",
    o: [
      "छिपे भाग दिखाने के लिए (To show hidden parts)",
      "रंग भरने के लिए (To color the part)",
      "स्केल बढ़ाने के लिए (To enlarge)",
      "सिर्फ शीर्ष दृश्य दिखाने के लिए (Top view only)"
    ],
    a: 0
  },
  {
    q: "Q14. एक गोला कितने अक्षों पर सममित होता है? / How many axes of symmetry does a sphere have?",
    o: [
      "1",
      "2",
      "3",
      "अनंत (Infinite)"
    ],
    a: 3
  },
  {
    q: "Q15. सबसे छोटा रेखा माप यंत्र कौन सा है? / Which is the smallest linear measuring instrument?",
    o: [
      "वर्नियर कैलिपर (Vernier caliper)",
      "माइक्रोमीटर स्क्रू (Micrometer screw)",
      "स्टील रूल (Steel rule)",
      "डायल गेज (Dial gauge)"
    ],
    a: 1
  },
  {
    q: "Q16. कौन सी लाइन वस्तु की सीमा दिखाती है? / Which line shows the boundary of the object?",
    o: [
      "अदृश्य रेखा (Hidden line)",
      "केंद्र रेखा (Center line)",
      "आउटलाइन (Outline)",
      "धारीदार रेखा (Hatched line)"
    ],
    a: 2
  },
  {
    q: "Q17. चित्रण में स्केल का विस्तार 10:1 का मतलब है? / What does 10:1 scale mean in drawing?",
    o: [
      "10 गुना छोटा (10 times smaller)",
      "10 गुना बड़ा (10 times bigger)",
      "1 गुना बड़ा (Same size)",
      "मूल आकार (Original size)"
    ],
    a: 1
  },
  {
    q: "Q18. कौन सा यंत्र रेखा को सही कोण पर खींचने में सहायक है? / Which tool helps to draw lines at accurate angles?",
    o: [
      "डिवाइडर (Divider)",
      "स्केल (Scale)",
      "टी-स्क्वायर (T-Square)",
      "रूलर (Ruler)"
    ],
    a: 2
  },
  {
    q: "Q19. दो रेखाएं एक-दूसरे को समकोण पर काटती हैं, तो कोण होता है: / Two lines intersect at right angle, the angle is:",
    o: [
      "60°",
      "45°",
      "90°",
      "30°"
    ],
    a: 2
  },
  {
    q: "Q20. तकनीकी चित्रण में प्रयुक्त मानक कागज आकार कौन सा है? / What is the standard paper size used in technical drawing?",
    o: [
      "A4",
      "A0",
      "A2",
      "B1"
    ],
    a: 1
  }
];
