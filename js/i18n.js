/**
 * ACM i18n — Internationalization Module
 * Languages: en (English), zh (中文), ru (Русский)
 */

const ACM_I18N = {
  en: {
    /* ── NAV ── */
    nav_mission: "Mission",
    nav_capabilities: "Capabilities",
    nav_architecture: "Architecture",
    nav_research: "Research",
    nav_connect: "Connect",

    /* ── HERO ── */
    hero_tag: "SYSTEM ONLINE — BUILD 2026.03",
    hero_sub: "Engineering the architecture of autonomous intelligence.<br/>Where cognition transcends code.",
    hero_btn_init: "Initialize Session",
    hero_btn_research: "View Research",
    stat_uptime: "Uptime %",
    stat_petaflops: "Petaflops/s",
    stat_nodes: "Active Nodes",
    stat_agents: "AI Agents",

    /* ── TICKER ── */
    ticker: [
      "NEURAL SYNC ACTIVE",
      "COGNITIVE LAYER v3.7 LOADED",
      "AUTONOMOUS REASONING ENGINE NOMINAL",
      "MULTI-AGENT COORDINATION ONLINE",
      "KNOWLEDGE GRAPH: 1.2T NODES",
      "INFERENCE LATENCY: 12ms",
      "SAFETY PROTOCOLS: ENGAGED",
    ],

    /* ── MISSION ── */
    label_mission: "// 01 — MISSION",
    mission_title: 'Redefining the <span class="accent">Boundaries</span><br/>of Machine Cognition',
    mission_p1: "ACME Cognitive Mind is not merely an AI platform — it is a cognitive infrastructure. We design, train and deploy self-evolving intelligence systems that reason, adapt, and make decisions at the frontier of human-machine collaboration.",
    mission_p2: "ACM systems operate across domains: from real-time autonomous agents to large-scale knowledge synthesis engines, our architectures learn continuously, reason causally, and act decisively.",
    bullet1: "Causal reasoning over pure pattern matching",
    bullet2: "Continual learning without catastrophic forgetting",
    bullet3: "Alignment-first architecture at every layer",

    /* ── CAPABILITIES ── */
    label_capabilities: "// 02 — CAPABILITIES",
    cap_title: 'Core <span class="accent">Systems</span>',
    cap1_h: "Autonomous Agents",
    cap1_p: "Multi-agent systems that plan, delegate, execute and self-correct across complex task hierarchies with full observability.",
    cap2_h: "Cognitive Reasoning",
    cap2_p: "Causal inference engine enabling ACM to reason beyond training distribution — modeling consequences before acting.",
    cap3_h: "Knowledge Synthesis",
    cap3_p: "Real-time knowledge graph construction from unstructured streams — 1.2 trillion nodes, updated continuously.",
    cap4_h: "Adaptive Learning",
    cap4_p: "Continual learning architecture with zero catastrophic forgetting — systems improve in deployment, not just training.",
    cap5_h: "Alignment Engine",
    cap5_p: "Constitutional AI with real-time value alignment scoring. Every inference is checked against the ACM Ethical Core.",
    cap6_h: "Multimodal Perception",
    cap6_p: "Unified vision-language-audio-sensor fusion allowing ACM to perceive and reason across any data modality.",

    /* ── ARCHITECTURE ── */
    label_architecture: "// 03 — ARCHITECTURE",
    arch_title: 'The <span class="accent">ACM</span> Stack',
    arch_desc: "ACM's cognitive stack is a layered intelligence infrastructure — each layer feeds into the next, forming a continuous loop from raw input to aligned action.",
    arch_node_human: "Human",
    arch_node_app: "App",
    arch_node_agent: "Agent",
    arch_conn1: "API / WebSocket / SDK",
    arch_band1: "INTERFACE LAYER",
    arch_conn2: "Task Dispatch",
    arch_band2: "ORCHESTRATION LAYER",
    arch_conn3: "Cognitive Signal",
    arch_band3: "⬡ COGNITIVE CORE",
    cf_perceive: "Perceive",
    cf_reason: "Reason",
    cf_plan: "Plan",
    cf_act: "Act",
    cf_learn: "Learn",
    arch_conn4: "Read / Write",
    arch_band4: "FOUNDATION LAYER",
    arch_feedback: "↺ Continuous Alignment Feedback",

    /* ── RESEARCH ── */
    label_research: "// 04 — RESEARCH",
    research_title: 'Recent <span class="accent">Publications</span>',
    paper1_h: "Causal World Models for Autonomous Decision-Making Under Uncertainty",
    paper1_p: "We introduce ACM-CausalNet, a framework enabling agents to reason about counterfactuals and long-horizon consequences without additional training data.",
    paper1_link: "Read Paper →",
    paper2_h: "Constitutional Alignment at Inference Time: A New Paradigm",
    paper2_p: "Real-time value alignment scoring integrated into every token generation step, achieving 99.97% alignment without post-hoc filtering.",
    paper2_link: "Read Paper →",
    paper3_h: "Emergent Cooperation in Large-Scale Agent Swarms",
    paper3_p: "Analysis of spontaneous coordination behaviors in ACM's 847-agent deployment, revealing novel communication protocols that emerged without explicit training.",
    paper3_link: "Read Paper →",

    /* ── CONTACT ── */
    label_contact: "// 05 — CONTACT",
    contact_title: 'Ready to <span class="accent">Connect</span>?',
    contact_desc: "Whether you're an enterprise looking for cognitive infrastructure,<br/>a researcher seeking collaboration, or just curious — reach out.",
    contact_lbl1: "General Inquiry",
    contact_lbl2: "Research Collaboration",
    contact_lbl3: "Enterprise Solutions",
    contact_btn: "Open Communication Channel",

    /* ── FOOTER ── */
    footer_copy: "© 2026 ACME Cognitive Mind. All systems nominal.",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_security: "Security",

    /* ── LEGAL / PAGES ── */
    back_research: "← Back to Research",
    legal_privacy_lbl: "// LEGAL — PRIVACY",
    legal_privacy_title: 'Privacy <span class="accent">Policy</span>',
    legal_terms_lbl: "// LEGAL — TERMS",
    legal_terms_title: 'Terms of <span class="accent">Service</span>',
    legal_security_lbl: "// SECURITY",
    legal_security_title: 'Security <span class="accent">Program</span>',

    /* ── PRIVACY PAGE ── */
    priv_overview: "1. Overview",
    priv_p1: "ACME Cognitive Mind (\"ACM\", \"we\", \"our\") is committed to protecting the privacy of individuals who interact with our systems, agents, and infrastructure. This Privacy Policy explains what data we collect, how we use it, and the rights you have over your information.",
    priv_p2: "By accessing or using ACM services, you acknowledge that you have read and understood this policy.",
    priv_collect: "2. Information We Collect",
    priv_s2_1: "2.1 Interaction Data",
    priv_s2_1_p: "When you interact with ACM agents or APIs, we collect:",
    priv_s2_1_li1: "Input messages, queries, and commands submitted to ACM systems",
    priv_s2_1_li2: "Session identifiers and timestamps",
    priv_s2_1_li3: "API usage metrics (token counts, latency, model versions)",
    priv_s2_1_li4: "Error logs and diagnostic telemetry",
    priv_s2_2: "2.2 Account & Identity Data",
    priv_s2_2_p: "If you create an ACM account or enterprise integration, we collect:",
    priv_s2_2_li1: "Name and email address",
    priv_s2_2_li2: "Organization name and role",
    priv_s2_2_li3: "Authentication credentials (stored in hashed form)",
    priv_s2_2_li4: "Billing information (processed by PCI-compliant third parties)",
    priv_s2_3: "2.3 System & Technical Data",
    priv_s2_3_li1: "IP address and approximate geolocation",
    priv_s2_3_li2: "Browser type, OS, and device identifiers",
    priv_s2_3_li3: "Referral URLs and navigation patterns",
    priv_usage: "3. How We Use Your Data",
    priv_usage_p: "ACM uses collected data to provide and improve services, enable personalized experiences, conduct research, and maintain security. We do not sell your information to third parties.",
    priv_s3_li1: "Provide and improve our cognitive intelligence services",
    priv_s3_li2: "Train and fine-tune ACM models (with explicit opt-in consent only)",
    priv_s3_li3: "Detect, investigate, and prevent security threats",
    priv_s3_li4: "Monitor alignment and safety compliance of deployed agents",
    priv_s3_li5: "Communicate service updates, security notices, and research publications",
    priv_s3_li6: "Comply with applicable laws and regulations",
    priv_s4: "4. Data Retention",
    priv_s4_p: "Interaction logs are retained for <strong>90 days</strong> for operational purposes, then permanently deleted unless you have explicitly opted into extended retention for model improvement. Account data is retained for the duration of your account and 30 days following deletion. Anonymized aggregate metrics may be retained indefinitely for research purposes.",
    priv_s5: "5. Data Sharing",
    priv_s5_p: "ACM does not sell your personal data. We may share data with:",
    priv_s5_li1: "<strong>Service providers:</strong> Infrastructure, security, and analytics vendors under strict data processing agreements",
    priv_s5_li2: "<strong>Research partners:</strong> Only anonymized, aggregated datasets — never raw personal data",
    priv_s5_li3: "<strong>Legal authorities:</strong> Only when required by valid legal process",
    priv_rights: "6. Your Rights",
    priv_rights_p: "Depending on your jurisdiction, you may have the right to access, correct, or delete your data. Contact us to exercise these rights.",
    priv_s6_li1: "Access a copy of data we hold about you",
    priv_s6_li2: "Request correction of inaccurate data",
    priv_s6_li3: "Request deletion of your personal data",
    priv_s6_li4: "Opt out of model training use",
    priv_s6_li5: "Port your data to another service",
    priv_s6_p2: "To exercise these rights, contact: <a href='mailto:contactus@openingo.org'>contactus#openingo.org</a>",
    priv_contact: "7. Contact",
    priv_contact_p: "For privacy-related inquiries, contact us at: <a href='mailto:contactus@openingo.org'>contactus#openingo.org</a>",

    /* ── TERMS PAGE ── */
    terms_intro: "By using ACME Cognitive Mind services, you agree to these Terms of Service. These terms govern your access to and use of our cognitive infrastructure, AI agents, and research outputs.",
    terms_accept: "1. Acceptance of Terms",
    terms_accept_p: "By accessing or using any ACME Cognitive Mind (\"ACM\") service, platform, API, or agent deployment, you agree to be bound by these Terms of Service. If you are using ACM on behalf of an organization, you represent that you have the authority to bind that organization to these terms.",
    terms_s2: "2. Description of Services",
    terms_s2_p: "ACM provides a cognitive intelligence infrastructure including, but not limited to:",
    terms_s2_li1: "Autonomous agent deployment and orchestration",
    terms_s2_li2: "Causal reasoning and knowledge synthesis APIs",
    terms_s2_li3: "Multi-agent coordination frameworks",
    terms_s2_li4: "Alignment monitoring and safety systems",
    terms_s2_li5: "Research publications and technical documentation",
    terms_user: "3. Acceptable Use",
    terms_user_p: "You agree not to use ACM services to:",
    terms_s3_li1: "Generate, distribute, or facilitate harmful, illegal, or deceptive content",
    terms_s3_li2: "Circumvent or attempt to bypass ACM's alignment and safety systems",
    terms_s3_li3: "Reverse engineer, decompile, or extract ACM's proprietary model weights",
    terms_s3_li4: "Use ACM agents for autonomous actions on critical infrastructure without proper authorization",
    terms_s3_li5: "Violate any applicable local, national, or international law or regulation",
    terms_s4: "4. API Usage & Rate Limits",
    terms_s4_p: "ACM API access is subject to rate limits specified in your service tier agreement. Attempting to circumvent rate limits, abuse authentication systems, or exceed allocated compute quotas may result in immediate service suspension. ACM reserves the right to modify rate limits with 7 days notice.",
    terms_s5: "5. Intellectual Property",
    terms_s5_p: "All ACM models, architectures, system designs, and research outputs are proprietary intellectual property of ACME Cognitive Mind unless explicitly licensed otherwise. Content generated through ACM APIs may be used by you subject to the generation license terms of your service agreement. You retain ownership of inputs you submit to ACM systems.",
    terms_liability: "6. Disclaimers & Limitation of Liability",
    terms_liability_p: "ACM services are provided \"as is.\" While we maintain a 99.97% uptime SLA for enterprise customers, ACM makes no warranties regarding uninterrupted service availability. To the maximum extent permitted by law, ACM's liability for any claim arising from use of our services is limited to amounts paid in the preceding 3 months.",
    terms_changes: "7. Modifications",
    terms_changes_p: "ACM reserves the right to modify these terms at any time. Material changes will be communicated via email or prominent in-service notice at least 14 days before taking effect. Continued use of ACM services after the effective date constitutes acceptance of updated terms.",
    terms_contact: "8. Contact",
    terms_contact_p: "For terms-related inquiries: <a href='mailto:contactus@openingo.org'>contactus#openingo.org</a>",

    /* ── SECURITY PAGE ── */
    sec_commit: "Our Security Philosophy",
    sec_commit_p: "Security at ACM is not an afterthought — it is embedded at every layer of our cognitive stack. From the neural substrate to the interface layer, each component is designed with a zero-trust architecture and continuous threat monitoring.",
    sec_commit_p2: "We apply defense-in-depth across all systems, with particular focus on the unique threat surface presented by autonomous AI agents operating in production environments.",
    sec_infra: "Infrastructure",
    sec_api: "API Layer",
    sec_align: "Alignment Guard",
    sec_sandbox: "Agent Sandbox",
    sec_infra_sec: "Infrastructure Security",
    sec_infra_li1: "<strong>Zero-trust network architecture</strong> — no implicit trust between components",
    sec_infra_li2: "<strong>End-to-end encryption</strong> — all data in transit uses TLS 1.3+; all data at rest is AES-256 encrypted",
    sec_infra_li3: "<strong>Hardware security modules (HSM)</strong> — for cryptographic key management",
    sec_infra_li4: "<strong>Isolated agent sandboxes</strong> — each deployed agent operates in a separate compute environment",
    sec_infra_li5: "<strong>Continuous threat detection</strong> — real-time anomaly detection on all system telemetry",
    sec_ai_sec: "AI-Specific Security",
    sec_ai_sec_p: "Operating autonomous AI agents introduces unique security considerations. ACM's approach includes:",
    sec_ai_li1: "<strong>Prompt injection defense</strong> — multi-layer filtering to prevent adversarial inputs from hijacking agent behavior",
    sec_ai_li2: "<strong>Action boundary enforcement</strong> — agents operate within explicitly defined action spaces with no implicit capability expansion",
    sec_ai_li3: "<strong>Real-time alignment monitoring</strong> — every agent action is scored against alignment criteria before execution",
    sec_ai_li4: "<strong>Audit trail</strong> — immutable, append-only logs of all agent decisions and actions",
    sec_ai_li5: "<strong>Kill switch protocol</strong> — any agent can be halted within 50ms if anomalous behavior is detected",
    sec_reporting: "Vulnerability Disclosure",
    sec_reporting_p: "ACM operates a responsible disclosure program. If you discover a security vulnerability in any ACM system, we ask that you:",
    sec_disc_li1: "Report it promptly to <a href='mailto:contactus@openingo.org'>contactus#openingo.org</a> with subject line <code>[SECURITY]</code>",
    sec_disc_li2: "Provide sufficient detail to reproduce the issue",
    sec_disc_li3: "Allow ACM reasonable time to investigate and remediate before public disclosure",
    sec_disc_li4: "Avoid accessing, modifying, or deleting data beyond what is necessary to demonstrate the vulnerability",
    sec_process_p1: "We commit to acknowledging valid reports within <strong>48 hours</strong> and providing a remediation timeline within <strong>7 business days</strong>.",
    sec_compliance: "Compliance",
    sec_compliance_p: "ACM maintains compliance with the following frameworks and regulations:",
    sec_inquiry: "Contact",
    sec_inquiry_p: "Security inquiries: <a href='mailto:contactus@openingo.org'>contactus#openingo.org</a>",
    sec_inquiry_p2: "Subject line: <code>[SECURITY]</code>",

    /* ── RESEARCH PAPERS ── */
    paper_authors: "Authors:",
    paper_contact: "Contact: ",
    paper_abstract: "Abstract",
    paper_intro: "1. Introduction",
    paper_arch: "2. Architecture",
    paper_results: "3. Results",
    paper_conclusion: "4. Conclusion",

    /* Paper 1: Causal World Models */
    paper1_title: "Causal World Models for Autonomous<br/>Decision-Making Under Uncertainty",
    paper1_abstract: "We introduce ACM-CausalNet, a cognitive framework enabling autonomous agents to reason about counterfactuals and long-horizon consequences without requiring additional task-specific training data. By integrating a learned causal graph with a differentiable world-model simulator, ACM-CausalNet demonstrates robust decision-making across distribution-shifted environments while maintaining alignment with specified value constraints. We achieve a 34% improvement in out-of-distribution task success rate compared to prior autoregressive approaches, and demonstrate zero-shot transfer to 12 previously unseen domains.",
    paper1_authors: "ACM Research Team",

    /* Paper 2: Constitutional Alignment */
    paper2_title: "Constitutional Alignment at Inference Time: A New Paradigm",
    paper2_abstract: "We present a novel approach to AI safety: embedding constitutional principles directly into the inference pipeline of autonomous agents. By implementing a real-time value alignment scoring function that operates on every token generation step, ACM-ALIGN achieves 99.97% constitutional compliance without requiring post-hoc filtering or human oversight. Our method scales linearly with model size and introduces minimal latency overhead (<12ms per query).",
    paper2_authors: "ACM Alignment Research Team",

    /* Paper 3: Emergent Cooperation */
    paper3_title: "Emergent Cooperation in Large-Scale Agent Swarms",
    paper3_abstract: "Analyzing spontaneous coordination behaviors in ACM's 847-agent deployment, we discovered novel communication protocols that emerged without explicit training. These protocols enable efficient task distribution, conflict resolution, and knowledge sharing across heterogeneous agents. We provide a formal framework for understanding how cooperation emerges from simple individual rules and demonstrate applications to multi-agent robotics and autonomous systems.",
    paper3_authors: "ACM Agent Systems Team",
  },

  zh: {
    nav_mission: "使命",
    nav_capabilities: "能力",
    nav_architecture: "架构",
    nav_research: "研究",
    nav_connect: "联系",

    hero_tag: "系统在线 — 构建版本 2026.03",
    hero_sub: "构筑自主智能的架构基础。<br/>认知，超越代码。",
    hero_btn_init: "启动会话",
    hero_btn_research: "查看研究",
    stat_uptime: "正常运行率 %",
    stat_petaflops: "千万亿次/秒",
    stat_nodes: "活跃节点",
    stat_agents: "AI 智能体",

    ticker: [
      "神经同步：已激活",
      "认知层 v3.7：已加载",
      "自主推理引擎：运行正常",
      "多智能体协调：在线",
      "知识图谱：1.2万亿节点",
      "推理延迟：12毫秒",
      "安全协议：已启动",
    ],

    label_mission: "// 01 — 使命",
    mission_title: '重新定义机器认知的<span class="accent">边界</span>',
    mission_p1: "ACME Cognitive Mind 不仅仅是一个 AI 平台——它是认知基础设施。我们设计、训练和部署自我进化的智能系统，这些系统能够在人机协作前沿进行推理、适应和决策。",
    mission_p2: "ACM 系统跨领域运行：从实时自主智能体到大规模知识综合引擎，我们的架构持续学习、因果推理、果断行动。",
    bullet1: "因果推理，超越纯粹的模式匹配",
    bullet2: "持续学习，无灾难性遗忘",
    bullet3: "每一层都以对齐优先的架构构建",

    label_capabilities: "// 02 — 能力",
    cap_title: '核心<span class="accent">系统</span>',
    cap1_h: "自主智能体",
    cap1_p: "多智能体系统，能够在复杂任务层级中规划、委派、执行和自我纠错，具备完整可观测性。",
    cap2_h: "认知推理",
    cap2_p: "因果推理引擎，使 ACM 能够在训练分布之外进行推理——在行动前对后果建模。",
    cap3_h: "知识综合",
    cap3_p: "从非结构化数据流实时构建知识图谱——1.2万亿节点，持续更新。",
    cap4_h: "自适应学习",
    cap4_p: "无灾难性遗忘的持续学习架构——系统在部署中持续改进，而不仅仅是训练中。",
    cap5_h: "对齐引擎",
    cap5_p: "具有实时价值对齐评分的宪法 AI。每次推理都经过 ACM 伦理核心的检验。",
    cap6_h: "多模态感知",
    cap6_p: "统一的视觉-语言-音频-传感器融合，使 ACM 能够感知和推理任何数据模态。",

    label_architecture: "// 03 — 架构",
    arch_title: 'ACM <span class="accent">技术栈</span>',
    arch_desc: "ACM 的认知技术栈是一个分层的智能基础设施——每一层都向下一层输入，形成从原始输入到对齐行动的连续循环。",
    arch_node_human: "人类",
    arch_node_app: "应用",
    arch_node_agent: "智能体",
    arch_conn1: "API / WebSocket / SDK",
    arch_band1: "接口层",
    arch_conn2: "任务调度",
    arch_band2: "编排层",
    arch_conn3: "认知信号",
    arch_band3: "⬡ 认知核心",
    cf_perceive: "感知",
    cf_reason: "推理",
    cf_plan: "规划",
    cf_act: "行动",
    cf_learn: "学习",
    arch_conn4: "读 / 写",
    arch_band4: "基础层",
    arch_feedback: "↺ 持续对齐反馈",

    label_research: "// 04 — 研究",
    research_title: '最新<span class="accent">论文</span>',
    paper1_h: "不确定性下自主决策的因果世界模型",
    paper1_p: "我们提出 ACM-CausalNet，一个使智能体无需额外训练数据即可推理反事实和长期后果的框架。",
    paper1_link: "阅读论文 →",
    paper2_h: "推理时的宪法对齐：一种新范式",
    paper2_p: "将实时价值对齐评分集成到每个 token 的生成步骤中，无需后处理过滤即可达到 99.97% 的对齐率。",
    paper2_link: "阅读论文 →",
    paper3_h: "大规模智能体群中的涌现合作",
    paper3_p: "分析 ACM 847 个智能体部署中的自发协调行为，揭示了无需明确训练就涌现出的新型通信协议。",
    paper3_link: "阅读论文 →",

    label_contact: "// 05 — 联系",
    contact_title: '准备好<span class="accent">连接</span>了吗？',
    contact_desc: "无论您是寻求认知基础设施的企业、<br/>寻求合作的研究人员，还是只是好奇——请联系我们。",
    contact_lbl1: "一般咨询",
    contact_lbl2: "研究合作",
    contact_lbl3: "企业解决方案",
    contact_btn: "开启通信频道",

    footer_copy: "© 2026 ACME Cognitive Mind. 所有系统运行正常。",
    footer_privacy: "隐私政策",
    footer_terms: "服务条款",
    footer_security: "安全",

    back_research: "← 返回研究列表",
    legal_privacy_lbl: "// 法律 — 隐私",
    legal_privacy_title: '隐私<span class="accent">政策</span>',
    legal_terms_lbl: "// 法律 — 条款",
    legal_terms_title: '服务<span class="accent">条款</span>',
    legal_security_lbl: "// 安全",
    legal_security_title: '安全<span class="accent">计划</span>',

    /* ── PRIVACY PAGE (ZH) ── */
    priv_overview: "1. 概述",
    priv_p1: "ACME Cognitive Mind（\u201CACM\u201D、\u201C我们\u201D）致力于保护与我们的系统、智能体和基础设施互动的个人隐私。本隐私政策解释了我们收集哪些数据、如何使用这些数据以及您对信息的权利。",
    priv_p2: "访问或使用 ACM 服务即表示您已阅读并理解本政策。",
    priv_collect: "2. 我们收集的信息",
    priv_s2_1: "2.1 交互数据",
    priv_s2_1_p: "当您与 ACM 智能体或 API 交互时，我们收集：",
    priv_s2_1_li1: "提交到 ACM 系统的输入消息、查询和命令",
    priv_s2_1_li2: "会话标识符和时间戳",
    priv_s2_1_li3: "API 使用指标（token 数量、延迟、模型版本）",
    priv_s2_1_li4: "错误日志和诊断遥测数据",
    priv_s2_2: "2.2 账户与身份数据",
    priv_s2_2_p: "如果您创建 ACM 账户或企业集成，我们收集：",
    priv_s2_2_li1: "姓名和电子邮件地址",
    priv_s2_2_li2: "组织名称和角色",
    priv_s2_2_li3: "认证凭据（以哈希形式存储）",
    priv_s2_2_li4: "账单信息（由符合 PCI 标准的第三方处理）",
    priv_s2_3: "2.3 系统与技术数据",
    priv_s2_3_li1: "IP 地址和近似地理位置",
    priv_s2_3_li2: "浏览器类型、操作系统和设备标识符",
    priv_s2_3_li3: "引荐 URL 和浏览模式",
    priv_usage: "3. 我们如何使用您的数据",
    priv_usage_p: "ACM 使用收集的数据来提供和改进服务、启用个性化体验、进行研究和维护安全。我们不会将您的信息出售给第三方。",
    priv_s3_li1: "提供和改进我们的认知智能服务",
    priv_s3_li2: "训练和微调 ACM 模型（仅在明确选择同意的情况下）",
    priv_s3_li3: "检测、调查和防止安全威胁",
    priv_s3_li4: "监控已部署智能体的对齐性和安全性",
    priv_s3_li5: "传达服务更新、安全通知和研究出版物",
    priv_s3_li6: "遵守适用的法律法规",
    priv_s4: "4. 数据保留",
    priv_s4_p: "交互日志在运营目的下保留 <strong>90 天</strong>，然后永久删除，除非您明确选择延长保留用于模型改进。账户数据在账户存续期间及删除后 30 天内保留。匿名化的汇总指标可能会无限期保留用于研究目的。",
    priv_s5: "5. 数据共享",
    priv_s5_p: "ACM 不会出售您的个人数据。我们可能与以下方共享数据：",
    priv_s5_li1: "<strong>服务提供商：</strong>在严格的数据处理协议下运作的基础设施、安全和分析供应商",
    priv_s5_li2: "<strong>研究合作伙伴：</strong>仅匿名化的汇总数据集——绝不包含原始个人数据",
    priv_s5_li3: "<strong>法律机构：</strong>仅在有效法律程序要求时",
    priv_rights: "6. 您的权利",
    priv_rights_p: "根据您的司法管辖区，您可能有权访问、更正或删除您的数据。联系我们以行使这些权利。",
    priv_s6_li1: "访问我们持有的关于您的数据副本",
    priv_s6_li2: "请求更正不准确的数据",
    priv_s6_li3: "请求删除您的个人数据",
    priv_s6_li4: "选择退出模型训练使用",
    priv_s6_li5: "将您的数据移植到其他服务",
    priv_s6_p2: "要行使这些权利，请联系：<a href='mailto:contactus@openingo.org'>contactus#openingo.org</a>",
    priv_contact: "7. 联系我们",
    priv_contact_p: "有关隐私的咨询，请联系：<a href='mailto:contactus@openingo.org'>contactus#openingo.org</a>",

    /* ── TERMS PAGE (ZH) ── */
    terms_intro: "使用 ACME Cognitive Mind 服务即表示您同意这些服务条款。这些条款管辖您访问和使用我们的认知基础设施、AI 智能体和研究输出的权限。",
    terms_accept: "1. 接受条款",
    terms_accept_p: "访问或使用任何 ACME Cognitive Mind（\u201CACM\u201D）服务、平台、API 或智能体部署，即表示您同意受这些服务条款的约束。如果您代表组织使用 ACM，您表示有权使该组织受这些条款的约束。",
    terms_s2: "2. 服务描述",
    terms_s2_p: "ACM 提供认知智能基础设施，包括但不限于：",
    terms_s2_li1: "自主智能体部署和编排",
    terms_s2_li2: "因果推理和知识综合 API",
    terms_s2_li3: "多智能体协调框架",
    terms_s2_li4: "对齐监控和安全系统",
    terms_s2_li5: "研究出版物和技术文档",
    terms_user: "3. 可接受使用",
    terms_user_p: "您同意不得将 ACM 服务用于：",
    terms_s3_li1: "生成、分发或促进有害、非法或欺骗性内容",
    terms_s3_li2: "规避或试图绕过 ACM 的对齐和安全系统",
    terms_s3_li3: "逆向工程、反编译或提取 ACM 的专有模型权重",
    terms_s3_li4: "未经适当授权将 ACM 智能体用于关键基础设施上的自主行动",
    terms_s3_li5: "违反任何适用的地方、国家或国际法律法规",
    terms_s4: "4. API 使用与速率限制",
    terms_s4_p: "ACM API 访问受您服务等级协议中规定的速率限制约束。试图规避速率限制、滥用认证系统或超出分配的计算配额可能导致立即暂停服务。ACM 保留提前 7 天通知修改速率限制的权利。",
    terms_s5: "5. 知识产权",
    terms_s5_p: "所有 ACM 模型、架构、系统设计和研究产出均为 ACME Cognitive Mind 的专有知识产权，除非另有明确许可。通过 ACM API 生成的内容可由您根据服务协议的生成许可条款使用。您保留提交到 ACM 系统的输入的所有权。",
    terms_liability: "6. 免责声明与责任限制",
    terms_liability_p: "ACM 服务按\u201C原样\u201D提供。虽然我们为企业客户维持 99.97% 的正常运行时间 SLA，但 ACM 不对服务的连续可用性做出任何保证。在法律允许的最大范围内，因使用我们的服务而产生的任何索赔，ACM 的责任限于前 3 个月支付的金额。",
    terms_changes: "7. 修改",
    terms_changes_p: "ACM 保留随时修改这些条款的权利。重大变更将通过电子邮件或显眼的服务内通知在生效前至少 14 天传达。在生效日期之后继续使用 ACM 服务即表示接受更新后的条款。",
    terms_contact: "8. 联系我们",
    terms_contact_p: "有关条款的咨询：<a href='mailto:contactus@openingo.org'>contactus#openingo.org</a>",

    /* ── SECURITY PAGE (ZH) ── */
    sec_commit: "我们的安全理念",
    sec_commit_p: "ACM 的安全不是事后考虑——它嵌入在我们认知技术栈的每一层。从神经基底到接口层，每个组件都以零信任架构和持续威胁监控来设计。",
    sec_commit_p2: "我们在所有系统中应用纵深防御，特别关注自主 AI 智能体在生产环境中运行所带来的独特威胁面。",
    sec_infra: "基础设施",
    sec_api: "API 层",
    sec_align: "对齐守卫",
    sec_sandbox: "智能体沙箱",
    sec_infra_sec: "基础设施安全",
    sec_infra_li1: "<strong>零信任网络架构</strong> — 组件之间没有隐式信任",
    sec_infra_li2: "<strong>端到端加密</strong> — 传输中的所有数据使用 TLS 1.3+；静态数据使用 AES-256 加密",
    sec_infra_li3: "<strong>硬件安全模块（HSM）</strong> — 用于加密密钥管理",
    sec_infra_li4: "<strong>隔离的智能体沙箱</strong> — 每个部署的智能体在独立的计算环境中运行",
    sec_infra_li5: "<strong>持续威胁检测</strong> — 对所有系统遥测数据进行实时异常检测",
    sec_ai_sec: "AI 特定安全",
    sec_ai_sec_p: "运行自主 AI 智能体引入了独特的安全考量。ACM 的方法包括：",
    sec_ai_li1: "<strong>提示注入防御</strong> — 多层过滤以防止对抗性输入劫持智能体行为",
    sec_ai_li2: "<strong>行动边界执行</strong> — 智能体在明确定义的行动空间内运行，没有隐式的能力扩展",
    sec_ai_li3: "<strong>实时对齐监控</strong> — 每个智能体行动在执行前根据对齐标准进行评分",
    sec_ai_li4: "<strong>审计跟踪</strong> — 所有智能体决策和行动的不可变、仅追加日志",
    sec_ai_li5: "<strong>紧急停止协议</strong> — 如果检测到异常行为，任何智能体可以在 50 毫秒内停止",
    sec_reporting: "漏洞披露",
    sec_reporting_p: "ACM 运营负责任的披露计划。如果您发现任何 ACM 系统中的安全漏洞，我们要求您：",
    sec_disc_li1: "立即向 <a href='mailto:contactus@openingo.org'>contactus#openingo.org</a> 报告，主题行使用 <code>[SECURITY]</code>",
    sec_disc_li2: "提供足够的细节以重现问题",
    sec_disc_li3: "允许 ACM 有合理的时间在公开披露之前进行调查和修复",
    sec_disc_li4: "避免访问、修改或删除超出演示漏洞所需范围的数据",
    sec_process_p1: "我们承诺在 <strong>48 小时内</strong>确认有效报告，并在 <strong>7 个工作日内</strong>提供修复时间表。",
    sec_compliance: "合规性",
    sec_compliance_p: "ACM 维持以下框架和法规的合规性：",
    sec_inquiry: "联系我们",
    sec_inquiry_p: "安全咨询：<a href='mailto:contactus@openingo.org'>contactus#openingo.org</a>",
    sec_inquiry_p2: "主题行：<code>[SECURITY]</code>",

    /* ── RESEARCH PAPERS (ZH) ── */
    paper_authors: "作者：",
    paper_contact: "联系方式：",
    paper_abstract: "摘要",
    paper_intro: "1. 引言",
    paper_arch: "2. 架构",
    paper_results: "3. 结果",
    paper_conclusion: "4. 结论",

    /* Paper 1 */
    paper1_title: "不确定性下自主决策的因果世界模型",
    paper1_abstract: "我们提出 ACM-CausalNet，一个使智能体无需额外训练数据即可推理反事实和长期后果的认知框架。通过将学习的因果图与可微世界模型模拟器集成，ACM-CausalNet 在分布偏移环境中展现出鲁棒的决策能力，同时保持与指定价值约束的对齐。我们在分布外任务成功率上比先前的自回归方法提高了 34%，并演示了在 12 个未见域中的零样本迁移。",
    paper1_authors: "ACM 研究团队",

    /* Paper 2 */
    paper2_title: "推理时的宪法对齐：一种新范式",
    paper2_abstract: "我们提出了一种 AI 安全的新方法：将宪法原则直接嵌入自主智能体的推理管线中。通过在每个 token 生成步骤上实现实时价值对齐评分函数，ACM-ALIGN 在无需后处理过滤或人工监督的情况下达到 99.97% 的宪法合规性。我们的方法随模型大小线性扩展，且延迟开销极小（<12 毫秒/查询）。",
    paper2_authors: "ACM 对齐研究团队",

    /* Paper 3 */
    paper3_title: "大规模智能体群中的涌现合作",
    paper3_abstract: "在分析 ACM 847 个智能体部署中的自发协调行为时，我们发现了无需明确训练就涌现出的新型通信协议。这些协议使异构智能体能够高效地分发任务、解决冲突和共享知识。我们提供了理解合作如何从简单个体规则中涌现的形式框架，并演示了在多智能体机器人和自主系统中的应用。",
    paper3_authors: "ACM 智能体系统团队",
  },

  ru: {
    nav_mission: "Миссия",
    nav_capabilities: "Возможности",
    nav_architecture: "Архитектура",
    nav_research: "Исследования",
    nav_connect: "Контакт",

    hero_tag: "СИСТЕМА ОНЛАЙН — СБОРКА 2026.03",
    hero_sub: "Проектируем архитектуру автономного интеллекта.<br/>Где познание превосходит код.",
    hero_btn_init: "Инициализация сессии",
    hero_btn_research: "Смотреть исследования",
    stat_uptime: "Доступность %",
    stat_petaflops: "Петафлопс/с",
    stat_nodes: "Активных узлов",
    stat_agents: "ИИ-агентов",

    ticker: [
      "НЕЙРОСИНХРОНИЗАЦИЯ АКТИВНА",
      "КОГНИТИВНЫЙ СЛОЙ v3.7 ЗАГРУЖЕН",
      "ДВИЖОК АВТОНОМНЫХ РАССУЖДЕНИЙ В НОРМЕ",
      "КООРДИНАЦИЯ МУЛЬТИ-АГЕНТОВ ОНЛАЙН",
      "ГРАФ ЗНАНИЙ: 1,2Т УЗЛОВ",
      "ЗАДЕРЖКА ВЫВОДА: 12МС",
      "ПРОТОКОЛЫ БЕЗОПАСНОСТИ: АКТИВИРОВАНЫ",
    ],

    label_mission: "// 01 — МИССИЯ",
    mission_title: 'Переосмысливая <span class="accent">границы</span><br/>машинного познания',
    mission_p1: "ACME Cognitive Mind — это не просто платформа ИИ, это когнитивная инфраструктура. Мы проектируем, обучаем и развёртываем самоэволюционирующие интеллектуальные системы, которые рассуждают, адаптируются и принимают решения на передовом крае сотрудничества человека и машины.",
    mission_p2: "Системы ACM работают в разных областях: от автономных агентов реального времени до масштабных движков синтеза знаний — наши архитектуры непрерывно обучаются, рассуждают причинно-следственным образом и действуют решительно.",
    bullet1: "Причинно-следственные рассуждения вместо паттерн-матчинга",
    bullet2: "Непрерывное обучение без катастрофического забывания",
    bullet3: "Архитектура с приоритетом выравнивания на каждом уровне",

    label_capabilities: "// 02 — ВОЗМОЖНОСТИ",
    cap_title: 'Основные <span class="accent">системы</span>',
    cap1_h: "Автономные агенты",
    cap1_p: "Мультиагентные системы, которые планируют, делегируют, выполняют и самокорректируются в сложных иерархиях задач с полной наблюдаемостью.",
    cap2_h: "Когнитивные рассуждения",
    cap2_p: "Движок причинного вывода, позволяющий ACM рассуждать за пределами обучающего распределения — моделируя последствия перед действием.",
    cap3_h: "Синтез знаний",
    cap3_p: "Построение графа знаний в реальном времени из неструктурированных потоков — 1,2 триллиона узлов, обновляется непрерывно.",
    cap4_h: "Адаптивное обучение",
    cap4_p: "Архитектура непрерывного обучения с нулевым катастрофическим забыванием — системы совершенствуются в процессе развёртывания.",
    cap5_h: "Движок выравнивания",
    cap5_p: "Конституциональный ИИ с оценкой выравнивания ценностей в реальном времени. Каждый вывод проверяется на соответствие этическому ядру ACM.",
    cap6_h: "Мультимодальное восприятие",
    cap6_p: "Унифицированное слияние зрения-языка-звука-сенсоров, позволяющее ACM воспринимать и рассуждать на основе любых данных.",

    label_architecture: "// 03 — АРХИТЕКТУРА",
    arch_title: 'Стек <span class="accent">ACM</span>',
    arch_desc: "Когнитивный стек ACM — это многоуровневая интеллектуальная инфраструктура, где каждый слой питает следующий, образуя непрерывный цикл от входных данных до согласованных действий.",
    arch_node_human: "Человек",
    arch_node_app: "Приложение",
    arch_node_agent: "Агент",
    arch_conn1: "API / WebSocket / SDK",
    arch_band1: "ИНТЕРФЕЙСНЫЙ СЛОЙ",
    arch_conn2: "Диспетчеризация задач",
    arch_band2: "ОРКЕСТРАЦИОННЫЙ СЛОЙ",
    arch_conn3: "Когнитивный сигнал",
    arch_band3: "⬡ КОГНИТИВНОЕ ЯДРО",
    cf_perceive: "Воспринимать",
    cf_reason: "Рассуждать",
    cf_plan: "Планировать",
    cf_act: "Действовать",
    cf_learn: "Обучаться",
    arch_conn4: "Чтение / Запись",
    arch_band4: "ФУНДАМЕНТАЛЬНЫЙ СЛОЙ",
    arch_feedback: "↺ Непрерывная обратная связь выравнивания",

    label_research: "// 04 — ИССЛЕДОВАНИЯ",
    research_title: 'Последние <span class="accent">публикации</span>',
    paper1_h: "Каузальные модели мира для автономного принятия решений в условиях неопределённости",
    paper1_p: "Представляем ACM-CausalNet — фреймворк, позволяющий агентам рассуждать о контрфактах и долгосрочных последствиях без дополнительных обучающих данных.",
    paper1_link: "Читать статью →",
    paper2_h: "Конституциональное выравнивание во время вывода: новая парадигма",
    paper2_p: "Оценка выравнивания ценностей в реальном времени, интегрированная на каждом шаге генерации токенов, достигает 99,97% выравнивания без постфильтрации.",
    paper2_link: "Читать статью →",
    paper3_h: "Эмерджентное сотрудничество в крупномасштабных роях агентов",
    paper3_p: "Анализ спонтанного координационного поведения в развёртывании 847 агентов ACM, выявивший новые коммуникационные протоколы без явного обучения.",
    paper3_link: "Читать статью →",

    label_contact: "// 05 — КОНТАКТ",
    contact_title: 'Готовы к <span class="accent">связи</span>?',
    contact_desc: "Будь вы предприятием, ищущим когнитивную инфраструктуру,<br/>исследователем, ищущим сотрудничества, или просто любопытным — свяжитесь с нами.",
    contact_lbl1: "Общий запрос",
    contact_lbl2: "Исследовательское сотрудничество",
    contact_lbl3: "Корпоративные решения",
    contact_btn: "Открыть канал связи",

    footer_copy: "© 2026 ACME Cognitive Mind. Все системы в норме.",
    footer_privacy: "Конфиденциальность",
    footer_terms: "Условия",
    footer_security: "Безопасность",

    back_research: "← Назад к исследованиям",
    legal_privacy_lbl: "// ПРАВОВОЕ — КОНФИДЕНЦИАЛЬНОСТЬ",
    legal_privacy_title: 'Политика <span class="accent">конфиденциальности</span>',
    legal_terms_lbl: "// ПРАВОВОЕ — УСЛОВИЯ",
    legal_terms_title: 'Условия <span class="accent">обслуживания</span>',
    legal_security_lbl: "// БЕЗОПАСНОСТЬ",
    legal_security_title: 'Программа <span class="accent">безопасности</span>',

    /* ── PRIVACY PAGE (RU) ── */
    priv_overview: "1. Обзор",
    priv_p1: "ACME Cognitive Mind («ACM», «мы») стремится защищать конфиденциальность лиц, взаимодействующих с нашими системами, агентами и инфраструктурой. Настоящая политика конфиденциальности объясняет, какие данные мы собираем, как их используем и какие права вы имеете относительно своей информации.",
    priv_p2: "Доступ к ACM сервисам или их использование означает, что вы прочитали и поняли настоящую политику.",
    priv_collect: "2. Собираемая информация",
    priv_s2_1: "2.1 Данные взаимодействия",
    priv_s2_1_p: "При взаимодействии с агентами или API ACM мы собираем:",
    priv_s2_1_li1: "Входные сообщения, запросы и команды, отправленные в системы ACM",
    priv_s2_1_li2: "Идентификаторы сессий и временные метки",
    priv_s2_1_li3: "Метрики использования API (количество токенов, задержка, версии моделей)",
    priv_s2_1_li4: "Журналы ошибок и диагностическая телеметрия",
    priv_s2_2: "2.2 Учётные и идентификационные данные",
    priv_s2_2_p: "Если вы создаёте аккаунт ACM или корпоративную интеграцию, мы собираем:",
    priv_s2_2_li1: "Имя и адрес электронной почты",
    priv_s2_2_li2: "Название организации и должность",
    priv_s2_2_li3: "Учётные данные аутентификации (хранятся в хешированном виде)",
    priv_s2_2_li4: "Платёжная информация (обрабатывается сторонними организациями, соответствующими PCI)",
    priv_s2_3: "2.3 Системные и технические данные",
    priv_s2_3_li1: "IP-адрес и приблизительная геолокация",
    priv_s2_3_li2: "Тип браузера, ОС и идентификаторы устройств",
    priv_s2_3_li3: "URL-адреса рефералов и навигационные паттерны",
    priv_usage: "3. Использование ваших данных",
    priv_usage_p: "ACM использует собранные данные для предоставления и улучшения сервисов, персонализированного опыта, исследований и обеспечения безопасности. Мы не продаём вашу информацию третьим лицам.",
    priv_s3_li1: "Предоставление и улучшение наших когнитивных интеллектуальных сервисов",
    priv_s3_li2: "Обучение и донастройка моделей ACM (только с явным согласием)",
    priv_s3_li3: "Обнаружение, расследование и предотвращение угроз безопасности",
    priv_s3_li4: "Мониторинг соответствия и безопасности развёрнутых агентов",
    priv_s3_li5: "Информирование об обновлениях сервисов, уведомлениях о безопасности и публикациях",
    priv_s3_li6: "Соблюдение применимых законов и нормативных актов",
    priv_s4: "4. Хранение данных",
    priv_s4_p: "Журналы взаимодействий хранятся <strong>90 дней</strong> для операционных целей, затем удаляются безвозвратно, если вы не дали явного согласия на продление хранения для улучшения моделей. Данные аккаунта хранятся в течение существования аккаунта и 30 дней после удаления. Анонимизированные агрегированные метрики могут храниться неограниченно для исследовательских целей.",
    priv_s5: "5. Передача данных",
    priv_s5_p: "ACM не продаёт ваши персональные данные. Мы можем передавать данные:",
    priv_s5_li1: "<strong>Поставщикам услуг:</strong> инфраструктурным, безопасностным и аналитическим поставщикам при строгих соглашениях об обработке данных",
    priv_s5_li2: "<strong>Исследовательским партнёрам:</strong> только анонимизированные агрегированные наборы данных — никогда сырые персональные данные",
    priv_s5_li3: "<strong>Правоохранительным органам:</strong> только при требовании действующего юридического процесса",
    priv_rights: "6. Ваши права",
    priv_rights_p: "В зависимости от вашей юрисдикции, вы можете иметь право на доступ, исправление или удаление ваших данных. Свяжитесь с нами, чтобы реализовать эти права.",
    priv_s6_li1: "Получить копию данных, которые мы храним о вас",
    priv_s6_li2: "Запросить исправление неточных данных",
    priv_s6_li3: "Запросить удаление ваших персональных данных",
    priv_s6_li4: "Отказаться от использования ваших данных для обучения моделей",
    priv_s6_li5: "Перенести ваши данные в другой сервис",
    priv_s6_p2: "Для реализации этих прав свяжитесь: <a href='mailto:contactus@openingo.org'>contactus#openingo.org</a>",
    priv_contact: "7. Контакты",
    priv_contact_p: "По вопросам конфиденциальности обращайтесь: <a href='mailto:contactus@openingo.org'>contactus#openingo.org</a>",

    /* ── TERMS PAGE (RU) ── */
    terms_intro: "Используя сервисы ACME Cognitive Mind, вы соглашаетесь с настоящими условиями обслуживания. Условия регулируют ваш доступ к и использование нашей когнитивной инфраструктуры, ИИ-агентов и исследовательских материалов.",
    terms_accept: "1. Принятие условий",
    terms_accept_p: "Доступ к любому сервису, платформе, API или развёртыванию агентов ACME Cognitive Mind («ACM») означает согласие с настоящими условиями обслуживания. Если вы используете ACM от лица организации, вы подтверждаете, что имеете полномочия обязать эту organisation настоящими условиями.",
    terms_s2: "2. Описание сервисов",
    terms_s2_p: "ACM предоставляет когнитивную интеллектуальную инфраструктуру, включая, но не ограничиваясь:",
    terms_s2_li1: "Развёртывание и оркестрацию автономных агентов",
    terms_s2_li2: "API причинного вывода и синтеза знаний",
    terms_s2_li3: "Фреймворки координации мультиагентов",
    terms_s2_li4: "Системы мониторинга выравнивания и безопасности",
    terms_s2_li5: "Исследовательские публикации и техническая документация",
    terms_user: "3. Допустимое использование",
    terms_user_p: "Вы соглашаетесь не использовать сервисы ACM для:",
    terms_s3_li1: "Создания, распространения или содействия вредоносному, незаконному или обманчивому контенту",
    terms_s3_li2: "Обхода или попыток обхода систем выравнивания и безопасности ACM",
    terms_s3_li3: "Обратного инжиниринга, декомпиляции или извлечения проприетарных весов моделей ACM",
    terms_s3_li4: "Использования агентов ACM для автономных действий на критической инфраструктуре без надлежащей авторизации",
    terms_s3_li5: "Нарушения любых применимых местных, национальных или международных законов или нормативных актов",
    terms_s4: "4. Использование API и ограничения частоты",
    terms_s4_p: "Доступ к API ACM подчиняется ограничениям частоты, указанным в вашем соглашении об уровне обслуживания. Попытки обхода ограничений частоты, злоупотребление системами аутентификации или превышение выделенных вычислительных квот могут привести к немедленной приостановке сервиса. ACM оставляет за собой право изменять ограничения частоты с уведомлением за 7 дней.",
    terms_s5: "5. Интеллектуальная собственность",
    terms_s5_p: "Все модели, архитектуры, системные проекты и исследовательские результаты ACM являются проприетарной интеллектуальной собственностью ACME Cognitive Mind, если иное явно не лицензировано. Контент, созданный через API ACM, может использоваться вами в соответствии с условиями лицензии на генерацию вашего сервисного соглашения. Вы сохраняете право собственности на входные данные, отправленные в системы ACM.",
    terms_liability: "6. Отказ от ответственности и ограничение ответственности",
    terms_liability_p: "Сервисы ACM предоставляются «как есть». Хотя мы поддерживаем SLA доступности 99,97% для корпоративных клиентов, ACM не даёт гарантий относительно непрерывной доступности сервиса. В максимально возможной степени, предусмотренной законом, ответственность ACM по любым претензиям, возникшим из использования наших сервисов, ограничена суммами, уплаченными за предшествующие 3 месяца.",
    terms_changes: "7. Изменения",
    terms_changes_p: "ACM оставляет за собой право изменять условия в любое время. Существенные изменения будут сообщены по электронной почте или путём заметного уведомления в сервисе как минимум за 14 дней до вступления в силу. Продолжение использования сервисов ACM после даты вступления в силу означает принятие обновлённых условий.",
    terms_contact: "8. Контакты",
    terms_contact_p: "По вопросам условий обслуживания: <a href='mailto:contactus@openingo.org'>contactus#openingo.org</a>",

    /* ── SECURITY PAGE (RU) ── */
    sec_commit: "Наша философия безопасности",
    sec_commit_p: "Безопасность в ACM — это не запоздалая мысль, она встроена на каждом уровне нашего когнитивного стека. От нейронного субстрата до интерфейсного слоя каждый компонент спроектирован с архитектурой нулевого доверия и непрерывным мониторингом угроз.",
    sec_commit_p2: "Мы применяем глубинную защиту во всех системах с особым вниманием к уникальной поверхности угроз, создаваемой автономными ИИ-агентами в производственной среде.",
    sec_infra: "Инфраструктура",
    sec_api: "API-слой",
    sec_align: "Страж выравнивания",
    sec_sandbox: "Песочница агентов",
    sec_infra_sec: "Безопасность инфраструктуры",
    sec_infra_li1: "<strong>Сетевая архитектура нулевого доверия</strong> — нет неявного доверия между компонентами",
    sec_infra_li2: "<strong>Сквозное шифрование</strong> — все передаваемые данные используют TLS 1.3+; все хранимые данные зашифрованы AES-256",
    sec_infra_li3: "<strong>Аппаратные модули безопасности (HSM)</strong> — для управления криптографическими ключами",
    sec_infra_li4: "<strong>Изолированные песочницы агентов</strong> — каждый развёрнутый агент работает в отдельной вычислительной среде",
    sec_infra_li5: "<strong>Непрерывное обнаружение угроз</strong> — обнаружение аномалий в реальном времени по всей системной телеметрии",
    sec_ai_sec: "Безопасность ИИ",
    sec_ai_sec_p: "Эксплуатация автономных ИИ-агентов создаёт уникальные соображения безопасности. Подход ACM включает:",
    sec_ai_li1: "<strong>Защита от инъекций промптов</strong> — многоуровневая фильтрация для предотвращения перехвата поведения агента через враждебные входы",
    sec_ai_li2: "<strong>Контроль границ действий</strong> — агенты работают в явно определённых пространствах действий без неявного расширения возможностей",
    sec_ai_li3: "<strong>Мониторинг выравнивания в реальном времени</strong> — каждое действие агента оценивается по критериям выравнивания перед выполнением",
    sec_ai_li4: "<strong>Аудиторский след</strong> — неизменяемые журналы только для добавления всех решений и действий агентов",
    sec_ai_li5: "<strong>Протокол экстренной остановки</strong> — любой агент может быть остановлен в течение 50 мс при обнаружении аномального поведения",
    sec_reporting: "Раскрытие уязвимостей",
    sec_reporting_p: "ACM управляет программой ответственного раскрытия. Если вы обнаружите уязвимость безопасности в любой системе ACM, мы просим вас:",
    sec_disc_li1: "Незамедлительно сообщить на <a href='mailto:contactus@openingo.org'>contactus#openingo.org</a> с темой <code>[SECURITY]</code>",
    sec_disc_li2: "Предоставить достаточно деталей для воспроизведения проблемы",
    sec_disc_li3: "Дать ACM разумное время для расследования и устранения перед публичным раскрытием",
    sec_disc_li4: "Избегать доступа, изменения или удаления данных за пределами необходимого для демонстрации уязвимости",
    sec_process_p1: "Мы обязуемся подтвердить действительные отчёты в течение <strong>48 часов</strong> и предоставить план устранения в течение <strong>7 рабочих дней</strong>.",
    sec_compliance: "Соответствие",
    sec_compliance_p: "ACM поддерживает соответствие следующим фреймворкам и нормативным актам:",
    sec_inquiry: "Контакты",
    sec_inquiry_p: "Вопросы безопасности: <a href='mailto:contactus@openingo.org'>contactus#openingo.org</a>",
    sec_inquiry_p2: "Тема письма: <code>[SECURITY]</code>",

    /* ── RESEARCH PAPERS (RU) ── */
    paper_authors: "Авторы:",
    paper_contact: "Контакт: ",
    paper_abstract: "Аннотация",
    paper_intro: "1. Введение",
    paper_arch: "2. Архитектура",
    paper_results: "3. Результаты",
    paper_conclusion: "4. Заключение",

    /* Paper 1 */
    paper1_title: "Каузальные модели мира для автономного принятия решений в условиях неопределённости",
    paper1_abstract: "Представляем ACM-CausalNet — когнитивный фреймворк, позволяющий агентам рассуждать о контрфактах и долгосрочных последствиях без дополнительных обучающих данных. Интегрируя обученный каузальный граф с дифференцируемым симулятором модели мира, ACM-CausalNet демонстрирует надёжное принятие решений в условиях сдвига распределения, сохраняя выравнивание с заданными ценностными ограничениями. Улучшили успешность задач вне распределения на 34% по сравнению с предыдущими авторегрессионными подходами и продемонстрировали zero-shot перенос на 12 новых доменов.",
    paper1_authors: "Команда исследований ACM",

    /* Paper 2 */
    paper2_title: "Конституциональное выравнивание во время вывода: новая парадигма",
    paper2_abstract: "Представляем новый подход к безопасности ИИ: встраивание конституционных принципов прямо в пайплайн вывода автономных агентов. Реализуя функцию оценки выравнивания ценностей в реальном времени на каждом шаге генерации токенов, ACM-ALIGN достигает 99,97% конституционной совместимости без постфильтрации или человеческого надзора. Метод масштабируется линейно с размером модели и вносит минимальную задержку (<12 мс на запрос).",
    paper2_authors: "Команда выравнивания ACM",

    /* Paper 3 */
    paper3_title: "Эмерджентное сотрудничество в крупномасштабных роях агентов",
    paper3_abstract: "Анализируя спонтанное координационное поведение в развёртывании 847 агентов ACM, мы выявили новые коммуникационные протоколы, возникшие без явного обучения. Эти протоколы обеспечивают эффективное распределение задач, разрешение конфликтов и обмен знаниями между гетерогенными агентами. Предлагаем формальную структуру для понимания возникновения сотрудничества из простых индивидуальных правил и демонстрируем применение в мультиагентной робототехнике и автономных системах.",
    paper3_authors: "Команда систем агентов ACM",
  }
};

