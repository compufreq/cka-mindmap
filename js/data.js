// CKA Mind Map Data - Latest Curriculum (Feb 2025 Update, Kubernetes v1.34)
// Three levels: Main -> Domain -> Sub-topic (with leaf content)

// Study Guide chapter mappings - links sub-topic pages to relevant guide chapters
const GUIDE_LINKS = {
  'rbac': [
    { title: "Chapter 15 — RBAC: Role-Based Access Control", url: "pages/guide.html?id=kubernetes#heading-192-chapter-15-rbac-role-based-access-control", guide: "Kubernetes Guide" },
    { title: "Chapter 16 — Security: Authentication, Pod Security & TLS", url: "pages/guide.html?id=kubernetes#heading-200-chapter-16-kubernetes-security-authentication-", guide: "Kubernetes Guide" }
  ],
  'kubeadm': [
    { title: "Chapter 2 — Cluster Installation with kubeadm", url: "pages/guide.html?id=kubernetes#heading-43-chapter-2-cluster-installation-from-scratch-with", guide: "Kubernetes Guide" }
  ],
  'ha-control-plane': [
    { title: "Chapter 3 — Highly-Available Control Plane Architecture", url: "pages/guide.html?id=kubernetes#heading-56-chapter-3-highly-available-control-plane-archite", guide: "Kubernetes Guide" },
    { title: "Chapter 1 — Kubernetes Architecture Overview", url: "pages/guide.html?id=kubernetes#heading-10-chapter-1-kubernetes-architecture-a-complete-ov", guide: "Kubernetes Guide" }
  ],
  'extension-interfaces': [
    { title: "Chapter 4 — Extension Interfaces: CNI, CSI, and CRI", url: "pages/guide.html?id=kubernetes#heading-69-chapter-4-extension-interfaces-cni-csi-and-cr", guide: "Kubernetes Guide" }
  ],
  'crds-operators': [
    { title: "Chapter 10 — Custom Resource Definitions and Operators", url: "pages/guide.html?id=kubernetes#heading-144-chapter-10-custom-resource-definitions-and-opera", guide: "Kubernetes Guide" }
  ],
  'helm-kustomize': [
    { title: "Chapter 29 — kubectl Kustomize: Configuration at Scale", url: "pages/guide.html?id=kubernetes#heading-325-chapter-29-kubectl-kustomize-configuration-mana", guide: "Kubernetes Guide" }
  ],
  'cluster-lifecycle': [
    { title: "Chapter 30 — CKA 2026: Complete Study & Command Reference", url: "pages/guide.html?id=kubernetes#heading-357-chapter-30-cka-certification-2026-complete-stud", guide: "Kubernetes Guide" },
    { title: "Chapter 2 — Cluster Installation with kubeadm", url: "pages/guide.html?id=kubernetes#heading-43-chapter-2-cluster-installation-from-scratch-with", guide: "Kubernetes Guide" }
  ],
  'deployments': [
    { title: "Chapter 5 — Understanding Pods and Containers", url: "pages/guide.html?id=kubernetes#heading-77-chapter-5-understanding-pods-and-containers", guide: "Kubernetes Guide" },
    { title: "Chapter 23 — Removing and Modifying Containers in Pods", url: "pages/guide.html?id=kubernetes#heading-265-chapter-23-removing-and-modifying-containers-in-", guide: "Kubernetes Guide" }
  ],
  'configmaps-secrets': [
    { title: "Chapter 6 — ConfigMaps and Secrets: Complete Reference", url: "pages/guide.html?id=kubernetes#heading-96-chapter-6-configmaps-and-secrets-complete-refer", guide: "Kubernetes Guide" }
  ],
  'autoscaling': [
    { title: "Chapter 8 — Workload Autoscaling with HPA and VPA", url: "pages/guide.html?id=kubernetes#heading-123-chapter-8-workload-autoscaling-with-hpa-and-vpa", guide: "Kubernetes Guide" }
  ],
  'self-healing': [
    { title: "Chapter 9 — Self-Healing: Probes and PodDisruptionBudgets", url: "pages/guide.html?id=kubernetes#heading-136-chapter-9-self-healing-primitives-probes-and-po", guide: "Kubernetes Guide" }
  ],
  'pod-admission-scheduling': [
    { title: "Chapter 1 — Kubernetes Architecture (Scheduler)", url: "pages/guide.html?id=kubernetes#heading-10-chapter-1-kubernetes-architecture-a-complete-ov", guide: "Kubernetes Guide" },
    { title: "Chapter 30 — CKA Complete Reference (Scheduling)", url: "pages/guide.html?id=kubernetes#heading-357-chapter-30-cka-certification-2026-complete-stud", guide: "Kubernetes Guide" }
  ],
  'pod-connectivity': [
    { title: "Chapter 1 — Kubernetes Architecture & Network Model", url: "pages/guide.html?id=kubernetes#heading-10-chapter-1-kubernetes-architecture-a-complete-ov", guide: "Kubernetes Guide" },
    { title: "ip — Network Interface, Routing & Tunnel Management", url: "pages/guide.html?id=linux-networking#heading-2-1-ip-network-interface-routing-tunnel-manage", guide: "Linux Networking Guide" }
  ],
  'service-types': [
    { title: "Chapter 12 — Kubernetes Services: ClusterIP, NodePort & More", url: "pages/guide.html?id=kubernetes#heading-158-chapter-12-kubernetes-services-clusterip-nodep", guide: "Kubernetes Guide" },
    { title: "ss — Socket Statistics", url: "pages/guide.html?id=linux-networking#heading-47-6-ss-socket-statistics", guide: "Linux Networking Guide" }
  ],
  'gateway-api': [
    { title: "Chapter 11 — Gateway API: Modern Ingress Management", url: "pages/guide.html?id=kubernetes#heading-148-chapter-11-gateway-api-modern-ingress-traffic-m", guide: "Kubernetes Guide" }
  ],
  'ingress': [
    { title: "Chapter 13 — Ingress: HTTP Routing and TLS Termination", url: "pages/guide.html?id=kubernetes#heading-169-chapter-13-ingress-http-routing-and-tls-termina", guide: "Kubernetes Guide" },
    { title: "curl — Data Transfer Tool", url: "pages/guide.html?id=linux-networking#heading-57-8-curl-data-transfer-tool", guide: "Linux Networking Guide" }
  ],
  'network-policies': [
    { title: "Chapter 14 — NetworkPolicy: Traffic Control", url: "pages/guide.html?id=kubernetes#heading-179-chapter-14-networkpolicy-traffic-control-and-mi", guide: "Kubernetes Guide" },
    { title: "iptables — Firewall (Netfilter)", url: "pages/guide.html?id=linux-networking#heading-121-15-iptables-firewall-netfilter", guide: "Linux Networking Guide" }
  ],
  'coredns': [
    { title: "Chapter 26 — CoreDNS: Testing, Diagnosing & Verifying DNS", url: "pages/guide.html?id=kubernetes#heading-295-chapter-26-coredns-testing-diagnosing-and-ver", guide: "Kubernetes Guide" },
    { title: "dig — DNS Lookup Utility", url: "pages/guide.html?id=linux-networking#heading-80-10-dig-dns-lookup-utility", guide: "Linux Networking Guide" },
    { title: "nslookup — DNS Query Tool", url: "pages/guide.html?id=linux-networking#heading-86-11-nslookup-dns-query-tool", guide: "Linux Networking Guide" }
  ],
  'storage-classes': [
    { title: "Chapter 7 — StorageClasses and Dynamic Volume Provisioning", url: "pages/guide.html?id=kubernetes#heading-112-chapter-7-storageclasses-and-dynamic-volume-prov", guide: "Kubernetes Guide" }
  ],
  'volume-types': [
    { title: "Chapter 7 — StorageClasses and Dynamic Volume Provisioning", url: "pages/guide.html?id=kubernetes#heading-112-chapter-7-storageclasses-and-dynamic-volume-prov", guide: "Kubernetes Guide" }
  ],
  'persistent-volumes': [
    { title: "Chapter 7 — StorageClasses and Dynamic Volume Provisioning", url: "pages/guide.html?id=kubernetes#heading-112-chapter-7-storageclasses-and-dynamic-volume-prov", guide: "Kubernetes Guide" }
  ],
  'cluster-node-troubleshooting': [
    { title: "Chapter 1 — Kubernetes Architecture (Troubleshooting)", url: "pages/guide.html?id=kubernetes#heading-10-chapter-1-kubernetes-architecture-a-complete-ov", guide: "Kubernetes Guide" },
    { title: "ping — ICMP Connectivity Testing", url: "pages/guide.html?id=linux-networking#heading-31-2-ping-icmp-connectivity-testing", guide: "Linux Networking Guide" },
    { title: "ss — Socket Statistics", url: "pages/guide.html?id=linux-networking#heading-47-6-ss-socket-statistics", guide: "Linux Networking Guide" }
  ],
  'cluster-components': [
    { title: "Chapter 1 — Kubernetes Architecture Overview", url: "pages/guide.html?id=kubernetes#heading-10-chapter-1-kubernetes-architecture-a-complete-ov", guide: "Kubernetes Guide" },
    { title: "Chapter 30 — CKA Complete Study & Command Reference", url: "pages/guide.html?id=kubernetes#heading-357-chapter-30-cka-certification-2026-complete-stud", guide: "Kubernetes Guide" }
  ],
  'monitoring': [
    { title: "Chapter 22 — Resource Monitoring Inside Containers", url: "pages/guide.html?id=kubernetes#heading-257-chapter-22-resource-monitoring-inside-containers", guide: "Kubernetes Guide" }
  ],
  'container-logs': [
    { title: "Chapter 18 — Viewing and Streaming Container Logs", url: "pages/guide.html?id=kubernetes#heading-218-chapter-18-viewing-and-streaming-container-logs", guide: "Kubernetes Guide" },
    { title: "Chapter 17 — Executing Commands Inside Containers", url: "pages/guide.html?id=kubernetes#heading-208-chapter-17-executing-commands-inside-containers", guide: "Kubernetes Guide" }
  ],
  'network-troubleshooting': [
    { title: "Chapter 25 — Network Testing from Ephemeral Containers", url: "pages/guide.html?id=kubernetes#heading-288-chapter-25-network-testing-from-ephemeral-contai", guide: "Kubernetes Guide" },
    { title: "Chapter 26 — CoreDNS: Testing & Diagnosing DNS", url: "pages/guide.html?id=kubernetes#heading-295-chapter-26-coredns-testing-diagnosing-and-ver", guide: "Kubernetes Guide" },
    { title: "traceroute — Trace the Route to a Host", url: "pages/guide.html?id=linux-networking#heading-35-3-traceroute-trace-the-route-to-a-host", guide: "Linux Networking Guide" },
    { title: "tcpdump — Packet Capture & Analysis", url: "pages/guide.html?id=linux-networking#heading-109-14-tcpdump-packet-capture-analysis", guide: "Linux Networking Guide" }
  ]
};

const DOMAIN_COLORS = {
  'cluster-architecture': '#4CAF50',
  'workloads-scheduling': '#FF9800',
  'services-networking': '#2196F3',
  'storage': '#9C27B0',
  'troubleshooting': '#F44336'
};

