// ClawSentinel AI Datacenter Security Dashboard Logic

// Raw Assets Dataset (Exactly 20 items)
const assetsData = [
  {
    id: "GPU-DCE-001",
    name: "GPU-DCE-001",
    type: "GPU Server",
    zone: "Zone-A",
    health: "DEGRADED",
    risk: 10.0,
    criticality: "HIGH",
    status: "RUNNING",
    ip: "10.10.10.21",
    desc: "GPU Server · NVIDIA H100 · S/N: G100-AX12F8",
    rack: "Zone-A / Rack-12",
    os: "Ubuntu 22.04 LTS",
    lastSeen: "22 May 2025, 10:24:30",
    owner: "AI Platform Team",
    env: "Production",
    cves: [
      { name: "CVE-2026-1001", score: 9.1, severity: "Critical" },
      { name: "CVE-2026-1423", score: 9.0, severity: "Critical" },
      { name: "CVE-2026-0456", score: 8.5, severity: "High" },
      { name: "CVE-2026-9988", score: 7.8, severity: "High" },
      { name: "CVE-2026-1122", score: 6.5, severity: "Medium" }
    ],
    workload: {
      name: "AI Training",
      model: "LLM Training (v2.3)",
      util: 92,
      mem: "78% (624 GB / 800 GB)",
      jobId: "job-7f9a3c8d"
    },
    hardware: {
      gpuModel: "NVIDIA H100 SXM5",
      gpuDriver: "535.104.05",
      cpuMem: "64 vCPU / 512 GB",
      storage: "7.6 TB NVMe",
      power: "680 W",
      temp: "72 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 45, score: 4.5, color: "#ef4444" },
      { name: "Exposure", pct: 25, score: 2.5, color: "#f97316" },
      { name: "Workload", pct: 15, score: 1.5, color: "#3b82f6" },
      { name: "Health", pct: 10, score: 1.0, color: "#10b981" },
      { name: "Network", pct: 5, score: 0.5, color: "#22d3ee" }
    ],
    actionBadge: "IMMEDIATE",
    actionText: "Isolate this asset and apply security patches.",
    timeline: [
      { time: "22 May 2025, 10:24:30", title: "Degraded Health Detected", desc: "GPU temperature exceeded limit (72°C)", class: "critical" },
      { time: "22 May 2025, 09:15:10", title: "New Critical CVE Identified", desc: "CVE-2026-1001 (score 9.1) flagged by auto scanner", class: "critical" },
      { time: "20 May 2025, 11:42:00", title: "Workload Started", desc: "Job job-7f9a3c8d (LLM Training v2.3) initialized", class: "info" }
    ]
  },
  {
    id: "GPU-DCE-002",
    name: "GPU-DCE-002",
    type: "GPU Server",
    zone: "Zone-A",
    health: "HEALTHY",
    risk: 9.7,
    criticality: "HIGH",
    status: "RUNNING",
    ip: "10.10.10.22",
    desc: "GPU Server · NVIDIA H100 · S/N: G100-AX12F9",
    rack: "Zone-A / Rack-13",
    os: "Ubuntu 22.04 LTS",
    lastSeen: "22 May 2025, 10:24:12",
    owner: "AI Platform Team",
    env: "Production",
    cves: [
      { name: "CVE-2026-1001", score: 9.1, severity: "Critical" },
      { name: "CVE-2026-0812", score: 8.8, severity: "High" },
      { name: "CVE-2026-1499", score: 7.2, severity: "High" }
    ],
    workload: {
      name: "AI Inference",
      model: "Speech-to-Text (v1.8)",
      util: 84,
      mem: "68% (544 GB / 800 GB)",
      jobId: "job-8c2d9a4f"
    },
    hardware: {
      gpuModel: "NVIDIA H100 SXM5",
      gpuDriver: "535.104.05",
      cpuMem: "64 vCPU / 512 GB",
      storage: "7.6 TB NVMe",
      power: "520 W",
      temp: "61 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 60, score: 5.82, color: "#ef4444" },
      { name: "Exposure", pct: 20, score: 1.94, color: "#f97316" },
      { name: "Workload", pct: 10, score: 0.97, color: "#3b82f6" },
      { name: "Health", pct: 5, score: 0.49, color: "#10b981" },
      { name: "Network", pct: 5, score: 0.48, color: "#22d3ee" }
    ],
    actionBadge: "HIGH PRIORITY",
    actionText: "Schedule kernel updates and security patch routine.",
    timeline: [
      { time: "22 May 2025, 10:24:12", title: "Asset Status Active", desc: "Reported running with 84% utilization", class: "info" },
      { time: "21 May 2025, 08:30:15", title: "Vulnerability Scan Complete", desc: "3 vulnerabilities found, 1 critical", class: "warning" }
    ]
  },
  {
    id: "CPU-DCE-001",
    name: "CPU-DCE-001",
    type: "CPU Server",
    zone: "Zone-B",
    health: "HEALTHY",
    risk: 9.2,
    criticality: "HIGH",
    status: "RUNNING",
    ip: "10.10.20.11",
    desc: "CPU Server · AMD EPYC 9654 · S/N: E9654-B101",
    rack: "Zone-B / Rack-04",
    os: "RHEL 9.2",
    lastSeen: "22 May 2025, 10:22:45",
    owner: "Infrastructure Team",
    env: "Production",
    cves: [
      { name: "CVE-2026-1144", score: 8.9, severity: "High" },
      { name: "CVE-2026-2211", score: 8.1, severity: "High" }
    ],
    workload: {
      name: "DB Cluster Node",
      model: "PostgreSQL Master",
      util: 67,
      mem: "45% (115 GB / 256 GB)",
      jobId: "job-db990a1b"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMem: "96 vCPU / 256 GB",
      storage: "15.2 TB NVMe",
      power: "320 W",
      temp: "48 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 55, score: 5.06, color: "#ef4444" },
      { name: "Exposure", pct: 30, score: 2.76, color: "#f97316" },
      { name: "Workload", pct: 10, score: 0.92, color: "#3b82f6" },
      { name: "Health", pct: 3, score: 0.28, color: "#10b981" },
      { name: "Network", pct: 2, score: 0.18, color: "#22d3ee" }
    ],
    actionBadge: "HIGH PRIORITY",
    actionText: "Apply immediate firewall policy update and block external port 5432.",
    timeline: [
      { time: "22 May 2025, 10:22:45", title: "DB Replication Synced", desc: "Secondary nodes fully synced", class: "info" }
    ]
  },
  {
    id: "LEAF-DCE-001",
    name: "LEAF-DCE-001",
    type: "Leaf Switch",
    zone: "Zone-A",
    health: "WARNING",
    risk: 7.6,
    criticality: "MEDIUM",
    status: "UP",
    ip: "10.10.10.101",
    desc: "Leaf Switch · Cisco Nexus 9300 · S/N: C9300-L88",
    rack: "Zone-A / Rack-01 (Top)",
    os: "NX-OS 10.2",
    lastSeen: "22 May 2025, 10:23:59",
    owner: "Network Admin Team",
    env: "Infrastructure",
    cves: [
      { name: "CVE-2026-4402", score: 7.6, severity: "High" }
    ],
    workload: {
      name: "Top-of-Rack Switch",
      model: "Cisco NX-OS Core routing",
      util: 41,
      mem: "35% (11 GB / 32 GB)",
      jobId: "net-leaf-101"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMem: "8 vCPU / 32 GB",
      storage: "128 GB Flash",
      power: "180 W",
      temp: "56 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 40, score: 3.04, color: "#ef4444" },
      { name: "Exposure", pct: 45, score: 3.42, color: "#f97316" },
      { name: "Workload", pct: 5, score: 0.38, color: "#3b82f6" },
      { name: "Health", pct: 5, score: 0.38, color: "#10b981" },
      { name: "Network", pct: 5, score: 0.38, color: "#22d3ee" }
    ],
    actionBadge: "MEDIUM PRIORITY",
    actionText: "Upgrade switch IOS firmware to release 10.2(4b) to patch route leak.",
    timeline: [
      { time: "22 May 2025, 10:10:12", title: "Route flapping alert", desc: "Detected flap on port eth1/12, auto-remediated", class: "warning" }
    ]
  },
  {
    id: "STORAGE-DCE-001",
    name: "STORAGE-DCE-001",
    type: "Storage System",
    zone: "Zone-C",
    health: "HEALTHY",
    risk: 6.8,
    criticality: "MEDIUM",
    status: "UP",
    ip: "10.10.30.51",
    desc: "Storage System · NetApp AFF A800 · S/N: NA-AFF800-41",
    rack: "Zone-C / Rack-08",
    os: "ONTAP 9.12",
    lastSeen: "22 May 2025, 10:24:20",
    owner: "Storage Management Team",
    env: "Production",
    cves: [
      { name: "CVE-2026-9011", score: 6.8, severity: "Medium" }
    ],
    workload: {
      name: "Distributed Storage Pool",
      model: "Ceph Block storage",
      util: 72,
      mem: "80% (204 GB / 256 GB)",
      jobId: "storage-ceph-pool-a"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMem: "32 vCPU / 256 GB",
      storage: "1.2 PB NVMe-oF",
      power: "420 W",
      temp: "41 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 30, score: 2.04, color: "#ef4444" },
      { name: "Exposure", pct: 50, score: 3.40, color: "#f97316" },
      { name: "Workload", pct: 10, score: 0.68, color: "#3b82f6" },
      { name: "Health", pct: 5, score: 0.34, color: "#10b981" },
      { name: "Network", pct: 5, score: 0.34, color: "#22d3ee" }
    ],
    actionBadge: "MEDIUM PRIORITY",
    actionText: "Schedule volume maintenance check and restrict block storage access lists.",
    timeline: [
      { time: "22 May 2025, 10:24:20", title: "Storage pool check complete", desc: "0 bad blocks detected", class: "info" }
    ]
  },
  {
    id: "GPU-DCE-003",
    name: "GPU-DCE-003",
    type: "GPU Server",
    zone: "Zone-B",
    health: "HEALTHY",
    risk: 3.6,
    criticality: "LOW",
    status: "RUNNING",
    ip: "10.10.20.21",
    desc: "GPU Server · NVIDIA H100 · S/N: G100-AX12G0",
    rack: "Zone-B / Rack-14",
    os: "Ubuntu 22.04 LTS",
    lastSeen: "22 May 2025, 10:24:19",
    owner: "AI Platform Team",
    env: "Production",
    cves: [],
    workload: {
      name: "NLP Inference",
      model: "Translator Pro (v3.1)",
      util: 51,
      mem: "38% (304 GB / 800 GB)",
      jobId: "job-9a1b2c3d"
    },
    hardware: {
      gpuModel: "NVIDIA H100 SXM5",
      gpuDriver: "535.104.05",
      cpuMem: "64 vCPU / 512 GB",
      storage: "7.6 TB NVMe",
      power: "390 W",
      temp: "54 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 20, score: 0.72, color: "#f97316" },
      { name: "Workload", pct: 50, score: 1.80, color: "#3b82f6" },
      { name: "Health", pct: 15, score: 0.54, color: "#10b981" },
      { name: "Network", pct: 15, score: 0.54, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "No urgent actions. Maintain standard monitoring schedules.",
    timeline: [
      { time: "22 May 2025, 08:00:00", title: "Automated Scan Healthy", desc: "No CVE or configuration mismatch detected", class: "info" }
    ]
  },
  {
    id: "CPU-DCE-002",
    name: "CPU-DCE-002",
    type: "CPU Server",
    zone: "Zone-C",
    health: "HEALTHY",
    risk: 3.1,
    criticality: "LOW",
    status: "UP",
    ip: "10.10.30.12",
    desc: "CPU Server · AMD EPYC 9654 · S/N: E9654-B102",
    rack: "Zone-C / Rack-02",
    os: "RHEL 9.2",
    lastSeen: "22 May 2025, 10:23:45",
    owner: "Infrastructure Team",
    env: "Production",
    cves: [],
    workload: {
      name: "API Gateway",
      model: "Load Balancer Routing Engine",
      util: 35,
      mem: "22% (56 GB / 256 GB)",
      jobId: "job-lb101-gw"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMem: "96 vCPU / 256 GB",
      storage: "15.2 TB NVMe",
      power: "210 W",
      temp: "43 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 40, score: 1.24, color: "#f97316" },
      { name: "Workload", pct: 20, score: 0.62, color: "#3b82f6" },
      { name: "Health", pct: 20, score: 0.62, color: "#10b981" },
      { name: "Network", pct: 20, score: 0.62, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Check system backups and keep monitoring metrics active.",
    timeline: []
  },
  {
    id: "BACKUP-DCE-001",
    name: "BACKUP-DCE-001",
    type: "Storage System",
    zone: "Zone-C",
    health: "HEALTHY",
    risk: 2.0,
    criticality: "LOW",
    status: "UP",
    ip: "10.10.30.52",
    desc: "Storage System · Dell PowerScale F900 · S/N: D-PSF900-11",
    rack: "Zone-C / Rack-15",
    os: "OneFS 9.4",
    lastSeen: "22 May 2025, 10:19:02",
    owner: "Backup Operations Team",
    env: "Production Backup",
    cves: [],
    workload: {
      name: "Daily Sync Storage",
      model: "Differential Backup Pool (v1.2)",
      util: 12,
      mem: "15% (38 GB / 256 GB)",
      jobId: "job-backup-daily-01"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMem: "32 vCPU / 256 GB",
      storage: "2.4 PB Storage Array",
      power: "310 W",
      temp: "39 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 10, score: 0.20, color: "#f97316" },
      { name: "Workload", pct: 30, score: 0.60, color: "#3b82f6" },
      { name: "Health", pct: 30, score: 0.60, color: "#10b981" },
      { name: "Network", pct: 30, score: 0.60, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Verify replication jobs completed successfully.",
    timeline: []
  },
  {
    id: "SPINE-DCE-001",
    name: "SPINE-DCE-001",
    type: "Spine Switch",
    zone: "Zone-A",
    health: "HEALTHY",
    risk: 1.8,
    criticality: "LOW",
    status: "UP",
    ip: "10.10.10.1",
    desc: "Spine Switch · Cisco Nexus 9500 · S/N: C9500-S101",
    rack: "Zone-A / Rack-00 (Center)",
    os: "NX-OS 10.2",
    lastSeen: "22 May 2025, 10:24:25",
    owner: "Network Admin Team",
    env: "Infrastructure Core",
    cves: [],
    workload: {
      name: "Core Datacenter Spine",
      model: "BGP & EVPN Spine Routing",
      util: 18,
      mem: "25% (16 GB / 64 GB)",
      jobId: "net-spine-core-101"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMode: "16 vCPU / 64 GB",
      storage: "256 GB Flash",
      power: "480 W",
      temp: "45 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 50, score: 0.90, color: "#f97316" },
      { name: "Workload", pct: 10, score: 0.18, color: "#3b82f6" },
      { name: "Health", pct: 20, score: 0.36, color: "#10b981" },
      { name: "Network", pct: 20, score: 0.36, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Switch ports operational. No actionable alerts.",
    timeline: []
  },
  {
    id: "GPU-DCE-004",
    name: "GPU-DCE-004",
    type: "GPU Server",
    zone: "Zone-C",
    health: "HEALTHY",
    risk: 1.5,
    criticality: "LOW",
    status: "RUNNING",
    ip: "10.10.30.13",
    desc: "GPU Server · NVIDIA H100 · S/N: G100-AX12G1",
    rack: "Zone-C / Rack-05",
    os: "Ubuntu 22.04 LTS",
    lastSeen: "22 May 2025, 10:24:29",
    owner: "AI Platform Team",
    env: "Production",
    cves: [],
    workload: {
      name: "RLHF Policy Model",
      model: "Reward Model Training (v1.1)",
      util: 28,
      mem: "22% (176 GB / 800 GB)",
      jobId: "job-10f88a9c"
    },
    hardware: {
      gpuModel: "NVIDIA H100 SXM5",
      gpuDriver: "535.104.05",
      cpuMem: "64 vCPU / 512 GB",
      storage: "7.6 TB NVMe",
      power: "310 W",
      temp: "50 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 20, score: 0.30, color: "#f97316" },
      { name: "Workload", pct: 30, score: 0.45, color: "#3b82f6" },
      { name: "Health", pct: 30, score: 0.45, color: "#10b981" },
      { name: "Network", pct: 20, score: 0.30, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Verify current batch reward scores are logging.",
    timeline: []
  },
  {
    id: "GPU-DCE-005",
    name: "GPU-DCE-005",
    type: "GPU Server",
    zone: "Zone-B",
    health: "HEALTHY",
    risk: 1.2,
    criticality: "LOW",
    status: "RUNNING",
    ip: "10.10.20.22",
    desc: "GPU Server · NVIDIA H100 · S/N: G100-AX12G2",
    rack: "Zone-B / Rack-15",
    os: "Ubuntu 22.04 LTS",
    lastSeen: "22 May 2025, 10:20:10",
    owner: "AI Platform Team",
    env: "Development",
    cves: [],
    workload: {
      name: "Tokenization Tests",
      model: "Tokenizer Sandbox (v0.9)",
      util: 15,
      mem: "10% (80 GB / 800 GB)",
      jobId: "job-dev-token-99"
    },
    hardware: {
      gpuModel: "NVIDIA H100 SXM5",
      gpuDriver: "535.104.05",
      cpuMem: "64 vCPU / 512 GB",
      storage: "7.6 TB NVMe",
      power: "240 W",
      temp: "46 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 10, score: 0.12, color: "#f97316" },
      { name: "Workload", pct: 40, score: 0.48, color: "#3b82f6" },
      { name: "Health", pct: 30, score: 0.36, color: "#10b981" },
      { name: "Network", pct: 20, score: 0.24, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Sandbox node running as expected.",
    timeline: []
  },
  {
    id: "CPU-DCE-003",
    name: "CPU-DCE-003",
    type: "CPU Server",
    zone: "Zone-A",
    health: "HEALTHY",
    risk: 1.0,
    criticality: "LOW",
    status: "UP",
    ip: "10.10.10.12",
    desc: "CPU Server · Intel Xeon 8480+ · S/N: X8480-A409",
    rack: "Zone-A / Rack-04",
    os: "RHEL 9.2",
    lastSeen: "22 May 2025, 10:24:00",
    owner: "Infrastructure Team",
    env: "Production",
    cves: [],
    workload: {
      name: "Redis Cache Master",
      model: "In-Memory Session Store",
      util: 24,
      mem: "58% (148 GB / 256 GB)",
      jobId: "job-redis-sessions"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMem: "112 vCPU / 256 GB",
      storage: "3.8 TB NVMe",
      power: "190 W",
      temp: "42 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 20, score: 0.20, color: "#f97316" },
      { name: "Workload", pct: 30, score: 0.30, color: "#3b82f6" },
      { name: "Health", pct: 30, score: 0.30, color: "#10b981" },
      { name: "Network", pct: 20, score: 0.20, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Normal operations. Verify memory swap limits.",
    timeline: []
  },
  {
    id: "LEAF-DCE-002",
    name: "LEAF-DCE-002",
    type: "Leaf Switch",
    zone: "Zone-B",
    health: "HEALTHY",
    risk: 0.9,
    criticality: "LOW",
    status: "UP",
    ip: "10.10.20.101",
    desc: "Leaf Switch · Juniper QFX5120 · S/N: J-QFX-9002",
    rack: "Zone-B / Rack-01 (Top)",
    os: "Junos OS 21.4",
    lastSeen: "22 May 2025, 10:22:11",
    owner: "Network Admin Team",
    env: "Infrastructure",
    cves: [],
    workload: {
      name: "Rack Switch Link",
      model: "JunOS L2/L3 Routing",
      util: 28,
      mem: "15% (3 GB / 20 GB)",
      jobId: "net-leaf-201"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMem: "4 vCPU / 20 GB",
      storage: "64 GB Flash",
      power: "140 W",
      temp: "44 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 30, score: 0.27, color: "#f97316" },
      { name: "Workload", pct: 20, score: 0.18, color: "#3b82f6" },
      { name: "Health", pct: 30, score: 0.27, color: "#10b981" },
      { name: "Network", pct: 20, score: 0.18, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Link aggregation groups standard. Monitoring interfaces.",
    timeline: []
  },
  {
    id: "STORAGE-DCE-002",
    name: "STORAGE-DCE-002",
    type: "Storage System",
    zone: "Zone-B",
    health: "HEALTHY",
    risk: 0.8,
    criticality: "LOW",
    status: "UP",
    ip: "10.10.20.51",
    desc: "Storage System · NetApp AFF A800 · S/N: NA-AFF800-42",
    rack: "Zone-B / Rack-08",
    os: "ONTAP 9.12",
    lastSeen: "22 May 2025, 10:21:40",
    owner: "Storage Management Team",
    env: "Staging",
    cves: [],
    workload: {
      name: "Staging File Share",
      model: "NFS Shared Directory",
      util: 45,
      mem: "32% (82 GB / 256 GB)",
      jobId: "storage-staging-nfs"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMem: "32 vCPU / 256 GB",
      storage: "500 TB SSD Group",
      power: "280 W",
      temp: "37 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 40, score: 0.32, color: "#f97316" },
      { name: "Workload", pct: 20, score: 0.16, color: "#3b82f6" },
      { name: "Health", pct: 20, score: 0.16, color: "#10b981" },
      { name: "Network", pct: 20, score: 0.16, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Verify directory mounts match security rules.",
    timeline: []
  },
  {
    id: "GPU-DCE-006",
    name: "GPU-DCE-006",
    type: "GPU Server",
    zone: "Zone-C",
    health: "HEALTHY",
    risk: 0.7,
    criticality: "LOW",
    status: "RUNNING",
    ip: "10.10.30.14",
    desc: "GPU Server · NVIDIA H100 · S/N: G100-AX12G3",
    rack: "Zone-C / Rack-06",
    os: "Ubuntu 22.04 LTS",
    lastSeen: "22 May 2025, 10:23:45",
    owner: "AI Platform Team",
    env: "Development",
    cves: [],
    workload: {
      name: "Interactive Jupyter Hub",
      model: "Jupyter Python Kernels",
      util: 12,
      mem: "5% (40 GB / 800 GB)",
      jobId: "job-dev-jupyter"
    },
    hardware: {
      gpuModel: "NVIDIA H100 SXM5",
      gpuDriver: "535.104.05",
      cpuMem: "64 vCPU / 512 GB",
      storage: "7.6 TB NVMe",
      power: "190 W",
      temp: "44 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 30, score: 0.21, color: "#f97316" },
      { name: "Workload", pct: 20, score: 0.14, color: "#3b82f6" },
      { name: "Health", pct: 30, score: 0.21, color: "#10b981" },
      { name: "Network", pct: 20, score: 0.14, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Jupyter container lifecycle active. Clean idle kernels.",
    timeline: []
  },
  {
    id: "SPINE-DCE-002",
    name: "SPINE-DCE-002",
    type: "Spine Switch",
    zone: "Zone-B",
    health: "HEALTHY",
    risk: 0.5,
    criticality: "LOW",
    status: "UP",
    ip: "10.10.20.1",
    desc: "Spine Switch · Cisco Nexus 9500 · S/N: C9500-S102",
    rack: "Zone-B / Rack-00 (Center)",
    os: "NX-OS 10.2",
    lastSeen: "22 May 2025, 10:24:01",
    owner: "Network Admin Team",
    env: "Infrastructure Core",
    cves: [],
    workload: {
      name: "Core Datacenter Spine B",
      model: "Spine Active-Active L3 Mesh",
      util: 14,
      mem: "22% (14 GB / 64 GB)",
      jobId: "net-spine-core-102"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMem: "16 vCPU / 64 GB",
      storage: "256 GB Flash",
      power: "420 W",
      temp: "42 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 40, score: 0.20, color: "#f97316" },
      { name: "Workload", pct: 20, score: 0.10, color: "#3b82f6" },
      { name: "Health", pct: 20, score: 0.10, color: "#10b981" },
      { name: "Network", pct: 20, score: 0.10, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Full link mesh verification stable.",
    timeline: []
  },
  {
    id: "BACKUP-DCE-002",
    name: "BACKUP-DCE-002",
    type: "Storage System",
    zone: "Zone-A",
    health: "HEALTHY",
    risk: 0.4,
    criticality: "LOW",
    status: "UP",
    ip: "10.10.10.52",
    desc: "Storage System · Dell PowerScale F900 · S/N: D-PSF900-12",
    rack: "Zone-A / Rack-15",
    os: "OneFS 9.4",
    lastSeen: "22 May 2025, 10:14:02",
    owner: "Backup Operations Team",
    env: "Infrastructure Staging",
    cves: [],
    workload: {
      name: "Secondary Sync",
      model: "Off-site Cold Archives",
      util: 5,
      mem: "10% (25 GB / 256 GB)",
      jobId: "job-backup-cold"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMem: "32 vCPU / 256 GB",
      storage: "1.2 PB Storage Pool",
      power: "220 W",
      temp: "35 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 10, score: 0.04, color: "#f97316" },
      { name: "Workload", pct: 30, score: 0.12, color: "#3b82f6" },
      { name: "Health", pct: 30, score: 0.12, color: "#10b981" },
      { name: "Network", pct: 30, score: 0.12, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Archive tape sync operations idle.",
    timeline: []
  },
  {
    id: "CPU-DCE-004",
    name: "CPU-DCE-004",
    type: "CPU Server",
    zone: "Zone-C",
    health: "HEALTHY",
    risk: 0.3,
    criticality: "LOW",
    status: "UP",
    ip: "10.10.30.15",
    desc: "CPU Server · Intel Xeon 8480+ · S/N: X8480-A410",
    rack: "Zone-C / Rack-03",
    os: "RHEL 9.2",
    lastSeen: "22 May 2025, 10:24:00",
    owner: "Infrastructure Team",
    env: "Staging",
    cves: [],
    workload: {
      name: "Prometheus Monitoring",
      model: "TSDB Scraper Engine",
      util: 28,
      mem: "64% (164 GB / 256 GB)",
      jobId: "job-prometheus-cluster"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMem: "112 vCPU / 256 GB",
      storage: "7.6 TB NVMe",
      power: "210 W",
      temp: "41 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 20, score: 0.06, color: "#f97316" },
      { name: "Workload", pct: 30, score: 0.09, color: "#3b82f6" },
      { name: "Health", pct: 30, score: 0.09, color: "#10b981" },
      { name: "Network", pct: 20, score: 0.06, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Prometheus cluster nodes are scraping target groups correctly.",
    timeline: []
  },
  {
    id: "GPU-DCE-007",
    name: "GPU-DCE-007",
    type: "GPU Server",
    zone: "Zone-A",
    health: "HEALTHY",
    risk: 0.2,
    criticality: "LOW",
    status: "RUNNING",
    ip: "10.10.10.23",
    desc: "GPU Server · NVIDIA H100 · S/N: G100-AX12G4",
    rack: "Zone-A / Rack-14",
    os: "Ubuntu 22.04 LTS",
    lastSeen: "22 May 2025, 10:22:15",
    owner: "AI Platform Team",
    env: "Development",
    cves: [],
    workload: {
      name: "Validation Job",
      model: "Cross Validation Checks",
      util: 8,
      mem: "2% (16 GB / 800 GB)",
      jobId: "job-dev-crossval"
    },
    hardware: {
      gpuModel: "NVIDIA H100 SXM5",
      gpuDriver: "535.104.05",
      cpuMem: "64 vCPU / 512 GB",
      storage: "7.6 TB NVMe",
      power: "180 W",
      temp: "42 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 10, score: 0.02, color: "#f97316" },
      { name: "Workload", pct: 30, score: 0.06, color: "#3b82f6" },
      { name: "Health", pct: 40, score: 0.08, color: "#10b981" },
      { name: "Network", pct: 20, score: 0.04, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "Validation jobs run completed. Awaiting cleanup.",
    timeline: []
  },
  {
    id: "LEAF-DCE-003",
    name: "LEAF-DCE-003",
    type: "Leaf Switch",
    zone: "Zone-C",
    health: "HEALTHY",
    risk: 0.1,
    criticality: "LOW",
    status: "UP",
    ip: "10.10.30.101",
    desc: "Leaf Switch · Juniper QFX5120 · S/N: J-QFX-9003",
    rack: "Zone-C / Rack-01 (Top)",
    os: "Junos OS 21.4",
    lastSeen: "22 May 2025, 10:24:00",
    owner: "Network Admin Team",
    env: "Infrastructure",
    cves: [],
    workload: {
      name: "Rack Switch Link C",
      model: "JunOS L2/L3 Routing",
      util: 12,
      mem: "10% (2 GB / 20 GB)",
      jobId: "net-leaf-301"
    },
    hardware: {
      gpuModel: "N/A",
      gpuDriver: "N/A",
      cpuMem: "4 vCPU / 20 GB",
      storage: "64 GB Flash",
      power: "120 W",
      temp: "40 °C"
    },
    riskContribution: [
      { name: "Vulnerabilities", pct: 0, score: 0.0, color: "#ef4444" },
      { name: "Exposure", pct: 30, score: 0.03, color: "#f97316" },
      { name: "Workload", pct: 20, score: 0.02, color: "#3b82f6" },
      { name: "Health", pct: 30, score: 0.03, color: "#10b981" },
      { name: "Network", pct: 20, score: 0.02, color: "#22d3ee" }
    ],
    actionBadge: "LOW PRIORITY",
    actionText: "All monitoring criteria status standard.",
    timeline: []
  }
];

// Application State Management
let state = {
  assets: [...assetsData],
  selectedId: "GPU-DCE-001",
  activeTab: "overview",
  
  // Table Pagination
  currentPage: 1,
  pageSize: 10,
  
  // Filters and sorting
  searchQuery: "",
  filterType: "all",
  filterZone: "all",
  filterStatus: "all",
  
  sortBy: null,
  sortAscending: true,

  // Selected row checkboxes
  checkedIds: new Set(["GPU-DCE-001"])
};

// Elements DOM Cache
const dom = {
  tableBody: document.getElementById("table-body"),
  pageNumbers: document.getElementById("page-numbers"),
  showingText: document.getElementById("showing-text"),
  btnPrev: document.getElementById("btn-prev"),
  btnNext: document.getElementById("btn-next"),
  searchInput: document.getElementById("search-input"),
  selectAllCheck: document.getElementById("select-all-assets"),
  
  // Right side panel details binding
  detailAssetId: document.getElementById("detail-asset-id"),
  detailAssetDesc: document.getElementById("detail-asset-desc"),
  detailCriticalityBadge: document.getElementById("detail-criticality-badge"),
  detailRiskScore: document.getElementById("detail-risk-score"),
  detailRiskLabel: document.getElementById("detail-risk-label"),
  detailHealthStatus: document.getElementById("detail-health-status"),
  detailStatus: document.getElementById("detail-status"),
  detailZone: document.getElementById("detail-zone"),
  detailHexLogo: document.getElementById("detail-hex-logo"),
  detailVulnCount: document.getElementById("detail-vuln-count"),
  
  // Overview Tab Fields
  infoId: document.getElementById("info-id"),
  infoType: document.getElementById("info-type"),
  infoZoneRack: document.getElementById("info-zone-rack"),
  infoIp: document.getElementById("info-ip"),
  infoOs: document.getElementById("info-os"),
  infoLastSeen: document.getElementById("info-last-seen"),
  infoOwner: document.getElementById("info-owner"),
  infoEnv: document.getElementById("info-env"),
  
  detailCvesList: document.getElementById("detail-cves-list"),
  
  workloadName: document.getElementById("workload-name"),
  workloadModel: document.getElementById("workload-model"),
  workloadUtil: document.getElementById("workload-util"),
  workloadMem: document.getElementById("workload-mem"),
  workloadJobId: document.getElementById("workload-job-id"),
  
  hwGpu: document.getElementById("hw-gpu"),
  hwDriver: document.getElementById("hw-driver"),
  hwCpuMem: document.getElementById("hw-cpu-mem"),
  hwStorage: document.getElementById("hw-storage"),
  hwPower: document.getElementById("hw-power"),
  hwTemp: document.getElementById("hw-temp"),
  
  donutChartSvg: document.getElementById("donut-chart-svg"),
  donutScoreText: document.getElementById("donut-score-text"),
  riskLegendList: document.getElementById("risk-legend-list"),
  
  detailActionBadge: document.getElementById("detail-action-badge"),
  detailActionText: document.getElementById("detail-action-text"),
  
  // Tab panels DOM
  tabOverview: document.getElementById("tab-overview"),
  tabVulnerabilities: document.getElementById("tab-vulnerabilities"),
  tabWorkload: document.getElementById("tab-workload"),
  tabNetwork: document.getElementById("tab-network"),
  tabTimeline: document.getElementById("tab-timeline"),
  tabAudit: document.getElementById("tab-audit"),
  
  vulnListDetailed: document.getElementById("vuln-list-detailed"),
  detailTimelineList: document.getElementById("detail-timeline-list"),
  
  btnRefreshAsset: document.getElementById("btn-refresh-asset"),
  btnInvestigate: document.getElementById("btn-investigate"),
  btnRemediate: document.getElementById("btn-remediate")
};

// Initialize Application
function init() {
  setupEventListeners();
  render();
  renderSelectedAssetDetails();
}

// Attach Event Listeners
function setupEventListeners() {
  // Global Dropdowns Toggling
  setupDropdown("datacenter-dropdown");
  setupDropdown("timeframe-dropdown");
  setupCustomSelect("export-select", (val) => {
    alert(`Exporting asset details as ${val.toUpperCase()}...`);
  });
  
  // Custom Filters Select Toggling
  setupCustomSelect("type-select", (val) => {
    state.filterType = val;
    state.currentPage = 1;
    render();
  });
  
  setupCustomSelect("zone-select", (val) => {
    state.filterZone = val;
    state.currentPage = 1;
    render();
  });
  
  setupCustomSelect("status-select", (val) => {
    state.filterStatus = val;
    state.currentPage = 1;
    render();
  });
  
  setupCustomSelect("page-size-select", (val) => {
    state.pageSize = parseInt(val);
    state.currentPage = 1;
    render();
  });

  // Search input change
  dom.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    state.currentPage = 1;
    render();
  });

  // Checkbox select all
  dom.selectAllCheck.addEventListener("change", (e) => {
    const activeAssets = getFilteredAndSortedAssets();
    const startIdx = (state.currentPage - 1) * state.pageSize;
    const pageAssets = activeAssets.slice(startIdx, startIdx + state.pageSize);
    
    if (e.target.checked) {
      pageAssets.forEach(a => state.checkedIds.add(a.id));
    } else {
      pageAssets.forEach(a => state.checkedIds.delete(a.id));
    }
    renderTableRows(pageAssets);
  });

  // Pagination click events
  dom.btnPrev.addEventListener("click", () => {
    if (state.currentPage > 1) {
      state.currentPage--;
      render();
    }
  });

  dom.btnNext.addEventListener("click", () => {
    const totalFiltered = getFilteredAndSortedAssets().length;
    const maxPage = Math.ceil(totalFiltered / state.pageSize);
    if (state.currentPage < maxPage) {
      state.currentPage++;
      render();
    }
  });

  // Table sorting headers
  document.querySelectorAll("table.assets-table th.sortable").forEach(th => {
    th.addEventListener("click", () => {
      const field = th.getAttribute("data-sort");
      if (state.sortBy === field) {
        state.sortAscending = !state.sortAscending;
      } else {
        state.sortBy = field;
        state.sortAscending = true;
      }
      
      // Update sort visual indicator
      document.querySelectorAll("table.assets-table th.sortable span").forEach(s => s.textContent = "↕");
      th.querySelector("span").textContent = state.sortAscending ? "▲" : "▼";
      
      render();
    });
  });

  // Tabs selection logic
  document.querySelectorAll(".panel-tabs .tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".panel-tabs .tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const targetTab = btn.getAttribute("data-tab");
      state.activeTab = targetTab;
      
      // Show/hide correct panels
      const panels = [dom.tabOverview, dom.tabVulnerabilities, dom.tabWorkload, dom.tabNetwork, dom.tabTimeline, dom.tabAudit];
      panels.forEach(p => {
        if (p) p.classList.remove("active");
      });
      
      const activePanel = document.getElementById("tab-" + targetTab);
      if (activePanel) activePanel.classList.add("active");
    });
  });

  // Refresh Asset Details Button
  dom.btnRefreshAsset.addEventListener("click", () => {
    const icon = dom.btnRefreshAsset.querySelector("svg");
    icon.style.transform = "rotate(360deg)";
    icon.style.transition = "transform 0.8s ease";
    setTimeout(() => {
      icon.style.transform = "none";
      icon.style.transition = "none";
      renderSelectedAssetDetails();
    }, 800);
  });

  // Investigate Asset Action
  dom.btnInvestigate.addEventListener("click", () => {
    alert(`Initiating target threat hunting forensics trace on security node: ${state.selectedId}`);
  });

  // Generate AI Remediation Plan Action
  dom.btnRemediate.addEventListener("click", () => {
    const asset = assetsData.find(a => a.id === state.selectedId);
    alert(`Sentinel AI Engine generating immediate remediation blueprint for ${asset.id}...\nThreat mitigation priority: ${asset.actionBadge}\nResolution path: ${asset.actionText}`);
  });

  // Sidebar Page Switching Logic
  document.querySelectorAll(".sidebar-nav .nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const targetPage = item.getAttribute("data-page");
      console.log("NAV ITEM CLICKED, TARGET PAGE =", targetPage);
      if (!targetPage) return;
      
      document.querySelectorAll(".sidebar-nav .nav-item").forEach(nav => nav.classList.remove("active"));
      item.classList.add("active");
      
      document.querySelectorAll(".main-content .page-view").forEach(page => page.classList.remove("active"));
      const activePage = document.getElementById("page-" + targetPage);
      if (activePage) activePage.classList.add("active");
    });
  });

  // Overview Page Interactions
  const btnHeroInvestigate = document.getElementById("btn-hero-investigate");
  if (btnHeroInvestigate) {
    btnHeroInvestigate.addEventListener("click", () => {
      window.viewAssetFromOverview("GPU-DCE-001");
    });
  }

  const btnInvestigateNow = document.getElementById("btn-investigate-now");
  if (btnInvestigateNow) {
    btnInvestigateNow.addEventListener("click", (e) => {
      e.stopPropagation();
      window.viewAssetFromOverview("GPU-DCE-001");
    });
  }

  const overviewAlertCard = document.getElementById("overview-alert-card");
  if (overviewAlertCard) {
    overviewAlertCard.addEventListener("click", () => {
      window.viewAssetFromOverview("GPU-DCE-001");
    });
  }

  const linkViewAllRisks = document.getElementById("link-view-all-risks");
  if (linkViewAllRisks) {
    linkViewAllRisks.addEventListener("click", (e) => {
      e.preventDefault();
      const assetsNav = document.querySelector('.sidebar-nav .nav-item[data-page="assets"]');
      if (assetsNav) assetsNav.click();
    });
  }
}

// Global helper to view asset from Overview page
window.viewAssetFromOverview = function(assetId) {
  state.selectedId = assetId;
  
  // Highlight sidebar Assets link
  document.querySelectorAll(".sidebar-nav .nav-item").forEach(nav => {
    if (nav.getAttribute("data-page") === "assets") {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  });
  
  // Switch visible page
  document.querySelectorAll(".main-content .page-view").forEach(page => page.classList.remove("active"));
  const assetsPage = document.getElementById("page-assets");
  if (assetsPage) assetsPage.classList.add("active");
  
  // Re-render components
  render();
  renderSelectedAssetDetails();
};

// Dropdown utility
function setupDropdown(id) {
  const container = document.getElementById(id);
  if (!container) return;
  const trigger = container.querySelector(".dropdown-trigger");
  if (!trigger) return;
  
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAllDropdowns();
    const menu = container.querySelector(".dropdown-menu");
    if (menu) menu.classList.toggle("show");
  });

  container.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      container.querySelectorAll(".dropdown-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      const span = trigger.querySelector("span");
      if (span) span.textContent = item.textContent;
      const menu = container.querySelector(".dropdown-menu");
      if (menu) menu.classList.remove("show");
    });
  });
}

// Custom Select Dropdown utility
function setupCustomSelect(id, onChangeCallback) {
  const container = document.getElementById(id);
  if (!container) return;
  const trigger = container.querySelector(".select-trigger");
  if (!trigger) return;
  const label = trigger.querySelector(".trigger-label") || trigger.querySelector("span");
  
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = container.classList.contains("open");
    closeAllDropdowns();
    if (!isOpen) {
      container.classList.add("open");
    }
  });

  container.querySelectorAll(".select-option").forEach(option => {
    option.addEventListener("click", (e) => {
      e.stopPropagation();
      container.querySelectorAll(".select-option").forEach(o => o.classList.remove("active"));
      option.classList.add("active");
      
      const val = option.getAttribute("data-value");
      if (label) label.textContent = option.textContent;
      container.classList.remove("open");
      
      if (onChangeCallback) onChangeCallback(val);
    });
  });
}

// Global closer for dropdown elements
function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("show"));
  document.querySelectorAll(".custom-select").forEach(s => s.classList.remove("open"));
}

document.addEventListener("click", () => {
  closeAllDropdowns();
});

// Filter & Sort Logic
function getFilteredAndSortedAssets() {
  let list = [...assetsData];

  // 1. Text Search query
  if (state.searchQuery) {
    list = list.filter(a => 
      a.id.toLowerCase().includes(state.searchQuery) ||
      a.ip.toLowerCase().includes(state.searchQuery) ||
      a.type.toLowerCase().includes(state.searchQuery) ||
      a.zone.toLowerCase().includes(state.searchQuery)
    );
  }

  // 2. Dropdown Filter: Type
  if (state.filterType !== "all") {
    list = list.filter(a => a.type === state.filterType);
  }

  // 3. Dropdown Filter: Zone
  if (state.filterZone !== "all") {
    list = list.filter(a => a.zone === state.filterZone);
  }

  // 4. Dropdown Filter: Status
  if (state.filterStatus !== "all") {
    list = list.filter(a => a.status === state.filterStatus || a.health === state.filterStatus);
  }

  // 5. Sorting
  if (state.sortBy) {
    list.sort((a, b) => {
      let valA = a[state.sortBy];
      let valB = b[state.sortBy];

      // Handle nested or custom sort attributes if needed
      if (state.sortBy === "id") { valA = a.id; valB = b.id; }
      if (state.sortBy === "type") { valA = a.type; valB = b.type; }
      if (state.sortBy === "zone") { valA = a.zone; valB = b.zone; }
      if (state.sortBy === "health") { valA = a.health; valB = b.health; }
      if (state.sortBy === "risk") { valA = a.risk; valB = b.risk; }
      if (state.sortBy === "criticality") {
        const critOrder = { "LOW": 1, "MEDIUM": 2, "HIGH": 3, "CRITICAL": 4 };
        valA = critOrder[a.criticality] || 0;
        valB = critOrder[b.criticality] || 0;
      }
      if (state.sortBy === "status") { valA = a.status; valB = b.status; }
      if (state.sortBy === "ip") {
        // Simple IP sorting
        valA = a.ip.split('.').map(n => parseInt(n).toString().padStart(3, '0')).join('');
        valB = b.ip.split('.').map(n => parseInt(n).toString().padStart(3, '0')).join('');
      }

      if (valA < valB) return state.sortAscending ? -1 : 1;
      if (valA > valB) return state.sortAscending ? 1 : -1;
      return 0;
    });
  }

  return list;
}

// Global Redraw Main Layout
function render() {
  const filtered = getFilteredAndSortedAssets();
  const totalAssets = filtered.length;
  
  // Enforce page bounds
  const maxPage = Math.max(1, Math.ceil(totalAssets / state.pageSize));
  if (state.currentPage > maxPage) {
    state.currentPage = maxPage;
  }
  
  const startIdx = (state.currentPage - 1) * state.pageSize;
  const endIdx = Math.min(startIdx + state.pageSize, totalAssets);
  const pageAssets = filtered.slice(startIdx, endIdx);

  // Render Table
  renderTableRows(pageAssets);
  
  // Render pagination buttons
  renderPagination(totalAssets, maxPage);
  
  // Update footer descriptive text
  dom.showingText.textContent = totalAssets > 0 
    ? `Showing ${startIdx + 1} to ${endIdx} of ${totalAssets} assets`
    : `Showing 0 to 0 of 0 assets`;
}

// Populate table rows HTML
function renderTableRows(pageAssets) {
  dom.tableBody.innerHTML = "";
  
  if (pageAssets.length === 0) {
    dom.tableBody.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 32px; color: var(--text-muted);">No assets match the active search and filter constraints.</td></tr>`;
    return;
  }
  
  pageAssets.forEach(asset => {
    const isChecked = state.checkedIds.has(asset.id);
    const isSelected = state.selectedId === asset.id;
    
    // Status dot color mapping
    const healthDotClass = asset.health.toLowerCase() === "healthy" ? "healthy" : (asset.health.toLowerCase() === "warning" ? "warning" : "critical");
    const statusTextClass = asset.health.toLowerCase() === "healthy" ? "text-healthy" : (asset.health.toLowerCase() === "warning" ? "text-warning" : "text-critical");
    
    // Criticality color class
    let criticalityTextClass = "text-low";
    if (asset.criticality === "HIGH" || asset.criticality === "CRITICAL") criticalityTextClass = "text-critical";
    else if (asset.criticality === "MEDIUM") criticalityTextClass = "text-warning";

    const tr = document.createElement("tr");
    tr.className = isSelected ? "selected" : "";
    tr.dataset.id = asset.id;
    
    tr.innerHTML = `
      <td class="col-checkbox">
        <input type="checkbox" class="row-checkbox" ${isChecked ? "checked" : ""}>
      </td>
      <td class="font-semibold text-white">${asset.id}</td>
      <td>${asset.type}</td>
      <td>${asset.zone}</td>
      <td class="health-cell">
        <span class="status-dot ${healthDotClass}"></span>
        <span class="font-semibold ${statusTextClass}">${asset.health}</span>
      </td>
      <td class="font-semibold text-white">${asset.risk.toFixed(1)}</td>
      <td class="font-semibold ${criticalityTextClass}">${asset.criticality}</td>
      <td class="font-semibold ${asset.status === 'RUNNING' || asset.status === 'UP' ? 'text-healthy' : 'text-critical'}">${asset.status}${asset.status === 'UP' ? ' <span class="status-arrow">▲</span>' : ''}</td>
      <td class="text-secondary">${asset.ip}</td>
    `;
    
    // Click events inside table rows
    tr.querySelector(".row-checkbox").addEventListener("click", (e) => {
      e.stopPropagation(); // Stop row click trigger
      if (e.target.checked) {
        state.checkedIds.add(asset.id);
      } else {
        state.checkedIds.delete(asset.id);
      }
      updateSelectAllCheckboxState(pageAssets);
    });

    tr.addEventListener("click", () => {
      state.selectedId = asset.id;
      document.querySelectorAll("#assets-table tbody tr").forEach(row => row.classList.remove("selected"));
      tr.classList.add("selected");
      renderSelectedAssetDetails();
    });

    dom.tableBody.appendChild(tr);
  });

  updateSelectAllCheckboxState(pageAssets);
}

// Synchronize global checkbox state
function updateSelectAllCheckboxState(pageAssets) {
  if (pageAssets.length === 0) {
    dom.selectAllCheck.checked = false;
    dom.selectAllCheck.indeterminate = false;
    return;
  }
  
  let checkedCount = 0;
  pageAssets.forEach(a => {
    if (state.checkedIds.has(a.id)) checkedCount++;
  });
  
  if (checkedCount === 0) {
    dom.selectAllCheck.checked = false;
    dom.selectAllCheck.indeterminate = false;
  } else if (checkedCount === pageAssets.length) {
    dom.selectAllCheck.checked = true;
    dom.selectAllCheck.indeterminate = false;
  } else {
    dom.selectAllCheck.checked = false;
    dom.selectAllCheck.indeterminate = true;
  }
}

// Generate pagination controls
function renderPagination(totalAssets, maxPage) {
  dom.pageNumbers.innerHTML = "";
  
  dom.btnPrev.disabled = state.currentPage === 1;
  dom.btnNext.disabled = state.currentPage === maxPage;

  for (let i = 1; i <= maxPage; i++) {
    const btn = document.createElement("button");
    btn.className = `page-num ${state.currentPage === i ? "active" : ""}`;
    btn.textContent = i;
    btn.addEventListener("click", () => {
      state.currentPage = i;
      render();
    });
    dom.pageNumbers.appendChild(btn);
  }
}

// Render selected asset detail elements (Right Panel)
function renderSelectedAssetDetails() {
  const asset = assetsData.find(a => a.id === state.selectedId);
  if (!asset) return;

  // Header Details Setup
  dom.detailAssetId.textContent = asset.id;
  dom.detailAssetDesc.textContent = asset.desc;
  
  // Criticality Pill
  dom.detailCriticalityBadge.className = `asset-criticality-badge ${asset.criticality.toLowerCase()}`;
  dom.detailCriticalityBadge.textContent = asset.criticality;
  
  // Hex Logo Colors
  let logoColorClass = "healthy";
  if (asset.health === "DEGRADED" || asset.criticality === "CRITICAL") logoColorClass = "critical";
  else if (asset.health === "WARNING") logoColorClass = "warning";
  dom.detailHexLogo.className = `asset-hex-logo ${logoColorClass}`;

  // Core indicators box
  dom.detailRiskScore.textContent = asset.risk.toFixed(1);
  dom.detailRiskLabel.textContent = asset.criticality;
  
  // Risk style mapping
  let riskClass = "text-low";
  if (asset.risk >= 8.0) riskClass = "text-critical";
  else if (asset.risk >= 4.0) riskClass = "text-warning";
  dom.detailRiskScore.className = `indicator-value ${riskClass}`;
  dom.detailRiskLabel.className = `indicator-status ${riskClass}`;

  // Health and online status
  const healthDotClass = asset.health.toLowerCase() === "healthy" ? "healthy" : (asset.health.toLowerCase() === "warning" ? "warning" : "critical");
  const healthTextClass = asset.health.toLowerCase() === "healthy" ? "text-healthy" : (asset.health.toLowerCase() === "warning" ? "text-warning" : "text-critical");
  
  dom.detailHealthStatus.className = `indicator-value status-indicator ${healthTextClass}`;
  dom.detailHealthStatus.innerHTML = `<span class="status-dot ${healthDotClass}"></span><span class="val-text">${asset.health}</span>`;
  
  const statusColorClass = asset.status === 'RUNNING' || asset.status === 'UP' ? 'text-healthy' : 'text-critical';
  dom.detailStatus.className = `indicator-value ${statusColorClass}`;
  dom.detailStatus.textContent = asset.status;
  
  dom.detailZone.textContent = asset.zone;
  dom.detailVulnCount.textContent = asset.cves.length;

  // Overview Tab: Info Card data bindings
  dom.infoId.textContent = asset.id;
  dom.infoType.textContent = asset.type;
  dom.infoZoneRack.textContent = asset.rack;
  dom.infoIp.textContent = asset.ip;
  dom.infoOs.textContent = asset.os;
  dom.infoLastSeen.textContent = asset.lastSeen;
  dom.infoOwner.textContent = asset.owner;
  dom.infoEnv.textContent = asset.env;

  // Overview Tab: CVE list population
  dom.detailCvesList.innerHTML = "";
  if (asset.cves.length === 0) {
    dom.detailCvesList.innerHTML = `<div style="font-size: 12px; color: var(--text-muted); padding: 8px;">No open vulnerabilities detected.</div>`;
  } else {
    asset.cves.slice(0, 3).forEach(cve => {
      const severityClass = cve.severity.toLowerCase();
      dom.detailCvesList.innerHTML += `
        <div class="cve-item">
          <span class="cve-name">${cve.name}</span>
          <div class="cve-score-group">
            <span class="cve-score ${severityClass === 'critical' || severityClass === 'high' ? 'text-critical' : 'text-warning'}">${cve.score.toFixed(1)}</span>
            <span class="cve-badge ${severityClass}">${cve.severity}</span>
          </div>
        </div>
      `;
    });
    if (asset.cves.length > 3) {
      dom.detailCvesList.innerHTML += `<a href="#" class="more-cves-link" id="link-more-cves">+${asset.cves.length - 3} more</a>`;
      setTimeout(() => {
        const link = document.getElementById("link-more-cves");
        if (link) {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            // Switch to vulnerabilities tab
            const vulnTabBtn = document.querySelector('.panel-tabs button[data-tab="vulnerabilities"]');
            if (vulnTabBtn) vulnTabBtn.click();
          });
        }
      }, 0);
    }
  }

  // Workload details
  dom.workloadName.textContent = asset.workload.name;
  dom.workloadModel.textContent = asset.workload.model;
  dom.workloadUtil.textContent = `${asset.workload.util}%`;
  
  if (asset.workload.mem) {
    dom.workloadMem.innerHTML = asset.workload.mem;
  } else {
    dom.workloadMem.textContent = "N/A";
  }
  dom.workloadJobId.textContent = asset.workload.jobId || "N/A";

  // Hardware configuration card
  dom.hwGpu.textContent = asset.hardware.gpuModel;
  dom.hwDriver.textContent = asset.hardware.gpuDriver;
  dom.hwCpuMem.textContent = asset.hardware.cpuMem;
  dom.hwStorage.textContent = asset.hardware.storage;
  dom.hwPower.textContent = asset.hardware.power;
  dom.hwTemp.textContent = asset.hardware.temp;
  
  if (parseInt(asset.hardware.temp) >= 70) {
    dom.hwTemp.className = "info-val text-critical font-semibold";
  } else if (parseInt(asset.hardware.temp) >= 55) {
    dom.hwTemp.className = "info-val text-warning font-semibold";
  } else {
    dom.hwTemp.className = "info-val text-healthy font-semibold";
  }

  // Recommended Action card
  dom.detailActionBadge.textContent = asset.actionBadge;
  dom.detailActionText.textContent = asset.actionText;
  if (asset.actionBadge === "IMMEDIATE" || asset.actionBadge === "HIGH PRIORITY") {
    dom.detailActionBadge.style.color = "var(--color-critical)";
  } else if (asset.actionBadge === "MEDIUM PRIORITY") {
    dom.detailActionBadge.style.color = "var(--color-warning)";
  } else {
    dom.detailActionBadge.style.color = "var(--text-secondary)";
  }

  // Donut Chart Rendering (SVG)
  renderDonutChart(asset);

  // Tab detailed view lists (Vulnerabilities, Timeline, Network)
  renderDetailedTabContents(asset);
}

// Generate SVG Donut chart sectors
function renderDonutChart(asset) {
  dom.donutScoreText.textContent = asset.risk.toFixed(1);
  
  // Clean dynamic circle elements
  const circles = dom.donutChartSvg.querySelectorAll("circle.donut-segment");
  circles.forEach(c => c.remove());
  
  const radius = 38;
  const circumference = 2 * Math.PI * radius; // ~238.76
  
  let currentOffset = 0;
  
  asset.riskContribution.forEach(segment => {
    // If score/risk is low, downscale segment values relative to total risk score
    // Let's compute actual stroke sizes based on segment.pct
    const segmentLength = (segment.pct / 100) * circumference;
    const segmentOffset = currentOffset;
    
    // Increment accumulated offset
    currentOffset -= segmentLength;
    
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("class", "donut-segment");
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", radius.toString());
    circle.setAttribute("fill", "transparent");
    circle.setAttribute("stroke", segment.color);
    circle.setAttribute("stroke-width", "8");
    circle.setAttribute("stroke-dasharray", `${segmentLength.toFixed(2)} ${circumference.toFixed(2)}`);
    circle.setAttribute("stroke-dashoffset", segmentOffset.toFixed(2));
    
    dom.donutChartSvg.appendChild(circle);
  });
  
  // Render Legend
  dom.riskLegendList.innerHTML = "";
  asset.riskContribution.forEach(segment => {
    dom.riskLegendList.innerHTML += `
      <div class="legend-item">
        <div class="legend-left">
          <span class="legend-color-dot" style="background-color: ${segment.color};"></span>
          <span class="legend-name">${segment.name}</span>
        </div>
        <span class="legend-val">${segment.pct}% <span class="legend-score-sub">(${segment.score.toFixed(1)})</span></span>
      </div>
    `;
  });
}

// Populate deep tabs details
function renderDetailedTabContents(asset) {
  // 1. Detailed Vulnerabilities tab list
  dom.vulnListDetailed.innerHTML = "";
  if (asset.cves.length === 0) {
    dom.vulnListDetailed.innerHTML = `<div class="vuln-detailed-card" style="text-align: center; color: var(--text-muted); padding: 24px;">No vulnerabilities found. System meets active compliance policy guidelines.</div>`;
  } else {
    asset.cves.forEach(cve => {
      const badgeClass = cve.severity.toLowerCase();
      dom.vulnListDetailed.innerHTML += `
        <div class="vuln-detailed-card">
          <div class="vuln-header">
            <span class="vuln-cve">${cve.name}</span>
            <span class="vuln-score-badge ${badgeClass}">${cve.severity} (Score: ${cve.score.toFixed(1)})</span>
          </div>
          <p class="vuln-desc">Security bypass validation vulnerability detected in the virtualization stack. An authenticated remote attacker could bypass sandbox limitations and compromise system memory allocation maps.</p>
          <div class="vuln-meta-row">
            <span>Package: libvirt-qemu</span>
            <span>Fixed Version: 8.0.0-r3</span>
            <span>Detected: 22 May 2025</span>
          </div>
        </div>
      `;
    });
  }

  // 2. Timeline tab list
  dom.detailTimelineList.innerHTML = "";
  const events = asset.timeline.length > 0 ? asset.timeline : [
    { time: "22 May 2025, 08:00:00", title: "Monitoring Pulse Online", desc: "No status drift detected in active workloads", class: "info" }
  ];
  events.forEach(event => {
    dom.detailTimelineList.innerHTML += `
      <div class="timeline-event ${event.class}">
        <span class="event-time">${event.time}</span>
        <h4 class="event-title">${event.title}</h4>
        <p class="event-desc">${event.desc}</p>
      </div>
    `;
  });
}

// Initialize or defer based on readyState
if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
