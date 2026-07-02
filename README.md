ClawSentinel — AI Datacenter Security Dashboard

A frontend dashboard concept for ClawSentinel, an AI-driven security monitoring system for AI datacenters. It continuously correlates system health, vulnerabilities, exposure, workload, and infrastructure context to identify, prioritize, and help remediate security risks.

🔗 Live demo: https://clawsentinelfrontend.vercel.app

Features


Overview dashboard — real-time summary of total assets, critical risks, average risk score, and active AI remediation plans
Top risks panel — ranked list of highest-risk assets (GPU, CPU, network, storage) with severity levels
Active security alerts — live alert cards showing risk score, top CVE, health status, workload status, and recommended action
Recent AI activity feed — timeline of automated risk evaluations, recommendations, and remediation actions
Sidebar navigation — Overview, Assets, Investigations, AI Remediation, Analytics, Reports, Settings


Tech Stack


HTML5
CSS3
Vanilla JavaScript (no frameworks)


Project Structure

clawsentinel-frontend/
├── index.html      # Main dashboard markup
├── styles.css       # Styling
└── app.js           # Dashboard logic & interactivity