const MIND_MAP_DATA = {

  // ===== LEVEL 0: MAIN =====
  "main": {
    title: "CKA Certification",
    subtitle: "Certified Kubernetes Administrator | Kubernetes v1.34 | 2025-2026",
    parent: null,
    parentTitle: null,
    nodes: [
      { id: "cluster-architecture", name: "Cluster Architecture,\nInstallation &\nConfiguration", weight: "25%", color: DOMAIN_COLORS['cluster-architecture'], icon: "\u{1F3D7}" },
      { id: "workloads-scheduling", name: "Workloads &\nScheduling", weight: "15%", color: DOMAIN_COLORS['workloads-scheduling'], icon: "\u{2699}" },
      { id: "services-networking", name: "Services &\nNetworking", weight: "20%", color: DOMAIN_COLORS['services-networking'], icon: "\u{1F310}" },
      { id: "storage", name: "Storage", weight: "10%", color: DOMAIN_COLORS['storage'], icon: "\u{1F4BE}" },
      { id: "troubleshooting", name: "Troubleshooting", weight: "30%", color: DOMAIN_COLORS['troubleshooting'], icon: "\u{1F527}" }
    ]
  },

  // ===== LEVEL 1: CLUSTER ARCHITECTURE (25%) =====
  "cluster-architecture": {
    title: "Cluster Architecture, Installation & Configuration",
    subtitle: "25% of Exam Weight",
    parent: "main",
    parentTitle: "CKA",
    domainColor: DOMAIN_COLORS['cluster-architecture'],
    nodes: [
      { id: "rbac", name: "RBAC", description: "Role-Based Access Control" },
      { id: "kubeadm", name: "Kubeadm", description: "Cluster Bootstrap & Management" },
      { id: "ha-control-plane", name: "HA Control\nPlanes", description: "Highly Available Control Planes" },
      { id: "extension-interfaces", name: "Extension\nInterfaces", description: "CNI, CSI, CRI" },
      { id: "crds-operators", name: "CRDs &\nOperators", description: "Custom Resource Definitions" },
      { id: "helm-kustomize", name: "Helm &\nKustomize", description: "Package & Config Management" },
      { id: "cluster-lifecycle", name: "Cluster\nLifecycle", description: "Upgrades, Backup & Restore" }
    ]
  },

  // ===== LEVEL 1: WORKLOADS & SCHEDULING (15%) =====
  "workloads-scheduling": {
    title: "Workloads & Scheduling",
    subtitle: "15% of Exam Weight",
    parent: "main",
    parentTitle: "CKA",
    domainColor: DOMAIN_COLORS['workloads-scheduling'],
    nodes: [
      { id: "deployments", name: "Deployments", description: "Rolling Updates & Rollbacks" },
      { id: "configmaps-secrets", name: "ConfigMaps\n& Secrets", description: "Application Configuration" },
      { id: "autoscaling", name: "Workload\nAutoscaling", description: "HPA, VPA & Metrics" },
      { id: "self-healing", name: "Self-Healing\nDeployments", description: "ReplicaSets, DaemonSets, StatefulSets" },
      { id: "pod-admission-scheduling", name: "Pod Admission\n& Scheduling", description: "Affinity, Taints & Tolerations" }
    ]
  },

  // ===== LEVEL 1: SERVICES & NETWORKING (20%) =====
  "services-networking": {
    title: "Services & Networking",
    subtitle: "20% of Exam Weight",
    parent: "main",
    parentTitle: "CKA",
    domainColor: DOMAIN_COLORS['services-networking'],
    nodes: [
      { id: "pod-connectivity", name: "Pod-to-Pod\nConnectivity", description: "Pod Networking Model" },
      { id: "service-types", name: "Service\nTypes", description: "ClusterIP, NodePort, LoadBalancer" },
      { id: "gateway-api", name: "Gateway\nAPI", description: "Modern Ingress Management" },
      { id: "ingress", name: "Ingress", description: "Controllers & Resources" },
      { id: "network-policies", name: "Network\nPolicies", description: "Traffic Control & Security" },
      { id: "coredns", name: "CoreDNS", description: "DNS & Service Discovery" }
    ]
  },

  // ===== LEVEL 1: STORAGE (10%) =====
  "storage": {
    title: "Storage",
    subtitle: "10% of Exam Weight",
    parent: "main",
    parentTitle: "CKA",
    domainColor: DOMAIN_COLORS['storage'],
    nodes: [
      { id: "storage-classes", name: "StorageClasses\n& Dynamic\nProvisioning", description: "Automatic Volume Provisioning" },
      { id: "volume-types", name: "Volume Types\n& Access Modes", description: "RWO, ROX, RWX & Volume Plugins" },
      { id: "persistent-volumes", name: "Persistent\nVolumes &\nClaims", description: "PV/PVC Lifecycle & Reclaim Policies" }
    ]
  },

  // ===== LEVEL 1: TROUBLESHOOTING (30%) =====
  "troubleshooting": {
    title: "Troubleshooting",
    subtitle: "30% of Exam Weight (Highest!)",
    parent: "main",
    parentTitle: "CKA",
    domainColor: DOMAIN_COLORS['troubleshooting'],
    nodes: [
      { id: "cluster-node-troubleshooting", name: "Cluster & Node\nTroubleshooting", description: "Kubelet, Kube-proxy & Nodes" },
      { id: "cluster-components", name: "Cluster\nComponents", description: "API Server, Scheduler, etcd" },
      { id: "monitoring", name: "Monitoring &\nResource Usage", description: "Metrics Server & kubectl top" },
      { id: "container-logs", name: "Container\nOutput Streams", description: "Logs, stdout & stderr" },
      { id: "network-troubleshooting", name: "Services &\nNetwork\nTroubleshooting", description: "DNS, Service & Connectivity" }
    ]
  },

  // ===== LEVEL 2: CLUSTER ARCHITECTURE SUB-TOPICS =====

  "rbac": {
    title: "Role-Based Access Control (RBAC)",
    subtitle: "Cluster Architecture > RBAC",
    parent: "cluster-architecture",
    parentTitle: "Cluster Architecture",
    domainColor: DOMAIN_COLORS['cluster-architecture'],
    nodes: [
      {
        name: "Roles",
        description: "Namespace-scoped permission sets",
        keyPoints: [
          "Define permissions within a specific namespace",
          "Contain rules with apiGroups, resources, and verbs",
          "Verbs: get, list, watch, create, update, patch, delete",
          "Cannot grant access to cluster-scoped resources"
        ],
        commands: [
          "kubectl create role pod-reader --verb=get,list,watch --resource=pods",
          "kubectl get roles -n <namespace>",
          "kubectl describe role <role-name> -n <namespace>"
        ],
        references: [
          { title: "Using RBAC Authorization", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/" },
          { title: "Role Example", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-example" }
        ]
      },
      {
        name: "ClusterRoles",
        description: "Cluster-wide permission sets",
        keyPoints: [
          "Non-namespaced: apply across entire cluster",
          "Can grant access to cluster-scoped resources (nodes, PVs)",
          "Can grant access to non-resource endpoints (/healthz)",
          "Can be used with ClusterRoleBindings or RoleBindings"
        ],
        commands: [
          "kubectl create clusterrole node-reader --verb=get,list,watch --resource=nodes",
          "kubectl get clusterroles",
          "kubectl describe clusterrole <name>"
        ],
        references: [
          { title: "Using RBAC Authorization", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/" },
          { title: "ClusterRole Example", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#clusterrole-example" }
        ]
      },
      {
        name: "RoleBindings",
        description: "Bind Roles to subjects in a namespace",
        keyPoints: [
          "Grant permissions defined in a Role to users/groups/ServiceAccounts",
          "Scoped to a specific namespace",
          "Can reference a ClusterRole (permissions limited to RoleBinding's namespace)",
          "Subjects: User, Group, ServiceAccount"
        ],
        commands: [
          "kubectl create rolebinding pod-reader-binding --role=pod-reader --user=jane -n default",
          "kubectl get rolebindings -n <namespace>",
          "kubectl auth can-i list pods --as=jane -n default"
        ],
        references: [
          { title: "RoleBinding and ClusterRoleBinding", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding" }
        ]
      },
      {
        name: "ClusterRole\nBindings",
        description: "Bind ClusterRoles cluster-wide",
        keyPoints: [
          "Grant cluster-wide permissions to subjects",
          "Cannot reference a Role (only ClusterRole)",
          "Affects all namespaces",
          "Use carefully - grants broad access"
        ],
        commands: [
          "kubectl create clusterrolebinding admin-binding --clusterrole=cluster-admin --user=admin",
          "kubectl get clusterrolebindings",
          "kubectl delete clusterrolebinding <name>"
        ],
        references: [
          { title: "RoleBinding and ClusterRoleBinding", url: "https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding" }
        ]
      },
      {
        name: "Service\nAccounts",
        description: "Identity for processes in pods",
        keyPoints: [
          "Every namespace has a 'default' ServiceAccount",
          "Pods use ServiceAccounts to authenticate to the API server",
          "Tokens are automatically mounted at /var/run/secrets/kubernetes.io/serviceaccount",
          "Can be assigned Roles/ClusterRoles via bindings",
          "Kubernetes 1.24+: tokens are no longer auto-created as Secrets"
        ],
        commands: [
          "kubectl create serviceaccount my-sa -n default",
          "kubectl get serviceaccounts",
          "kubectl set serviceaccount deployment/my-app my-sa"
        ],
        references: [
          { title: "Service Accounts", url: "https://kubernetes.io/docs/concepts/security/service-accounts/" },
          { title: "Configure Service Accounts for Pods", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/" }
        ]
      },
      {
        name: "Auth\nVerification",
        description: "Testing and verifying access",
        keyPoints: [
          "Use 'kubectl auth can-i' to verify permissions",
          "Check as a specific user or ServiceAccount",
          "Impersonation for testing access",
          "Audit logs track API access",
          "'kubectl auth whoami' shows current identity (v1.27+)"
        ],
        commands: [
          "kubectl auth can-i create pods --as=system:serviceaccount:default:my-sa",
          "kubectl auth can-i '*' '*' --all-namespaces",
          "kubectl auth whoami"
        ],
        references: [
          { title: "Checking API Access", url: "https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access" },
          { title: "Authorization Overview", url: "https://kubernetes.io/docs/reference/access-authn-authz/authorization/" }
        ]
      }
    ]
  },

  "kubeadm": {
    title: "Kubeadm - Cluster Bootstrap",
    subtitle: "Cluster Architecture > Kubeadm",
    parent: "cluster-architecture",
    parentTitle: "Cluster Architecture",
    domainColor: DOMAIN_COLORS['cluster-architecture'],
    nodes: [
      {
        name: "kubeadm init",
        description: "Initialize a control plane node",
        keyPoints: [
          "Bootstraps the Kubernetes control plane",
          "Generates certificates and kubeconfig files",
          "Deploys kube-apiserver, kube-controller-manager, kube-scheduler as static pods",
          "Outputs a join command for worker nodes",
          "Preflight checks validate system requirements"
        ],
        commands: [
          "kubeadm init --pod-network-cidr=10.244.0.0/16",
          "kubeadm init --config kubeadm-config.yaml",
          "kubeadm init --control-plane-endpoint=<load-balancer>:6443 --upload-certs"
        ],
        references: [
          { title: "kubeadm init", url: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/" },
          { title: "Creating a Cluster with kubeadm", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/" }
        ]
      },
      {
        name: "kubeadm join",
        description: "Join nodes to the cluster",
        keyPoints: [
          "Adds worker nodes or additional control plane nodes",
          "Requires a token and CA cert hash from 'kubeadm init'",
          "For control plane: use --control-plane flag",
          "Token expires after 24 hours by default"
        ],
        commands: [
          "kubeadm join <api-server>:6443 --token <token> --discovery-token-ca-cert-hash sha256:<hash>",
          "kubeadm join --control-plane --certificate-key <key>",
          "kubeadm token create --print-join-command"
        ],
        references: [
          { title: "kubeadm join", url: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-join/" }
        ]
      },
      {
        name: "kubeadm\nupgrade",
        description: "Upgrade cluster version",
        keyPoints: [
          "Upgrade one minor version at a time",
          "Upgrade control plane first, then workers",
          "Drain nodes before upgrading kubelet",
          "Check upgrade plan before applying"
        ],
        commands: [
          "kubeadm upgrade plan",
          "kubeadm upgrade apply v1.34.0",
          "kubeadm upgrade node (on worker nodes)"
        ],
        references: [
          { title: "kubeadm upgrade", url: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-upgrade/" },
          { title: "Upgrading kubeadm clusters", url: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/" }
        ]
      },
      {
        name: "kubeadm\nconfig",
        description: "Configuration management",
        keyPoints: [
          "Use ClusterConfiguration for init settings",
          "InitConfiguration for node-specific settings",
          "KubeletConfiguration for kubelet settings",
          "Print default config for reference"
        ],
        commands: [
          "kubeadm config print init-defaults",
          "kubeadm config images list",
          "kubeadm config images pull"
        ],
        references: [
          { title: "kubeadm config", url: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-config/" }
        ]
      },
      {
        name: "kubeadm\ntokens",
        description: "Token management",
        keyPoints: [
          "Bootstrap tokens for node joining",
          "Default TTL is 24 hours",
          "Can create new tokens after init",
          "Tokens stored as secrets in kube-system namespace"
        ],
        commands: [
          "kubeadm token list",
          "kubeadm token create",
          "kubeadm token create --ttl 2h --print-join-command"
        ],
        references: [
          { title: "kubeadm token", url: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-token/" }
        ]
      },
      {
        name: "kubeadm\nreset",
        description: "Revert kubeadm actions",
        keyPoints: [
          "Cleans up files and resources created by init/join",
          "Removes etcd data directory",
          "Does NOT reset iptables rules or IPVS tables",
          "Manual cleanup may still be required"
        ],
        commands: [
          "kubeadm reset",
          "kubeadm reset --force"
        ],
        references: [
          { title: "kubeadm reset", url: "https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-reset/" }
        ]
      }
    ]
  },

  "ha-control-plane": {
    title: "Highly Available Control Planes",
    subtitle: "Cluster Architecture > HA Control Planes",
    parent: "cluster-architecture",
    parentTitle: "Cluster Architecture",
    domainColor: DOMAIN_COLORS['cluster-architecture'],
    nodes: [
      {
        name: "Stacked etcd\nTopology",
        description: "etcd co-located with control plane",
        keyPoints: [
          "etcd runs on the same nodes as control plane components",
          "Simpler to set up and manage",
          "Requires fewer servers (minimum 3 nodes)",
          "Risk: losing a node loses both a control plane and an etcd member"
        ],
        commands: [
          "kubeadm init --control-plane-endpoint=<lb>:6443 --upload-certs"
        ],
        references: [
          { title: "HA Topology Options", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/" },
          { title: "Creating HA Clusters with kubeadm", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/high-availability/" }
        ]
      },
      {
        name: "External etcd\nTopology",
        description: "etcd on dedicated nodes",
        keyPoints: [
          "etcd runs on separate dedicated hosts",
          "More resilient: control plane failure doesn't affect etcd",
          "Requires more infrastructure (min 3 etcd + 3 control plane)",
          "Better for large production environments"
        ],
        commands: [
          "kubeadm init --config=kubeadm-config.yaml (with external etcd endpoints)"
        ],
        references: [
          { title: "HA Topology Options", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/" },
          { title: "Set up etcd Cluster", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/setup-ha-etcd-with-kubeadm/" }
        ]
      },
      {
        name: "Load\nBalancer",
        description: "API server load balancing",
        keyPoints: [
          "Required for HA: distributes traffic across API servers",
          "Can use HAProxy, Nginx, or cloud load balancers",
          "Health checks on kube-apiserver port 6443",
          "The --control-plane-endpoint must point to the LB"
        ],
        commands: [
          "kubeadm init --control-plane-endpoint=<load-balancer-dns>:6443"
        ],
        references: [
          { title: "Creating HA Clusters", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/high-availability/" }
        ]
      },
      {
        name: "etcd Backup\n& Restore",
        description: "Data protection for etcd",
        keyPoints: [
          "etcd stores all cluster state",
          "Use etcdctl for backup and restore",
          "Snapshot the etcd data directory",
          "Restore creates a new etcd data directory",
          "Always test restores in a non-production environment"
        ],
        commands: [
          "ETCDCTL_API=3 etcdctl snapshot save /tmp/backup.db --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key",
          "ETCDCTL_API=3 etcdctl snapshot restore /tmp/backup.db --data-dir=/var/lib/etcd-backup",
          "ETCDCTL_API=3 etcdctl snapshot status /tmp/backup.db -w table"
        ],
        references: [
          { title: "Operating etcd Clusters", url: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/" },
          { title: "Backing up an etcd Cluster", url: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#backing-up-an-etcd-cluster" }
        ]
      }
    ]
  },

  "extension-interfaces": {
    title: "Extension Interfaces",
    subtitle: "Cluster Architecture > Extension Interfaces",
    parent: "cluster-architecture",
    parentTitle: "Cluster Architecture",
    domainColor: DOMAIN_COLORS['cluster-architecture'],
    nodes: [
      {
        name: "CNI",
        description: "Container Network Interface",
        keyPoints: [
          "Standard for configuring network interfaces in containers",
          "Plugins: Calico, Flannel, Weave, Cilium",
          "Handles Pod IP allocation and routing",
          "Config files typically in /etc/cni/net.d/",
          "Must be installed after kubeadm init for pods to communicate"
        ],
        commands: [
          "ls /etc/cni/net.d/",
          "kubectl get pods -n kube-system (check CNI pods)",
          "kubectl apply -f <cni-plugin-manifest>.yaml"
        ],
        references: [
          { title: "Network Plugins", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/" },
          { title: "Cluster Networking", url: "https://kubernetes.io/docs/concepts/cluster-administration/networking/" }
        ]
      },
      {
        name: "CSI",
        description: "Container Storage Interface",
        keyPoints: [
          "Standard for exposing storage systems to containers",
          "Replaces in-tree volume plugins",
          "Supports dynamic provisioning, snapshots, cloning",
          "Drivers: AWS EBS, GCE PD, Ceph, NFS"
        ],
        commands: [
          "kubectl get csidrivers",
          "kubectl get csinodes",
          "kubectl describe csidrivers <driver-name>"
        ],
        references: [
          { title: "CSI Volumes", url: "https://kubernetes.io/docs/concepts/storage/volumes/#csi" },
          { title: "Storage Drivers", url: "https://kubernetes.io/docs/concepts/storage/volumes/#types-of-volumes" }
        ]
      },
      {
        name: "CRI",
        description: "Container Runtime Interface",
        keyPoints: [
          "Standard for container runtimes to integrate with kubelet",
          "Runtimes: containerd, CRI-O",
          "Docker removed in Kubernetes v1.24+ (dockershim)",
          "Configured via kubelet --container-runtime-endpoint flag"
        ],
        commands: [
          "crictl ps",
          "crictl images",
          "crictl info",
          "systemctl status containerd"
        ],
        references: [
          { title: "Container Runtime Interface", url: "https://kubernetes.io/docs/concepts/architecture/cri/" },
          { title: "Container Runtimes", url: "https://kubernetes.io/docs/setup/production-environment/container-runtimes/" }
        ]
      }
    ]
  },

  "crds-operators": {
    title: "CRDs & Operators",
    subtitle: "Cluster Architecture > CRDs & Operators",
    parent: "cluster-architecture",
    parentTitle: "Cluster Architecture",
    domainColor: DOMAIN_COLORS['cluster-architecture'],
    nodes: [
      {
        name: "Custom Resource\nDefinitions",
        description: "Extend the Kubernetes API",
        keyPoints: [
          "Define custom resource types in the API",
          "YAML spec defines group, version, scope, schema",
          "Can be namespaced or cluster-scoped",
          "Once created, custom resources can be managed with kubectl",
          "Supports schema validation via OpenAPI v3"
        ],
        commands: [
          "kubectl get crds",
          "kubectl describe crd <crd-name>",
          "kubectl get <custom-resource> -n <namespace>",
          "kubectl apply -f my-crd.yaml"
        ],
        references: [
          { title: "Custom Resources", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/" },
          { title: "CustomResourceDefinition", url: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/" }
        ]
      },
      {
        name: "Operator\nPattern",
        description: "Automated management of applications",
        keyPoints: [
          "Combines CRDs + custom controllers",
          "Encodes operational knowledge into software",
          "Manages complex application lifecycle (install, upgrade, backup)",
          "Examples: Prometheus Operator, cert-manager, etcd Operator"
        ],
        commands: [
          "kubectl get pods -n <operator-namespace>",
          "kubectl logs <operator-pod>"
        ],
        references: [
          { title: "Operator Pattern", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/operator/" }
        ]
      },
      {
        name: "Custom\nResources",
        description: "Instances of CRDs",
        keyPoints: [
          "Created after CRD is registered",
          "Follow the schema defined in the CRD",
          "Managed like any other Kubernetes resource",
          "Can have status subresources and validation",
          "Support printer columns for kubectl output"
        ],
        commands: [
          "kubectl apply -f my-custom-resource.yaml",
          "kubectl get <resource-type>",
          "kubectl delete <resource-type> <name>"
        ],
        references: [
          { title: "Custom Resources", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/" },
          { title: "Extend the Kubernetes API", url: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/" }
        ]
      }
    ]
  },

  "helm-kustomize": {
    title: "Helm & Kustomize",
    subtitle: "Cluster Architecture > Helm & Kustomize",
    parent: "cluster-architecture",
    parentTitle: "Cluster Architecture",
    domainColor: DOMAIN_COLORS['cluster-architecture'],
    nodes: [
      {
        name: "Helm Charts",
        description: "Package manager for Kubernetes",
        keyPoints: [
          "Charts are packages of pre-configured Kubernetes resources",
          "values.yaml for customization",
          "Supports versioning, dependencies, and rollbacks",
          "Chart structure: Chart.yaml, templates/, values.yaml",
          "Release: an instance of a chart running in a cluster"
        ],
        commands: [
          "helm repo add <name> <url>",
          "helm install <release> <chart>",
          "helm upgrade <release> <chart>",
          "helm list",
          "helm rollback <release> <revision>"
        ],
        references: [
          { title: "Helm (Official Docs)", url: "https://helm.sh/docs/" },
          { title: "Managing Kubernetes Objects with Helm", url: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/helm/" }
        ]
      },
      {
        name: "Helm\nRepositories",
        description: "Chart distribution",
        keyPoints: [
          "Centralized or OCI-based chart storage",
          "ArtifactHub for discovering charts",
          "helm repo add/update/remove for management",
          "OCI support for container registry storage"
        ],
        commands: [
          "helm repo add bitnami https://charts.bitnami.com/bitnami",
          "helm repo update",
          "helm search repo <keyword>",
          "helm search hub <keyword>"
        ],
        references: [
          { title: "Helm Repositories", url: "https://helm.sh/docs/topics/chart_repository/" }
        ]
      },
      {
        name: "Kustomize\nBases",
        description: "Base configurations",
        keyPoints: [
          "Define common resource configurations",
          "kustomization.yaml lists resources",
          "Can include generators (ConfigMap, Secret)",
          "Built into kubectl with -k flag"
        ],
        commands: [
          "kubectl apply -k <directory>",
          "kubectl kustomize <directory>",
          "kustomize build <directory>"
        ],
        references: [
          { title: "Kustomize", url: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/" }
        ]
      },
      {
        name: "Kustomize\nOverlays",
        description: "Environment-specific patches",
        keyPoints: [
          "Layer customizations on top of base",
          "Patches: strategic merge, JSON, inline",
          "Common uses: namespace, labels, replicas, images",
          "Overlays for dev/staging/prod environments"
        ],
        commands: [
          "kubectl apply -k overlays/production/",
          "kustomize build overlays/staging/"
        ],
        references: [
          { title: "Kustomize", url: "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/" }
        ]
      }
    ]
  },

  "cluster-lifecycle": {
    title: "Cluster Lifecycle Management",
    subtitle: "Cluster Architecture > Cluster Lifecycle",
    parent: "cluster-architecture",
    parentTitle: "Cluster Architecture",
    domainColor: DOMAIN_COLORS['cluster-architecture'],
    nodes: [
      {
        name: "Version\nUpgrades",
        description: "Upgrading Kubernetes version",
        keyPoints: [
          "Upgrade one minor version at a time (e.g., 1.33 -> 1.34)",
          "Order: kubeadm -> control plane -> kubelet/kubectl -> workers",
          "Drain nodes before upgrading",
          "Verify with kubeadm upgrade plan",
          "Always read release notes before upgrading"
        ],
        commands: [
          "apt-get update && apt-get install -y kubeadm=1.34.0-*",
          "kubeadm upgrade plan",
          "kubeadm upgrade apply v1.34.0",
          "kubectl drain <node> --ignore-daemonsets --delete-emptydir-data",
          "apt-get install -y kubelet=1.34.0-* kubectl=1.34.0-*",
          "kubectl uncordon <node>"
        ],
        references: [
          { title: "Upgrading kubeadm Clusters", url: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/" },
          { title: "Version Skew Policy", url: "https://kubernetes.io/releases/version-skew-policy/" }
        ]
      },
      {
        name: "Node\nManagement",
        description: "Adding, removing, and maintaining nodes",
        keyPoints: [
          "Drain nodes for maintenance (evicts pods safely)",
          "Cordon to prevent new pod scheduling",
          "Uncordon to resume scheduling",
          "Delete node from cluster when decommissioning",
          "PodDisruptionBudgets protect workloads during drain"
        ],
        commands: [
          "kubectl drain <node> --ignore-daemonsets",
          "kubectl cordon <node>",
          "kubectl uncordon <node>",
          "kubectl delete node <node>"
        ],
        references: [
          { title: "Safely Drain a Node", url: "https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/" },
          { title: "Cluster Management", url: "https://kubernetes.io/docs/tasks/administer-cluster/" }
        ]
      },
      {
        name: "etcd Backup\n& Restore",
        description: "Cluster state backup",
        keyPoints: [
          "etcd holds all cluster data",
          "Regular snapshots are critical for disaster recovery",
          "Restore requires stopping the API server",
          "Always verify backup integrity"
        ],
        commands: [
          "ETCDCTL_API=3 etcdctl snapshot save /backup/snap.db --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key",
          "ETCDCTL_API=3 etcdctl snapshot restore /backup/snap.db --data-dir=/var/lib/etcd-restored",
          "ETCDCTL_API=3 etcdctl snapshot status /backup/snap.db -w table"
        ],
        references: [
          { title: "Operating etcd Clusters", url: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/" }
        ]
      },
      {
        name: "Certificate\nManagement",
        description: "TLS certificates for cluster components",
        keyPoints: [
          "Certificates expire after 1 year by default",
          "kubeadm certs renew for renewal",
          "Certificates stored in /etc/kubernetes/pki/",
          "Check expiry dates regularly",
          "kubeadm auto-renews certs during control plane upgrades"
        ],
        commands: [
          "kubeadm certs check-expiration",
          "kubeadm certs renew all",
          "openssl x509 -in /etc/kubernetes/pki/apiserver.crt -noout -dates"
        ],
        references: [
          { title: "PKI Certificates and Requirements", url: "https://kubernetes.io/docs/setup/best-practices/certificates/" },
          { title: "Certificate Management with kubeadm", url: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/" }
        ]
      }
    ]
  },

  // ===== LEVEL 2: WORKLOADS & SCHEDULING SUB-TOPICS =====

  "deployments": {
    title: "Deployments",
    subtitle: "Workloads & Scheduling > Deployments",
    parent: "workloads-scheduling",
    parentTitle: "Workloads & Scheduling",
    domainColor: DOMAIN_COLORS['workloads-scheduling'],
    nodes: [
      {
        name: "Rolling\nUpdates",
        description: "Zero-downtime deployment updates",
        keyPoints: [
          "Default strategy: gradually replace old pods with new",
          "maxSurge: max pods above desired count during update",
          "maxUnavailable: max pods that can be unavailable during update",
          "Automatically rolls back on failure with progressDeadlineSeconds"
        ],
        commands: [
          "kubectl set image deployment/myapp myapp=myapp:v2",
          "kubectl rollout status deployment/myapp",
          "kubectl rollout history deployment/myapp"
        ],
        references: [
          { title: "Performing a Rolling Update", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/" },
          { title: "Deployments - Rolling Update", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment" }
        ]
      },
      {
        name: "Rollbacks",
        description: "Revert to previous versions",
        keyPoints: [
          "Kubernetes keeps revision history",
          "Rollback to specific or previous revision",
          "revisionHistoryLimit controls how many revisions to keep",
          "Use 'kubectl rollout undo' to rollback"
        ],
        commands: [
          "kubectl rollout undo deployment/myapp",
          "kubectl rollout undo deployment/myapp --to-revision=2",
          "kubectl rollout history deployment/myapp --revision=3"
        ],
        references: [
          { title: "Rolling Back a Deployment", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment" }
        ]
      },
      {
        name: "Deployment\nStrategies",
        description: "RollingUpdate vs Recreate",
        keyPoints: [
          "RollingUpdate: gradual replacement (default)",
          "Recreate: kill all old pods, then create new (causes downtime)",
          "Use Recreate when app can't run multiple versions simultaneously",
          "Blue-green and canary via labels/services"
        ],
        commands: [
          "kubectl create deployment myapp --image=myapp:v1 --replicas=3",
          "kubectl scale deployment/myapp --replicas=5",
          "kubectl edit deployment/myapp"
        ],
        references: [
          { title: "Deployment Strategy", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy" }
        ]
      },
      {
        name: "Deployment\nSpec",
        description: "Key configuration fields",
        keyPoints: [
          "replicas: desired number of pod instances",
          "selector: label selector matching pod template",
          "template: pod template spec (containers, volumes)",
          "strategy: deployment strategy (RollingUpdate/Recreate)",
          "minReadySeconds: wait time before considering pod ready"
        ],
        commands: [
          "kubectl get deployment myapp -o yaml",
          "kubectl describe deployment myapp",
          "kubectl apply -f deployment.yaml"
        ],
        references: [
          { title: "Deployments", url: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/" },
          { title: "Deployment API Reference", url: "https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/deployment-v1/" }
        ]
      }
    ]
  },

  "configmaps-secrets": {
    title: "ConfigMaps & Secrets",
    subtitle: "Workloads & Scheduling > ConfigMaps & Secrets",
    parent: "workloads-scheduling",
    parentTitle: "Workloads & Scheduling",
    domainColor: DOMAIN_COLORS['workloads-scheduling'],
    nodes: [
      {
        name: "ConfigMaps",
        description: "Store non-confidential configuration",
        keyPoints: [
          "Key-value pairs for configuration data",
          "Decouple config from container images",
          "Can be consumed as environment variables or volume mounts",
          "Max size: 1 MiB",
          "Immutable ConfigMaps can be set with immutable: true"
        ],
        commands: [
          "kubectl create configmap my-config --from-literal=key1=val1",
          "kubectl create configmap my-config --from-file=config.properties",
          "kubectl get configmaps",
          "kubectl describe configmap my-config"
        ],
        references: [
          { title: "ConfigMaps", url: "https://kubernetes.io/docs/concepts/configuration/configmap/" },
          { title: "Configure a Pod to Use a ConfigMap", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/" }
        ]
      },
      {
        name: "Secrets",
        description: "Store sensitive data",
        keyPoints: [
          "Base64 encoded (NOT encrypted by default)",
          "Types: Opaque, docker-registry, tls, basic-auth, token",
          "Can enable encryption at rest in etcd",
          "Mounted as tmpfs (RAM) in pods",
          "Immutable Secrets supported (immutable: true)"
        ],
        commands: [
          "kubectl create secret generic my-secret --from-literal=password=pass123",
          "kubectl create secret tls my-tls --cert=cert.pem --key=key.pem",
          "kubectl get secrets",
          "kubectl get secret my-secret -o jsonpath='{.data.password}' | base64 -d"
        ],
        references: [
          { title: "Secrets", url: "https://kubernetes.io/docs/concepts/configuration/secret/" },
          { title: "Managing Secrets", url: "https://kubernetes.io/docs/tasks/configmap-secret/" }
        ]
      },
      {
        name: "Volume\nMounts",
        description: "Mount as files in containers",
        keyPoints: [
          "Mount ConfigMaps/Secrets as volumes in pods",
          "Each key becomes a file in the mount path",
          "subPath to mount specific keys",
          "Updates propagate automatically (not with subPath)"
        ],
        commands: [
          "# In pod spec:\n# volumes:\n#   - name: config-vol\n#     configMap:\n#       name: my-config\n# containers:\n#   - volumeMounts:\n#     - name: config-vol\n#       mountPath: /etc/config"
        ],
        references: [
          { title: "Using ConfigMaps as Files", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#add-configmap-data-to-a-volume" },
          { title: "Using Secrets as Files", url: "https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-files-from-a-pod" }
        ]
      },
      {
        name: "Environment\nVariables",
        description: "Inject as env vars",
        keyPoints: [
          "envFrom: inject all keys as env vars",
          "env.valueFrom: inject specific keys",
          "ConfigMap or Secret references",
          "Env vars are NOT updated if ConfigMap/Secret changes"
        ],
        commands: [
          "# In pod spec:\n# envFrom:\n#   - configMapRef:\n#       name: my-config\n# env:\n#   - name: MY_VAR\n#     valueFrom:\n#       secretKeyRef:\n#         name: my-secret\n#         key: password"
        ],
        references: [
          { title: "Define Environment Variables", url: "https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/" },
          { title: "Configure Pods Using ConfigMaps", url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#define-container-environment-variables-using-configmap-data" }
        ]
      }
    ]
  },

  "autoscaling": {
    title: "Workload Autoscaling",
    subtitle: "Workloads & Scheduling > Autoscaling",
    parent: "workloads-scheduling",
    parentTitle: "Workloads & Scheduling",
    domainColor: DOMAIN_COLORS['workloads-scheduling'],
    nodes: [
      {
        name: "HPA",
        description: "Horizontal Pod Autoscaler",
        keyPoints: [
          "Automatically scales pod replicas based on metrics",
          "Supports CPU, memory, and custom metrics",
          "Requires metrics-server to be running",
          "Configurable min/max replicas and target utilization",
          "Default sync period is 15 seconds"
        ],
        commands: [
          "kubectl autoscale deployment myapp --min=2 --max=10 --cpu-percent=80",
          "kubectl get hpa",
          "kubectl describe hpa myapp",
          "kubectl top pods"
        ],
        references: [
          { title: "Horizontal Pod Autoscaling", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/" },
          { title: "HPA Walkthrough", url: "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/" }
        ]
      },
      {
        name: "VPA",
        description: "Vertical Pod Autoscaler",
        keyPoints: [
          "Adjusts resource requests/limits for containers",
          "Modes: Off (recommend only), Auto (apply changes)",
          "Requires VPA admission controller",
          "Cannot be used with HPA on the same CPU/memory metrics"
        ],
        commands: [
          "kubectl get vpa",
          "kubectl describe vpa <name>"
        ],
        references: [
          { title: "Autoscaling Workloads", url: "https://kubernetes.io/docs/concepts/workloads/autoscaling/" }
        ]
      },
      {
        name: "Metrics\nServer",
        description: "Resource usage metrics collection",
        keyPoints: [
          "Collects CPU/memory usage from kubelets",
          "Required for HPA and 'kubectl top'",
          "Runs as a deployment in kube-system",
          "Does NOT store metrics long-term",
          "Queries kubelet's /metrics/resource endpoint"
        ],
        commands: [
          "kubectl top nodes",
          "kubectl top pods",
          "kubectl top pods --containers",
          "kubectl get deployment metrics-server -n kube-system"
        ],
        references: [
          { title: "Resource Metrics Pipeline", url: "https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-metrics-pipeline/" }
        ]
      }
    ]
  },

  "self-healing": {
    title: "Self-Healing Deployments",
    subtitle: "Workloads & Scheduling > Self-Healing",
    parent: "workloads-scheduling",
    parentTitle: "Workloads & Scheduling",
    domainColor: DOMAIN_COLORS['workloads-scheduling'],
    nodes: [
      {
        name: "ReplicaSets",
        description: "Ensure desired pod count",
        keyPoints: [
          "Maintains a stable set of replica pods",
          "Uses label selectors to identify pods",
          "Automatically creates/deletes pods to match desired count",
          "Usually managed by Deployments (don't create directly)"
        ],
        commands: [
          "kubectl get replicasets",
          "kubectl describe rs <name>",
          "kubectl scale rs <name> --replicas=3"
        ],
        references: [
          { title: "ReplicaSet", url: "https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/" }
        ]
      },
      {
        name: "DaemonSets",
        description: "Run a pod on every node",
        keyPoints: [
          "Ensures a copy of a pod runs on all (or selected) nodes",
          "Use cases: log collection, monitoring agents, networking (CNI, kube-proxy)",
          "Pods are added when new nodes join the cluster",
          "Supports update strategies: RollingUpdate, OnDelete"
        ],
        commands: [
          "kubectl get daemonsets -A",
          "kubectl describe daemonset <name>",
          "kubectl rollout status daemonset/<name>"
        ],
        references: [
          { title: "DaemonSet", url: "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/" }
        ]
      },
      {
        name: "StatefulSets",
        description: "Stateful application workloads",
        keyPoints: [
          "Stable, unique network identity for each pod",
          "Ordered, graceful deployment and scaling",
          "Stable persistent storage via PVCs",
          "Pod names: <statefulset-name>-0, -1, -2...",
          "Requires a Headless Service for network identity"
        ],
        commands: [
          "kubectl get statefulsets",
          "kubectl scale statefulset <name> --replicas=5",
          "kubectl rollout status statefulset/<name>"
        ],
        references: [
          { title: "StatefulSets", url: "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/" },
          { title: "StatefulSet Basics", url: "https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/" }
        ]
      },
      {
        name: "Jobs",
        description: "Run-to-completion workloads",
        keyPoints: [
          "Runs pods to successful completion",
          "completions: number of successful runs needed",
          "parallelism: max pods running in parallel",
          "backoffLimit: max retries before considering failed",
          "activeDeadlineSeconds: timeout for the job"
        ],
        commands: [
          "kubectl create job my-job --image=busybox -- echo 'hello'",
          "kubectl get jobs",
          "kubectl describe job my-job",
          "kubectl logs job/my-job"
        ],
        references: [
          { title: "Jobs", url: "https://kubernetes.io/docs/concepts/workloads/controllers/job/" }
        ]
      },
      {
        name: "CronJobs",
        description: "Scheduled recurring tasks",
        keyPoints: [
          "Runs Jobs on a cron schedule",
          "Schedule format: minute hour day-of-month month day-of-week",
          "concurrencyPolicy: Allow, Forbid, Replace",
          "successfulJobsHistoryLimit & failedJobsHistoryLimit"
        ],
        commands: [
          "kubectl create cronjob my-cron --image=busybox --schedule='*/5 * * * *' -- echo 'hello'",
          "kubectl get cronjobs",
          "kubectl describe cronjob my-cron"
        ],
        references: [
          { title: "CronJob", url: "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/" },
          { title: "Running Automated Tasks with CronJob", url: "https://kubernetes.io/docs/tasks/job/automated-tasks-with-cron-jobs/" }
        ]
      }
    ]
  },

  "pod-admission-scheduling": {
    title: "Pod Admission & Scheduling",
    subtitle: "Workloads & Scheduling > Pod Admission & Scheduling",
    parent: "workloads-scheduling",
    parentTitle: "Workloads & Scheduling",
    domainColor: DOMAIN_COLORS['workloads-scheduling'],
    nodes: [
      {
        name: "nodeSelector",
        description: "Simple node selection",
        keyPoints: [
          "Simplest way to constrain pods to specific nodes",
          "Match node labels (key-value pairs)",
          "Pod won't be scheduled if no node matches",
          "Label nodes first, then use in pod spec"
        ],
        commands: [
          "kubectl label nodes <node> disktype=ssd",
          "kubectl get nodes --show-labels",
          "# In pod spec:\n# nodeSelector:\n#   disktype: ssd"
        ],
        references: [
          { title: "Assigning Pods to Nodes", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector" }
        ]
      },
      {
        name: "Node\nAffinity",
        description: "Advanced node selection rules",
        keyPoints: [
          "requiredDuringSchedulingIgnoredDuringExecution (hard rule)",
          "preferredDuringSchedulingIgnoredDuringExecution (soft rule)",
          "Supports In, NotIn, Exists, DoesNotExist operators",
          "More expressive than nodeSelector",
          "Pod anti-affinity spreads pods across nodes"
        ],
        commands: [
          "kubectl get nodes --show-labels",
          "kubectl label nodes <node> zone=us-east-1a"
        ],
        references: [
          { title: "Affinity and Anti-affinity", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity" }
        ]
      },
      {
        name: "Taints &\nTolerations",
        description: "Repel pods from nodes",
        keyPoints: [
          "Taints are set on nodes to repel pods",
          "Tolerations are set on pods to allow scheduling on tainted nodes",
          "Effects: NoSchedule, PreferNoSchedule, NoExecute",
          "Control plane nodes are tainted by default"
        ],
        commands: [
          "kubectl taint nodes <node> key=value:NoSchedule",
          "kubectl taint nodes <node> key=value:NoSchedule-",
          "kubectl describe node <node> | grep -i taint"
        ],
        references: [
          { title: "Taints and Tolerations", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/" }
        ]
      },
      {
        name: "Resource\nLimits",
        description: "CPU & memory constraints",
        keyPoints: [
          "requests: minimum guaranteed resources",
          "limits: maximum allowed resources",
          "Pods exceeding memory limits are OOMKilled",
          "Pods exceeding CPU limits are throttled",
          "QoS classes: Guaranteed, Burstable, BestEffort"
        ],
        commands: [
          "kubectl describe pod <pod> (check Resources section)",
          "kubectl top pods",
          "kubectl describe node <node> (check Allocated resources)"
        ],
        references: [
          { title: "Managing Resources for Containers", url: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/" },
          { title: "Resource Quality of Service", url: "https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/" }
        ]
      },
      {
        name: "Pod\nPriority",
        description: "Priority-based scheduling",
        keyPoints: [
          "PriorityClass defines priority levels",
          "Higher priority pods can preempt lower priority pods",
          "system-cluster-critical and system-node-critical are built-in",
          "preemptionPolicy: PreemptLowerPriority or Never"
        ],
        commands: [
          "kubectl get priorityclasses",
          "kubectl describe priorityclass <name>"
        ],
        references: [
          { title: "Pod Priority and Preemption", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/" }
        ]
      }
    ]
  },

  // ===== LEVEL 2: SERVICES & NETWORKING SUB-TOPICS =====

  "pod-connectivity": {
    title: "Pod-to-Pod Connectivity",
    subtitle: "Services & Networking > Pod Connectivity",
    parent: "services-networking",
    parentTitle: "Services & Networking",
    domainColor: DOMAIN_COLORS['services-networking'],
    nodes: [
      {
        name: "Pod Network\nModel",
        description: "Kubernetes networking fundamentals",
        keyPoints: [
          "Every pod gets its own IP address",
          "Pods can communicate with any other pod without NAT",
          "Agents on a node can communicate with all pods on that node",
          "Flat network: all pods in a single address space"
        ],
        commands: [
          "kubectl get pods -o wide (see pod IPs)",
          "kubectl exec <pod> -- curl <other-pod-ip>"
        ],
        references: [
          { title: "Cluster Networking", url: "https://kubernetes.io/docs/concepts/cluster-administration/networking/" },
          { title: "The Kubernetes Network Model", url: "https://kubernetes.io/docs/concepts/services-networking/#the-kubernetes-network-model" }
        ]
      },
      {
        name: "CNI\nPlugins",
        description: "Network implementation",
        keyPoints: [
          "Calico: BGP-based, network policies, high performance",
          "Flannel: simple overlay network using VXLAN",
          "Cilium: eBPF-based, advanced security and observability",
          "Weave: mesh overlay, easy setup"
        ],
        commands: [
          "kubectl get pods -n kube-system | grep -E 'calico|flannel|cilium|weave'",
          "ls /etc/cni/net.d/",
          "kubectl get nodes -o wide"
        ],
        references: [
          { title: "Network Plugins", url: "https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/" },
          { title: "Installing a Pod Network Add-on", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/#pod-network" }
        ]
      },
      {
        name: "Pod DNS",
        description: "DNS resolution for pods",
        keyPoints: [
          "Pods get DNS entries: <pod-ip-dashed>.<namespace>.pod.cluster.local",
          "DNS config can be customized in pod spec",
          "dnsPolicy: Default, ClusterFirst, ClusterFirstWithHostNet, None",
          "/etc/resolv.conf points to CoreDNS service"
        ],
        commands: [
          "kubectl exec <pod> -- cat /etc/resolv.conf",
          "kubectl exec <pod> -- nslookup kubernetes.default"
        ],
        references: [
          { title: "DNS for Services and Pods", url: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/" }
        ]
      }
    ]
  },

  "service-types": {
    title: "Service Types",
    subtitle: "Services & Networking > Service Types",
    parent: "services-networking",
    parentTitle: "Services & Networking",
    domainColor: DOMAIN_COLORS['services-networking'],
    nodes: [
      {
        name: "ClusterIP",
        description: "Internal cluster access only",
        keyPoints: [
          "Default service type",
          "Accessible only within the cluster",
          "Virtual IP assigned by the cluster",
          "Use for internal microservice communication"
        ],
        commands: [
          "kubectl expose deployment myapp --port=80 --target-port=8080",
          "kubectl get svc myapp",
          "kubectl exec <pod> -- curl myapp.default.svc.cluster.local"
        ],
        references: [
          { title: "Service - ClusterIP", url: "https://kubernetes.io/docs/concepts/services-networking/service/#type-clusterip" }
        ]
      },
      {
        name: "NodePort",
        description: "External access via node port",
        keyPoints: [
          "Exposes service on each node's IP at a static port",
          "Port range: 30000-32767",
          "Accessible from outside the cluster via <NodeIP>:<NodePort>",
          "Builds on ClusterIP"
        ],
        commands: [
          "kubectl expose deployment myapp --type=NodePort --port=80",
          "kubectl get svc myapp (see NodePort)",
          "curl <node-ip>:<node-port>"
        ],
        references: [
          { title: "Service - NodePort", url: "https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport" }
        ]
      },
      {
        name: "LoadBalancer",
        description: "Cloud provider load balancer",
        keyPoints: [
          "Provisions an external load balancer (cloud only)",
          "Builds on NodePort and ClusterIP",
          "Cloud controller allocates external IP",
          "Best for production external access in cloud"
        ],
        commands: [
          "kubectl expose deployment myapp --type=LoadBalancer --port=80",
          "kubectl get svc myapp (check EXTERNAL-IP)"
        ],
        references: [
          { title: "Service - LoadBalancer", url: "https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer" }
        ]
      },
      {
        name: "ExternalName",
        description: "DNS CNAME alias",
        keyPoints: [
          "Maps a service to an external DNS name",
          "Returns a CNAME record",
          "No proxying or port mapping",
          "Use for external service references"
        ],
        commands: [
          "kubectl create service externalname my-svc --external-name=api.example.com"
        ],
        references: [
          { title: "Service - ExternalName", url: "https://kubernetes.io/docs/concepts/services-networking/service/#externalname" }
        ]
      },
      {
        name: "Endpoints &\nEndpointSlices",
        description: "Backend pod tracking",
        keyPoints: [
          "Endpoints: list of IP:port pairs for a service's pods",
          "EndpointSlices: scalable replacement for Endpoints",
          "Automatically managed by the Endpoints controller",
          "Manual Endpoints for external services without selectors"
        ],
        commands: [
          "kubectl get endpoints myapp",
          "kubectl get endpointslices",
          "kubectl describe endpoints myapp"
        ],
        references: [
          { title: "Endpoints", url: "https://kubernetes.io/docs/concepts/services-networking/service/#endpoints" },
          { title: "EndpointSlices", url: "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/" }
        ]
      }
    ]
  },

  "gateway-api": {
    title: "Gateway API",
    subtitle: "Services & Networking > Gateway API",
    parent: "services-networking",
    parentTitle: "Services & Networking",
    domainColor: DOMAIN_COLORS['services-networking'],
    nodes: [
      {
        name: "Gateway",
        description: "Infrastructure for traffic routing",
        keyPoints: [
          "Represents a load balancer or proxy instance",
          "Defines listeners (ports, protocols, TLS)",
          "Managed by infrastructure providers",
          "Replaces the role of Ingress controllers"
        ],
        commands: [
          "kubectl get gateways",
          "kubectl describe gateway <name>"
        ],
        references: [
          { title: "Gateway API", url: "https://kubernetes.io/docs/concepts/services-networking/gateway/" },
          { title: "Gateway API Docs", url: "https://gateway-api.sigs.k8s.io/" }
        ]
      },
      {
        name: "HTTPRoute",
        description: "HTTP traffic routing rules",
        keyPoints: [
          "Defines rules for routing HTTP traffic",
          "Supports path-based, header-based, method-based matching",
          "Can route to multiple backends (weighted traffic splitting)",
          "Attaches to a Gateway via parentRefs"
        ],
        commands: [
          "kubectl get httproutes",
          "kubectl describe httproute <name>"
        ],
        references: [
          { title: "Gateway API - HTTPRoute", url: "https://kubernetes.io/docs/concepts/services-networking/gateway/#api-kind-httproute" },
          { title: "HTTPRoute Docs", url: "https://gateway-api.sigs.k8s.io/api-types/httproute/" }
        ]
      },
      {
        name: "GRPCRoute\n& TLSRoute",
        description: "Protocol-specific routing",
        keyPoints: [
          "GRPCRoute: routing for gRPC services",
          "TLSRoute: routing based on TLS SNI",
          "TCPRoute/UDPRoute: L4 traffic routing",
          "Each route type handles specific protocol needs"
        ],
        commands: [
          "kubectl get grpcroutes",
          "kubectl get tlsroutes"
        ],
        references: [
          { title: "Gateway API", url: "https://kubernetes.io/docs/concepts/services-networking/gateway/" },
          { title: "GRPCRoute Docs", url: "https://gateway-api.sigs.k8s.io/api-types/grpcroute/" }
        ]
      },
      {
        name: "Gateway\nClasses",
        description: "Gateway implementation types",
        keyPoints: [
          "Defines which controller implements the Gateway",
          "Similar to IngressClass for Ingress",
          "Cluster-scoped resource",
          "Examples: istio, nginx, envoy, traefik, cilium"
        ],
        commands: [
          "kubectl get gatewayclasses",
          "kubectl describe gatewayclass <name>"
        ],
        references: [
          { title: "Gateway API - GatewayClass", url: "https://kubernetes.io/docs/concepts/services-networking/gateway/#api-kind-gatewayclass" },
          { title: "GatewayClass Docs", url: "https://gateway-api.sigs.k8s.io/api-types/gatewayclass/" }
        ]
      }
    ]
  },

  "ingress": {
    title: "Ingress",
    subtitle: "Services & Networking > Ingress",
    parent: "services-networking",
    parentTitle: "Services & Networking",
    domainColor: DOMAIN_COLORS['services-networking'],
    nodes: [
      {
        name: "Ingress\nControllers",
        description: "Implement Ingress resources",
        keyPoints: [
          "Required for Ingress resources to work",
          "Common: NGINX Ingress Controller, Traefik, HAProxy",
          "Runs as a Deployment/DaemonSet in the cluster",
          "Watches for Ingress resources and configures routing"
        ],
        commands: [
          "kubectl get pods -n ingress-nginx",
          "kubectl get ingressclass"
        ],
        references: [
          { title: "Ingress Controllers", url: "https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/" }
        ]
      },
      {
        name: "Ingress\nResources",
        description: "Routing rules definition",
        keyPoints: [
          "Define HTTP/HTTPS routing to backend services",
          "Host-based and path-based routing",
          "Can specify default backend",
          "Annotations for controller-specific config"
        ],
        commands: [
          "kubectl get ingress",
          "kubectl describe ingress <name>",
          "kubectl create ingress myingress --rule='host/path=svc:port'"
        ],
        references: [
          { title: "Ingress", url: "https://kubernetes.io/docs/concepts/services-networking/ingress/" }
        ]
      },
      {
        name: "TLS\nTermination",
        description: "HTTPS support",
        keyPoints: [
          "TLS certificates stored as Kubernetes Secrets",
          "Ingress terminates TLS and forwards HTTP to backends",
          "Multiple hosts can have different certificates",
          "cert-manager can auto-provision certificates"
        ],
        commands: [
          "kubectl create secret tls my-tls --cert=cert.pem --key=key.pem",
          "# In ingress spec:\n# tls:\n#   - hosts: [myapp.example.com]\n#     secretName: my-tls"
        ],
        references: [
          { title: "Ingress TLS", url: "https://kubernetes.io/docs/concepts/services-networking/ingress/#tls" }
        ]
      },
      {
        name: "Path-Based\nRouting",
        description: "URL path routing",
        keyPoints: [
          "pathType: Prefix, Exact, ImplementationSpecific",
          "Prefix: matches URL path prefix",
          "Exact: matches exact URL path",
          "Multiple paths can route to different services"
        ],
        commands: [
          "kubectl get ingress -o wide",
          "kubectl describe ingress <name>"
        ],
        references: [
          { title: "Ingress Path Types", url: "https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types" }
        ]
      }
    ]
  },

  "network-policies": {
    title: "Network Policies",
    subtitle: "Services & Networking > Network Policies",
    parent: "services-networking",
    parentTitle: "Services & Networking",
    domainColor: DOMAIN_COLORS['services-networking'],
    nodes: [
      {
        name: "Ingress\nRules",
        description: "Control incoming traffic",
        keyPoints: [
          "Define which traffic is allowed INTO selected pods",
          "Match by: podSelector, namespaceSelector, ipBlock",
          "Empty ingress = deny all incoming traffic",
          "Absence of NetworkPolicy = all traffic allowed"
        ],
        commands: [
          "kubectl get networkpolicies -n <namespace>",
          "kubectl describe networkpolicy <name>"
        ],
        references: [
          { title: "Network Policies", url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/" }
        ]
      },
      {
        name: "Egress\nRules",
        description: "Control outgoing traffic",
        keyPoints: [
          "Define which traffic is allowed OUT of selected pods",
          "Match by: podSelector, namespaceSelector, ipBlock",
          "Can restrict DNS access (port 53)",
          "Important for security: limit external access"
        ],
        commands: [
          "kubectl apply -f egress-policy.yaml",
          "kubectl get networkpolicies"
        ],
        references: [
          { title: "Network Policies", url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/" }
        ]
      },
      {
        name: "Selectors",
        description: "Target pods and namespaces",
        keyPoints: [
          "podSelector: select pods by labels in the same namespace",
          "namespaceSelector: select namespaces by labels",
          "Combined: AND logic (pods matching labels in matching namespaces)",
          "Empty podSelector ({}) selects all pods in the namespace"
        ],
        commands: [
          "kubectl label namespace prod purpose=production",
          "kubectl get pods --show-labels"
        ],
        references: [
          { title: "Network Policies - Selectors", url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#behavior-of-to-and-from-selectors" }
        ]
      },
      {
        name: "Default\nPolicies",
        description: "Deny-all and allow-all patterns",
        keyPoints: [
          "Default deny all ingress: empty ingress array with podSelector: {}",
          "Default deny all egress: empty egress array with podSelector: {}",
          "Default allow all: no NetworkPolicy applied",
          "Best practice: start with deny-all, then add allow rules"
        ],
        commands: [
          "# Default deny all ingress in a namespace:\n# apiVersion: networking.k8s.io/v1\n# kind: NetworkPolicy\n# metadata:\n#   name: default-deny-ingress\n# spec:\n#   podSelector: {}\n#   policyTypes: [Ingress]"
        ],
        references: [
          { title: "Default Network Policies", url: "https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-policies" }
        ]
      }
    ]
  },

  "coredns": {
    title: "CoreDNS",
    subtitle: "Services & Networking > CoreDNS",
    parent: "services-networking",
    parentTitle: "Services & Networking",
    domainColor: DOMAIN_COLORS['services-networking'],
    nodes: [
      {
        name: "Service\nDiscovery",
        description: "DNS-based service lookup",
        keyPoints: [
          "Services: <svc>.<namespace>.svc.cluster.local",
          "Pods: <pod-ip-dashed>.<namespace>.pod.cluster.local",
          "Headless services return pod IPs directly",
          "SRV records for named ports"
        ],
        commands: [
          "kubectl exec <pod> -- nslookup myservice.default.svc.cluster.local",
          "kubectl exec <pod> -- nslookup kubernetes.default"
        ],
        references: [
          { title: "DNS for Services and Pods", url: "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/" }
        ]
      },
      {
        name: "CoreDNS\nConfiguration",
        description: "Corefile and plugins",
        keyPoints: [
          "Corefile is stored as a ConfigMap in kube-system",
          "Plugins: kubernetes, forward, cache, errors, log",
          "forward: upstream DNS servers",
          "Can add custom DNS entries and stub domains"
        ],
        commands: [
          "kubectl get configmap coredns -n kube-system -o yaml",
          "kubectl edit configmap coredns -n kube-system",
          "kubectl rollout restart deployment coredns -n kube-system"
        ],
        references: [
          { title: "Customizing DNS Service", url: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/" },
          { title: "Using CoreDNS for Service Discovery", url: "https://kubernetes.io/docs/tasks/administer-cluster/coredns/" }
        ]
      },
      {
        name: "Custom DNS",
        description: "Custom domains and forwarding",
        keyPoints: [
          "Stub domains: forward specific domains to custom DNS",
          "Upstream DNS: configure forward plugin",
          "Hosts plugin for custom static entries",
          "Rewrite plugin for DNS name rewriting"
        ],
        commands: [
          "kubectl get pods -n kube-system -l k8s-app=kube-dns",
          "kubectl logs -n kube-system -l k8s-app=kube-dns"
        ],
        references: [
          { title: "Customizing DNS Service", url: "https://kubernetes.io/docs/tasks/administer-cluster/dns-custom-nameservers/" }
        ]
      }
    ]
  },

  // ===== LEVEL 2: STORAGE SUB-TOPICS =====

  "storage-classes": {
    title: "StorageClasses & Dynamic Provisioning",
    subtitle: "Storage > StorageClasses",
    parent: "storage",
    parentTitle: "Storage",
    domainColor: DOMAIN_COLORS['storage'],
    nodes: [
      {
        name: "StorageClass\nBasics",
        description: "Define storage profiles",
        keyPoints: [
          "Describes a 'class' of storage (SSD, HDD, etc.)",
          "Provisioner: which volume plugin creates the volume",
          "Parameters: provider-specific settings",
          "reclaimPolicy: Delete or Retain",
          "allowVolumeExpansion: enables PVC resize"
        ],
        commands: [
          "kubectl get storageclasses",
          "kubectl describe storageclass <name>",
          "kubectl get sc"
        ],
        references: [
          { title: "Storage Classes", url: "https://kubernetes.io/docs/concepts/storage/storage-classes/" }
        ]
      },
      {
        name: "Dynamic\nProvisioning",
        description: "Automatic volume creation",
        keyPoints: [
          "PVCs referencing a StorageClass trigger automatic PV creation",
          "No need to pre-create PersistentVolumes",
          "Default StorageClass: annotated with storageclass.kubernetes.io/is-default-class=true",
          "PVC without storageClassName uses the default class"
        ],
        commands: [
          "kubectl get sc -o wide",
          "kubectl patch storageclass <name> -p '{\"metadata\":{\"annotations\":{\"storageclass.kubernetes.io/is-default-class\":\"true\"}}}'"
        ],
        references: [
          { title: "Dynamic Volume Provisioning", url: "https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/" }
        ]
      },
      {
        name: "Provisioners",
        description: "Storage backend plugins",
        keyPoints: [
          "In-tree: kubernetes.io/aws-ebs, kubernetes.io/gce-pd",
          "CSI drivers: modern, out-of-tree provisioners",
          "volumeBindingMode: Immediate or WaitForFirstConsumer",
          "WaitForFirstConsumer: delays binding until pod is scheduled"
        ],
        commands: [
          "kubectl get csidrivers",
          "kubectl describe storageclass <name>"
        ],
        references: [
          { title: "StorageClass Provisioner", url: "https://kubernetes.io/docs/concepts/storage/storage-classes/#provisioner" }
        ]
      }
    ]
  },

  "volume-types": {
    title: "Volume Types & Access Modes",
    subtitle: "Storage > Volume Types & Access Modes",
    parent: "storage",
    parentTitle: "Storage",
    domainColor: DOMAIN_COLORS['storage'],
    nodes: [
      {
        name: "Access\nModes",
        description: "How volumes can be accessed",
        keyPoints: [
          "ReadWriteOnce (RWO): single node read-write",
          "ReadOnlyMany (ROX): multiple nodes read-only",
          "ReadWriteMany (RWX): multiple nodes read-write",
          "ReadWriteOncePod (RWOP): single pod read-write (K8s 1.22+)"
        ],
        commands: [
          "kubectl get pv (check ACCESS MODES column)",
          "kubectl describe pv <name>"
        ],
        references: [
          { title: "Access Modes", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes" }
        ]
      },
      {
        name: "Volume\nTypes",
        description: "Storage backend implementations",
        keyPoints: [
          "emptyDir: temporary, deleted with pod",
          "hostPath: maps host directory into pod (testing only)",
          "nfs: Network File System mount",
          "configMap/secret: mount config data as files",
          "persistentVolumeClaim: reference a PVC",
          "projected: combine multiple volume sources"
        ],
        commands: [
          "# In pod spec:\n# volumes:\n#   - name: data\n#     emptyDir: {}\n#   - name: host-data\n#     hostPath:\n#       path: /data\n#       type: DirectoryOrCreate"
        ],
        references: [
          { title: "Volumes", url: "https://kubernetes.io/docs/concepts/storage/volumes/" },
          { title: "Types of Volumes", url: "https://kubernetes.io/docs/concepts/storage/volumes/#volume-types" }
        ]
      },
      {
        name: "Volume\nModes",
        description: "Filesystem vs Block",
        keyPoints: [
          "Filesystem (default): volume mounted as a directory",
          "Block: volume exposed as a raw block device",
          "Block mode requires volumeMode: Block in PV and PVC",
          "Not all storage backends support block mode"
        ],
        commands: [
          "kubectl get pv -o wide"
        ],
        references: [
          { title: "Volume Mode", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#volume-mode" }
        ]
      }
    ]
  },

  "persistent-volumes": {
    title: "Persistent Volumes & Claims",
    subtitle: "Storage > Persistent Volumes & Claims",
    parent: "storage",
    parentTitle: "Storage",
    domainColor: DOMAIN_COLORS['storage'],
    nodes: [
      {
        name: "Persistent\nVolumes",
        description: "Cluster-wide storage resources",
        keyPoints: [
          "Cluster-scoped resource (not namespaced)",
          "Lifecycle independent of pods",
          "Can be statically provisioned by admin or dynamically by StorageClass",
          "Spec: capacity, accessModes, storageClassName, persistentVolumeReclaimPolicy"
        ],
        commands: [
          "kubectl get pv",
          "kubectl describe pv <name>",
          "kubectl apply -f pv.yaml"
        ],
        references: [
          { title: "Persistent Volumes", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/" }
        ]
      },
      {
        name: "Persistent\nVolume Claims",
        description: "User request for storage",
        keyPoints: [
          "Namespaced resource - user's request for storage",
          "Bound to a PV that matches requirements",
          "Spec: accessModes, resources.requests.storage, storageClassName",
          "Once bound, PVC is exclusively tied to a PV",
          "Can expand PVC if StorageClass allows (allowVolumeExpansion: true)"
        ],
        commands: [
          "kubectl get pvc -n <namespace>",
          "kubectl describe pvc <name>",
          "kubectl delete pvc <name>"
        ],
        references: [
          { title: "PersistentVolumeClaims", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims" },
          { title: "Expanding PVCs", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims" }
        ]
      },
      {
        name: "Reclaim\nPolicies",
        description: "What happens after PVC is deleted",
        keyPoints: [
          "Retain: PV kept, data preserved, manual cleanup needed",
          "Delete: PV and underlying storage deleted automatically",
          "Recycle: deprecated - basic scrub (rm -rf /thevolume/*)",
          "Default for dynamic provisioning is Delete"
        ],
        commands: [
          "kubectl get pv (check RECLAIM POLICY column)",
          "kubectl patch pv <name> -p '{\"spec\":{\"persistentVolumeReclaimPolicy\":\"Retain\"}}'"
        ],
        references: [
          { title: "Reclaim Policy", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming" }
        ]
      },
      {
        name: "PV/PVC\nBinding",
        description: "How PVs and PVCs match",
        keyPoints: [
          "Binding is based on: access mode, storage size, StorageClass, label selectors",
          "PVC requests minimum storage; PV can be larger",
          "Once bound: one-to-one relationship",
          "Pending PVC means no matching PV found"
        ],
        commands: [
          "kubectl get pv,pvc",
          "kubectl describe pvc <name> (check Events for binding status)"
        ],
        references: [
          { title: "PV/PVC Binding", url: "https://kubernetes.io/docs/concepts/storage/persistent-volumes/#binding" }
        ]
      }
    ]
  },

  // ===== LEVEL 2: TROUBLESHOOTING SUB-TOPICS =====

  "cluster-node-troubleshooting": {
    title: "Cluster & Node Troubleshooting",
    subtitle: "Troubleshooting > Cluster & Node",
    parent: "troubleshooting",
    parentTitle: "Troubleshooting",
    domainColor: DOMAIN_COLORS['troubleshooting'],
    nodes: [
      {
        name: "Node\nStatus",
        description: "Diagnosing node issues",
        keyPoints: [
          "Check node conditions: Ready, MemoryPressure, DiskPressure, PIDPressure",
          "NotReady usually means kubelet is down or unreachable",
          "Check kubelet service status on the node",
          "Verify network connectivity between nodes"
        ],
        commands: [
          "kubectl get nodes",
          "kubectl describe node <node>",
          "systemctl status kubelet",
          "journalctl -u kubelet -f"
        ],
        references: [
          { title: "Troubleshooting Clusters", url: "https://kubernetes.io/docs/tasks/debug/debug-cluster/" },
          { title: "Node Status", url: "https://kubernetes.io/docs/concepts/architecture/nodes/#condition" }
        ]
      },
      {
        name: "Kubelet\nIssues",
        description: "Troubleshooting the kubelet",
        keyPoints: [
          "Kubelet runs on every node (control plane and workers)",
          "Config file: /var/lib/kubelet/config.yaml",
          "Common issues: certificate errors, config mismatches, disk pressure",
          "Check systemd logs for detailed errors"
        ],
        commands: [
          "systemctl status kubelet",
          "systemctl restart kubelet",
          "journalctl -u kubelet --since '5 min ago'",
          "cat /var/lib/kubelet/config.yaml"
        ],
        references: [
          { title: "Kubelet", url: "https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/" },
          { title: "Troubleshooting kubeadm", url: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/troubleshooting-kubeadm/" }
        ]
      },
      {
        name: "Kube-proxy\nIssues",
        description: "Service networking problems",
        keyPoints: [
          "Kube-proxy manages iptables/IPVS rules for services",
          "Runs as a DaemonSet in kube-system",
          "Issues cause service connectivity problems",
          "Check mode: iptables or ipvs"
        ],
        commands: [
          "kubectl get ds kube-proxy -n kube-system",
          "kubectl logs -n kube-system -l k8s-app=kube-proxy",
          "iptables -t nat -L KUBE-SERVICES",
          "kubectl get configmap kube-proxy -n kube-system -o yaml"
        ],
        references: [
          { title: "kube-proxy", url: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/" },
          { title: "Virtual IPs and Service Proxies", url: "https://kubernetes.io/docs/reference/networking/virtual-ips/" }
        ]
      },
      {
        name: "Certificate\nProblems",
        description: "TLS and cert troubleshooting",
        keyPoints: [
          "Expired certificates cause API server connection failures",
          "Check expiration dates of all cluster certificates",
          "Certificates in /etc/kubernetes/pki/",
          "Renew with kubeadm certs renew"
        ],
        commands: [
          "kubeadm certs check-expiration",
          "openssl x509 -in /etc/kubernetes/pki/apiserver.crt -noout -text",
          "kubeadm certs renew all"
        ],
        references: [
          { title: "Certificate Management with kubeadm", url: "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/" },
          { title: "PKI Certificates", url: "https://kubernetes.io/docs/setup/best-practices/certificates/" }
        ]
      }
    ]
  },

  "cluster-components": {
    title: "Cluster Components",
    subtitle: "Troubleshooting > Cluster Components",
    parent: "troubleshooting",
    parentTitle: "Troubleshooting",
    domainColor: DOMAIN_COLORS['troubleshooting'],
    nodes: [
      {
        name: "API Server",
        description: "kube-apiserver troubleshooting",
        keyPoints: [
          "Central component: all communication goes through it",
          "Runs as a static pod on control plane nodes",
          "Check manifests in /etc/kubernetes/manifests/",
          "Common issues: certificate errors, etcd connectivity, resource exhaustion"
        ],
        commands: [
          "kubectl get pods -n kube-system | grep apiserver",
          "kubectl logs kube-apiserver-<node> -n kube-system",
          "cat /etc/kubernetes/manifests/kube-apiserver.yaml",
          "crictl ps | grep apiserver"
        ],
        references: [
          { title: "kube-apiserver", url: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/" },
          { title: "Kubernetes Components", url: "https://kubernetes.io/docs/concepts/overview/components/#kube-apiserver" }
        ]
      },
      {
        name: "Scheduler",
        description: "kube-scheduler troubleshooting",
        keyPoints: [
          "Assigns pods to nodes based on resource requirements",
          "Runs as a static pod on control plane",
          "Pending pods often indicate scheduler issues",
          "Check for: resource constraints, taints, affinity rules"
        ],
        commands: [
          "kubectl get pods -n kube-system | grep scheduler",
          "kubectl logs kube-scheduler-<node> -n kube-system",
          "kubectl describe pod <pending-pod> (check Events)"
        ],
        references: [
          { title: "kube-scheduler", url: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-scheduler/" },
          { title: "Kubernetes Scheduler", url: "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/" }
        ]
      },
      {
        name: "Controller\nManager",
        description: "kube-controller-manager troubleshooting",
        keyPoints: [
          "Runs core control loops (ReplicaSet, Deployment, Node, etc.)",
          "Static pod on control plane nodes",
          "Issues cause: pods not being created, nodes not updating, etc.",
          "Check leader election in HA setups"
        ],
        commands: [
          "kubectl get pods -n kube-system | grep controller-manager",
          "kubectl logs kube-controller-manager-<node> -n kube-system"
        ],
        references: [
          { title: "kube-controller-manager", url: "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/" },
          { title: "Kubernetes Components", url: "https://kubernetes.io/docs/concepts/overview/components/#kube-controller-manager" }
        ]
      },
      {
        name: "etcd",
        description: "etcd troubleshooting",
        keyPoints: [
          "Stores all cluster state and configuration",
          "Performance issues affect entire cluster",
          "Common issues: disk I/O latency, member connectivity, space quota exceeded",
          "etcdctl for direct inspection and management"
        ],
        commands: [
          "kubectl get pods -n kube-system | grep etcd",
          "kubectl logs etcd-<node> -n kube-system",
          "ETCDCTL_API=3 etcdctl endpoint health --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key",
          "ETCDCTL_API=3 etcdctl member list --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key"
        ],
        references: [
          { title: "Operating etcd Clusters", url: "https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/" },
          { title: "etcd Component", url: "https://kubernetes.io/docs/concepts/overview/components/#etcd" }
        ]
      }
    ]
  },

  "monitoring": {
    title: "Monitoring & Resource Usage",
    subtitle: "Troubleshooting > Monitoring",
    parent: "troubleshooting",
    parentTitle: "Troubleshooting",
    domainColor: DOMAIN_COLORS['troubleshooting'],
    nodes: [
      {
        name: "kubectl top",
        description: "Resource usage commands",
        keyPoints: [
          "Shows CPU and memory usage for pods and nodes",
          "Requires metrics-server to be installed",
          "Real-time snapshot, not historical data",
          "Useful for identifying resource-hungry workloads"
        ],
        commands: [
          "kubectl top nodes",
          "kubectl top pods -A",
          "kubectl top pods --containers -n <namespace>",
          "kubectl top pods --sort-by=memory"
        ],
        references: [
          { title: "Resource Metrics Pipeline", url: "https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-metrics-pipeline/" },
          { title: "Tools for Monitoring Resources", url: "https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-usage-monitoring/" }
        ]
      },
      {
        name: "Resource\nQuotas",
        description: "Namespace resource limits",
        keyPoints: [
          "Limit total resource consumption per namespace",
          "Can limit: CPU, memory, pods, services, PVCs, etc.",
          "Requests and limits can be constrained separately",
          "LimitRange sets default/min/max per container"
        ],
        commands: [
          "kubectl get resourcequotas -n <namespace>",
          "kubectl describe resourcequota <name>",
          "kubectl get limitranges -n <namespace>"
        ],
        references: [
          { title: "Resource Quotas", url: "https://kubernetes.io/docs/concepts/policy/resource-quotas/" },
          { title: "Limit Ranges", url: "https://kubernetes.io/docs/concepts/policy/limit-range/" }
        ]
      },
      {
        name: "Events",
        description: "Cluster event monitoring",
        keyPoints: [
          "Events show what's happening in the cluster",
          "Types: Normal and Warning",
          "Events expire after 1 hour by default",
          "Critical for troubleshooting pod/node issues"
        ],
        commands: [
          "kubectl get events -A --sort-by='.lastTimestamp'",
          "kubectl get events -n <namespace>",
          "kubectl get events --field-selector type=Warning"
        ],
        references: [
          { title: "Viewing Events", url: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_events/" },
          { title: "Event API", url: "https://kubernetes.io/docs/reference/kubernetes-api/cluster-resources/event-v1/" }
        ]
      }
    ]
  },

  "container-logs": {
    title: "Container Output Streams",
    subtitle: "Troubleshooting > Container Logs",
    parent: "troubleshooting",
    parentTitle: "Troubleshooting",
    domainColor: DOMAIN_COLORS['troubleshooting'],
    nodes: [
      {
        name: "kubectl logs",
        description: "View container logs",
        keyPoints: [
          "Show stdout/stderr from containers",
          "Use -c for specific container in multi-container pods",
          "Use -p for previous container instance (after crash)",
          "Use -f for streaming (follow) logs",
          "Use --since for time-based filtering"
        ],
        commands: [
          "kubectl logs <pod>",
          "kubectl logs <pod> -c <container>",
          "kubectl logs <pod> --previous",
          "kubectl logs <pod> -f --tail=100",
          "kubectl logs -l app=myapp --all-containers"
        ],
        references: [
          { title: "kubectl logs", url: "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/" },
          { title: "Logging Architecture", url: "https://kubernetes.io/docs/concepts/cluster-administration/logging/" }
        ]
      },
      {
        name: "Logging\nArchitecture",
        description: "Kubernetes logging patterns",
        keyPoints: [
          "Node-level: container runtime captures stdout/stderr",
          "Logs stored at /var/log/containers/ and /var/log/pods/",
          "Cluster-level: use log aggregators (EFK, Loki, Fluentd)",
          "Sidecar pattern for custom log processing"
        ],
        commands: [
          "ls /var/log/containers/",
          "ls /var/log/pods/",
          "crictl logs <container-id>"
        ],
        references: [
          { title: "Logging Architecture", url: "https://kubernetes.io/docs/concepts/cluster-administration/logging/" }
        ]
      },
      {
        name: "Application\nDebugging",
        description: "Debug running containers",
        keyPoints: [
          "kubectl exec: run commands inside a container",
          "kubectl debug: create ephemeral debug container",
          "Check container status: Running, Waiting, Terminated",
          "Check exit codes and restart reasons",
          "Ephemeral containers don't require image restart"
        ],
        commands: [
          "kubectl exec -it <pod> -- /bin/sh",
          "kubectl debug <pod> -it --image=busybox",
          "kubectl describe pod <pod> (check container statuses)",
          "kubectl get pod <pod> -o jsonpath='{.status.containerStatuses[*].state}'"
        ],
        references: [
          { title: "Debug Running Pods", url: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/" },
          { title: "Ephemeral Containers", url: "https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/" },
          { title: "Troubleshoot Applications", url: "https://kubernetes.io/docs/tasks/debug/debug-application/" }
        ]
      }
    ]
  },

  "network-troubleshooting": {
    title: "Services & Network Troubleshooting",
    subtitle: "Troubleshooting > Network Troubleshooting",
    parent: "troubleshooting",
    parentTitle: "Troubleshooting",
    domainColor: DOMAIN_COLORS['troubleshooting'],
    nodes: [
      {
        name: "DNS\nDebugging",
        description: "Troubleshoot DNS resolution",
        keyPoints: [
          "Use a debug pod with DNS tools (dnsutils, busybox)",
          "Check CoreDNS pods are running",
          "Verify /etc/resolv.conf in pods",
          "Test service name resolution"
        ],
        commands: [
          "kubectl run dnsutils --image=registry.k8s.io/e2e-test-images/jessie-dnsutils:1.3 -it --rm -- nslookup kubernetes.default",
          "kubectl get pods -n kube-system -l k8s-app=kube-dns",
          "kubectl logs -n kube-system -l k8s-app=kube-dns"
        ],
        references: [
          { title: "Debugging DNS Resolution", url: "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/" }
        ]
      },
      {
        name: "Service\nDebugging",
        description: "Troubleshoot service connectivity",
        keyPoints: [
          "Verify service exists and has endpoints",
          "Check pod labels match service selector",
          "Test connectivity from within the cluster",
          "Check kube-proxy and iptables rules"
        ],
        commands: [
          "kubectl get svc <service>",
          "kubectl get endpoints <service>",
          "kubectl describe svc <service>",
          "kubectl exec <pod> -- curl <service>:<port>",
          "kubectl exec <pod> -- wget -O- <service>:<port>"
        ],
        references: [
          { title: "Debug Services", url: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/" }
        ]
      },
      {
        name: "Pod\nConnectivity",
        description: "Troubleshoot pod-to-pod networking",
        keyPoints: [
          "Verify pod IPs are reachable from other pods",
          "Check CNI plugin is healthy",
          "Verify no network policies blocking traffic",
          "Test with curl, wget, ping from debug pods"
        ],
        commands: [
          "kubectl get pods -o wide",
          "kubectl exec <pod1> -- ping <pod2-ip>",
          "kubectl exec <pod1> -- curl <pod2-ip>:<port>",
          "kubectl get networkpolicies -n <namespace>"
        ],
        references: [
          { title: "Debug Services", url: "https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/" },
          { title: "Cluster Networking", url: "https://kubernetes.io/docs/concepts/cluster-administration/networking/" }
        ]
      },
      {
        name: "Ingress\nDebugging",
        description: "Troubleshoot external access",
        keyPoints: [
          "Verify Ingress controller is running",
          "Check Ingress resource configuration",
          "Verify backend service and endpoints exist",
          "Check TLS certificates if using HTTPS"
        ],
        commands: [
          "kubectl get ingress",
          "kubectl describe ingress <name>",
          "kubectl get pods -n ingress-nginx",
          "kubectl logs -n ingress-nginx <controller-pod>"
        ],
        references: [
          { title: "Ingress", url: "https://kubernetes.io/docs/concepts/services-networking/ingress/" },
          { title: "Ingress Controllers", url: "https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/" }
        ]
      }
    ]
  }
};