// ── Language Engine ──────────────────────────────────────────────────────────
const ACM_LANG = {
  current: 'en',
  supported: ['en', 'zh', 'ru'],
  labels: { en: 'EN', zh: '中', ru: 'RU' },

  init() {
    // Detect saved preference or browser language
    const saved = localStorage.getItem('acm-lang');
    if (saved && this.supported.includes(saved)) {
      this.current = saved;
    } else {
      const browser = navigator.language.toLowerCase();
      if (browser.startsWith('zh')) this.current = 'zh';
      else if (browser.startsWith('ru')) this.current = 'ru';
      else this.current = 'en';
    }
    this.apply();
    this.buildSwitcher();
  },

  set(lang) {
    if (!this.supported.includes(lang)) return;
    this.current = lang;
    localStorage.setItem('acm-lang', lang);
    this.apply();
    this.updateSwitcher();
  },

  t(key) {
    return ACM_I18N[this.current]?.[key] ?? ACM_I18N.en[key] ?? key;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = this.t(key);
      if (val !== undefined) el.innerHTML = val;
    });
    // Ticker rebuild
    const track = document.querySelector('.ticker-track');
    if (track) {
      const items = this.t('ticker');
      if (Array.isArray(items)) {
        // Duplicate for seamless scroll
        const doubled = [...items, ...items];
        track.innerHTML = doubled.map((s, i) =>
          `<span>${s}</span>${i < doubled.length - 1 ? '<span class="sep">◆</span>' : ''}`
        ).join('');
      }
    }
    // Update html lang attribute
    document.documentElement.lang = this.current === 'zh' ? 'zh-CN' : this.current;
    this.updateSwitcher();
  },

  buildSwitcher() {
    // Remove existing switcher if any (prevent duplicates on re-init)
    const existing = document.getElementById('lang-switcher');
    if (existing) existing.remove();

    // Try to insert into .header-inner first (more reliable placement)
    const headerInner = document.querySelector('.header-inner');
    const nav = document.querySelector('.nav-links');

    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.id = 'lang-switcher';
    this.supported.forEach(lang => {
      const btn = document.createElement('button');
      btn.className = 'lang-btn' + (lang === this.current ? ' active' : '');
      btn.dataset.lang = lang;
      btn.textContent = this.labels[lang];
      btn.setAttribute('aria-label', 'Switch to ' + lang);
      btn.addEventListener('click', () => this.set(lang));
      switcher.appendChild(btn);
    });

    if (headerInner && nav) {
      // Insert right after nav-links (before menu-toggle)
      nav.insertAdjacentElement('afterend', switcher);
    } else if (document.body) {
      // Fallback: append to body
      switcher.style.position = 'fixed';
      switcher.style.top = '70px';
      switcher.style.right = '20px';
      switcher.style.zIndex = '9999';
      document.body.appendChild(switcher);
    }
  },

  updateSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
  }
};

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => ACM_LANG.init());
} else {
  ACM_LANG.init();
}
