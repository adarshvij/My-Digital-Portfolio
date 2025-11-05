import { NextResponse } from "next/server"

export async function GET() {
  const resumeContent = `ADARSH VIJ
LinkedIn: adarsh-vij-993313386
Email: Adarshvij745@gmail.com
Github: adarshvij
Mobile: +91-7056957712

SKILLS
Languages: C, C++, Python, CSS
Frameworks: HTML
Tools/Platforms: MySQL
Soft Skills: Leadership, Team Player, Project Management, Adaptability, Quick learner

PROJECTS
MusicFlow (HTML, CSS, JavaScript) - September 2025
Developed a simple and attractive Music Player Web Interface using HTML, CSS & JS as first project.
Implemented features for playing music, forward and previous music button along with option for different genres of music to enhance user experience.
Focused on clean and attractive UI design and ease of use.
Tech: HTML, CSS, JavaScript

AI-TrackGuard - November 2025
Track Identification System: A React-based web application that revolutionizes traditional railway asset identification using QR code authentication and AI integration.
Real-time Scanning: Features live camera integration with QR code scanning capabilities, supporting multiple data formats and instant validation.
Security-First Approach: Implements secure authentication, camera permission handling, and data protection measures to ensure user privacy and system integrity.
Cross-Platform Compatibility: Built with responsive design principles and modern web technologies to ensure seamless operation across desktop and mobile devices.
Performance Optimization: Engineered for efficiency with optimized resource handling, smooth camera operations, and responsive UI.
Tech: React.js (Hooks), HTML5/CSS3, html5-qrcode/jsQR (QR scanning)

ACHIEVEMENTS
NSS merit certificate holder - August 2023 - June 2025
Won College Level Science Exhibition - January 2023, January 2024
Won District Level Science Quiz - October 2023
District Level Science Quiz (2nd Position) - September 2024
House Senior Captain in School - April 2019 - March 2020

EDUCATION
Government PG College, Sector 1, Panchkula, Kurukshetra University, Haryana, India
Bachelor of Science - Computer Science
Percentage: 57.8% | August 2022 - June 2025

Police DAV Public School, Ambala City, Haryana
Intermediate | Percentage: 78% | April 2019 - March 2020

Police DAV Public School, Ambala City, Haryana
Matriculation | Percentage: 84.2% | April 2017 - March 2018`

  // Create a simple text file for now (can be enhanced to PDF)
  const blob = new Blob([resumeContent], { type: "text/plain" })

  return new NextResponse(blob, {
    headers: {
      "Content-Type": "text/plain",
      "Content-Disposition": 'attachment; filename="Adarsh_Vij_Resume.txt"',
    },
  })
}
