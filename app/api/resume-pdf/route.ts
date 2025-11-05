import { NextResponse } from "next/server"

export async function GET() {
  // HTML formatted resume
  const resumeHTML = `
<!DOCTYPE html>
<html>
<head>
  <title>Adarsh Vij - Resume</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; color: #333; }
    h1 { font-size: 24px; margin-bottom: 5px; }
    h2 { font-size: 16px; font-weight: bold; margin-top: 15px; margin-bottom: 8px; border-bottom: 2px solid #0ea5a4; }
    .header { text-align: center; margin-bottom: 20px; }
    .contact-info { font-size: 13px; margin-top: 5px; }
    ul { margin-left: 20px; }
    li { margin-bottom: 5px; }
    .project { margin-bottom: 12px; }
    .project-title { font-weight: bold; }
  </style>
</head>
<body>
  <div class="header">
    <h1>ADARSH VIJ</h1>
    <div class="contact-info">
      <div>LinkedIn: adarsh-vij-993313386 | Email: Adarshvij745@gmail.com | Github: adarshvij | Mobile: +91-7056957712</div>
    </div>
  </div>

  <h2>SKILLS</h2>
  <ul>
    <li><strong>Languages:</strong> C, C++, Python, CSS</li>
    <li><strong>Frameworks:</strong> HTML</li>
    <li><strong>Tools/Platforms:</strong> MySQL</li>
    <li><strong>Soft Skills:</strong> Leadership, Team Player, Project Management, Adaptability, Quick learner</li>
  </ul>

  <h2>PROJECTS</h2>
  <div class="project">
    <div class="project-title">MusicFlow (HTML, CSS, JavaScript) - September 2025</div>
    <ul>
      <li>Developed a simple and attractive Music Player Web Interface using HTML, CSS & JS as first project.</li>
      <li>Implemented features for playing music, forward and previous music button along with option for different genres of music to enhance user experience.</li>
      <li>Focused on clean and attractive UI design and ease of use.</li>
      <li><strong>Tech:</strong> HTML, CSS, JavaScript</li>
    </ul>
  </div>

  <div class="project">
    <div class="project-title">AI-TrackGuard - November 2025</div>
    <ul>
      <li><strong>Track Identification System:</strong> A React-based web application that revolutionizes traditional railway asset identification using QR code authentication and AI integration.</li>
      <li><strong>Real-time Scanning:</strong> Features live camera integration with QR code scanning capabilities, supporting multiple data formats and instant validation.</li>
      <li><strong>Security-First Approach:</strong> Implements secure authentication, camera permission handling, and data protection measures to ensure user privacy and system integrity.</li>
      <li><strong>Cross-Platform Compatibility:</strong> Built with responsive design principles and modern web technologies to ensure seamless operation across desktop and mobile devices.</li>
      <li><strong>Performance Optimization:</strong> Engineered for efficiency with optimized resource handling, smooth camera operations, and responsive UI.</li>
      <li><strong>Tech:</strong> React.js (Hooks), HTML5/CSS3, html5-qrcode/jsQR (QR scanning)</li>
    </ul>
  </div>

  <h2>ACHIEVEMENTS</h2>
  <ul>
    <li>NSS merit certificate holder - August 2023 - June 2025</li>
    <li>Won College Level Science Exhibition - January 2023, January 2024</li>
    <li>Won District Level Science Quiz - October 2023</li>
    <li>District Level Science Quiz (2nd Position) - September 2024</li>
    <li>House Senior Captain in School - April 2019 - March 2020</li>
  </ul>

  <h2>EDUCATION</h2>
  <div>
    <strong>Government PG College, Sector 1, Panchkula, Kurukshetra University, Haryana, India</strong><br>
    Bachelor of Science - Computer Science<br>
    Percentage: 57.8% | August 2022 - June 2025
  </div>
  <br>
  <div>
    <strong>Police DAV Public School, Ambala City, Haryana</strong><br>
    Intermediate | Percentage: 78% | April 2019 - March 2020
  </div>
  <br>
  <div>
    <strong>Police DAV Public School, Ambala City, Haryana</strong><br>
    Matriculation | Percentage: 84.2% | April 2017 - March 2018
  </div>
</body>
</html>
`

  const blob = new Blob([resumeHTML], { type: "text/html" })

  return new NextResponse(blob, {
    headers: {
      "Content-Type": "text/html",
      "Content-Disposition": 'attachment; filename="Adarsh_Vij_Resume.html"',
    },
  })
}
