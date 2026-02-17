/**
 * ============================================================
 * FICHIER DE CONFIGURATION — PORTFOLIO INGÉNIEUR
 * Imad LAZREG — Ingénieur Réseaux & Télécoms / DevOps
 * ============================================================
 * Modifiez UNIQUEMENT ce fichier pour personnaliser le site.
 * Ne touchez pas à index.html.
 * ============================================================
 */

const PORTFOLIO_CONFIG = {

  /* =========================================================
   * 1. IDENTITÉ
   * ========================================================= */
  identity: {
    prenom:       "Imad",
    nom:          "Lazreg",
    initiales:    "I.LAZREG",
    titre:        "Ingénieur Réseaux & Télécoms",
    tagline:      "Cœur Réseau 4G/5G · DevOps · Automatisation · CI/CD",
    localisation: "Massy (91) — Disponible sur toute la France",
    disponible:   true,
    cv_pdf:       "cv_lazreg_imad.pdf",
  },

  /* =========================================================
   * 2. PHRASE D'ACCROCHE (hero)
   * ========================================================= */
  accroche: `Ingénieur réseaux et télécommunications diplômé de l'<strong>Université Paris-Saclay</strong>, 
spécialisé en cœur de réseau <strong>4G/5G</strong>, DevOps et automatisation. 
Deux années d'expérience chez <strong>SFR</strong> dans l'intégration, la validation 
et l'industrialisation de solutions réseaux critiques.`,

  /* =========================================================
   * 3. STATISTIQUES (hero)
   * ========================================================= */
  stats: [
    { valeur: "2+",   label: "Années chez SFR"        },
    { valeur: "5G",   label: "Core Network & CI/CD"   },
    { valeur: "400+", label: "Tests CCNA pratiqués"   },
    { valeur: "2025", label: "Master Paris-Saclay"    },
  ],

  /* =========================================================
   * 4. STACK TECHNIQUE (badges hero)
   * ========================================================= */
  stack: [
    "Python", "Jenkins", "GitLab CI", "Docker",
    "Kubernetes", "Ansible", "Grafana", "Elasticsearch",
    "5G Core", "Diameter", "HTTP/2", "GTP",
    "SIP", "Linux", "Wireshark", "Cisco",
  ],

  /* =========================================================
   * 5. CONTACT
   * ========================================================= */
  contact: {
    email:    "imad.lazreg@outlook.com",
    tel:      "06 24 89 64 92",
    linkedin: "linkedin.com/in/imad-lazreg",
    github:   "github.com/imad-lazreg",
  },

  /* =========================================================
   * 6. EXPÉRIENCES PROFESSIONNELLES
   * ========================================================= */
  experiences: [
    {
      periode:  "2024 — 2025",
      poste:    "Apprenti Ingénieur Télécom / DevOps",
      structure:"TechnoLab SFR — Ingénierie cœur voix, Data & PFS, Vélizy",
      desc:     "Conception et déploiement d'un pipeline automatisé de tests réseaux (LoadCore 5G/4G + Jenkins + GitLab). Automatisation des tests de non-régression du SDM (HLR, HSS, UDM, AUSF). Validation de paliers logiciels sur équipements réseau avant production. Supervision Grafana & Elasticsearch.",
    },
    {
      periode:  "2023 — 2024",
      poste:    "Apprenti Ingénieur Pilotage Support Radio",
      structure:"SFR Altice Campus — Direction Supervision & Maintenance, Paris",
      desc:     "Automatisation des processus opérationnels via Python et VBA. Supervision des incidents critiques sur les sites Premium JO Paris 2024. Wiki interne, suivi déverrouillage Nokia/Huawei, supervision 2G/3G/4G/5G via OMC Nokia.",
    },
    {
      periode:  "2019 — 2023",
      poste:    "Activités professionnelles parallèles aux études",
      structure:"Grande distribution · Hôtellerie · Santé",
      desc:     "Développement d'aptitudes clés : rigueur opérationnelle, communication, gestion de flux et adaptabilité en milieu exigeant.",
    },
  ],

  /* =========================================================
   * 7. FORMATION
   * ========================================================= */
  formations: [
    {
      periode:  "2025",
      diplome:  "Master — Réseaux & Télécommunications (alternance)",
      structure:"Université Paris-Saclay",
      desc:     "Spécialisation cœur de réseau 4G/5G, protocoles avancés (IMS, SDN/NFV), DevOps appliqué aux télécoms.",
    },
    {
      periode:  "2023",
      diplome:  "Licence — Physique, Électronique, Énergie électrique, Automatique",
      structure:"Université Paris-Saclay",
      desc:     "Fondamentaux en électronique, traitement du signal, automatique et systèmes embarqués.",
    },
  ],

  /* =========================================================
   * 8. COMPÉTENCES TECHNIQUES (barres de progression)
   * ========================================================= */
  competences: [
    { nom: "Python / Shell / Scripting",          pct: 90 },
    { nom: "CI/CD — Jenkins / GitLab",            pct: 88 },
    { nom: "Docker / Kubernetes",                 pct: 82 },
    { nom: "Protocoles 5G Core (Diameter / GTP)", pct: 85 },
    { nom: "Grafana / Elasticsearch",             pct: 80 },
    { nom: "Réseaux IP (BGP / OSPF / VLAN)",      pct: 83 },
    { nom: "Ansible / Automatisation",            pct: 75 },
    { nom: "Linux Administration",                pct: 85 },
  ],

  /* =========================================================
   * 9. SOFT SKILLS
   * ========================================================= */
  softSkills: [
    "Esprit critique", "Adaptabilité", "Travail en équipe",
    "Communication claire", "Rigueur opérationnelle", "Documentation",
  ],

  /* =========================================================
   * 10. PROJETS RÉALISÉS
   * filtres : devops · infra · automation · cloud
   * ========================================================= */
  projets: [
    {
      icone:       "🚀",
      titre:       "Pipeline CI/CD — Tests Réseaux 5G/4G (SFR)",
      probleme:    "Cycles de validation manuels, livraisons lentes et peu fiables sur cœur réseau SFR",
      solution:    "Pipeline Jenkins + GitLab intégrant LoadCore 5G/4G. Tests de non-régression SDM (HLR, HSS, UDM, AUSF). Livraisons accélérées, fiabilité garantie en production.",
      tags:        ["Jenkins", "GitLab", "LoadCore", "5G Core", "Python", "Docker"],
      filtres:     "devops automation",
      lien_github: "#",
      lien_demo:   null,
    },
    {
      icone:       "🏅",
      titre:       "Supervision Incidents — JO Paris 2024",
      probleme:    "Incidents critiques sur sites Premium JO 2024 sans détection proactive",
      solution:    "Coordination NOC & terrain, monitoring Nokia OMC, automatisation des rapports Python/VBA, suivi déverrouillage cellules Nokia/Huawei en production.",
      tags:        ["Nokia OMC", "Python", "VBA", "Supervision", "4G/5G"],
      filtres:     "infra automation",
      lien_github: "#",
      lien_demo:   null,
    },
    {
      icone:       "🌐",
      titre:       "Infrastructure Réseau d'Entreprise Simulée",
      probleme:    "Aucune infra de test multi-sites pour valider des architectures complexes",
      solution:    "Déploiement complet : VLAN, inter-VLAN routing, ACL, VPN IPsec site-to-site, redondance HSRP/VRRP, supervision connectivité. Packet Tracer + VirtualBox.",
      tags:        ["VLAN", "IPsec VPN", "HSRP/VRRP", "ACL", "Cisco", "BGP"],
      filtres:     "infra cloud",
      lien_github: "#",
      lien_demo:   null,
    },
    {
      icone:       "⚡",
      titre:       "Automatisation Reporting Opérationnel Radio",
      probleme:    "Reporting manuel chronophage, indicateurs radio de mauvaise qualité",
      solution:    "Scripts Python et macros VBA pour extraction, traitement et mise en forme automatique des KPIs radio. Réduction des délais de reporting, fiabilité des indicateurs améliorée.",
      tags:        ["Python", "VBA", "Excel", "Shell", "Reporting"],
      filtres:     "automation devops",
      lien_github: "#",
      lien_demo:   null,
    },
    {
      icone:       "🔬",
      titre:       "Validation Logicielle Équipements Réseau",
      probleme:    "Paliers logiciels non testés avant déploiement production — risque d'incident majeur",
      solution:    "Plans de tests et rapports VABF. Validation systématique sur switchs, firewalls et routeurs. Pipeline de test documentée et reproductible.",
      tags:        ["Tests VABF", "Firewalls", "Routeurs", "Switchs", "Documentation"],
      filtres:     "infra devops",
      lien_github: "#",
      lien_demo:   null,
    },
    {
      icone:       "📊",
      titre:       "Observabilité — Grafana / Elasticsearch",
      probleme:    "Aucune visibilité unifiée sur les résultats de tests réseaux automatisés",
      solution:    "Dashboards Grafana alimentés par Elasticsearch pour analyse des résultats CI/CD. Détection d'anomalies en temps réel sur cœur réseau 4G/5G.",
      tags:        ["Grafana", "Elasticsearch", "Docker", "5G", "Dashboards"],
      filtres:     "devops automation",
      lien_github: "#",
      lien_demo:   null,
    },
  ],

  /* =========================================================
   * 11. PROJETS EN COURS
   * Statuts : "En développement" | "R&D" | "Production"
   * ========================================================= */
  projetsEnCours: [
    {
      icone:       "📋",
      titre:       "Certification Cisco CCNA 200-301",
      statut:      "En développement",
      desc:        "Préparation intensive : configuration, routage, commutation, sécurité réseau. +400 questions pratiques. Formation Udemy complète.",
      progression: 85,
    },
    {
      icone:       "☸️",
      titre:       "Kubernetes & GitOps (ArgoCD)",
      statut:      "R&D",
      desc:        "Clusters K8s, exploration ArgoCD pour GitOps, orchestration de workloads télécom containerisés (CNFs).",
      progression: 40,
    },
    {
      icone:       "🤖",
      titre:       "Automatisation Ansible — Équipements Réseau",
      statut:      "En développement",
      desc:        "Playbooks Ansible pour configuration automatisée d'équipements réseau. Templates Jinja2, NAPALM, YAML.",
      progression: 50,
    },
    {
      icone:       "📡",
      titre:       "Exploration SDN / OpenStack",
      statut:      "R&D",
      desc:        "Virtualisation réseau SDN/NFV, déploiement OpenStack en lab, compréhension des VNFs et architectures cloud télécom.",
      progression: 25,
    },
  ],

  /* =========================================================
   * 12. GALERIE
   * image : null = placeholder affiché
   * image : "images/mon-fichier.png" = vraie image
   * ========================================================= */
  galerie: [
    { icone: "🚀", titre: "Pipeline CI/CD SFR",           sous: "Jenkins · GitLab · LoadCore 5G",  legende: "Pipeline de tests réseaux automatisée",   image: null },
    { icone: "🏅", titre: "Supervision JO Paris 2024",    sous: "Sites Premium · NOC · Nokia OMC", legende: "Supervision incidents critiques JO 2024", image: null },
    { icone: "🌐", titre: "Réseau Multi-Sites Simulé",    sous: "VLAN · IPsec · HSRP · Cisco",    legende: "Infrastructure entreprise simulée",        image: null },
    { icone: "📊", titre: "Dashboards Grafana",           sous: "Elasticsearch · Métriques 5G",   legende: "Observabilité réseau temps réel",          image: null },
    { icone: "☁️", titre: "Architecture Cœur 5G",        sous: "UDM · AUSF · HSS · AMF",         legende: "Topologie cœur réseau 5G",                image: null },
    { icone: "🔬", titre: "Validation VABF",              sous: "Switchs · Routeurs · Firewalls", legende: "Plans de tests et rapports VABF",          image: null },
  ],

  /* =========================================================
   * 13. CERTIFICATIONS
   * ========================================================= */
  certifications: [
    {
      icone:       "🌐",
      titre:       "Cisco CCNA 200-301",
      organisme:   "Cisco / Udemy",
      annee:       "2025",
      competences: ["Routage", "Commutation", "VPN", "Sécurité réseau"],
      lien:        "#",
    },
    {
      icone:       "📝",
      titre:       "CCNA 200-301 — Exam Practice Tests",
      organisme:   "Udemy — 400+ questions",
      annee:       "2025",
      competences: ["OSPF", "BGP", "ACL", "STP", "NAT"],
      lien:        "#",
    },
    {
      icone:       "🎓",
      titre:       "Master Réseaux & Télécommunications",
      organisme:   "Université Paris-Saclay",
      annee:       "2025",
      competences: ["5G Core", "IMS", "SDN/NFV", "Protocoles avancés"],
      lien:        "#",
    },
    {
      icone:       "⚡",
      titre:       "Licence Physique — Électronique & Automatique",
      organisme:   "Université Paris-Saclay",
      annee:       "2023",
      competences: ["Électronique", "Automatique", "Signal"],
      lien:        "#",
    },
  ],

  /* =========================================================
   * 14. PRINCIPES D'INGÉNIERIE
   * ========================================================= */
  principes: [
    {
      icone: "⚡",
      nom:   "Automation First",
      desc:  "Chaque tâche répétitive est une opportunité d'automatisation. Python, Shell, Ansible — toujours.",
    },
    {
      icone: "🔍",
      nom:   "Test Before Deploy",
      desc:  "Aucun équipement ni palier logiciel ne part en production sans validation systématique.",
    },
    {
      icone: "👁️",
      nom:   "Observability",
      desc:  "Grafana, Elasticsearch, logs structurés. Un réseau invisible est un réseau incontrôlable.",
    },
    {
      icone: "📋",
      nom:   "Documentation Rigoureuse",
      desc:  "Plans de tests, rapports VABF, wikis internes. La connaissance doit être partagée et pérenne.",
    },
    {
      icone: "🔄",
      nom:   "Amélioration Continue",
      desc:  "Post-mortem, retours d'expérience, benchmarks. Chaque incident est une leçon à capitaliser.",
    },
  ],

  /* =========================================================
   * 15. DESIGN — COULEURS & TYPOGRAPHIE
   * ========================================================= */
  design: {
    couleurs: {
      bg:      "#080c14",
      bg2:     "#0d1420",
      bg3:     "#111827",
      border:  "#1e2d45",
      accent:  "#1d6fdb",
      accent2: "#38bdf8",
      text:    "#d1ddf0",
      sub:     "#5a738a",
      dim:     "#2a3e55",
      green:   "#22c55e",
      orange:  "#f59e0b",
      red:     "#ef4444",
    },
    fonts: {
      mono:    "'JetBrains Mono', monospace",
      heading: "'Syne', sans-serif",
    },
  },

};